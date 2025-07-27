"use client";
import React from "react";
import { Timeline } from "../ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Present",
      content: (
        <div>
          <h2 className="mb-1 text-5xl md:text-6xl font-semibold text-neutral-300 tracking-tight leading-snug">
            The Hustle Phase
          </h2>

          <p className="mb-2 text-sm md:text-base font-normal text-neutral-400">
            These days, I'm living the cyber lab life — juggling blogs, LLM
            pentesting, and red team research like a caffeinated octopus. One
            tab's on PortSwigger, another's on a CTF, and five more are
            "research," I swear.
          </p>

          <p className="mb-2 text-sm md:text-base font-normal text-neutral-400">
            Some nights I'm diving deep into Splunk logs, others I'm fuzzing
            LLMs or breaking a new payload in Burp. Red team by day, blue team
            by night — or maybe it's the other way around. Who knows anymore?
          </p>

          <p className="mb-2 text-sm md:text-base font-normal text-neutral-400">
            I'm also pushing updates to my GitHub, applying to gigs that excite
            me, stalking threat intel feeds like it's social media, and building
            structured notes in Obsidian as I go. Down the line, I plan to turn
            those into a personal blog — something real, raw, and deeply
            technical.
          </p>

          <p className="mb-2 text-sm md:text-base font-normal text-neutral-500">
            This isn't just upskilling — it's survival training for the cyber
            jungle. And honestly? I'm having a blast.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://i.postimg.cc/c1gGsnn1/Present3.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://i.postimg.cc/BZxNcZWc/Present3.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://i.postimg.cc/WbLCTfVS/Present2.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://i.postimg.cc/6qmd6P2c/present4.jpg"
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

          <h3 className="mb-1 text-2xl md:text-3xl font-medium tracking-wide" style={{ color: 'var(--theme-accent, #40ffaa)' }}>
            Master of Science, Cyber Security
          </h3>

          <h4 className="mb-2 text-xl md:text-2xl font-bold" style={{ color: 'var(--theme-primary, #00e0ff)' }}>
            CGPA: 8.24
          </h4>

          <p className="mb-2 text-sm md:text-base font-normal text-neutral-400">
            My two years at NFSU weren't just about cybersecurity—they were
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
            built a strong circle I'll never forget.
          </p>

          <p className="mb-2 text-sm md:text-base font-normal text-neutral-500">
            It all wrapped with my Major Project — ICDE (Integrated Cyber
            Defense Environment) — a full-blown, self-built Cyber Defense Lab.
            But the real highlight? Pulling it off solo, late nights and all,
            and still managing to make packet captures feel like a victory
            dance.
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

          <h3 className="mb-1 text-2xl md:text-3xl font-medium tracking-wide" style={{ color: 'var(--theme-accent, #40ffaa)' }}>
            Bachelor Of Computer Applications
          </h3>

          <h4 className="mb-2 text-xl md:text-2xl font-bold" style={{ color: 'var(--theme-primary, #00e0ff)' }}>
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
            It wasn't just classrooms and labs. It was college fests, last-bench
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
      <style jsx global>{`
        /* Override the original timeline gradient with theme-aware colors */
        .bg-gradient-to-t {
          background: linear-gradient(to top, var(--theme-primary, #3b82f6), var(--theme-accent, #60a5fa), transparent) !important;
        }
        
        /* Ensure the animated line uses theme colors */
        motion-div[style*="bg-gradient-to-t"] {
          background: linear-gradient(to top, var(--theme-primary, #3b82f6) 0%, var(--theme-accent, #60a5fa) 10%, transparent 100%) !important;
        }
        
        /* Timeline dots with theme colors */
        .bg-neutral-200 {
          background-color: var(--theme-accent, #e5e7eb) !important;
        }
        
        .border-neutral-300 {
          border-color: var(--theme-primary, #d1d5db) !important;
        }
        
        /* Dark mode overrides */
        .dark .bg-neutral-800 {
          background-color: var(--theme-accent, #374151) !important;
        }
        
        .dark .border-neutral-700 {
          border-color: var(--theme-primary, #4b5563) !important;
        }
      `}</style>
      <Timeline data={data} />
    </div>
  );
}
