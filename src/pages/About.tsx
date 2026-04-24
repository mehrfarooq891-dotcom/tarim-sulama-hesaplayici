import { Helmet } from "react-helmet-async";
import { Users, Target, ShieldCheck, Award, Zap, Ruler } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Hakkımızda | Tarım Sulama Hesaplayıcı</title>
        <meta name="description" content="Tarım Sulama Hesaplayıcı projesinin arkasındaki vizyon, Ahmet Kaya'nın hikayesi ve bilimsel metodolojimiz." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-stone-50 py-20 border-b">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            Hakkımızda
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600 max-w-2xl mx-auto"
          >
            Türk tarımını bilimsel verilerle modernize etmek ve su kaynaklarımızı korumak için yola çıktık.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white -mt-10 relative z-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "81 İl", sub: "Destekleniyor", icon: <Target className="h-5 w-5" /> },
              { label: "10+ Bitki", sub: "Türüne Özel", icon: <Users className="h-5 w-5" /> },
              { label: "18 Yıl", sub: "Saha Deneyimi", icon: <Award className="h-5 w-5" /> },
              { label: "FAO", sub: "Metodolojisi", icon: <Zap className="h-5 w-5" /> },
            ].map((stat, i) => (
              <div key={i} className="bg-white border-2 border-stone-100 p-6 rounded-2xl text-center shadow-sm">
                <div className="flex justify-center text-[var(--green-mid)] mb-2 font-bold">{stat.icon}</div>
                <p className="text-3xl font-black text-[var(--green-dark)]">{stat.label}</p>
                <p className="text-xs font-bold text-stone-500 uppercase tracking-widest">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio / Founder Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[var(--green-light)] rounded-3xl -z-10"></div>
              <img 
                src="https://i.postimg.cc/wTJgBYRh/ahmet-kaya.png" 
                alt="Ahmet Kaya" 
                className="w-full aspect-square object-cover rounded-[40px] shadow-2xl border-8 border-white"
              />
              <div className="absolute -bottom-6 -right-6 bg-[var(--green-dark)] text-white p-6 rounded-2xl shadow-xl">
                 <p className="font-black text-2xl">Ahmet Kaya</p>
                 <p className="text-sm opacity-80 font-bold">Ziraat Mühendisi</p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-black">Misyonumuz ve Hikayemiz</h2>
              <div className="space-y-6 text-lg leading-relaxed text-stone-700 font-medium">
                <p>
                  Ahmet Kaya, Ankara Üniversitesi Ziraat Fakültesi mezunudur. 18 yıldır Türkiye'nin farklı bölgelerinde çiftçilere sulama danışmanlığı yapmaktadır.
                </p>
                <p>
                  FAO Penman-Monteith metodunu baz alan hesaplama sistemini, küçük çiftçilerin de bilimsel veriye ulaşabilmesi için geliştirmiştir. Bu proje, tecrübe ile bilimi tek bir noktada buluşturma hedefinin bir sonucudur.
                </p>
              </div>
              <div className="bg-[var(--green-light)] p-8 rounded-3xl border-2 border-[var(--green-mid)]/20 shadow-sm">
                 <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-[var(--green-dark)]" /> Temel Misyon
                 </h3>
                 <p className="text-[var(--green-dark)] font-bold leading-relaxed">
                   "Türk çiftçisini bilimsel verilerle güçlendirmek ve su tasarrufunu yaygınlaştırmak."
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Methodology */}
      <section className="py-24 bg-stone-50 border-t">
        <div className="container mx-auto px-4 max-w-5xl">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4">Güven ve Metodoloji</h2>
              <p className="text-stone-500 font-bold">Hesaplamalarımızda hangi standartlara sadık kalıyoruz?</p>
           </div>
           
           <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-6 p-8 bg-white rounded-3xl shadow-sm border border-stone-100">
                 <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-6 w-6 text-blue-600" />
                 </div>
                 <div className="space-y-2">
                    <h4 className="text-xl font-black">Ziraat Mühendisleri Odası Üyesi</h4>
                    <p className="text-sm text-stone-500 leading-relaxed font-medium">
                       Sistemimiz, mesleki standartlara ve etik kurallara tam uyumlu ziraat mühendisleri tarafından denetlenmektedir.
                    </p>
                 </div>
              </div>

              <div className="flex gap-6 p-8 bg-white rounded-3xl shadow-sm border border-stone-100">
                 <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
                    <Ruler className="h-6 w-6 text-orange-600" />
                 </div>
                 <div className="space-y-2">
                    <h4 className="text-xl font-black">FAO Onaylı Hesaplama Metodu</h4>
                    <p className="text-sm text-stone-500 leading-relaxed font-medium">
                       Birleşmiş Milletler Gıda ve Tarım Örgütü (FAO) tarafından kabul edilen Penman-Monteith denklem setini kullanıyoruz.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-white text-center border-t">
        <div className="container mx-auto px-4 max-w-2xl">
           <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">Gelecek nesillere daha verimli bir toprak bırakalım.</h2>
           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
             <a href="/" className="inline-block bg-[var(--green-dark)] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl shadow-green-900/20">
                Hesaplama Aracına Dön
             </a>
           </motion.div>
        </div>
      </section>
    </>
  );
}

