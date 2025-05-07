import { Icon } from "@iconify/react";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Investment", href: "#" },
  { label: "Loan", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Support", href: "#" },
];

const socialLinks = [
  { icon: "ri:facebook-fill", href: "#" },
  { icon: "ri:twitter-fill", href: "#" },
  { icon: "ri:linkedin-box-fill", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t py-8">
      <div className="max-w-7xl mx-auto py-16 border-b border-white/50 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Logo */}
        <div className="col-span-1">
          <img
            src="src/assets/logo.png"
            alt="Logo"
            className="h-12 sm:h-16 mb-4"
          />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 text-sm col-span-1 sm:col-span-2">
          <div>
            <p>info@ubuntucapitalgh.com</p>
            <p>www.ubuntucapitalgh.com</p>
          </div>
          <div>
            <p>P.O. Box CT 4561, Cantonments, Accra Ghana</p>
            <p># 23 1st Freetown Link Okponglo, Accra, Ghana</p>
          </div>
          <div>+233 302 421429 · +233 507 697966</div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-2">Quick Links</h4>
          <ul className="space-y-1 text-[#F5F5F5] text-sm">
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="font-semibold text-white mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            {socialLinks.map(({ icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                className="hover:text-blue-500 p-3 border border-white/30 rounded-full transition-colors duration-200"
              >
                <Icon icon={icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center font-light text-xs text-[#E4E5E7]/60 mt-6 px-4">
        &copy; {new Date().getFullYear()} Ubuntu Capital Microfinance. All
        rights reserved.
      </div>
    </footer>
  );
}
