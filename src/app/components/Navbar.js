'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'ABOUT US' },
  { href: '/menu', label: 'MENU' },
  { href: '/reservations', label: 'RESERVATIONS' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: '#c8df90' }} className="px-6 md:px-10 py-5">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="text-black font-black text-lg md:text-xl tracking-tight leading-none no-underline"
          style={{ textDecoration: 'none' }}
        >
          CRESPO MEXICAN FOOD TRUCK
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive =
              href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  style={{ textDecoration: 'none' }}
                  className={`text-sm font-semibold tracking-widest text-black pb-1 transition-all ${
                    isActive
                      ? 'border-b-2 border-black'
                      : 'hover:border-b-2 hover:border-black'
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-black" />
          <span className="block w-6 h-0.5 bg-black" />
          <span className="block w-6 h-0.5 bg-black" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 list-none m-0 p-0 pb-2">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                style={{ textDecoration: 'none' }}
                className="text-sm font-semibold tracking-widest text-black"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
