import Link from "next/link";
import { SITE_NAME } from "../lib/constants";

export function Header() {
  return (
    <header className="w-full border-b border-border bg-surface/80 backdrop-blur-xl sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-sm">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-white"
            >
              <path
                d="M8 1L14.5 6V14.5H10V10H6V14.5H1.5V6L8 1Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {SITE_NAME}
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href="/#simulador"
            className="text-sm font-medium text-white bg-primary hover:bg-primary-hover transition-all px-4 py-2 rounded-lg shadow-sm hover:shadow-md"
          >
            Simular Agora
          </Link>
        </div>
      </nav>
    </header>
  );
}
