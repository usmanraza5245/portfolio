"use client";

import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Profile } from "@/types";

type ContactProps = {
  profile: Profile;
};
export default function Contact({ profile }: ContactProps) {
  return (
    <section id="contact" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
            05 / Contact
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight">
            Let's work
            <br />
            <span className="text-gradient">together.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: CTA */}
          <div>
            <p className="text-muted text-base leading-relaxed mb-8">
              I'm currently available for freelance projects and contract work.
              Whether you need a full-stack web app, an AI integration, or a
              quick MVP — reach out and let's talk.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm group"
              >
                <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted group-hover:border-accent group-hover:text-accent transition-all">
                  <Mail size={15} />
                </div>
                <span className="text-muted group-hover:text-white transition-colors hover-underline">
                  {profile.email}
                </span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm group"
              >
                <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted group-hover:border-accent group-hover:text-accent transition-all">
                  <Github size={15} />
                </div>
                <span className="text-muted group-hover:text-white transition-colors hover-underline">
                  github.com/usmanraza5245
                </span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm group"
              >
                <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted group-hover:border-accent group-hover:text-accent transition-all">
                  <Linkedin size={15} />
                </div>
                <span className="text-muted group-hover:text-white transition-colors hover-underline">
                  linkedin.com/in/usmanraza
                </span>
              </a>

              <div className="flex items-center gap-3 text-sm">
                <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted">
                  <MapPin size={15} />
                </div>
                <span className="text-muted">{profile.location}</span>
              </div>
            </div>
          </div>

          {/* Right: Quick contact card */}
          <div className="bg-surface border border-border rounded-2xl p-8">
            <h3 className="font-display font-bold text-white text-lg mb-2">
              Open to opportunities
            </h3>
            <p className="text-muted text-sm mb-6">
              Available for freelance, part-time contracts, and interesting
              full-time remote roles.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Full-stack web development",
                "AI / LLM integrations",
                "React / Next.js consulting",
                "MVP development",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <span className="text-accent">✓</span>
                  {item}
                </div>
              ))}
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="w-full flex items-center justify-center gap-2 bg-accent text-background font-bold py-3 rounded-full text-sm hover:bg-accent-dim transition-all hover:scale-105"
            >
              <Mail size={14} />
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
