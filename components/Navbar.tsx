"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const brands = [
  { name: "Aber Instruments", href: "/brands/aber-instruments" },
  { name: "Countstar", href: "/brands/countstar" },
  { name: "Scanjet Sweden", href: "/brands/scanjet" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a1628]/95 backdrop-blur-md border-b border-[#c8a96e]/10 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/brewtech-final-dark.svg"
            alt="BrewTech"
            width={260}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8892b0]">
          <Link href="/" className="hover:text-[#c8a96e]">Home</Link>

          {/* Brands Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setBrandsOpen(true)}
            onMouseLeave={() => setBrandsOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#c8a96e]">
              Brands <ChevronDown size={14} />
            </button>
            {brandsOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-[#112240] border border-[#c8a96e]/20 rounded-lg shadow-2xl py-2">
                {brands.map((b) => (
                  <Link
                    key={b.href}
                    href={b.href}
                    className="block px-4 py-2.5 text-[#8892b0] hover:text-[#c8a96e] hover:bg-[#c8a96e]/5 transition-colors"
                  >
                    {b.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/products" className="hover:text-[#c8a96e]">Products</Link>
          <Link href="/services" className="hover:text-[#c8a96e]">Services</Link>
          <Link href="/about" className="hover:text-[#c8a96e]">About</Link>
          <Link href="/blog" className="hover:text-[#c8a96e]">Blog</Link>
          <Link href="/contact" className="btn-primary text-xs">
            Get in Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#c8a96e]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a1628]/98 border-t border-[#c8a96e]/10 px-6 py-6 flex flex-col gap-5 text-[#8892b0]">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-[#c8a96e]">Home</Link>
          <div className="flex flex-col gap-2">
            <span className="text-[#c8a96e] text-xs uppercase tracking-widest">Brands</span>
            {brands.map((b) => (
              <Link key={b.href} href={b.href} onClick={() => setIsOpen(false)} className="pl-3 hover:text-[#c8a96e]">
                {b.name}
              </Link>
            ))}
          </div>
          <Link href="/products" onClick={() => setIsOpen(false)} className="hover:text-[#c8a96e]">Products</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-[#c8a96e]">Services</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-[#c8a96e]">About</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-[#c8a96e]">Blog</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="btn-primary text-center mt-2">
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
}
