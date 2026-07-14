interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <header className="max-w-4xl">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-zinc-700">{description}</p> : null}
    </header>
  );
}
