interface ImagePlaceholderProps {
  label: string;
  className?: string;
}

export function ImagePlaceholder({ label, className = "" }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex aspect-[4/3] items-center justify-center rounded-xl border-2 border-dashed border-zinc-300 bg-zinc-50 px-4 text-center text-sm font-semibold uppercase tracking-[0.08em] text-zinc-500 ${className}`}
    >
      {label}
    </div>
  );
}
