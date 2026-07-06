import Link from "next/link";

const allProducts = [
  { name: "Aber Compact Yeast Monitor", brand: "Aber Instruments", category: "Yeast Monitoring", desc: "Real-time viable biomass measurement for precise fermentation control. The industry standard for large-scale brewery fermentation management." },
  { name: "Aber Compact Adapt Probe", brand: "Aber Instruments", category: "Yeast Monitoring", desc: "Adaptable probe system for flexible installation in any fermentation vessel. Compatible with the full Compact range." },
  { name: "Aber Compact Extension Cables", brand: "Aber Instruments", category: "Accessories", desc: "5M, 10M and 20M extension cables for the Aber Compact probe system." },
  { name: "Aber Compact Perfect Pitch", brand: "Aber Instruments", category: "Yeast Monitoring", desc: "Optimise yeast pitching rates with precision biomass data from the Aber Compact system." },
  { name: "Aber Compact Adapt Yeast Probe", brand: "Aber Instruments", category: "Yeast Monitoring", desc: "Advanced yeast probe for the Compact Adapt system, delivering high-accuracy viable cell measurements." },
  { name: "Aber V350 Compact Touchscreen Panel", brand: "Aber Instruments", category: "Yeast Monitoring", desc: "Intuitive touchscreen control and display panel for the Aber Compact range." },
  { name: "Countstar Mira FL Pro", brand: "Countstar", category: "Cell Analysis", desc: "Advanced fluorescence-based automated cell counting and viability analysis. Fast, accurate results for demanding brewery QC labs." },
  { name: "Scanjet SC 15TW", brand: "Scanjet Sweden", category: "Tank Cleaning", desc: "High-impact rotary tank cleaning machine for vessels up to 15,000 litres. Designed for the brewing and beverage industry." },
  { name: "Scanjet Bio 10", brand: "Scanjet Sweden", category: "Tank Cleaning", desc: "Compact static spray ball for smaller vessels. Hygienic, low-maintenance cleaning for fermenters and bright beer tanks." },
  { name: "Scanjet Bio 25", brand: "Scanjet Sweden", category: "Tank Cleaning", desc: "High-efficiency CIP tank cleaning for vessels up to 25,000 litres. 1.5 inch BSP connection." },
  { name: "Hopzoil Majik - Saaz", brand: "Hopzoil", category: "Hop Products", desc: "Premium Saaz hop oil for consistent lager aroma and flavour. No dry-hopping required." },
  { name: "Hopzoil Pure - Chinook", brand: "Hopzoil", category: "Hop Products", desc: "Pure Chinook varietal hop oil — delivering bold pine and citrus character with precision dosing." },
];

const categories = ["All", ...Array.from(new Set(allProducts.map(p => p.category)))];

export default function ProductsPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-[#0d1f3c] to-[#0a1628]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#c8a96e] text-xs uppercase tracking-widest font-semibold mb-3">Equipment</p>
          <h1 className="text-5xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-[#8892b0] text-lg max-w-xl mx-auto">
            World-class brewery instrumentation, cell analysis and tank cleaning technology — all available through Brewtech CC.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {allProducts.map((p) => (
              <div key={p.name} className="card p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#c8a96e] text-xs uppercase tracking-widest">{p.brand}</span>
                  <span className="bg-[#0a1628] text-[#8892b0] text-xs px-2 py-1 rounded">{p.category}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{p.name}</h3>
                <p className="text-[#8892b0] text-sm leading-relaxed mb-5">{p.desc}</p>
                <Link href="/contact" className="text-[#c8a96e] text-sm hover:underline">
                  Enquire about this product →
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-[#112240] rounded-2xl border border-[#c8a96e]/15 p-10">
            <h2 className="text-2xl font-bold text-white mb-3">Need a Custom Configuration?</h2>
            <p className="text-[#8892b0] mb-6 max-w-lg mx-auto">
              Our team can advise on the right instrumentation package for your specific brewery setup and capacity.
            </p>
            <Link href="/contact" className="btn-primary">Speak to an Expert</Link>
          </div>
        </div>
      </section>
    </>
  );
}
