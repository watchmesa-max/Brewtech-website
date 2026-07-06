import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-[#0d1f3c] to-[#0a1628]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#c8a96e] text-xs uppercase tracking-widest font-semibold mb-3">Our Story</p>
          <h1 className="text-5xl font-bold text-white mb-4">About Brewtech CC</h1>
          <p className="text-[#8892b0] text-lg max-w-2xl mx-auto">
            Africa's trusted partner for premium brewery instrumentation and equipment since our founding in Johannesburg.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Brewing Story</h2>
              <p className="text-[#8892b0] leading-relaxed mb-5">
                At Brewtech CC, we are passionate about brewing. Our journey began with a vision to provide the best international brewery equipment in Africa. With a commitment to quality and innovation, we aim to support breweries in their quest for excellence.
              </p>
              <p className="text-[#8892b0] leading-relaxed mb-5">
                Based in Bryanston, Johannesburg, we operate as the authorised African distributor for world-leading brands including Aber Instruments, Countstar and Scanjet Sweden — bringing cutting-edge fermentation science and tank hygiene technology to breweries across the continent.
              </p>
              <p className="text-[#8892b0] leading-relaxed">
                From yeast monitoring and cell analysis to tank cleaning systems, we supply the instrumentation that keeps Africa's great breweries running at their best — backed by hands-on commissioning, calibration and training services.
              </p>
            </div>
            <div className="bg-[#112240] rounded-2xl border border-[#c8a96e]/15 p-8">
              <h3 className="text-[#c8a96e] text-xs uppercase tracking-widest font-semibold mb-6">Our Values</h3>
              <div className="space-y-5">
                {[
                  { title: "Quality", desc: "We only represent world-class brands with proven track records in global brewery operations." },
                  { title: "Expertise", desc: "Deep technical knowledge of fermentation science, instrumentation and brewery processes." },
                  { title: "Service", desc: "Responsive, on-the-ground support from our Johannesburg base across all of Africa." },
                  { title: "Partnership", desc: "Long-term relationships built on trust, reliability and measurable results for our clients." },
                ].map((v) => (
                  <div key={v.title} className="border-b border-[#c8a96e]/10 pb-4 last:border-0">
                    <h4 className="text-white font-semibold mb-1">{v.title}</h4>
                    <p className="text-[#8892b0] text-sm">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-[#112240] rounded-2xl border border-[#c8a96e]/15 p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Work With Us</h2>
            <p className="text-[#8892b0] mb-8 max-w-xl mx-auto">
              Whether you're commissioning a new brewery or upgrading existing instrumentation, we'd love to be part of your project.
            </p>
            <Link href="/contact" className="btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
