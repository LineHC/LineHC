import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Rocket, Users, Lightbulb } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/interhuman")({
  head: () => ({
    meta: [
      { title: "Interhuman AI — Co-founder & CSO" },
      { name: "description", content: "Co-founder & Chief Scientific Officer at Interhuman AI — translating research on AI fairness and explainability into products that put humans first." },
      { property: "og:title", content: "Interhuman AI" },
      { property: "og:url", content: "/interhuman" },
    ],
    links: [{ rel: "canonical", href: "/interhuman" }],
  }),
  component: Interhuman,
});

function Interhuman() {
  return (
    <div>
      {/* Bold hero — different register from the academic pages */}
      <section className="bg-emerald-deep text-gold-soft">
        <div className="mx-auto max-w-5xl px-6 md:px-12 py-20 md:py-28">
          <div className="text-gold text-xs tracking-[0.22em] uppercase">
            Venture · Co-founder & CSO
          </div>
          <h1 className="font-serif italic mt-5 text-gold-soft">
            Interhuman AI
          </h1>
          <hr className="border-0 border-t border-gold w-12 mt-7" />
          <p className="prose-academic mt-7 text-gold-soft/90 max-w-2xl text-xl">
            Building AI products that take the <em>inter</em> in interhuman
            seriously — systems designed around the people who use them, the
            people they describe, and the people who are accountable for them.
          </p>
          <a
            href="https://interhuman.ai"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 bg-gold text-emerald-deep px-5 py-3 rounded-md font-medium hover:bg-gold-soft transition-colors"
          >
            Visit interhuman.ai
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 md:px-12 py-16 md:py-24">
        <section className="grid md:grid-cols-3 gap-6">
          <ValueCard
            icon={<Rocket className="h-5 w-5" />}
            title="Founded 2023"
            body="Co-founded Interhuman AI alongside collaborators from academia and industry. I serve as Chief Scientific Officer."
          />
          <ValueCard
            icon={<Lightbulb className="h-5 w-5" />}
            title="Research → product"
            body="Carrying YODA-style evaluation, fairness, and explainability work out of the lab and into deployed systems."
          />
          <ValueCard
            icon={<Users className="h-5 w-5" />}
            title="Humans first"
            body="Products are shaped by lived experience and clinical insight, not by what's easiest to benchmark."
          />
        </section>

        <section className="mt-20 grid md:grid-cols-[1fr_1fr] gap-12">
          <div>
            <div className="eyebrow mb-3">My role</div>
            <h2 className="font-serif text-foreground">Chief Scientific Officer</h2>
            <hr className="rule-gold mt-4" />
            <p className="prose-academic mt-5">
              I split my week between the University of Copenhagen (80%), DTU
              (20%), and a few hours at Interhuman. The combination keeps the
              research grounded in real problems and keeps the product grounded
              in serious methodology.
            </p>
          </div>
          <div className="card-elevated p-8 bg-gold-soft border-gold/30">
            <div className="eyebrow text-emerald-deep">Why a venture</div>
            <p className="mt-4 font-serif text-2xl text-emerald-deep leading-snug">
              “The hardest part of trustworthy AI isn't writing the paper.
              It's the engineering, the contracts, the integration, the
              maintenance — the messy, human work.”
            </p>
          </div>
        </section>

        <section className="mt-20">
          <div className="eyebrow mb-3">Open to</div>
          <h2 className="font-serif text-foreground">Collaboration & conversation</h2>
          <hr className="rule-gold mt-4" />
          <p className="prose-academic mt-5 text-muted-foreground">
            If you're working on responsible deployment of AI in health, life
            sciences, or other high-stakes settings — and you'd like to talk
            about partnerships, pilots, or hiring — please reach out.
          </p>
        </section>
      </div>
    </div>
  );
}

function ValueCard({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="card-elevated p-6">
      <div className="text-emerald flex items-center gap-2">{icon}</div>
      <h3 className="font-serif text-xl text-emerald-deep mt-3">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}
