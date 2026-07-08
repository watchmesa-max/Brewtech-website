import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Beaker, Zap, Globe, Award, ChevronRight, Phone, Mail } from "lucide-react";

const products = [
  { name: "Aber Compact Yeast Monitor", brand: "Aber Instruments", desc: "Real-time viable biomass measurement for precise fermentation control.", href: "/products" },
  { name: "Aber Compact Adapt Probe", brand: "Aber Instruments", desc: "Adaptable probe system for flexible installation in any vessel.", href: "/products" },
  { name: "Countstar Mira FL Pro", brand: "Countstar", desc: "Advanced fluorescence-based cell analysis for brewery QC labs.", href: "/products" },
  { name: "Scanjet Bio 25", brand: "Scanjet Sweden", desc: "High-efficiency tank cleaning for vessels up to 25,000 litres.", href: "/products" },
  { name: "Aber V350 Touchscreen", brand: "Aber Instruments", desc: "Intuitive touchscreen control panel for the Compact range.", href: "/products" },
  { name: "Hopzoil Majik - Saaz", brand: "Hopzoil", desc: "Premium hop oils for consistent aroma and flavour enhancement.", href: "/products" },
];

const brands = [
  {
    name: "Aber Instruments",
    tagline: "Yeast Monitoring Technology",
    desc: "World-leading manufacturer of biomass sensors and yeast monitors used by major breweries across Africa and beyond.",
    href: "/brands/aber-instruments",
    logo: "/logos/aber-hires.svg",
    logoBg: "bg-white",
  },
  {
    name: "Countstar",
    tagline: "Cell Analysis Systems",
    desc: "Automated cell counting and viability analysis solutions — fast, accurate results for demanding brewery QC environments.",
    href: "/brands/countstar",
    logo: "/logos/countstar-hires.svg",
    logoBg: "bg-white",
  },
  {
    name: "Scanjet Sweden",
    tagline: "Tank Cleaning Solutions",
    desc: "High-impact tank cleaning systems engineered for the brewing industry. Hygienic, efficient, and built to last.",
    href: "/brands/scanjet",
    logo: "/logos/scanjet-hires.png",
    logoBg: "bg-white",
  },
  {
    name: "Hopzoil",
    tagline: "Premium Hop Oils",
    desc: "The number one choice for hop oil additions — consistent aroma and flavour with precision dosing.",
    href: "/products",
    logo: "/logos/hopzoil-hires.png",
    logoBg: "bg-white",
  },
];

const clients = [
  "AB InBev South Africa", "AB InBev Rosslyn", "AB InBev Alrode",
  "AB InBev Namibia", "Heineken S.A.", "Tanzania Breweries Ltd",
  "Nile Breweries Ltd", "Zambian Breweries", "Phoenix Beverages",
  "Delta Beverages", "Kenya Breweries Ltd", "Uganda Breweries",
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "12+", label: "African Countries" },
  { value: "100+", label: "Brewery Clients" },
  { value: "3", label: "Premium Brands" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628]" />
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(ellipse at 20% 50%, rgba(200,169,110,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(17,34,64,0.8) 0%, transparent 50%)"
          }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(rgba(200,169,110,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-32 md:pt-36">
          <div className="inline-flex items-center gap-2 bg-[#c8a96e]/10 border border-[#c8a96e]/30 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-[#c8a96e] rounded-full animate-pulse" />
            <span className="text-[#c8a96e] text-xs font-medium tracking-widest uppercase">
              Africa&apos;s Brewery Instrumentation Specialist
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Elevate Your<br />
            <span className="text-[#c8a96e]">Brewing</span> Experience
          </h1>

          <p className="text-[#8892b0] text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover top-of-the-line brewery instrumentation at Brewtech CC. Authorised African distributors for Aber Instruments, Countstar and Scanjet — trusted by Africa&apos;s leading breweries.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link href="/products" className="btn-primary">
              Browse Products
            </Link>
            <Link href="/contact" className="btn-outline">
              Get a Quote
            </Link>
          </div>

          {/* Stats — desktop: 4 across */}
          <div className="hidden md:grid grid-cols-4 gap-6 max-w-3xl mx-auto pb-16">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-[#c8a96e]">{s.value}</div>
                <div className="text-[#8892b0] text-xs mt-1 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Stats — mobile: 2x2 */}
          <div className="grid grid-cols-2 md:hidden gap-6 max-w-xs mx-auto pb-16">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold text-[#c8a96e]">{s.value}</div>
                <div className="text-[#8892b0] text-xs mt-1 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator — positioned lower, won't overlap stats */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-[#8892b0] opacity-50">
          <div className="w-px h-8 bg-gradient-to-b from-[#c8a96e] to-transparent" />
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c8a96e] text-xs uppercase tracking-widest font-semibold mb-3">Our Principals</p>
            <h2 className="section-heading mb-4">World-Class Brands</h2>
            <p className="section-subheading max-w-xl mx-auto">
              We are the authorised African distributor for three industry-leading manufacturers in brewery instrumentation and cleaning technology.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {brands.map((b) => (
              <Link key={b.name} href={b.href} className="card p-6 group block">
                <div className="h-16 flex items-center justify-center mb-5 bg-white rounded-lg px-4 py-2">
                  <Image
                    src={b.logo}
                    alt={b.name}
                    width={160}
                    height={56}
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <div className="text-[#c8a96e] text-xs uppercase tracking-widest mb-2">{b.tagline}</div>
                <h3 className="text-white text-lg font-bold mb-3">{b.name}</h3>
                <p className="text-[#8892b0] text-sm leading-relaxed mb-5">{b.desc}</p>
                <div className="flex items-center gap-2 text-[#c8a96e] text-sm font-medium">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="divider max-w-7xl mx-auto" />

      {/* PRODUCTS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <p className="text-[#c8a96e] text-xs uppercase tracking-widest font-semibold mb-3">Equipment</p>
              <h2 className="section-heading mb-3">Featured Products</h2>
              <p className="section-subheading max-w-lg">
                Essential equipment for fermentation, cell analysis and tank hygiene.
              </p>
            </div>
            <Link href="/products" className="btn-outline mt-6 md:mt-0">
              View All Products
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p) => (
              <Link key={p.name} href={p.href} className="card p-6 group block">
                <div className="text-[#c8a96e] text-xs uppercase tracking-widest mb-2">{p.brand}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{p.name}</h3>
                <p className="text-[#8892b0] text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex items-center gap-1 text-[#c8a96e] text-sm">
                  <span>Enquire</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="divider max-w-7xl mx-auto" />

      {/* WHY BREWTECH */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c8a96e] text-xs uppercase tracking-widest font-semibold mb-3">Why Us</p>
              <h2 className="section-heading mb-6">Built for African Breweries</h2>
              <p className="section-subheading mb-8">
                At Brewtech CC, we understand the unique challenges of operating a brewery in Africa. Our team combines deep technical expertise with boots-on-the-ground service across the continent — from Cape Town to Cairo.
              </p>
              <div className="space-y-5">
                {[
                  { icon: <Globe size={20} />, title: "Pan-African Reach", desc: "Active clients across 12+ African countries with local support." },
                  { icon: <Zap size={20} />, title: "Technical Expertise", desc: "Commissioning, calibration, training and service on all equipment." },
                  { icon: <Award size={20} />, title: "Authorised Distributor", desc: "Direct relationships with Aber, Countstar and Scanjet principals." },
                  { icon: <Beaker size={20} />, title: "Proven Track Record", desc: "Trusted by AB InBev, Heineken, Tanzania Breweries and more." },
                ].map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <div className="text-[#c8a96e] mt-0.5 shrink-0">{f.icon}</div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{f.title}</h4>
                      <p className="text-[#8892b0] text-sm">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#112240] rounded-2xl p-8 border border-[#c8a96e]/15">
              <h3 className="text-white font-bold text-xl mb-6">Our Brewing Story</h3>
              <p className="text-[#8892b0] leading-relaxed mb-6">
                At Brewtech CC, we are passionate about brewing. Our journey began with a vision to provide the best international brewery equipment in Africa. With a commitment to quality and innovation, we aim to support breweries in their quest for excellence.
              </p>
              <p className="text-[#8892b0] leading-relaxed mb-8">
                From yeast monitoring and cell analysis to tank cleaning systems, we supply the instrumentation that keeps Africa&apos;s great breweries running at their best.
              </p>
              <Link href="/about" className="btn-primary">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-20 px-6 bg-[#060e1c]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c8a96e] text-xs uppercase tracking-widest font-semibold mb-3">Trusted By</p>
            <h2 className="text-2xl font-bold text-white">Africa&apos;s Leading Breweries</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {clients.map((c) => (
              <div
                key={c}
                className="bg-[#112240] border border-[#c8a96e]/10 rounded-full px-5 py-2 text-[#8892b0] text-sm hover:border-[#c8a96e]/30 hover:text-[#c8a96e] transition-all"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c8a96e] text-xs uppercase tracking-widest font-semibold mb-3">What We Do</p>
            <h2 className="section-heading mb-4">Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Brewery Consultation", desc: "Expert advice on instrumentation selection, system design and integration for new and existing breweries.", price: "Price on Request" },
              { title: "Commissioning & Calibration", desc: "On-site installation, commissioning and calibration of all Aber, Countstar and Scanjet equipment.", price: "Price on Request" },
              { title: "Training & Support", desc: "Operator training, troubleshooting and ongoing technical support for your brewery team across Africa.", price: "Price on Request" },
            ].map((s) => (
              <div key={s.title} className="card p-7">
                <h3 className="text-white font-bold text-lg mb-3">{s.title}</h3>
                <p className="text-[#8892b0] text-sm leading-relaxed mb-5">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#c8a96e] text-sm">{s.price}</span>
                  <Link href="/contact" className="text-[#c8a96e] text-sm hover:underline">Book Now →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#112240] to-[#0d1f3c] border border-[#c8a96e]/20 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Elevate Your Brewery?
            </h2>
            <p className="text-[#8892b0] text-lg mb-8 max-w-xl mx-auto">
              Contact our team for a consultation, product demo or quotation. We&apos;ll find the right solution for your operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <a href="tel:+278330020700" className="flex items-center gap-2 text-[#8892b0] hover:text-[#c8a96e] transition-colors">
                <Phone size={16} />
                <span>+27 83 30 20 700</span>
              </a>
              <a href="mailto:john@brew-tech.co.za" className="flex items-center gap-2 text-[#8892b0] hover:text-[#c8a96e] transition-colors">
                <Mail size={16} />
                <span>john@brew-tech.co.za</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
