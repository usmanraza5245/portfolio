import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Usman Raza — Full-Stack Developer',
  description:
    'Full-stack developer specializing in React, Next.js, Node.js & TypeScript. Building performant web apps & AI-powered products.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Islamabad'],
  authors: [{ name: 'Usman Raza' }],
  openGraph: {
    title: 'Usman Raza — Full-Stack Developer',
    description: 'Building performant web apps & AI-powered products.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-white antialiased">{children}</body>
    </html>
  )
}
