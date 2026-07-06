import Link from "next/link";

const posts = [
  {
    title: "Explore the Best Brewery Equipment for African Breweries",
    excerpt: "Are you a brewery owner or enthusiast looking to source top-of-the-line equipment for your African brewery? Look no further than Brewtech CC — your specialist partner for world-class instrumentation across the continent.",
    readTime: "2 min read",
    slug: "best-brewery-equipment-africa",
  },
  {
    title: "Mastering the Art of Brewery Equipment Selection",
    excerpt: "Brewing beer is both an art and a science, and selecting the right brewery equipment is crucial to the success of your brewing operation. In this guide we walk through the key instrumentation decisions every brewery manager faces.",
    readTime: "2 min read",
    slug: "brewery-equipment-selection",
  },
  {
    title: "Top Brewery Equipment to Elevate Your Beer Production",
    excerpt: "Crafting the perfect brew requires not only skill and passion but also the right brewery equipment. Whether you are a seasoned brewmaster or just starting out, the right instrumentation makes all the difference.",
    readTime: "2 min read",
    slug: "top-brewery-equipment",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-[#0d1f3c] to-[#0a1628]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#c8a96e] text-xs uppercase tracking-widest font-semibold mb-3">Insights</p>
          <h1 className="text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-[#8892b0] text-lg max-w-xl mx-auto">
            Brewery instrumentation insights, product guides and industry news from the Brewtech CC team.
          </p>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.slug} className="card p-7 flex flex-col">
              <span className="text-[#c8a96e] text-xs uppercase tracking-widest mb-3">{post.readTime}</span>
              <h2 className="text-white font-bold text-xl mb-3 leading-snug">{post.title}</h2>
              <p className="text-[#8892b0] text-sm leading-relaxed flex-1 mb-5">{post.excerpt}</p>
              <Link href="/contact" className="text-[#c8a96e] text-sm hover:underline">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
