"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hash, setHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    setHash(typeof window !== "undefined" ? window.location.hash : "");
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navItems = [
    { label: "Tentang", href: "/about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  // Close on route change
  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>
      <nav className="backdrop-blur-md bg-black/60 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-white font-bold text-lg transition-colors hover:text-emerald-400">
              Ayu Safitri
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((it) => {
              const isActive = it.href.startsWith("#") ? hash === it.href : pathname === it.href;
              return (
                <a
                  key={it.href}
                  href={it.href}
                  className={`text-gray-300 hover:text-white hover:underline underline-offset-4 transition-all px-1 py-1 rounded ${
                    isActive ? "text-emerald-400 font-semibold border-b-2 border-emerald-500" : ""
                  } neon-glow-hover`}
                >
                  {it.label}
                </a>
              );
            })}

            <Link href="#contact" className="ml-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full text-sm shadow-md hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all">
              I'm Ready For Job
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center">
            <button aria-label="Toggle menu" onClick={() => setIsOpen((s) => !s)} className="p-2 rounded-md text-gray-200 hover:text-white hover:bg-white/3 transition-all">
              {isOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer + overlay: render only when open, hidden on lg */}
      {isOpen && (
        <>
          <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity" />

          <aside className="fixed top-0 right-0 h-full w-[80%] max-w-xs bg-black/95 backdrop-blur-md transform z-50 transition-transform duration-300 lg:hidden">
            <div className="p-6 pt-6 flex items-center justify-between">
              <Link href="/" className="text-white font-bold text-lg">
                Ayu Safitri
              </Link>
              <button aria-label="Close menu" onClick={() => setIsOpen(false)} className="p-2 rounded-md text-gray-200 hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="p-6 pt-4 flex flex-col gap-6">
              {navItems.map((it) => (
                <a key={it.href} href={it.href} onClick={() => setIsOpen(false)} className="text-gray-200 text-lg hover:text-white transition-colors">
                  {it.label}
                </a>
              ))}

              <Link href="#contact" onClick={() => setIsOpen(false)} className="mt-4 inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full shadow-md transition-all">
                I'm Ready For Job
              </Link>
            </div>
          </aside>
        </>
      )}
    </header>
  );
}
