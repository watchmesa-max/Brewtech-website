import Link from "next/link";

const services = [
  {
    title: "Brewery Consultation",
    desc: "Expert advice on instrumentation selection, system design and integration. We assess your current setup, identify gaps and recommend the right solutions for your specific operation and capacity.",
    deliverables: ["Site assessment", "Equipment recommendations", "ROI analysis", "Integration planning"],
    price: "Price on Request",
  },
  {
    title: "Commissioning & Installation",
    desc: "On-site installation and commissioning of all Aber, Countstar and Scanjet equipment. Our technicians ensure every instrument is correctly installed, calibrated and ready for production.",
    deliverables: ["Physical installation", "System calibration", "Integration with SCADA/BMS", "Acceptance testing"],
    price: "Price on Request",
  },
  {
    title: "Calibration Services",
    desc: "Regular calibration of Aber yeast monitors and Countstar cell counters to maintain measurement accuracy. Includes certificate of calibration and service report.",
    deliverables: ["In-situ or lab calibration", "Calibration certificate", "Service report", "Recommended service intervals"],
    price: "Price on Request",
  },
  {
    title: "Operator Training",
    desc: "Comprehensive training for your brewery team on the operation, maintenance and troubleshooting of all Brewtech-supplied instrumentation.",
    deliverables: ["On-site training sessions", "Operating manuals", "Troubleshooting guides", "Refresher training available"],
    price: "Price on Request",
  },
  {
    title: "Service & Repair",
    desc: "Fault diagnosis and repair of Aber Compact, Countstar and Scanjet equipment. We carry common spare parts and can source manufacturer spares directly.",
    deliverables: ["Fault diagnosis", "Repair or component replacement", "Post-repair testing", "Service report"],
    price: "Price on Request",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-[#0d1f3c] to-[#0a1628]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#c8a96e] text-xs uppercase tracking-widest font-semibold mb-3">What We Do</p>
          <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-[#8892b0] text-lg max-w-xl mx-auto">
            Beyond equipment supply — we partner with your brewery for the long term, from consultation through to ongoing service and support.
          </p>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {services.map((s) => (
            <div key={s.title} className="card p-8 grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-2">
                <h2 className="text-white font-bold text-2xl mb-3">{s.title}</h2>
                <p className="text-[#8892b0] leading-relaxed mb-5">{s.desc}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {s.deliverables.map((d) => (
                    <li key={d} className="text-[#8892b0] text-sm flex items-center gap-2">
                      <span className="text-[#c8a96e]">✓</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-start md:items-end gap-4">
                <span className="text-[#c8a96e] font-semibold">{s.price}</span>
                <Link href="/contact" className="btn-primary text-sm">Book Now</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
