interface AboutSectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function AboutSection({ id, children, className = "" }: AboutSectionProps) {
  return (
    <section id={id} className={`border-t border-zinc-300/70 py-14 sm:py-16 ${className}`}>
      {children}
    </section>
  );
}
