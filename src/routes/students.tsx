import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Mail, Users, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/students")({
  head: () => ({
    meta: [
      { title: "Student projects — Line K. H. Clemmensen" },
      {
        name: "description",
        content:
          "Bachelor, MSc, and PhD projects supervised by Prof. Line Clemmensen at KU and DTU — ongoing, completed, and open topics.",
      },
      { property: "og:title", content: "Student projects" },
      { property: "og:url", content: "/students" },
    ],
    links: [{ rel: "canonical", href: "/students" }],
  }),
  component: Students,
});

const statusStyle = (status?: string) => {
  switch (status) {
    case "Open":
      return "bg-emerald text-gold-soft";
    case "Ongoing":
      return "bg-gold text-emerald-deep";
    case "Completed":
      return "bg-secondary text-emerald-deep border border-emerald-deep/20";
    default:
      return "bg-muted text-muted-foreground";
  }
};

function Students() {
  const grouped = {
    Ongoing: projects.filter((p) => p.status === "Ongoing"),
    Open: projects.filter((p) => p.status === "Open"),
    Completed: projects.filter((p) => p.status === "Completed"),
    Other: projects.filter(
      (p) => !["Ongoing", "Open", "Completed"].includes(p.status ?? ""),
    ),
  };

  const sections: Array<[string, typeof projects]> = [
    ["Ongoing", grouped.Ongoing],
    ["Open topics", grouped.Open],
    ["Completed", grouped.Completed],
    ["Other", grouped.Other],
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 md:px-12 py-16 md:py-24">
      <PageHeader
        eyebrow="For students"
        title="Student projects"
        lede="Bachelor, MSc, and PhD projects I supervise at KU and DTU. The list mixes ongoing work, completed theses, and open topics. If something resonates — or if you have your own idea nearby — send me a short email and we can shape it together."
      />

      <section className="mb-14 card-elevated p-6 bg-secondary border-l-4 border-l-gold rounded-none">
        <h3 className="font-serif text-emerald-deep flex items-center gap-2">
          <GraduationCap className="h-5 w-5" />
          How to apply
        </h3>
        <ol className="mt-4 space-y-2 text-sm list-decimal list-inside text-foreground/85">
          <li>Browse the projects below — pick one or sketch your own.</li>
          <li>
            Email me a short note: your background, why this topic, and a
            CV/transcript.
          </li>
          <li>
            We'll meet for 30 minutes and decide together if it's a good fit.
          </li>
        </ol>
      </section>

      {sections.map(([label, items]) =>
        items.length === 0 ? null : (
          <section key={label} className="mb-14">
            <h2 className="font-serif text-foreground text-2xl">{label}</h2>
            <hr className="rule-gold mt-3 mb-6" />
            <div className="space-y-4">
              {items.map((p) => (
                <article
                  key={p.slug}
                  className="card-elevated card-elevated-hover p-6 grid md:grid-cols-[7rem_1fr] gap-6"
                >
                  <div>
                    <div className="font-serif text-2xl text-gold">
                      {p.level ?? "—"}
                    </div>
                    {p.status && (
                      <div
                        className={`mt-1 inline-block text-[0.65rem] tracking-widest uppercase px-2 py-0.5 rounded-full ${statusStyle(p.status)}`}
                      >
                        {p.status}
                      </div>
                    )}
                    {p.year && (
                      <div className="mt-2 text-xs text-muted-foreground">
                        {p.year}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-emerald-deep">
                      <Link
                        to="/students/$slug"
                        params={{ slug: p.slug }}
                        className="hover:text-emerald transition-colors"
                      >
                        {p.title}
                      </Link>
                    </h3>
                    {p.abstract && (
                      <p className="mt-2 text-foreground/85 leading-relaxed">
                        {p.abstract}
                      </p>
                    )}
                    {p.team.length > 0 && (
                      <div className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mt-0.5 shrink-0" />
                        <span>{p.team.join(", ")}</span>
                      </div>
                    )}
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[0.7rem] tracking-wider uppercase border border-border px-2 py-0.5 rounded-sm text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                      {p.links.map((l) => (
                        <a
                          key={l.url}
                          href={l.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-emerald-deep border-b border-gold pb-0.5 hover:text-emerald"
                        >
                          {l.label}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ),
      )}

      <section className="mt-16 border-t border-border pt-10">
        <h2 className="font-serif text-foreground">Don't see your topic?</h2>
        <hr className="rule-gold mt-4" />
        <p className="prose-academic mt-5">
          I co-supervise across statistics, ML, healthcare, biotech, and
          maritime applications. If you have an idea that sits near my work,
          write to me — I'd rather hear from you about something you genuinely
          care about than have you pick from a list.
        </p>
        <a
          href="mailto:lkhc@di.ku.dk"
          className="mt-6 inline-flex items-center gap-2 text-emerald-deep border-b border-gold pb-1 hover:text-emerald transition-colors"
        >
          <Mail className="h-4 w-4" />
          lkhc@di.ku.dk
        </a>
      </section>
    </div>
  );
}
