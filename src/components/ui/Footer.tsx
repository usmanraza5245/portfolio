"use client";

type FooterProps = {
  name: string;
};
export default function Footer({ name }: FooterProps) {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-subtle">
          © {new Date().getFullYear()} {name}. Built with Next.js, Tailwind and
          Sanity.
        </span>
        <span className="font-mono text-xs text-subtle flex items-center gap-1">
          Designed & developed with
          <span className="text-accent mx-1">♥</span>
          in Islamabad
        </span>
      </div>
    </footer>
  );
}
