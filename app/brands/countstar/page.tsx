import Link from "next/link";
import Image from "next/image";

export default function CountstarPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-[#0d1f3c] to-[#0a1628]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c8a96e] text-xs uppercase tracking-widest font-semibold mb-4">Our Brands</p>
          <Image src="/logos/countstar-hires.svg" alt="Countstar" width={220} height={80} className="h-14 w-auto object-contain mb-6" />
          <h1 className="text-5xl font-bold text-white mb-4">Countstar</h1>
          <p className="text-[#8892b0] text-xl max-w-2xl">
            Automated cell counting and viability analysis — fast, accurate, reliable.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white mb-5">About Countstar</h2>
            <p className="text-[#8892b0] leading-relaxed mb-5">
              Countstar delivers automated cell counting and viability analysis systems designed for the demands of modern brewery QC laboratories. Their fluorescence-based technology delivers rapid, reproducible results — eliminating the subjectivity of manual haemocytometer counting.
            </p>
            <p className="text-[#8892b0] leading-relaxed mb-8">
              Brewtech CC supplies and supports Countstar instrumentation and consumables (slides) to breweries across Africa.
            </p>
            <Link href="/contact" className="btn-primary">Enquire About Countstar</Link>
          </div>

          <div className="space-y-4">
            <div className="card overflow-hidden">
              <Image
                src="/products/countstar-mira.jpeg"
                alt="Countstar Mira FL Pro"
                width={600}
                height={500}
                className="w-full h-72 object-contain bg-white p-4"
              />
              <div className="p-5">
                <h4 className="text-white font-semibold mb-1">Countstar Mira FL Pro</h4>
                <p className="text-[#8892b0] text-sm">Fluorescence-based automated cell counter and viability analyser. Smart Cell Analysis.</p>
              </div>
            </div>
            <div className="card p-5">
              <h4 className="text-white font-semibold mb-1">Countstar Slides (Box of 10)</h4>
              <p className="text-[#8892b0] text-sm">Disposable slides for the Countstar system — available in boxes of 10 and 50.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
