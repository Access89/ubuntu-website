import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "@/assets/images/header-logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Investments", href: "#" },
  { label: "Loans", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Our Team", href: "#" },
  { label: "Support", href: "#" },
];

export default function Header() {
  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Ubuntu Capital Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-blue-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div></div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 w-6 text-gray-700" />
            </SheetTrigger>
            <SheetContent side="left" className="w-1/2 min-w-64 p-6  bg-white">
              <div className="mb-4">
                <img src={logo} alt="Ubuntu Capital Logo" className="h-12" />
              </div>
              <nav className="flex flex-col space-y-4 text-gray-700 font-medium">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="hover:text-blue-600 font-light transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
