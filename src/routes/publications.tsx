import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Line K. H. Clemmensen" },
      { name: "description", content: "Selected peer-reviewed publications: 47 journal papers, 46 conference papers, 2,940+ citations." },
      { property: "og:title", content: "Publications" },
      { property: "og:url", content: "/publications" },
    ],
    links: [{ rel: "canonical", href: "/publications" }],
  }),
  component: Publications,
});

type Pub = {
  authors: string;
  title: string;
  venue: string;
  year: number;
  link?: string;
};

const selected: Pub[] = [
  {
    authors: "Clemmensen, L., Hastie, T., Witten, D., Ersbøll, B.",
    title: "Sparse Discriminant Analysis",
    venue: "Technometrics — ~1,900 citations",
    year: 2011,
  },
  {
    authors: "Clemmensen, L. H., Kjærsgaard, R. D.",
    title: "Data Representativity for Machine Learning and AI Systems",
    venue: "arXiv:2203.04706",
    year: 2022,
    link: "https://arxiv.org/abs/2203.04706",
  },
  {
    authors: "Kjærsgaard, R. D., Boubekki, A., Clemmensen, L.",
    title: "Pantypes: Diverse Representatives for Self-Explainable Models",
    venue: "AAAI, Vancouver",
    year: 2024,
  },
  {
    authors: "Skat-Rørdam, H. V., Kjærsgaard, R. D., Hovad, E., Clemmensen, L. K. H.",
    title: "SEAuAIS: A self-explainable autoencoder with AIS-based maritime anomaly detection",
    venue: "Ocean Engineering 341(4)",
    year: 2025,
  },
];

const recent: Pub[] = [
  { authors: "Grønberg, M., Ormerod, J. T., Clemmensen, L. K. H.", title: "Gaussian variational approximation for ordinal data with crossed random effects", venue: "J. Comp. Graphical Statistics 35(1)", year: 2026 },
  { authors: "Pavel, A., Grønberg, M. G., Clemmensen, L. H.", title: "Comparing gene-gene co-expression network approaches for scRNAseq data", venue: "Comp. & Structural Biotech. J. 27", year: 2025 },
  { authors: "Pavel, A., Grønberg, M. G., Clemmensen, L. H.", title: "The impact of dropouts in scRNAseq dense neighborhood analysis", venue: "Comp. & Structural Biotech. J. 27", year: 2025 },
  { authors: "Sørensen, M. B. et al., Clemmensen, L.", title: "Exploring crop health and fungal soil microbiome composition using ML applied to remote sensing", venue: "Commun. Earth Environ. 6, 355", year: 2025 },
  { authors: "Hjuler, M. J., Clemmensen, L. H., Das, S.", title: "Exploring LIME for Speech Emotion Recognition with Distribution-Shift", venue: "ICASSP, Hyderabad", year: 2025 },
  { authors: "Wirbel, J., Clemmensen, L., Galeazzi, R.", title: "Unlock AI Vessel Navigation Assistants: A Community Call for Open Data", venue: "IFAC", year: 2025 },
  { authors: "Kjærsgaard, R. D., Parviainen, P., Saurabh, S., Kundu, M., Clemmensen, L. K. H.", title: "Fair Soft Clustering", venue: "AISTATS, PMLR 238", year: 2024 },
  { authors: "Fromberg, L., Nielsen, T., Frumosu, F. D., Clemmensen, L. H.", title: "Beyond Accuracy: Fairness, Scalability, and Uncertainty in Facial Emotion Recognition", venue: "Northern Lights Deep Learning Conference", year: 2024 },
  { authors: "Lønfeldt, N. N. et al., Clemmensen, L. K. H.", title: "Predicting OCD episodes in adolescents using a wearable biosensor — Wrist Angel feasibility study", venue: "Frontiers in Psychiatry 14", year: 2023 },
  { authors: "Einarson, K. A. et al., Clemmensen, L., Refsgaard, H. H. F.", title: "Molecular Representations in ML-Based Prediction of PK Parameters for Insulin Analogs", venue: "ACS Omega 8(26)", year: 2023 },
  { authors: "Kjærsgaard, R. D., Bello-Arufe, A., Rathcke, A. D., Buchhave, L. A., Clemmensen, L. K. H.", title: "TAU: A neural network based telluric correction framework", venue: "Astronomy & Astrophysics 677", year: 2023 },
  { authors: "Frumosu, F. D. et al., Clemmensen, L. K.", title: "Interpretability by design using computer vision for behavioral sensing in child and adolescent psychiatry", venue: "ICML — Interpretable ML in Healthcare Workshop", year: 2022 },
  { authors: "Das, S., Lønfeldt, N. N., Pagsberg, A. K., Clemmensen, L. H.", title: "Towards Transferable Speech Emotion Representation", venue: "IEEE ICASSP", year: 2022 },
  { authors: "Kjærsgaard, R. D., Grønberg, M. G., Clemmensen, L. K. H.", title: "Sampling to Improve Predictions for Underrepresented Observations in Imbalanced Data", venue: "NeurIPS Data-Centric AI Workshop", year: 2021 },
  { authors: "Larsen, J. S., Clemmensen, L.", title: "Weight sharing and deep learning for spectral data", venue: "IEEE ICASSP", year: 2020 },
  { authors: "Hüttel, F. B., Clemmensen, L. K. H.", title: "Consistent and accurate estimation of stellar parameters from HARPS-N Spectroscopy", venue: "NeurIPS — ML and Physical Sciences Workshop", year: 2020 },
  { authors: "Welling, S. H., Refsgaard, H., Brockhoff, P. B., Clemmensen, L. H.", title: "Forest floor visualizations of random forests", venue: "arXiv:1605.09196 (R package forestFloor)", year: 2016 },
];

function Publications() {
  return (
    <div className="mx-auto max-w-5xl px-6 md:px-12 py-16 md:py-24">
      <PageHeader
        eyebrow="Publications"
        title="Selected peer-reviewed work"
        lede="47 journal papers, 46 conference papers, 14 first authorships, 38 last authorships. Full list on Google Scholar and ORCID."
      />

      <div className="flex flex-wrap gap-3 mb-12">
        <ExternalLinkPill
          href="https://scholar.google.com.sg/citations?user=S285OAAAAAJ&hl=ko"
          label="Google Scholar"
        />
        <ExternalLinkPill
          href="https://orcid.org/0000-0001-5527-5798"
          label="ORCID 0000-0001-5527-5798"
        />
      </div>

      <Section title="Selected outputs" items={selected} />
      <Section title="Recent (past 5 years)" items={recent} />
    </div>
  );
}

function Section({ title, items }: { title: string; items: Pub[] }) {
  return (
    <section className="mt-16 first:mt-0">
      <h2 className="font-serif text-foreground">{title}</h2>
      <hr className="rule-gold mt-4" />
      <ol className="mt-6 border-t border-border">
        {items.map((p, i) => (
          <li
            key={i}
            className="grid grid-cols-[3.5rem_1fr] gap-4 py-5 border-b border-border"
          >
            <div className="font-serif text-2xl text-gold leading-none pt-1">
              {String(p.year).slice(2)}
            </div>
            <div>
              <div className="text-foreground font-medium leading-snug">
                {p.link ? (
                  <a
                    className="hover:text-emerald inline-flex items-baseline gap-1.5 underline decoration-gold/50 underline-offset-4"
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {p.title}
                    <ExternalLink className="h-3 w-3 translate-y-0.5" />
                  </a>
                ) : (
                  p.title
                )}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{p.authors}</div>
              <div className="mt-0.5 text-sm italic text-emerald">{p.venue}</div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function ExternalLinkPill({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 text-sm border border-border bg-card px-3.5 py-1.5 rounded-full hover:border-gold hover:text-emerald transition-colors"
    >
      {label}
      <ExternalLink className="h-3.5 w-3.5" />
    </a>
  );
}
