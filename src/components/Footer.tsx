import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <img src="/assets/logo.png" alt="Logo" className="h-8 mb-4" />
          <div className="text-gray-600 text-sm">
            info@ubuntucapitalgh.com<br />
            www.ubuntucapitalgh.com<br />
            P.O. Box CT 4561, Cantonments, Accra Ghana<br />
            +233 302 421429 · +233 507 697966
          </div>
        </div>
        <div>
          <div className="font-semibold mb-2">Quick Links</div>
          <ul className="text-gray-600 space-y-1">
            <li><a href="#" className="hover:text-blue-700">Home</a></li>
            <li><a href="#" className="hover:text-blue-700">Investment</a></li>
            <li><a href="#" className="hover:text-blue-700">Loan</a></li>
            <li><a href="#" className="hover:text-blue-700">About Us</a></li>
            <li><a href="#" className="hover:text-blue-700">Support</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Follow Us</div>
          <div className="flex space-x-4">
            <a href="#"><img src="/assets/facebook.svg" alt="Facebook" className="h-6" /></a>
            <a href="#"><img src="/assets/linkedin.svg" alt="LinkedIn" className="h-6" /></a>
            <a href="#"><img src="/assets/twitter.svg" alt="Twitter" className="h-6" /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 text-xs mt-8">
        &copy; {new Date().getFullYear()} Ubuntu Capital Microfinance. All rights reserved.
      </div>
    </footer>
  );
}