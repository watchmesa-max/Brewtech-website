import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#060e1c] border-t border-[#c8a96e]/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-bold text-white tracking-widest uppercase">
                Brew<span className="text-[#c8a96e]">Tech</span>
              </span>
              <div className="text-[0.6rem] text-[#8892b0] tracking-[0.3em] uppercase">CC</div>
            </div>
            <p className="text-[#8892b0] text-sm leading-relaxed">
              Premium brewery instrumentation and equipment for Africa. Elevating brewing excellence since day one.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#c8a96e] text-xs uppercase tracking-widest font-semibold mb-5">Navigation</h4>
            <ul className="space-y-3 text-sm text-[#8892b0]">
              {[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: "Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#c8a96e] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-[#c8a96e] text-xs uppercase tracking-widest font-semibold mb-5">Our Brands</h4>
            <ul className="space-y-3 text-sm text-[#8892b0]">
              {[
                { label: "Aber Instruments", href: "/brands/aber-instruments" },
                { label: "Countstar", href: "/brands/countstar" },
                { label: "Scanjet Sweden", href: "/brands/scanjet" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#c8a96e] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#c8a96e] text-xs uppercase tracking-widest font-semibold mb-5">Contact</h4>
            <ul className="space-y-4 text-sm text-[#8892b0]">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#c8a96e] mt-0.5 shrink-0" />
                <span>BrewTech House<br />125 Curzon Road<br />Bryanston, Johannesburg 2060<br />South Africa</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#c8a96e] shrink-0" />
                <a href="tel:+27833020700" className="hover:text-[#c8a96e]">+27 83 30 20 700</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#c8a96e] shrink-0" />
                <a href="mailto:john@brew-tech.co.za" className="hover:text-[#c8a96e]">john@brew-tech.co.za</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider mt-12 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8892b0]">
          <p>© {new Date().getFullYear()} Brewtech CC. All rights reserved.</p>
          <p>Premium Brewery Equipment for Africa</p>
        </div>
      </div>
    </footer>
  );
}
