import Image from "next/image";

interface ProjectMediaItem {
  kind: "image" | "video";
  src: string;
  alt: string;
}

interface ProjectMediaGalleryProps {
  items: ProjectMediaItem[];
}

export function ProjectMediaGallery({ items }: ProjectMediaGalleryProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section aria-label="Project media" className="mt-8">
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <figure
            key={`${item.kind}-${item.src}`}
            className="overflow-hidden rounded-xl border border-zinc-300/80 bg-zinc-50"
          >
            {item.kind === "video" ? (
              <video
                className="h-auto w-full"
                controls
                preload="metadata"
                aria-label={item.alt}
              >
                <source src={item.src} />
              </video>
            ) : (
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
