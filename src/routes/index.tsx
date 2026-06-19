import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen, Sparkles, Rocket } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Line K. H. Clemmensen — Professor, trustworthy AI" },
      {
        name: "description",
        content:
          "Homepage of Professor Line Katrine Harder Clemmensen — statistical machine learning, fairness, explainability, and AI evaluation. YODA lead at the Pioneer Centre for AI, co-founder of Interhuman AI.",
      },
      { property: "og:title", content: "Line K. H. Clemmensen" },
      { property: "og:description", content: "Professor of statistical machine learning. Trustworthy AI for mental health, cardiology, and biotechnology." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 md:px-12 py-16 md:py-24">
      {/* Hero */}
      <section className="grid md:grid-cols-[1fr_auto] gap-12 items-end">
        <div>
          <div className="eyebrow mb-5">Professor · Researcher · Co-founder</div>
          <h1 className="font-serif text-foreground">
            Line Katrine Harder
            <br />
            <span className="italic text-emerald">Clemmensen</span>
          </h1>
          <hr className="rule-gold mt-8" />
          <p className="prose-academic mt-6 text-lg">
            I work at the intersection of statistical machine learning and the
            real-world deployment of AI — building methods for{" "}
            <em>fairness, explainability, and uncertainty</em> in high-stakes
            domains like mental health, cardiology, and biotechnology.
          </p>
          <p className="prose-academic mt-4 text-muted-foreground">
            Professor at the University of Copenhagen, Associate Professor at
            DTU, lead of the YODA initiative at the Pioneer Centre for AI, and
            co-founder & CSO of Interhuman AI.
          </p>
        </div>

        {/* Portrait slot */}
        <div className="w-44 h-56 md:w-56 md:h-72 border border-border bg-muted rounded-sm overflow-hidden flex items-center justify-center text-center text-xs text-muted-foreground p-3">
          Portrait
          <br />
          (upload photo)
        </div>
      </section>

      {/* Stats strip */}
      <section className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
        {[
          { k: "2,940+", v: "Citations" },
          { k: "47", v: "Journal papers" },
          { k: "46", v: "Conference papers" },
          { k: "15+", v: "PhD students" },
        ].map((s) => (
          <div key={s.v} className="bg-background p-6">
            <div className="font-serif text-3xl text-emerald-deep">{s.k}</div>
            <div className="mt-1 text-xs tracking-widest uppercase text-muted-foreground">{s.v}</div>
          </div>
        ))}
      </section>

      {/* Three pillars */}
      <section className="mt-24">
        <div className="eyebrow mb-3">Three threads</div>
        <h2 className="font-serif text-foreground">Where my work lives</h2>
        <hr className="rule-gold mt-6" />

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <PillarCard
            to="/research"
            icon={<BookOpen className="h-5 w-5" />}
            kicker="Academic"
            title="Research & publications"
            body="Sparse discriminant analysis, fair and explainable models, AI evaluation frameworks for ICLR, ICASSP, AAAI."
          />
          <PillarCard
            to="/yoda"
            icon={<Sparkles className="h-5 w-5" />}
            kicker="Initiative"
            title="YODA at P1"
            body="Yearning to Operationalize Democratic AI — concrete tools for trustworthy, representative AI under the EU AI Act."
          />
          <PillarCard
            to="/interhuman"
            icon={<Rocket className="h-5 w-5" />}
            kicker="Venture"
            title="Interhuman AI"
            body="Co-founder & CSO. Translating evaluation research into products that put humans, not metrics, at the centre."
          />
        </div>
      </section>

      {/* Recent highlights */}
      <section className="mt-24">
        <div className="eyebrow mb-3">Recent</div>
        <h2 className="font-serif text-foreground">Selected highlights</h2>
        <hr className="rule-gold mt-6" />

        <ul className="mt-8 divide-y divide-border border-t border-b border-border">
          {[
            { year: "2026", text: "Wrist Angel project recognised as Denmark's best clinical trial — 'News of the Year'." },
            { year: "2025", text: "Awarded PebAI4MH (Grand Solution, IFD) — Personalities & behaviors in AI for mental health." },
            { year: "2025", text: "Keynote — Nordic Light Deep Learning Conference: 'Fair AI in Psychiatry'." },
            { year: "2024", text: "Pantypes: Diverse Representatives for Self-Explainable Models — AAAI." },
            { year: "2023", text: "Co-founded Interhuman AI (CSO)." },
          ].map((it) => (
            <li key={it.text} className="grid grid-cols-[5rem_1fr] gap-6 py-5">
              <div className="font-serif text-2xl text-gold">{it.year}</div>
              <div className="text-foreground/90 leading-relaxed">{it.text}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer cta */}
      <section className="mt-24 border-t border-border pt-10 grid md:grid-cols-2 gap-6 items-end">
        <div>
          <h2 className="font-serif text-foreground">Get in touch</h2>
          <p className="mt-3 text-muted-foreground max-w-md">
            Open to collaborations on trustworthy AI, evaluation methodology,
            and applied ML in health and life sciences.
          </p>
        </div>
        <div className="md:text-right">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-emerald-deep border-b border-gold pb-1 hover:text-emerald transition-colors"
          >
            Write to me <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function PillarCard({
  to,
  icon,
  kicker,
  title,
  body,
}: {
  to: string;
  icon: React.ReactNode;
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <Link
      to={to}
      className="card-elevated card-elevated-hover p-6 block group"
    >
      <div className="flex items-center gap-2 text-emerald">
        {icon}
        <span className="eyebrow">{kicker}</span>
      </div>
      <h3 className="font-serif mt-4 text-foreground">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
      <div className="mt-5 inline-flex items-center gap-1 text-sm text-emerald-deep">
        Read more
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
