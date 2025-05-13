"use client";

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "@/assets/images/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Investments", href: "/investments" },
  { label: "Loans", href: "/loans" },
  { label: "About Us", href: "/about" },
  { label: "Support", href: "/support" },
];

export default function Header() {
  const [showBorder, setShowBorder] = useState(false);
  const pathname = useLocation().pathname;

  useEffect(() => {
    const handleScroll = () => {
      setShowBorder(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed z-50 top-0 bg-white transition-shadow duration-200 ${
        showBorder ? "border-b border-gray-200" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-0 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Ubuntu Capital Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-base font-normal text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`transition-colors ${
                pathname === link.href
                  ? "text-[#225EA6] font-[500]"
                  : "hover:text-blue-600 font-[300]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div></div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 w-6 text-gray-700" />
            </SheetTrigger>
            <SheetContent side="left" className="w-1/2 min-w-64 p-6 bg-white">
              <div className="mb-4">
                <img src={logo} alt="Ubuntu Capital Logo" className="h-12" />
              </div>
              <nav className="flex flex-col space-y-4 text-gray-700 font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`transition-colors duration-300 ${
                      pathname === link.href
                        ? "text-[#225EA6] font-medium"
                        : "hover:text-blue-600 font-light"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
