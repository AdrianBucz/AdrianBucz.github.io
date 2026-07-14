interface TimelineItemProps {
  title: string;
  description: string;
  isLast?: boolean;
}

export function TimelineItem({ title, description, isLast = false }: TimelineItemProps) {
  return (
    <li className="relative pl-10">
      {!isLast ? <span aria-hidden className="absolute left-[9px] top-6 h-full w-px bg-zinc-300" /> : null}
      <span aria-hidden className="absolute left-0 top-2 h-5 w-5 rounded-full border-2 border-zinc-400 bg-white" />
      <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-700">{description}</p>
    </li>
  );
}
