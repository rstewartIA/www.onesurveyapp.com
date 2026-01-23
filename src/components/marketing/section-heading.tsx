type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-secondary">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-semibold text-brand-primary sm:text-4xl">{title}</h2>
      {subtitle && <p className="max-w-2xl text-neutral-600">{subtitle}</p>}
    </div>
  );
}
