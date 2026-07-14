import Image from "next/image";

import { AboutSection } from "@/components/about/about-section";
import { AboutCTASection } from "@/components/about/cta-section";
import { HobbyCard } from "@/components/about/hobby-card";
import { InterestCard } from "@/components/about/interest-card";
import { SectionHeader } from "@/components/about/section-header";

export default function AboutPage() {
  const interests = [
    "Digital Design",
    "Computer Architecture",
    "Semiconductor Industry",
  ];

  const hobbies = [
    { title: "Photography", imageLabel: "Hobby Image", description: "Placeholder text describing creative interests, visual storytelling, and personal inspiration." },
    { title: "Gaming", imageLabel: "Hobby Image", description: "Placeholder text describing strategy, systems thinking, and interactive problem solving outside work." },
    { title: "Technology Projects", imageLabel: "Workspace", description: "Placeholder text describing independent projects, experimentation, and building for fun." },
    { title: "Travel", imageLabel: "Travel Photo", description: "Placeholder text describing exploration, perspective, and personal growth through travel." },
  ];

  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-20 pt-10 sm:pt-14">
      <section aria-labelledby="about-page-title" className="pb-14 sm:pb-16">
        <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">About</p>
            <h1 id="about-page-title" className="mt-3 text-5xl font-semibold tracking-tight text-zinc-900 sm:text-6xl">
              About Me
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-700">
              This page is dedicated to explaining more about who I am inside and outside of engineering. I was born and grew up in West Lafayette, Indiana.
              Growing up five minutes from Purdue University meant I was often able to attend public events at the university. This contributed to my choice
              to attend Purdue for my studies. Picking what I wanted to study was harder, but as I got older I began to notice how digital technology was becoming
              an increasingly important aspect of every day life. Unlike many other topics in STEM, I didn&apos;t even have a clue how smart devices like PCs worked. Naturally,
              I looked online and questioned my grandfather, a physicist, about how computers could perform tasks that seemed impossible to me. No matter how much I learned,
              I wasn&apos;t satisfied with how much I knew about electronics. This was the realization that caused me to pick computer engineering as my field of study. 
              After graduating from Purdue, I can confidently say I am still not satisfied with my knowledge. I have a stong drive to continue learning and doing projects
              related to computer engineering. Aside from engineering, I love the outdoors and physical activity. I ride my bike daily, up to 2000 miles per summer. 
              Beyond that, hiking, skiing, and swimming are all things I like to do when given the opportunity. I think that this balance of interests keeps me healthy and motivated.
            </p>
          </div>
          <div className="lg:pt-2">
            <div className="overflow-hidden rounded-xl border border-zinc-300/70 bg-zinc-50">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/HEIF%20Image%20%281%29.heif"
                  alt="Professional Portrait"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection id="engineering-interests">
        <SectionHeader
          title="Engineering Interests"
          description="Here are a few engineering topics that I am particularly interested in."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {interests.map((interest) => (
            <InterestCard
              key={interest}
              title={interest}
              description="Placeholder text explaining why this area is engaging and how it aligns with future career goals."
            />
          ))}
        </div>
      </AboutSection>

      <AboutSection id="outside-engineering">
        <SectionHeader
          title="Outside Engineering"
          description="Placeholder section introducing personality and interests beyond coursework, research, and engineering roles."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {hobbies.map((hobby) => (
            <HobbyCard
              key={hobby.title}
              title={hobby.title}
              imageLabel={hobby.imageLabel}
              description={hobby.description}
            />
          ))}
        </div>
      </AboutSection>

      <AboutSection id="current-goals">
        <SectionHeader title="Looking Ahead" />
        <div className="mt-8 max-w-4xl space-y-4">
          <p className="text-base leading-7 text-zinc-700">
            Placeholder text for the engineering roles and responsibilities being pursued in the near term.
          </p>
          <p className="text-base leading-7 text-zinc-700">
            Placeholder text for industry interests, technical environments, and the impact desired in future teams.
          </p>
          <p className="text-base leading-7 text-zinc-700">
            Placeholder text for long-term aspirations and the type of engineer this portfolio is building toward.
          </p>
        </div>
      </AboutSection>

      <section className="border-t border-zinc-300/70 pt-14 sm:pt-16">
        <AboutCTASection />
      </section>
    </div>
  );
}
