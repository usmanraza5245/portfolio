'use client'

import { portfolioData } from '@/lib/data'

export default function Experience() {
  const { experience } = portfolioData

  return (
    <section id="experience" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
            04 / Experience
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight">
            Where I've
            <br />
            <span className="text-gradient">worked.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <div key={i} className="md:pl-10 relative">
                {/* Timeline dot */}
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full border-2 border-accent bg-background hidden md:block" />

                <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
                  {/* Left: meta */}
                  <div>
                    <span className="font-mono text-xs text-accent block mb-1">{job.period}</span>
                    <span className="font-mono text-xs text-subtle block">{job.location}</span>
                  </div>

                  {/* Right: content */}
                  <div>
                    <div className="mb-3">
                      <h3 className="font-display font-bold text-lg text-white">{job.role}</h3>
                      <span className="font-mono text-sm text-muted">{job.company}</span>
                    </div>
                    <p className="text-muted text-sm leading-relaxed mb-4">{job.description}</p>

                    <ul className="space-y-2">
                      {job.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted">
                          <span className="text-accent mt-1 text-xs shrink-0">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
