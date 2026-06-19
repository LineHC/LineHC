import { type ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <header className="mb-12">
      {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
      <h1 className="font-serif text-foreground">{title}</h1>
      <hr className="rule-gold mt-6" />
      {lede && (
        <p className="prose-academic mt-4 text-muted-foreground text-lg">
          {lede}
        </p>
      )}
      {children}
    </header>
  );
}
