import { portfolioData } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-subtle">
          © {new Date().getFullYear()} {portfolioData.personal.name}. Built with Next.js & Tailwind.
        </span>
        <span className="font-mono text-xs text-subtle flex items-center gap-1">
          Designed & developed with
          <span className="text-accent mx-1">♥</span>
          in Islamabad
        </span>
      </div>
    </footer>
  )
}
