import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Buğday Sulaması Ne Zaman Yapılır? 2026 Rehberi",
    slug: "bugday-sulamasi-ne-zaman-yapilir-2026-rehberi",
    excerpt: "Buğday tarımında verimi belirleyen en kritik faktör doğru zamanda yapılan sulamadır. FAO metodolojisi ile modern buğday sulama tavsiyeleri...",
    date: "3 Mayıs 2026",
    author: "Ahmet Kaya",
    category: "Bitki Besleme",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Blog() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Blog | Tarım Sulama Hesaplayıcı</title>
        <meta name="description" content="Tarım ve sulama teknolojileri hakkında güncel bilgiler, uzman rehberleri ve verimlilik artırıcı ipuçları." />
      </Helmet>

      {/* Header */}
      <section className="bg-stone-50 py-20 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-black mb-6">Tarım & Sulama <span className="text-[var(--green-mid)]">Blog</span></h1>
          <p className="text-xl text-stone-500 max-w-2xl mx-auto font-medium">
            Tarlanızın verimini artıracak bilimsel makaleler, güncel rehberler ve sektörden haberler.
          </p>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.slug}`}
                className="group flex flex-col bg-white border-2 border-stone-100 rounded-[32px] overflow-hidden hover:border-[var(--green-mid)] hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4 text-xs font-bold text-[var(--green-dark)] uppercase tracking-widest">
                    <span className="bg-[var(--green-light)] px-3 py-1 rounded-full">{post.category}</span>
                  </div>
                  <h2 className="text-2xl font-black mb-4 leading-tight group-hover:text-[var(--green-dark)] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-stone-50 text-stone-400 text-xs font-bold">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-[var(--green-mid)]" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2 group-hover:text-[var(--green-mid)] transition-colors">
                      Oku <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
