import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Line K. H. Clemmensen" },
      { name: "description", content: "Get in touch about research, supervision, talks, or collaboration." },
      { property: "og:title", content: "Contact" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-6 md:px-12 py-16 md:py-24">
      <PageHeader
        eyebrow="Get in touch"
        title="Let's talk"
        lede="Open to research collaborations, student supervision, talks, panels, and venture conversations through Interhuman AI."
      />

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <a
          href="mailto:lkhc@di.ku.dk"
          className="card-elevated card-elevated-hover p-7"
        >
          <Mail className="h-5 w-5 text-gold" />
          <div className="eyebrow mt-4">Email — KU</div>
          <div className="font-serif text-2xl text-emerald-deep mt-2">lkhc@di.ku.dk</div>
          <p className="text-sm text-muted-foreground mt-2">University of Copenhagen — primary address</p>
        </a>
        <a
          href="mailto:lkhc@dtu.dk"
          className="card-elevated card-elevated-hover p-7"
        >
          <Mail className="h-5 w-5 text-gold" />
          <div className="eyebrow mt-4">Email — DTU</div>
          <div className="font-serif text-2xl text-emerald-deep mt-2">lkhc@dtu.dk</div>
          <p className="text-sm text-muted-foreground mt-2">Technical University of Denmark</p>
        </a>
      </div>

      <section className="mt-14">
        <h2 className="font-serif text-foreground">Affiliations</h2>
        <hr className="rule-gold mt-4" />
        <ul className="mt-6 space-y-4 text-foreground/90">
          <li className="flex items-start gap-3">
            <MapPin className="h-4 w-4 text-gold mt-1 shrink-0" />
            <div>
              <div>Department of Mathematical Sciences, University of Copenhagen</div>
              <div className="text-sm text-muted-foreground italic">Universitetsparken 5, 2100 København Ø</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="h-4 w-4 text-gold mt-1 shrink-0" />
            <div>
              <div>DTU Compute — Applied Mathematics & Computer Science</div>
              <div className="text-sm text-muted-foreground italic">Richard Petersens Plads, 2800 Kgs. Lyngby</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="h-4 w-4 text-gold mt-1 shrink-0" />
            <div>
              <div>Pioneer Centre for AI · YODA initiative</div>
              <div className="text-sm text-muted-foreground italic">Copenhagen</div>
            </div>
          </li>
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-serif text-foreground">Find me online</h2>
        <hr className="rule-gold mt-4" />
        <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
          {[
            { label: "Google Scholar", href: "https://scholar.google.com.sg/citations?user=S285OAAAAAJ&hl=ko" },
            { label: "ORCID — 0000-0001-5527-5798", href: "https://orcid.org/0000-0001-5527-5798" },
            { label: "Pioneer Centre — YODA", href: "https://www.aicentre.dk/yoda-yearning-to-operationalize-democratic-ai" },
            { label: "Interhuman AI", href: "https://interhuman.ai" },
          ].map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-baseline gap-1.5 text-emerald-deep hover:text-emerald border-b border-gold/40 pb-0.5"
              >
                {l.label}
                <ExternalLink className="h-3 w-3" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
