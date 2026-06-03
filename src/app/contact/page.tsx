import type { Metadata } from "next";
import { company } from "@/lib/content";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${company.name}.`,
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s talk
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            Whether you need an AI system, a cloud migration, IT support, or
            hardware for your team - tell us what you&apos;re working on.
          </p>
          <div className="mt-8 space-y-2 text-sm">
            <p className="text-muted">Email us directly</p>
            <a
              href={`mailto:${company.email}`}
              className="text-lg font-medium text-brand"
            >
              {company.email}
            </a>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
