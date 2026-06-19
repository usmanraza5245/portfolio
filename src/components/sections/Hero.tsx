"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Profile } from "@/types";

const ROLES = [
  "Full-Stack Developer",
  "React / Next.js Engineer",
  "AI Product Builder",
  "Node.js Developer",
];

type HeroProps = {
  profile: Profile;
};
export default function Hero({ profile }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 60);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 30);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center grid-bg overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(232,255,71,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24 w-full">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-10 text-xs text-muted font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Available for freelance work · Islamabad, PK
        </div>

        {/* Main heading */}
        <h1
          className="font-display font-extrabold leading-[0.95] mb-6"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
        >
          <span className="block text-white">Hi, I'm</span>
          <span className="block text-gradient">{profile.name}</span>
        </h1>

        {/* Typewriter role */}
        <div className="flex items-center gap-2 mb-8 h-8">
          <span className="text-muted font-mono text-lg">&gt;</span>
          <span className="font-mono text-lg text-white">{displayed}</span>
          <span className="w-0.5 h-5 bg-accent animate-blink" />
        </div>

        {/* Tagline */}
        <p
          className="text-muted text-lg max-w-lg mb-10 leading-relaxed"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {profile.tagline}
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap items-center gap-4 mb-20">
          <a
            href="#projects"
            className="flex items-center gap-2 bg-accent text-background font-bold px-6 py-3 rounded-full text-sm hover:bg-accent-dim transition-all hover:scale-105"
          >
            View my work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 border border-border text-sm px-6 py-3 rounded-full hover:border-border-light hover:text-white text-muted transition-all"
          >
            Get in touch
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-3 ml-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-white hover:border-border-light transition-all"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-white hover:border-border-light transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-white hover:border-border-light transition-all"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-10">
          {[
            { value: "5+", label: "Years experience" },
            { value: "20+", label: "Projects shipped" },
            { value: "100%", label: "Remote ready" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display font-extrabold text-3xl text-white mb-0.5">
                {stat.value}
              </div>
              <div className="text-xs text-muted font-mono">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-white transition-colors"
      >
        <span className="text-xs font-mono">scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
