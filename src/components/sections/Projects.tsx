'use client'

import { ExternalLink, Github, Star } from 'lucide-react'
import { portfolioData } from '@/lib/data'

export default function Projects() {
  const { projects } = portfolioData
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
            03 / Projects
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight">
            Things I've
            <br />
            <span className="text-gradient">built.</span>
          </h2>
        </div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {featured.map((project) => (
            <div
              key={project.id}
              className="bg-surface border border-border rounded-2xl p-7 hover:border-border-light transition-all group flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Star size={13} className="text-accent" />
                  <span className="font-mono text-xs text-accent">Featured</span>
                </div>
                <span className="font-mono text-xs text-subtle">{project.year}</span>
              </div>

              <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-xs text-muted border border-border px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono text-white hover:text-accent transition-colors"
                  >
                    <ExternalLink size={12} />
                    Live site
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono text-muted hover:text-white transition-colors"
                  >
                    <Github size={12} />
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Other projects */}
        <div className="grid sm:grid-cols-2 gap-5">
          {others.map((project) => (
            <div
              key={project.id}
              className="bg-surface/50 border border-border rounded-xl p-6 hover:border-border-light transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-bold text-base text-white group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <span className="font-mono text-xs text-subtle">{project.year}</span>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-xs text-subtle border border-border px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
