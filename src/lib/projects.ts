import { marked } from "marked";

export type ProjectLink = { label: string; url: string };

export type StudentProject = {
  slug: string;
  title: string;
  level?: string;
  status?: string;
  year?: string | number;
  team: string[];
  links: ProjectLink[];
  tags: string[];
  abstract: string;
  bodyHtml: string;
};

// Very small YAML frontmatter parser. Supports:
//   key: value
//   key: [a, b, c]
//   key:
//     - item one
//     - item two
//   key:
//     - label: Foo
//       url: https://example.com
function parseFrontmatter(raw: string): { data: Record<string, unknown>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  const [, fm, body] = match;
  const lines = fm.split(/\r?\n/);
  const data: Record<string, unknown> = {};
  let i = 0;

  const stripQuotes = (s: string) => {
    const t = s.trim();
    if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) {
      return t.slice(1, -1);
    }
    return t;
  };

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }
    const kv = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!kv) {
      i++;
      continue;
    }
    const key = kv[1];
    const rest = kv[2];

    if (rest.trim() === "") {
      // multi-line list / object list
      const items: unknown[] = [];
      i++;
      while (i < lines.length && /^\s+/.test(lines[i])) {
        const itemLine = lines[i];
        const dash = itemLine.match(/^\s*-\s*(.*)$/);
        if (!dash) {
          i++;
          continue;
        }
        const after = dash[1];
        const inlineObj = after.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
        if (inlineObj) {
          const obj: Record<string, string> = {
            [inlineObj[1]]: stripQuotes(inlineObj[2]),
          };
          i++;
          while (i < lines.length && /^\s{4,}/.test(lines[i]) && !/^\s*-/.test(lines[i])) {
            const sub = lines[i].match(/^\s+([A-Za-z0-9_-]+):\s*(.*)$/);
            if (sub) obj[sub[1]] = stripQuotes(sub[2]);
            i++;
          }
          items.push(obj);
        } else {
          items.push(stripQuotes(after));
          i++;
        }
      }
      data[key] = items;
    } else if (rest.trim().startsWith("[") && rest.trim().endsWith("]")) {
      const inner = rest.trim().slice(1, -1).trim();
      data[key] = inner
        ? inner.split(",").map((s) => stripQuotes(s))
        : [];
      i++;
    } else {
      data[key] = stripQuotes(rest);
      i++;
    }
  }

  return { data, body: body ?? "" };
}

function toSlug(path: string): string {
  const file = path.split("/").pop() ?? path;
  return file.replace(/\.md$/, "");
}

function asStringArray(v: unknown): string[] {
  if (Array.isArray(v)) return v.filter((x): x is string => typeof x === "string");
  return [];
}

function asLinks(v: unknown): ProjectLink[] {
  if (!Array.isArray(v)) return [];
  return v
    .map((item) => {
      if (typeof item === "string") {
        return { label: item, url: item };
      }
      if (item && typeof item === "object") {
        const o = item as Record<string, string>;
        if (o.url) return { label: o.label ?? o.url, url: o.url };
      }
      return null;
    })
    .filter((x): x is ProjectLink => !!x);
}

const modules = import.meta.glob("../content/projects/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

marked.setOptions({ gfm: true, breaks: false });

export const projects: StudentProject[] = Object.entries(modules)
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw);
    const abstract = typeof data.abstract === "string" ? data.abstract : "";
    return {
      slug: typeof data.slug === "string" ? data.slug : toSlug(path),
      title: typeof data.title === "string" ? data.title : "Untitled",
      level: typeof data.level === "string" ? data.level : undefined,
      status: typeof data.status === "string" ? data.status : undefined,
      year: typeof data.year === "string" || typeof data.year === "number" ? data.year : undefined,
      team: asStringArray(data.team),
      links: asLinks(data.links),
      tags: asStringArray(data.tags),
      abstract,
      bodyHtml: marked.parse(body.trim() || abstract) as string,
    };
  })
  .sort((a, b) => {
    const ay = String(a.year ?? "");
    const by = String(b.year ?? "");
    if (ay !== by) return by.localeCompare(ay);
    return a.title.localeCompare(b.title);
  });

export function getProject(slug: string): StudentProject | undefined {
  return projects.find((p) => p.slug === slug);
}
