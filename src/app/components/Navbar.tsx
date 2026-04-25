"use client";

import { useState, useEffect } from "react";
import { ResumeButton } from "./Button";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Systems", href: "#projects" },
    { name: "Stack", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    if(!open) return;

    const close = ()=> setOpen(false);

    window.addEventListener("scroll", close);
    return () => window.removeEventListener("scroll", close);
  }, [open]);

  const handleSideMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/50 backdrop-blur-md shadow-[0_1px_12px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 h-16">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          Divam<span className="text-neutral-600">.</span>
        </Link>
        <ul className="hidden md:flex items-center gap-6 text-sm text-neutral-400">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-white transition">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/Divam Dubey.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
        >
          <ResumeButton />
        </Link>
        <button
          onClick={handleSideMenu}
          className="md:hidden p-2 text-neutral-400 hover:text-white transition"
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <line
              x1="3"
              y1="6"
              x2="21"
              y2="6"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="3"
              y1="12"
              x2="21"
              y2="12"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="3"
              y1="18"
              x2="21"
              y2="18"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <div
        className={`
        md:hidden absolute top-16 left-0 w-full bg-neutral-950/95 backdrop-blur-md
        border-t border-neutral-800
        transition-all duration-300
        z-50
        ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`
          
      }
      onClick={(e)=> e.stopPropagation()}
      >
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col gap-4 text-sm text-neutral-400">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-white transition"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/Divam Dubey.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="md:block pt-2"
          >
            <ResumeButton />
          </Link>
        </div>
      </div>
    </nav>
  );
}
