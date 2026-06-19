"use client";

import { Skill } from "@/types";

type SkillProps = {
  skills: Array<Skill>;
};
export default function Skills({ skills }: SkillProps) {
  return (
    <section id="skills" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
            02 / Skills
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight">
            Tools of the
            <br />
            <span className="text-gradient">trade.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className="bg-surface border border-border rounded-2xl p-6 hover:border-border-light transition-colors group"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display font-bold text-white text-sm">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono text-muted border border-border px-2.5 py-1 rounded-full group-hover:border-subtle transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
