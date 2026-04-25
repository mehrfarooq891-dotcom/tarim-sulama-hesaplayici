import { Helmet } from "react-helmet-async";
import IrrigationCalculator from "@/components/calculator/IrrigationCalculator";
import { CheckCircle2, Sprout, Droplets, TrendingUp, HelpCircle, ArrowRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Tarım Sulama Hesaplayıcı | Tarlanızın Su İhtiyacını Hesaplayın</title>
        <meta name="description" content="Bitki türü, toprak yapısı ve bölgenize göre doğru sulama miktarını dakikalar içinde öğrenin. Türkiye'nin 81 iline özel veriler." />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
        </div>
        
        <div className="container relative mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--green-light)] text-[var(--green-dark)] font-bold text-sm mb-8 border border-[var(--green-mid)]/20"
          >
            <span>🌾</span> 81 İl Destekleniyor
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 text-5xl md:text-7xl lg:text-8xl font-black tracking-tight max-w-5xl mx-auto leading-[0.95]"
          >
            Tarlanızın Gerçek <span className="text-[var(--green-dark)] italic">Su İhtiyacını</span> Hesaplayın
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mb-12 max-w-2xl text-xl text-stone-600 font-medium"
          >
            Bitki türü, toprak yapısı ve bölgenize göre doğru sulama miktarını dakikalar içinde öğrenin.
          </motion.p>

          {/* Stats badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            {[
              { text: "81 İl Destekleniyor", emoji: "🌾" },
              { text: "10+ Bitki Türü", emoji: "💧" },
              { text: "Anında Sonuç", emoji: "⚡" },
              { text: "FAO Metodolojisi", emoji: "🌿" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-sm border border-stone-100 font-bold text-stone-700">
                <span className="text-xl">{badge.emoji}</span>
                <span>{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TOOL SECTION */}
      <section className="py-20 bg-stone-50" id="hesaplayici">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 px-4">
            <h2 className="text-4xl md:text-5xl font-black mb-4">🌿 Sulama Hesaplama Aracı</h2>
            <p className="text-stone-500 max-w-xl mx-auto">Bilimsel verilerle tarlanız için en verimli sulama planını oluşturun.</p>
          </div>
          
          <IrrigationCalculator />
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-3">
                    <div className="space-y-4">
                      <div className="w-14 h-14 bg-[var(--green-light)] rounded-2xl flex items-center justify-center text-[var(--green-dark)] shadow-sm">
                        <Sprout className="h-7 w-7" />
                      </div>
                      <h3 className="text-2xl font-black tracking-tight">Türk Çiftçisi İçin Tasarlandı</h3>
                      <p className="text-stone-500 leading-relaxed">
                        81 il iklim verisi sisteminizde tam uyumlu çalışır.
                      </p>
                    </div>
        
                    <div className="space-y-4">
                      <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center text-[var(--earth-brown)] shadow-sm">
                        <TrendingUp className="h-7 w-7" />
                      </div>
                      <h3 className="text-2xl font-black tracking-tight">Bilimsel Hesaplama</h3>
                      <p className="text-stone-500 leading-relaxed">
                        FAO Penman-Monteith metodunu kullanarak uluslararası tarım standartlarında sonuçlar üretiriz.
                      </p>
                    </div>
        
                    <div className="space-y-4">
                      <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
                        <Droplets className="h-7 w-7" />
                      </div>
                      <h3 className="text-2xl font-black tracking-tight">Her Cihazda Çalışır</h3>
                      <p className="text-stone-500 leading-relaxed">
                        Tarlada telefonunuzdan saniyeler içinde tüm hesaplamaları yapabilirsiniz.
                      </p>
                    </div>
          </div>
        </div>
      </section>

      {/* BLOG CARDS */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-16">Eğitim ve Rehberler</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { 
                title: "🌾 Buğday Ne Kadar Su İster?", 
                desc: "Buğdayın kardeşlenme ve başaklanma dönemlerindeki su ihtiyacı analizi.", 
                emoji: "🌾",
                link: "/rehber"
              },
              { 
                title: "☀️ Ege'de Yaz Sulama Takvimi 2024", 
                desc: "Sıcaklık artışına göre sulama sıklığınızı nasıl optimize etmelisiniz?", 
                emoji: "☀️",
                link: "/takvim"
              },
              { 
                title: "💧 Damla Sulama ile %40 Tasarruf", 
                desc: "Damla sulama sistemlerinin verimi ve kurulum avantajları hakkında her şey.", 
                emoji: "💧",
                link: "/damla-sulama"
              }
            ].map((card, i) => (
              <div key={i} className="group bg-white p-8 rounded-3xl text-left shadow-sm hover:shadow-xl transition-all border border-stone-100">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">{card.emoji}</div>
                <h3 className="text-2xl font-black mb-4 leading-tight">{card.title}</h3>
                <p className="text-stone-500 mb-6 text-sm leading-relaxed">{card.desc}</p>
                <Button variant="link" className="p-0 h-auto font-black text-[var(--green-dark)] hover:no-underline flex items-center gap-2 group/btn">
                  Devamını Oku <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERT SECTION */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-3xl bg-[var(--green-dark)] p-8 md:p-16 text-white relative">
            <div className="absolute top-8 right-8 opacity-10">
               <Quote className="h-32 w-32 fill-current" />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
              <div className="shrink-0">
                 <img 
                   src="https://i.postimg.cc/wTJgBYRh/ahmet-kaya.png" 
                   alt="Ziraat Mühendisi Ahmet Kaya" 
                   className="w-32 h-32 rounded-2xl object-cover ring-4 ring-white/20"
                 />
              </div>
              <div className="space-y-6 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1">
                   {[1,2,3,4,5].map(s => <Star key={s} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-2xl md:text-3xl font-merriweather italic leading-relaxed">
                   "Suyu tasarruflu kullanmak sadece ekonomik değil — geleceğimizi korumaktır."
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="font-extrabold text-xl uppercase tracking-wider">Ahmet Kaya</p>
                    <p className="text-white/70 font-bold">Kurucu & Ziraat Mühendisi</p>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed max-w-lg">
                    Ankara Üniversitesi Ziraat Fakültesi mezunudur. 20 yılı aşkın süredir Türkiye'nin farklı bölgelerinde çiftçilere sulama danışmanlığı yapmaktadır. FAO Penman-Monteith metodunu baz alan hesaplama sistemini, küçük çiftçilerin de bilimsel veriye ulaşabilmesi için geliştirmiştir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-black">Sıkça Sorulan Sorular</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { 
                q: "Damla sulama ne kadar tasarruf sağlar?", 
                a: "Damla sulama sistemleri, geleneksel salma sulama yöntemlerine kıyasla %30 ile %50 arasında su tasarrufu sağlar. Su doğrudan bitki köküne verildiği için buharlaşma kaybı minimize edilir." 
              },
              { 
                q: "Hangi toprak tipi en az su ister?", 
                a: "Killi topraklar su tutma kapasitesi en yüksek olan topraklardır, bu nedenle sulama aralıkları daha uzun olabilir. Ancak drenaj sorunu yaşamamak için dikkatli olunmalıdır." 
              },
              { 
                q: "Sulama zamanlaması neden önemli?", 
                a: "Günün en sıcak saatlerinde (11:00-16:00) sulama yapmak buharlaşma kaybını %20 artırır. En ideal zamanlama sabah gün doğumu veya akşam güneş battıktan sonrasıdır." 
              },
              { 
                q: "FAO metodu nedir?", 
                a: "FAO Penman-Monteith metodu, bitki su tüketimini (ET) hesaplamak için kullanılan, sıcaklık, nem, rüzgar hızı ve güneş radyasyonu verilerini içeren bilimsel bir standarttır." 
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-2xl border border-stone-100 shadow-sm">
                <AccordionTrigger className="text-lg font-extrabold text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-stone-500 font-medium leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-12 bg-white px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[var(--green-mid)] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
             <div className="absolute inset-0 opacity-10">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
             </div>
             <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               className="relative z-10 space-y-8"
             >
               <h2 className="text-4xl md:text-6xl font-black leading-tight max-w-2xl mx-auto">
                 Tarlasını seven çiftçi suyu doğru kullanır
               </h2>
               <Button onClick={() => document.getElementById('hesaplayici')?.scrollIntoView({ behavior: 'smooth'})} className="bg-white text-[var(--green-dark)] hover:bg-stone-100 h-16 px-10 text-xl font-black rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 leading-none">
                 Hemen Hesapla →
               </Button>
             </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
