import React from "react";
import { Timeline } from "../ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Present",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023 – 2025",
      content: (
        <div>
          <h2 className="mb-1 text-5xl md:text-6xl font-semibold text-neutral-300 tracking-tight leading-snug">
            NATIONAL FORENSIC SCIENCES UNIVERSITY
          </h2>

          <h3 className="mb-1 text-2xl md:text-3xl font-medium text-[#40ffaa] tracking-wide">
            Master of Science, Cyber Security
          </h3>

          <h4 className="mb-2 text-xl md:text-2xl font-bold text-[#00e0ff]">
            CGPA: 8.24
          </h4>

          <p className="mb-2 text-sm md:text-base font-normal text-neutral-400">
            My two years at NFSU weren’t just about cybersecurity—they were
            about people, night labs, bad coffee, inside jokes, and building
            something meaningful.
          </p>

          <p className="mb-2 text-sm md:text-base font-normal text-neutral-400">
            We started with the basics—Cyber Warfare, AI, Web App Security—but
            quickly leveled up into Malware Analysis, Incident Response, and
            late-night lab sessions that turned strangers into a team.
          </p>

          <p className="mb-2 text-sm md:text-base font-normal text-neutral-400">
            Semester 3 brought chaos in the best way: Cloud, IoT, Blockchain,
            and electives like Critical Infrastructure and Social Network
            Analysis. Somewhere between deadlines and pizza-fueled debates, I
            built a strong circle I’ll never forget.
          </p>

          <p className="mb-2 text-sm md:text-base font-normal text-neutral-500">
            It all wrapped with my Major Project, where I created a full-blown
            Cyber Defense Lab—but the real highlight? Doing it all with a crew
            who made even packet captures fun.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://i.postimg.cc/3Nffm96f/NFSU1.jpg"
              alt="nfsu podium"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover object-top shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://i.postimg.cc/DzXjsvfs/NFSU00.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://i.postimg.cc/4dkqy7gj/NFSU3.jpg"
              alt="classroom friends"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://i.postimg.cc/Rh8cCfrH/nfsu4.jpg"
              alt="ethnic day"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020 – 2023",
      content: (
        <div>
          <h2 className="mb-1 text-5xl md:text-6xl font-semibold text-neutral-300 tracking-tight leading-snug">
            BENGALURU CITY UNIVERSITY
          </h2>

          <h3 className="mb-1 text-2xl md:text-3xl font-medium text-[#40ffaa] tracking-wide">
            Bachelor Of Computer Applications
          </h3>

          <h4 className="mb-2 text-xl md:text-2xl font-bold text-[#00e0ff]">
            CGPA: 8.16
          </h4>

          <p className="mb-2 text-sm md:text-base font-normal text-neutral-400">
            Bengaluru City University was where it all began. I walked in
            curious and clueless, but found a place full of energy, chaos, and
            unexpected friendships.
          </p>

          <p className="mb-2 text-sm md:text-base font-normal text-neutral-400">
            From writing my first line of code to launching mini projects with
            my gang, we figured things out one bug at a time — usually over chai
            and loud music in the background.
          </p>

          <p className="mb-2 text-sm md:text-base font-normal text-neutral-400">
            It wasn’t just classrooms and labs. It was college fests, last-bench
            jokes, photo sessions, group pranks, and those unforgettable 2 a.m.
            pizza-fueled brainstorming nights.
          </p>

          <p className="mb-2 text-sm md:text-base font-normal text-neutral-500">
            By the end of it, I had more than just a degree. I had memories, a
            crew, and the confidence to dive into cybersecurity — all thanks to
            those wild, wonderful BCU days.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://i.postimg.cc/vB6JQJN8/BCU03.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://i.postimg.cc/BQcGPGQX/BCU04.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://i.postimg.cc/bvFPYHYg/BCU00.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://i.postimg.cc/CKdy2BCq/BCU02.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
