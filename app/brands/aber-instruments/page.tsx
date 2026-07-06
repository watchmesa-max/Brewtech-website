import Link from "next/link";

export default function AberPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-[#0d1f3c] to-[#0a1628]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c8a96e] text-xs uppercase tracking-widest font-semibold mb-3">Our Brands</p>
          <h1 className="text-5xl font-bold text-white mb-4">Aber Instruments</h1>
          <p className="text-[#8892b0] text-xl max-w-2xl">
            World-leading yeast monitoring technology — trusted by major breweries across Africa and globally.
          </p>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white mb-5">About Aber Instruments</h2>
            <p className="text-[#8892b0] leading-relaxed mb-5">
              Aber Instruments is a world leader in the development and manufacture of radio frequency (RF) capacitance sensors for measuring biomass in fermentation and cell culture processes. Their technology is the gold standard for real-time viable yeast monitoring in breweries worldwide.
            </p>
            <p className="text-[#8892b0] leading-relaxed mb-8">
              Brewtech CC is the authorised African distributor for Aber Instruments — supplying, commissioning, calibrating and supporting the full Aber product range across sub-Saharan Africa.
            </p>
            <Link href="/contact" className="btn-primary">Enquire About Aber Products</Link>
          </div>
          <div className="space-y-4">
            {[
              { name: "Aber Compact Yeast Monitor", desc: "Real-time viable biomass measurement for fermentation control." },
              { name: "Aber Compact Adapt Probe", desc: "Flexible probe for any fermentation vessel configuration." },
              { name: "Aber Compact Perfect Pitch", desc: "Precision yeast pitching optimisation." },
              { name: "Aber Compact Adapt Yeast Probe", desc: "High-accuracy viable cell measurement probe." },
              { name: "Aber V350 Touchscreen Panel", desc: "Intuitive control and monitoring interface." },
              { name: "Extension Cables (5M/10M/20M)", desc: "Full range of Aber Compact extension cables." },
            ].map((p) => (
              <div key={p.name} className="card p-5">
                <h4 className="text-white font-semibold mb-1">{p.name}</h4>
                <p className="text-[#8892b0] text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
