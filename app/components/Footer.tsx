import { person } from "@/content/profile";

export function Footer() {
  return (
    <footer className="mx-auto max-w-5xl border-t border-line px-6 py-12 text-sm text-muted">
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        <a href={`mailto:${person.email}`} className="focus-ring underline decoration-line underline-offset-4 hover:text-ink">
          Email
        </a>
        <a href={person.links.linkedin} className="focus-ring underline decoration-line underline-offset-4 hover:text-ink">
          LinkedIn
        </a>
        <a href={person.links.github} className="focus-ring underline decoration-line underline-offset-4 hover:text-ink">
          GitHub
        </a>
        <a href={person.links.substack} className="focus-ring underline decoration-line underline-offset-4 hover:text-ink">
          Substack
        </a>
      </div>
    </footer>
  );
}
