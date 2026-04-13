import { Helmet } from "react-helmet-async";
import IrrigationCalculator from "@/components/calculator/IrrigationCalculator";
import { CheckCircle2, Sprout, Droplets, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Tarım Sulama Hesaplayıcı | Bitki Su İhtiyacını Hesapla</title>
        <meta name="description" content="Tarlanızın su ihtiyacını saniyeler içinde hesapla. Bitki türü, toprak tipi ve bölgeye göre kişiselleştirilmiş sulama planı." />
        <meta name="keywords" content="sulama hesaplama, bitki su ihtiyacı, damla sulama hesaplayıcı, tarımsal sulama" />
        <link rel="canonical" href="https://tarimsulama.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Tarım Sulama Hesaplayıcı",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "Web",
            "offers": {"@type": "Offer", "price": "0", "priceCurrency": "TRY"},
            "description": "Türkiye'deki çiftçiler için bitki türü, toprak tipi ve bölgeye göre sulama hesaplama aracı.",
            "url": "https://tarimsulama.com"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--green-light)] to-white py-20 lg:py-32">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="wheat" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 10c0 5-5 10-5 10s5-5 5-10z" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#wheat)" />
          </svg>
        </div>
        
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="mb-6 text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl max-w-4xl mx-auto leading-[0.9]">
            Tarlanızın Gerçek Su İhtiyacını <span className="text-[var(--green-mid)]">Hesapla</span>
          </h1>
          <h2 className="mx-auto mb-10 max-w-2xl text-xl text-[var(--text-muted)] sm:text-2xl font-normal">
            Bitki türü, toprak yapısı ve bölgenize göre doğru sulama miktarını dakikalar içinde öğrenin.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 rounded-full bg-white shadow-sm border px-6 py-3">
              <span className="text-2xl">🌾</span>
              <span className="font-bold text-[var(--green-dark)]">81 İl Destekleniyor</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white shadow-sm border px-6 py-3">
              <span className="text-2xl">💧</span>
              <span className="font-bold text-[var(--green-dark)]">10+ Bitki Türü</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white shadow-sm border px-6 py-3">
              <span className="text-2xl">⚡</span>
              <span className="font-bold text-[var(--green-dark)]">Anında Sonuç</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Calculator Section */}
      <section className="container mx-auto px-4 py-16 -mt-12">
        <IrrigationCalculator />
      </section>

      {/* Trust Section */}
      <section className="bg-white py-24 border-t">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--green-light)] text-[var(--green-mid)]">
                <Sprout className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">Türk Çiftçisi İçin Tasarlandı</h3>
              <p className="text-[var(--text-muted)]">
                Türkiye'nin 81 ili ve 7 coğrafi bölgesinin iklim verileri sistemimizde yüklüdür.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">Bilimsel Hesaplama</h3>
              <p className="text-[var(--text-muted)]">
                FAO Penman-Monteith metoduna dayalı algoritmamız ile en doğru sonuçları sunuyoruz.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                <Droplets className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">Her Cihazda Çalışır</h3>
              <p className="text-[var(--text-muted)]">
                Tarlada, traktörde veya evde; telefonunuzdan saniyeler içinde hesaplama yapabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Blog Section */}
      <section className="bg-stone-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-4xl font-black text-center">Bilgi Kütüphanesi</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { 
                title: "Buğday Ne Kadar Su İster? Tam Rehber", 
                desc: "Buğdayın kardeşlenme ve başaklanma dönemlerindeki su ihtiyacını öğrenin.", 
                link: "/rehber", 
                emoji: "🌾" 
              },
              { 
                title: "Ege'de Yaz Sulama Takvimi 2024", 
                desc: "Ege bölgesindeki sıcaklık artışına göre sulama sıklığınızı nasıl ayarlamalısınız?", 
                link: "/takvim", 
                emoji: "☀️" 
              },
              { 
                title: "Damla Sulama ile %40 Su Tasarrufu", 
                desc: "Damla sulama sistemlerinin kurulum maliyeti ve geri dönüş süresi analizi.", 
                link: "/damla-sulama", 
                emoji: "💧" 
              },
            ].map((card, i) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100">
                <div className="h-48 bg-[var(--green-light)] flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                  {card.emoji}
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-xl font-bold leading-tight">{card.title}</h3>
                  <p className="text-sm text-[var(--text-muted)] line-clamp-2">{card.desc}</p>
                  <a href={card.link} className="inline-block font-bold text-[var(--green-mid)] hover:underline">
                    Devamını Oku →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
