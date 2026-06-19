import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Line K. H. Clemmensen" },
      { name: "description", content: "Research on statistical machine learning, fairness, explainability, and AI evaluation across mental health, cardiology, maritime, and biotechnology." },
      { property: "og:title", content: "Research — Line K. H. Clemmensen" },
      { property: "og:url", content: "/research" },
    ],
    links: [{ rel: "canonical", href: "/research" }],
  }),
  component: Research,
});

const projects = [
  {
    title: "Wrist Angel",
    role: "Co-PI",
    funder: "Novo Nordisk Foundation — Exploratory Synergy",
    period: "2019 – 2023",
    blurb:
      "A wearable AI feedback tool for OCD treatment in children and adolescents. Awarded 'News of the Year' in Denmark's best clinical trial 2024.",
  },
  {
    title: "PebAI4MH",
    role: "PI",
    funder: "Innovation Fund Denmark — Grand Solution",
    period: "2025 – 2028",
    blurb:
      "Personalities and behaviors in AI for mental health — modelling individual variation in psychiatric AI.",
  },
  {
    title: "AlignAI",
    role: "Co-PI",
    funder: "Horizon MSCA Doctoral Network",
    period: "2025 – 2030",
    blurb:
      "European doctoral network training the next generation of researchers in AI alignment and evaluation.",
  },
  {
    title: "DigitSTEM",
    role: "WP-PI",
    funder: "Bioneer",
    period: "2023 – 2028",
    blurb:
      "Digital stem-cell workbench — ML for predicting cell-state transitions and aiding stem-cell research.",
  },
  {
    title: "artiMATE",
    role: "PI",
    funder: "Villum Synergy Grant",
    period: "2023 – 2026",
    blurb:
      "Artificial neural networks across satellite imagery, fungal metagenomes, and high-throughput interaction studies.",
  },
  {
    title: "Maritime anomaly detection",
    role: "PI",
    funder: "DTU – University of Bergen alliance",
    period: "2020 – 2023",
    blurb:
      "Self-explainable autoencoders for detecting abnormal vessel behaviour from AIS trajectories. Published open datasets near Svalbard and Danish waters.",
  },
];

const themes = [
  {
    title: "Fairness & evaluation",
    body: "Moving beyond accuracy — operationalising fairness across demographic groups and quantifying uncertainty for clinical deployment.",
  },
  {
    title: "Explainable AI",
    body: "Self-explainable representations (Pantypes, LIME for speech), and tools that surface why a model decided what it did.",
  },
  {
    title: "Data representativity",
    body: "A taxonomy and measurement framework for representativity in training data — bridging dataset documentation and EU AI Act requirements.",
  },
  {
    title: "Sparse & interpretable methods",
    body: "Sparse discriminant analysis (Technometrics, 2011 — ~1,900 citations) and its descendants for low-resource, high-trust classification.",
  },
];

function Research() {
  return (
    <div className="mx-auto max-w-5xl px-6 md:px-12 py-16 md:py-24">
      <PageHeader
        eyebrow="Research"
        title="Methods, evaluation, and impact"
        lede="Fifteen years of statistical machine learning, bent toward the question I keep returning to: when can we actually trust these systems in the world?"
      />

      <section className="mt-12">
        <h2 className="font-serif text-foreground">Research themes</h2>
        <hr className="rule-gold mt-4" />
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {themes.map((t) => (
            <div key={t.title} className="card-elevated p-6">
              <h3 className="font-serif text-xl text-emerald-deep">{t.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="font-serif text-foreground">Active & recent projects</h2>
        <hr className="rule-gold mt-4" />
        <div className="mt-8 space-y-4">
          {projects.map((p) => (
            <article
              key={p.title}
              className="card-elevated card-elevated-hover p-6 grid md:grid-cols-[1fr_14rem] gap-6"
            >
              <div>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h3 className="font-serif text-2xl text-emerald-deep">{p.title}</h3>
                  <span className="eyebrow">{p.role}</span>
                </div>
                <p className="mt-3 text-foreground/85 leading-relaxed">{p.blurb}</p>
              </div>
              <div className="md:text-right text-sm text-muted-foreground border-l md:border-l border-border md:pl-6">
                <div className="text-foreground">{p.funder}</div>
                <div className="mt-1">{p.period}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
