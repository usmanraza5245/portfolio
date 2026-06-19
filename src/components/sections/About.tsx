"use client";

import { Profile } from "@/types";

type AboutProps = {
  profile: Profile;
};
export default function About({ profile }: AboutProps) {
  return (
    <section id="about" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
              01 / About
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-6 leading-tight">
              Crafting digital
              <br />
              <span className="text-gradient">experiences.</span>
            </h2>
            <p className="text-muted leading-relaxed mb-6 text-base">
              {profile.bio}
            </p>
            <p className="text-muted leading-relaxed text-base">
              When I'm not coding, I'm exploring new AI tools, contributing to
              open source, or experimenting with new ideas that could become the
              next SaaS product.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-accent border border-border px-4 py-2 rounded-full hover:border-accent transition-colors"
              >
                github.com/usmanraza5245 →
              </a>
            </div>
          </div>

          {/* Right: card with details */}
          <div className="relative">
            <div className="bg-surface border border-border rounded-2xl p-8">
              <div className="space-y-5">
                {[
                  { label: "Location", value: profile.location },
                  {
                    label: "Availability",
                    value: "Open to freelance & contracts",
                  },
                  { label: "Focus", value: "Full-stack & AI-powered products" },
                  {
                    label: "Stack",
                    value: "React · Next.js · Node.js · TypeScript",
                  },
                  { label: "Experience", value: "5+ years professional" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 pb-5 border-b border-border last:border-0 last:pb-0"
                  >
                    <span className="font-mono text-xs text-muted min-w-[90px] pt-0.5">
                      {item.label}
                    </span>
                    <span className="text-sm text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative corner accent */}
            <div
              className="absolute -top-3 -right-3 w-16 h-16 rounded-xl border border-accent/20 pointer-events-none"
              style={{ background: "rgba(232,255,71,0.03)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
