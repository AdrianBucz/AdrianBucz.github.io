import { ImagePlaceholder } from "./image-placeholder";

interface InterestCardProps {
  title: string;
  description: string;
}

export function InterestCard({ title, description }: InterestCardProps) {
  return (
    <article className="rounded-xl border border-zinc-300/70 bg-white p-5">
      <div className="mb-4 max-w-[72px]">
        <ImagePlaceholder label="Icon" className="aspect-square rounded-lg text-[10px]" />
      </div>
      <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-700">{description}</p>
    </article>
  );
}
