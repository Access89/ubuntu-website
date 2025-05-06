import React, { useState } from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Investment", href: "#" },
  { name: "Loan", href: "#" },
  { name: "Join Now", href: "#" },
  { name: "Our Team", href: "#" },
  { name: "Support", href: "#" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="Logo" className="h-8 w-auto" />
        </div>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-gray-800 hover:text-blue-700 font-medium">{link.name}</a>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <span className="sr-only">Open menu</span>
          <svg className="h-6 w-6" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        {open && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center md:hidden">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="py-2 text-gray-800 hover:text-blue-700 w-full text-center">{link.name}</a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
