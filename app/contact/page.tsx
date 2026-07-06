"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSuccess(true);
      setForm({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
    } catch {
      setError("Something went wrong. Please email us directly at john@brew-tech.co.za");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-[#0d1f3c] to-[#0a1628]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#c8a96e] text-xs uppercase tracking-widest font-semibold mb-3">Contact Us</p>
          <h1 className="text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-[#8892b0] text-lg max-w-xl mx-auto">
            Ready to upgrade your brewery instrumentation? Our team is here to help with consultations, quotes and technical support.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Our Details</h2>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-[#c8a96e]/10 p-3 rounded-lg">
                  <MapPin size={20} className="text-[#c8a96e]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Office Address</h4>
                  <p className="text-[#8892b0] text-sm leading-relaxed">
                    BrewTech House<br />
                    125 Curzon Road<br />
                    Bryanston, Johannesburg 2060<br />
                    South Africa
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#c8a96e]/10 p-3 rounded-lg">
                  <Phone size={20} className="text-[#c8a96e]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <a href="tel:+27833020700" className="text-[#8892b0] text-sm hover:text-[#c8a96e] transition-colors">
                    +27 83 30 20 700
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#c8a96e]/10 p-3 rounded-lg">
                  <Mail size={20} className="text-[#c8a96e]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a href="mailto:john@brew-tech.co.za" className="text-[#8892b0] text-sm hover:text-[#c8a96e] transition-colors">
                    john@brew-tech.co.za
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#112240] rounded-xl border border-[#c8a96e]/15 p-6">
              <h3 className="text-white font-semibold mb-3">Areas We Serve</h3>
              <p className="text-[#8892b0] text-sm leading-relaxed">
                We provide equipment, commissioning and support services across sub-Saharan Africa — including South Africa, Namibia, Zimbabwe, Zambia, Uganda, Kenya, Tanzania and Mauritius.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            {success ? (
              <div className="card p-10 text-center">
                <CheckCircle size={48} className="text-[#c8a96e] mx-auto mb-4" />
                <h3 className="text-white text-2xl font-bold mb-3">Message Sent!</h3>
                <p className="text-[#8892b0]">Thank you for reaching out. We&apos;ll be in touch within 1 business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-8 space-y-5">
                <h2 className="text-xl font-bold text-white mb-2">Send Us a Message</h2>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#8892b0] text-xs uppercase tracking-widest mb-2">Name *</label>
                    <input
                      type="text" name="name" value={form.name} onChange={handleChange} required
                      className="w-full bg-[#0a1628] border border-[#c8a96e]/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c8a96e] transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-[#8892b0] text-xs uppercase tracking-widest mb-2">Email *</label>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange} required
                      className="w-full bg-[#0a1628] border border-[#c8a96e]/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c8a96e] transition-colors"
                      placeholder="john@brewery.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#8892b0] text-xs uppercase tracking-widest mb-2">Company</label>
                    <input
                      type="text" name="company" value={form.company} onChange={handleChange}
                      className="w-full bg-[#0a1628] border border-[#c8a96e]/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c8a96e] transition-colors"
                      placeholder="Your Brewery"
                    />
                  </div>
                  <div>
                    <label className="block text-[#8892b0] text-xs uppercase tracking-widest mb-2">Phone</label>
                    <input
                      type="tel" name="phone" value={form.phone} onChange={handleChange}
                      className="w-full bg-[#0a1628] border border-[#c8a96e]/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c8a96e] transition-colors"
                      placeholder="+27 ..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#8892b0] text-xs uppercase tracking-widest mb-2">Subject</label>
                  <select
                    name="subject" value={form.subject} onChange={handleChange}
                    className="w-full bg-[#0a1628] border border-[#c8a96e]/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c8a96e] transition-colors"
                  >
                    <option value="">Select a topic...</option>
                    <option value="product-enquiry">Product Enquiry</option>
                    <option value="quote">Request a Quote</option>
                    <option value="service">Service & Calibration</option>
                    <option value="consultation">Brewery Consultation</option>
                    <option value="training">Training</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#8892b0] text-xs uppercase tracking-widest mb-2">Message *</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} required rows={5}
                    className="w-full bg-[#0a1628] border border-[#c8a96e]/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c8a96e] transition-colors resize-none"
                    placeholder="Tell us about your brewery and what you're looking for..."
                  />
                </div>

                {error && <p className="text-red-400 text-sm">{error}</p>}

                <button
                  type="submit" disabled={loading}
                  className="btn-primary w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
