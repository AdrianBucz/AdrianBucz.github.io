import { ImagePlaceholder } from "./image-placeholder";

interface HobbyCardProps {
  title: string;
  description: string;
  imageLabel: string;
}

export function HobbyCard({ title, description, imageLabel }: HobbyCardProps) {
  return (
    <article className="rounded-xl border border-zinc-300/70 bg-white p-5">
      <ImagePlaceholder label={imageLabel} className="aspect-square" />
      <h3 className="mt-4 text-lg font-semibold text-zinc-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-700">{description}</p>
    </article>
  );
}
