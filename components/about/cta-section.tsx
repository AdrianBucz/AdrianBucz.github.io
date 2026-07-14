import Link from "next/link";

export function AboutCTASection() {
  return (
    <section className="rounded-2xl border border-zinc-300/70 bg-zinc-50 px-6 py-8 sm:px-8 sm:py-10">
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Let&apos;s Connect</h2>
      <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-700">
        Placeholder text for a closing invitation to connect, learn more about my work, and continue the conversation.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/resume"
          className="inline-flex rounded-md border border-zinc-300 bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
        >
          View Resume
        </Link>
        <Link
          href="/projects"
          className="inline-flex rounded-md border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="inline-flex rounded-md border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
