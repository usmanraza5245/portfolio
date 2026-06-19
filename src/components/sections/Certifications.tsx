"use client";

import { Award } from "lucide-react";
import { Certification } from "@/types";

type CertificationProps = {
  certifications: Array<Certification>;
};
export default function Certifications({ certifications }: CertificationProps) {
  return (
    <section id="certifications" className="py-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <span className="font-mono text-xs text-accent tracking-widest uppercase mb-4 block">
            06 / Certifications
          </span>
          <h2 className="font-display font-extrabold text-3xl text-white">
            Credentials.
          </h2>
        </div>

        <div className="flex flex-wrap gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="flex items-center gap-3 bg-surface border border-border rounded-xl px-5 py-4 hover:border-border-light transition-colors"
            >
              <Award size={16} className="text-accent shrink-0" />
              <div>
                <p className="text-sm text-white font-medium">{cert.title}</p>
                <p className="font-mono text-xs text-muted">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
