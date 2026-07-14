import { ImagePlaceholder } from "./image-placeholder";

interface ValueCardProps {
  title: string;
  description: string;
}

export function ValueCard({ title, description }: ValueCardProps) {
  return (
    <article className="rounded-xl border border-zinc-300/70 bg-white p-5">
      <div className="mb-4 max-w-[76px]">
        <ImagePlaceholder label="Value Icon" className="aspect-square rounded-lg text-[10px]" />
      </div>
      <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-700">{description}</p>
    </article>
  );
}
