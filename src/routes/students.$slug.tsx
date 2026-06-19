import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Users, ExternalLink, Calendar } from "lucide-react";
import { getProject, projects } from "@/lib/projects";

export const Route = createFileRoute("/students/$slug")({
  head: ({ params }) => {
    const p = getProject(params.slug);
    const title = p ? `${p.title} — Student project` : "Project not found";
    const description = p?.abstract?.slice(0, 200) ?? "Student project";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `/students/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/students/${params.slug}` }],
    };
  },
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 md:px-12 py-24">
      <h1 className="font-serif">Project not found</h1>
      <hr className="rule-gold mt-4" />
      <p className="mt-4 text-muted-foreground">
        This project may have moved or been renamed.
      </p>
      <Link
        to="/students"
        className="mt-6 inline-flex items-center gap-2 text-emerald-deep border-b border-gold pb-1 hover:text-emerald"
      >
        <ArrowLeft className="h-4 w-4" /> All student projects
      </Link>
    </div>
  ),
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <div className="mx-auto max-w-3xl px-6 md:px-12 py-16 md:py-24">
      <Link
        to="/students"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-emerald-deep mb-8"
      >
        <ArrowLeft className="h-4 w-4" /> Student projects
      </Link>

      <div className="eyebrow mb-3">
        {[project.level, project.status].filter(Boolean).join(" · ")}
      </div>
      <h1 className="font-serif text-foreground">{project.title}</h1>
      <hr className="rule-gold mt-6" />

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
        {project.year && (
          <span className="inline-flex items-center gap-2">
            <Calendar className="h-4 w-4" /> {project.year}
          </span>
        )}
        {project.team.length > 0 && (
          <span className="inline-flex items-center gap-2">
            <Users className="h-4 w-4" /> {project.team.join(", ")}
          </span>
        )}
      </div>

      {project.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t: string) => (
            <span
              key={t}
              className="text-[0.7rem] tracking-wider uppercase border border-border px-2 py-0.5 rounded-sm text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <article
        className="prose-academic mt-10 leading-relaxed text-foreground/90 [&_p]:mt-4 [&_h2]:font-serif [&_h2]:text-emerald-deep [&_h2]:mt-8 [&_h3]:font-serif [&_h3]:text-emerald-deep [&_h3]:mt-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mt-4 [&_a]:text-emerald-deep [&_a]:border-b [&_a]:border-gold hover:[&_a]:text-emerald [&_strong]:text-emerald-deep"
        dangerouslySetInnerHTML={{ __html: project.bodyHtml }}
      />

      {project.links.length > 0 && (
        <section className="mt-12 border-t border-border pt-6">
          <h2 className="font-serif text-xl text-foreground">Links</h2>
          <ul className="mt-4 space-y-2">
            {project.links.map((l: { label: string; url: string }) => (
              <li key={l.url}>
                <a
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-deep border-b border-gold pb-0.5 hover:text-emerald"
                >
                  {l.label} <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

// Ensure the projects import is preserved for tree-shaking awareness.
void projects;
