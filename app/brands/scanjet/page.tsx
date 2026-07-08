import Link from "next/link";
import Image from "next/image";

export default function ScanjetPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-[#0d1f3c] to-[#0a1628]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c8a96e] text-xs uppercase tracking-widest font-semibold mb-4">Our Brands</p>
          <Image src="/logos/scanjet-hires.png" alt="Scanjet Sweden" width={220} height={80} className="h-12 w-auto object-contain mb-6" />
          <h1 className="text-5xl font-bold text-white mb-4">Scanjet Sweden</h1>
          <p className="text-[#8892b0] text-xl max-w-2xl">
            High-performance tank cleaning solutions engineered for the brewing and beverage industry.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white mb-5">About Scanjet</h2>
            <p className="text-[#8892b0] leading-relaxed mb-5">
              Scanjet is a Swedish manufacturer of high-impact tank cleaning machines and static spray balls for the brewing, food and beverage industries. Their products are engineered for maximum cleaning efficiency, reduced water and chemical consumption, and long-term durability.
            </p>
            <p className="text-[#8892b0] leading-relaxed mb-8">
              Brewtech CC supplies and supports the Scanjet Bio range for clean-in-place (CIP) applications in African breweries.
            </p>
            <Link href="/contact" className="btn-primary">Enquire About Scanjet</Link>
          </div>

          <div className="space-y-4">
            {[
              { name: "Scanjet SC 15TW", desc: "High-impact rotary tank cleaning machine for vessels up to 15,000L." },
              { name: "Scanjet Bio 10", desc: "Compact static spray ball for smaller fermenters and bright beer tanks." },
              { name: "Scanjet Bio 25", desc: "CIP tank cleaning for vessels up to 25,000L. 1½\" BSP connection." },
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
