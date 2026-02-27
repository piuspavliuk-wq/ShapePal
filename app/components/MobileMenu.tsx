"use client";

import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

export type NavLink = { href: string; label: string };

const MENU_BUTTON_SIZE = 44; // min touch target (px)

export function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex md:hidden items-center justify-center rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 active:bg-zinc-700 transition-colors touch-manipulation"
        style={{ minWidth: MENU_BUTTON_SIZE, minHeight: MENU_BUTTON_SIZE }}
        aria-label="Open menu"
        aria-expanded={open}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {open && mounted &&
        createPortal(
          <>
            <div
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm md:hidden"
              style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
              aria-hidden
              onClick={close}
            />
            <nav
              className="fixed top-0 right-0 bottom-0 z-[101] w-full max-w-[280px] bg-zinc-900 border-l border-zinc-800 shadow-xl md:hidden flex flex-col"
              style={{
                paddingTop: "max(1rem, env(safe-area-inset-top))",
                paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
              }}
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-end px-4 py-3 border-b border-zinc-800">
                <button
                  type="button"
                  onClick={close}
                  className="flex items-center justify-center rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 active:bg-zinc-700 transition-colors touch-manipulation"
                  style={{ minWidth: MENU_BUTTON_SIZE, minHeight: MENU_BUTTON_SIZE }}
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ul className="flex-1 overflow-auto py-3 px-2" role="list">
                {links.length === 0 ? (
                  <li className="px-4 py-3 text-zinc-500 text-sm">No navigation items</li>
                ) : (
                  links.map(({ href, label }, index) => (
                    <li key={`${href}-${index}`}>
                      <Link
                        href={href}
                        onClick={close}
                        className="flex items-center min-h-[52px] px-4 rounded-xl text-[17px] font-medium text-white hover:bg-zinc-800 active:bg-[#00EBC4]/20 transition-colors touch-manipulation border-b border-zinc-800/50 last:border-0"
                      >
                        {label}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </nav>
          </>,
          document.body
        )}
    </>
  );
}
