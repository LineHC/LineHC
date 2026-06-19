import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/yoda")({
  head: () => ({
    meta: [
      { title: "YODA — Yearning to Operationalize Democratic AI" },
      { name: "description", content: "YODA is a Pioneer Centre for AI initiative led by Line Clemmensen, building concrete tools and metrics for trustworthy, representative AI under the EU AI Act." },
      { property: "og:title", content: "YODA — Democratic AI in practice" },
      { property: "og:url", content: "/yoda" },
    ],
    links: [{ rel: "canonical", href: "/yoda" }],
  }),
  component: Yoda,
});

function Yoda() {
  return (
    <div className="mx-auto max-w-5xl px-6 md:px-12 py-16 md:py-24">
      <PageHeader
        eyebrow="Initiative · Pioneer Centre for AI"
        title="YODA"
        lede="Yearning to Operationalize Democratic AI — a consortium turning the abstract goals of trustworthy AI into concrete, measurable practice."
      />

      <div className="grid md:grid-cols-[1fr_18rem] gap-10 items-start">
        <div className="prose-academic space-y-5">
          <p>
            I lead the YODA initiative at the{" "}
            <a
              href="https://www.aicentre.dk/yoda-yearning-to-operationalize-democratic-ai"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-deep underline decoration-gold underline-offset-4 hover:text-emerald"
            >
              Pioneer Centre for AI
            </a>
            . We bring together researchers, public institutions, and industry
            partners to develop tools and metrics that make trustworthy AI
            actionable — not aspirational.
          </p>
          <p>
            Our focus is the operational gap: the EU AI Act demands fairness,
            representativity, transparency, and accountability, but engineering
            teams need concrete instruments to satisfy those demands. YODA
            builds those instruments.
          </p>
          <h3 className="font-serif text-foreground !mt-10">What we work on</h3>
          <ul className="space-y-2">
            <li>· Taxonomies and measurement of data representativity</li>
            <li>· Fairness evaluation across demographic groups</li>
            <li>· Self-explainable model architectures</li>
            <li>· Uncertainty quantification for real-world deployment</li>
            <li>· Engagement with stakeholders across the AI value chain</li>
          </ul>
        </div>

        <aside className="card-elevated p-6 sticky top-8">
          <div className="flex items-center gap-2 text-gold">
            <Sparkles className="h-4 w-4" />
            <span className="eyebrow text-gold">Quick links</span>
          </div>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href="https://www.aicentre.dk/yoda-yearning-to-operationalize-democratic-ai"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-baseline gap-1.5 text-emerald-deep hover:text-emerald"
              >
                YODA at Pioneer Centre
                <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a
                href="https://yoda-workshop.dk/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-baseline gap-1.5 text-emerald-deep hover:text-emerald"
              >
                EU AI Act workshop (2026)
                <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <a
                href="https://arxiv.org/abs/2203.04706"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-baseline gap-1.5 text-emerald-deep hover:text-emerald"
              >
                Data Representativity paper
                <ExternalLink className="h-3 w-3" />
              </a>
            </li>
          </ul>
        </aside>
      </div>

      <section className="mt-20">
        <h2 className="font-serif text-foreground">Recent talks & engagement</h2>
        <hr className="rule-gold mt-4" />
        <ul className="mt-8 divide-y divide-border border-y border-border">
          {[
            { year: "2026", title: "Engagement workshop on the EU AI Act", venue: "yoda-workshop.dk — academia, public, industry" },
            { year: "2025", title: "Keynote: Fair AI in Psychiatry", venue: "Nordic Light Deep Learning Conference, Tromsø" },
            { year: "2025", title: "Talk for SNU", venue: "Selskabet for Naturlærens Udbredelse" },
            { year: "2024", title: "Keynote: ML in psychiatry — distribution shifts, fairness, explainability", venue: "European Conference on Data Analysis" },
            { year: "2023", title: "Tutorial: Data representativity & low-resource modelling", venue: "NLDL PhD Winter School, Tromsø" },
          ].map((t) => (
            <li key={t.title} className="grid grid-cols-[5rem_1fr] gap-6 py-5">
              <div className="font-serif text-2xl text-gold">{t.year}</div>
              <div>
                <div className="text-foreground">{t.title}</div>
                <div className="text-sm italic text-muted-foreground mt-1">{t.venue}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
