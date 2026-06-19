import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Line K. H. Clemmensen" },
      { name: "description", content: "Curriculum vitae: positions, education, grants, supervision, and service." },
      { property: "og:title", content: "CV — Line K. H. Clemmensen" },
      { property: "og:url", content: "/cv" },
    ],
    links: [{ rel: "canonical", href: "/cv" }],
  }),
  component: CV,
});

function CV() {
  return (
    <div className="mx-auto max-w-4xl px-6 md:px-12 py-16 md:py-24">
      <PageHeader eyebrow="Curriculum vitae" title="Career in brief" />

      <Section title="Current positions">
        <CVRow year="2024 –" title="Professor" org="Dept. of Mathematical Sciences, University of Copenhagen" />
        <CVRow year="2013 –" title="Associate Professor" org="Dept. of Applied Mathematics & Computer Science, DTU" />
        <CVRow year="2023 –" title="Co-founder & CSO" org="Interhuman AI" />
      </Section>

      <Section title="Previous positions">
        <CVRow year="2016 – 2017" title="Principal Data Scientist" org="Mærsk Digital" />
        <CVRow year="2010 – 2013" title="Assistant Professor" org="DTU Informatics & Mathematical Modelling" />
      </Section>

      <Section title="Education">
        <CVRow year="2017" title="Pasteur program — From project to success" org="Harvard Business School" />
        <CVRow year="2010" title="PhD" org="DTU Informatics & Mathematical Modelling" />
        <CVRow year="2006" title="MSc" org="DTU Informatics & Mathematical Modelling" />
      </Section>

      <Section title="Selected grants & awards">
        <CVRow year="2024" title="'News of the Year'" org="Denmark's Best Clinical Trial — Wrist Angel" />
        <CVRow year="2025 – 2028" title="PebAI4MH — PI" org="Innovation Fund Denmark — Grand Solution · €2.55M" />
        <CVRow year="2025 – 2030" title="AlignAI — Co-PI" org="Horizon MSCA Doctoral Network · €750k" />
        <CVRow year="2023 – 2028" title="DigitSTEM — WP-PI" org="Bioneer · €12M total (PI's part €1.34M)" />
        <CVRow year="2023 – 2026" title="artiMATE — PI" org="Villum Synergy · €391k" />
        <CVRow year="2023" title="Honorary research grant" org="Fabrikant Ulrich Brinch og hustru Marie Brinchs legat" />
        <CVRow year="2019 – 2023" title="Wrist Angel — Co-PI" org="Novo Nordisk Foundation Exploratory Synergy · €668k" />
      </Section>

      <Section title="Supervision & teaching">
        <p className="prose-academic">
          15 PhD students as main supervisor (10+ as co-supervisor), 8 postdocs,
          100+ MSc students. Computational Data Analysis (DTU, MSc) for 13
          years; Applied Computational Data Analysis (DTU, PhD) for 10 years;
          Statistical Methods (KU, BSc); PhD course on statistical methods for
          AI evaluation (KU SCIENCE, 2025). Five years as responsible for
          continuing education at DTU Compute. Mentor with High5Girls.
        </p>
      </Section>

      <Section title="Service to the community">
        <p className="prose-academic">
          Reviewer for NeurIPS, AAAI, ICML; Technometrics, Annals of
          Statistics, IEEE Trans. Image Processing, Acta Psychiatrica
          Scandinavica. PhD assessment committees at AAU, AU, KU, DTU, Aalto,
          Lund, NTNU, UiT, UPV/Valencia. Member of the Academy for Technical
          Sciences (ATV) since 2023; Co-chair of ATV's Life Science group
          since 2024. ELLIS member, Copenhagen Unit, since 2022.
        </p>
      </Section>

      <Section title="Personal context">
        <p className="prose-academic">
          80% position at KU, 20% at DTU, plus a few hours per week at
          Interhuman AI. Maternity leaves 2008–2009 and 2017–2018
          (~9 months each); industrial sabbatical 2016–2017.
        </p>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-serif text-foreground">{title}</h2>
      <hr className="rule-gold mt-4" />
      <div className="mt-6 space-y-1">{children}</div>
    </section>
  );
}

function CVRow({ year, title, org }: { year: string; title: string; org: string }) {
  return (
    <div className="grid grid-cols-[8rem_1fr] gap-4 py-2.5 border-b border-border last:border-b-0">
      <div className="text-sm text-muted-foreground font-mono pt-0.5">{year}</div>
      <div>
        <div className="text-foreground">{title}</div>
        <div className="text-sm italic text-emerald">{org}</div>
      </div>
    </div>
  );
}
