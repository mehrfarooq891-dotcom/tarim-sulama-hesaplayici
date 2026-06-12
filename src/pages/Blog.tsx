// Changelog: Added "Damla Sulama Sistemini Kendiniz Nasıl Kurarsınız?" DIY installation guide (damla sulama kurulum target keyword) with step-by-step setup, material list, and detailed cost analysis
import React from "react";
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
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Domates İçin Damla Sulama Rehberi",
    slug: "domates-icin-damla-sulama-rehberi",
    excerpt: "Domates yetiştiriciliğinde su yönetimi, meyve kalitesini ve çatlamayı doğrudan etkiler. Fide döneminden hasada profesyonel sulama stratejileri...",
    date: "5 Mayıs 2026",
    author: "Ahmet Kaya",
    category: "Sulama Teknikleri",
    image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Mısır Sulama Takvimi 2026",
    slug: "misir-sulama-takvimi-2026",
    excerpt: "Yüksek verimli mısır hasadı için kritik büyüme evrelerine göre sulama zamanlaması. V6-V10'dan tane dolumuna profesyonel takvim rehberi...",
    date: "6 Mayıs 2026",
    author: "Ahmet Kaya",
    category: "Tarla Bitkileri",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Türkiye'de Damla Sulama Kurulum Maliyeti 2026",
    slug: "turkiyede-damla-sulama-kurulum-maliyeti-2026",
    excerpt: "2026 yılında Türkiye genelinde dönüm başına damla sulama maliyeti ne kadar? Şehre göre güncel fiyat karşılaştırmaları, adım adım kurulum süreci ve devletin %50 hibe programları...",
    date: "9 Mayıs 2026",
    author: "Mehmet Çelik",
    category: "Sulama Maliyetleri",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Toprak Tipine Göre Sulama Miktarı Nasıl Hesaplanır?",
    slug: "toprak-tipine-gore-sulama-miktari-nasil-hesaplanir",
    excerpt: "Killi, kumlu ve tınlı toprakların su tutma kapasiteleri nasıldır? Toprak tipine göre doğru sulama miktarı hesaplama yöntemleri, bilimsel formüller ve pratik hesaplama örnekleri...",
    date: "10 Mayıs 2026",
    author: "Dr. Elif Yılmaz",
    category: "Toprak Bilgisi",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Zeytin Ağacı Sulama Rehberi — Mevsime Göre Su İhtiyacı",
    slug: "zeytin-agaci-sulama-rehberi-mevsime-gore-su-ihtiyaci",
    excerpt: "Yaz, kış ve hasat dönemi zeytin sulama planlaması. Zeytincilikte en yüksek yağ kalitesi ve yüksek verim için kritik damla sulama tavsiyeleri...",
    date: "12 Mayıs 2026",
    author: "Zir. Müh. Ahmet Kaya",
    category: "Ağaç Sulama",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Kuraklık Döneminde Çiftçi Ne Yapmalı? Sulama Stratejileri",
    slug: "kuraklik-doneminde-ciftci-ne-yapmali-sulama-stratejileri",
    excerpt: "İklim krizinin ve azalan su kaynaklarının gölgesinde modern tarım için hayati rehber. Kuraklığa karşı su tasarrufu, damla sulama yöntemleri ve dayanıklı bitki seçimi...",
    date: "13 Mayıs 2026",
    author: "Zir. Müh. Ahmet Kaya",
    category: "Sulama Stratejileri",
    image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Patates Sulama Miktarı ve Takvimi: Bilimsel Sulama Rehberi",
    slug: "patates-sulama-miktari-ve-takvimi",
    excerpt: "Patates yetiştiriciliğinde yüksek verim ve ideal yumru kalitesi elde etmenin tüm detayları. Büyüme dönemlerine göre günlük su ihtiyacı ve modern sulama yöntemleri...",
    date: "14 Mayıs 2026",
    author: "Zir. Müh. Ahmet Kaya",
    category: "Yumru Tarımı",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "Ayçiçeği Sulama Rehberi 2026",
    slug: "aycicegi-sulama-rehberi-2026",
    excerpt: "Ayçiçeği tarımında çimlenmeden hasada kadar bilimsel sulama takvimi. Türkiye iklimi koşullarında maksimum yağ oranı ve verim için en etkili sulama teknikleri...",
    date: "15 Mayıs 2026",
    author: "Zir. Müh. Ahmet Kaya",
    category: "Tarla Bitkileri",
    image: "https://images.unsplash.com/photo-1595971294624-80bcf9d1eb21?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    title: "FAO Penman-Monteith Metodu Nedir? Çiftçi İçin Basit Anlatım",
    slug: "fao-penman-monteith-metodu-nedir",
    excerpt: "Dünya standartlarında sulama hesabı nasıl yapılır? FAO sulama metodu olan Penman-Monteith denkleminin mantığını ve tarlanızda nasıl kullanacağınızı öğrenin...",
    date: "18 Mayıs 2026",
    author: "Zir. Müh. Ahmet Kaya",
    category: "Sulama Bilimi",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    title: "Yağmurlama mı Damla Sulama mı? Hangisi Daha İyi?",
    slug: "yagmurlama-mi-damla-sulama-mi",
    excerpt: "Tarlanız için en doğru sulama yöntemi hangisi? Yağmurlama damla sulama karşılaştırma tablosu, sistem maliyeti, tasarruf-verimlilik oranları ve bitki türlerine göre seçim kılavuzu...",
    date: "20 Mayıs 2026",
    author: "Zir. Müh. Ahmet Kaya",
    category: "Sistem Karşılaştırma",
    image: "https://images.unsplash.com/photo-1563514227147-6d2ff8655200?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    title: "Pamuk Sulama Takvimi ve Su İhtiyacı",
    slug: "pamuk-sulama-takvimi-ve-su-ihtiyaci",
    excerpt: "Pamuk tarımında yüksek lif kalitesi ve dekar verimi için sulama zamanlaması. Ege ve Akdeniz bölgelerinde damla sulama yöntemiyle su yönetimi ve kritik büyüme dönemleri...",
    date: "23 Mayıs 2026",
    author: "Zir. Müh. Ahmet Kaya",
    category: "Endüstri Bitkileri",
    image: "https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 13,
    title: "Sulama Sistemleri: Türler, Avantajlar ve Dezavantajlar",
    slug: "sulama-sistemleri-turler-avantajlar-ve-dezavantajlar",
    excerpt: "Hangi sulama sistemi tarlanız için en uygunu? Damla, yağmurlama, karık ve salma sulama yöntemlerini maliyet, su tasarrufu, verimlilik ve bitki türleri açısından karşılaştırıyoruz...",
    date: "24 Mayıs 2026",
    author: "Zir. Müh. Ahmet Kaya",
    category: "Sistem Karşılaştırma",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 14,
    title: "Biber Sulama Rehberi — Günlük Su İhtiyacı ve Sulama Sıklığı",
    slug: "biber-sulama-rehberi-gunlik-su-ihtiyaci-ve-sulama-sikligi",
    excerpt: "Biber tarımında yüksek verim ve acılık dengesi için sulama nasıl olmalı? Fide, çiçeklenme ve meyve bağlama dönemlerinde biber sulama sıklığı, günlük su ihtiyacı ve pratik tavsiyeler...",
    date: "27 Mayıs 2026",
    author: "Zir. Müh. Ahmet Kaya",
    category: "Sebze Yetiştiriciliği",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 15,
    title: "Türkiye'de Sulama Destekleri 2026 — Devlet Yardımları Rehberi",
    slug: "turkiyede-sulama-destekleri-2026",
    excerpt: "2026 yılı sulama hibe ve destekleri nelerdir? Tarım Bakanlığı ve TKDK (IPARD III) hibe oranları, damla ve yağmurlama projelerinde başvuru şartları ve başvuru takvimi...",
    date: "28 Mayıs 2026",
    author: "Zir. Müh. Ahmet Kaya",
    category: "Devlet Destekleri",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 16,
    title: "Soğan Sulama Takvimi ve Su İhtiyacı",
    slug: "sogan-sulama-takvimi-ve-su-ihtiyaci",
    excerpt: "Soğan yetiştiriciliğinde yüksek verim ve kaliteli baş gelişimi için kritik büyüme dönemleri, toprak nemi yönetimi ve hasat öncesi sulama takvimi. Bilimsel soğan sulama yöntemleri...",
    date: "29 Mayıs 2026",
    author: "Zir. Müh. Ahmet Kaya",
    category: "Sebze Yetiştiriciliği",
    image: "https://images.unsplash.com/photo-1618512416390-58c06e7888ff?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 17,
    title: "Arpa Sulama Rehberi — Kışlık ve Yazlık Arpa Sulama Tavsiyeleri",
    slug: "arpa-sulama-rehberi-kislik-ve-yazlik-arpa-icin-sulama-tavsiyeleri",
    excerpt: "Arpa yetiştiriciliğinde yüksek tane verimi ve ideale yakın protein oranları yakalamak için kritik büyüme dönemleri, kışlık ve yazlık arpada su miktarı ve bölgeye göre planlama...",
    date: "30 Mayıs 2026",
    author: "Zir. Müh. Ahmet Kaya",
    category: "Tahıl Yetiştiriciliği",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 18,
    title: "Kavun ve Karpuz Sulama Rehberi",
    slug: "kavun-ve-karpuz-sulama-rehberi",
    excerpt: "Kavun ve karpuz yetiştiriciliğinde yüksek şeker oranı, çatlamayan meyveler ve ideal lezzet kalitesi için fide, çiçeklenme ve meyve büyüme dönemlerinde hassas damla sulama programı...",
    date: "31 Mayıs 2026",
    author: "Zir. Müh. Ahmet Kaya",
    category: "Sebze Yetiştiriciliği",
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 19,
    title: "Ege Bölgesi Sulama Takvimi 2026",
    slug: "ege-bolgesi-sulama-takvimi-2026",
    excerpt: "Ege Bölgesi'nin kendine özel mikroklima özellikleri, zeytin, pamuk, narenciye ve bağcılıkta 2026 yılı sulama takvimi, kritik yaz sulaması ve modern sulama yöntemleri...",
    date: "2 Haziran 2026",
    author: "Zir. Müh. Ahmet Kaya",
    category: "Bölgesel Sulama",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 20,
    title: "İç Anadolu'da Sulama — Kuru İklimde Su Tasarrufu Rehberi",
    slug: "ic-anadolu-da-sulama-kuru-iklimde-su-tasarrufu-rehberi",
    excerpt: "İç Anadolu'nun yarı kurak iklim şartlarında yüksek buğday ve arpa rekoltesi elde etmek için akıllı su tasarrufu stratejileri, sulama zamanlamaları ve ziraat tavsiyeleri...",
    date: "3 Haziran 2026",
    author: "Zir. Müh. Ahmet Kaya",
    category: "Bölgesel Sulama",
    image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 21,
    title: "Akdeniz Bölgesi Sulama Takvimi",
    slug: "akdeniz-bolgesi-sulama-takvimi",
    excerpt: "Akdeniz Bölgesi'nin kavurucu yaz sıcaklıklarında domates, biber ve pamuk tarımında yüksek verim elde etmek için hassas sulama takvimi, damla sulama ve fertigasyon tüyoları...",
    date: "4 Haziran 2026",
    author: "Zir. Müh. Ahmet Kaya",
    category: "Bölgesel Sulama",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 22,
    title: "Sulama Pompası Seçimi Nasıl Yapılır?",
    slug: "sulama-pompasi-secimi-nasil-yapilir",
    excerpt: "Tarımsal sulamada elektrik ve yakıt maliyetlerini en aza indirgeyecek doğru pompa türünün seçimi, güç hesabı formülleri, enerji tasarrufu yöntemleri ve maliyet analizi...",
    date: "5 Haziran 2026",
    author: "Zir. Müh. Ahmet Kaya",
    category: "Sulama Teknolojileri",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 23,
    title: "Fertigasyon Nedir? Gübre ve Suyu Birlikte Vermek",
    slug: "fertigasyon-nedir",
    excerpt: "Modern tarımın en etkili su ve gübre tasarrufu yöntemi olan fertigasyonun ne olduğunu, temel avantajlarını, hangi bitkilere uygun olduğunu ve detaylı maliyet analizlerini inceleyin...",
    date: "6 Haziran 2026",
    author: "Zir. Müh. Ahmet Kaya",
    category: "Sulama Teknolojileri",
    image: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 24,
    title: "Sabah mı Akşam mı Sulama Yapılmalı? Doğru Zaman Rehberi",
    slug: "sabah-mi-aksam-mi-sulama-yapilmali-dogru-zaman-rehberi",
    excerpt: "Tarımsal sulamada bitkilerin günün hangi saatinde sulanması gerektiğinin arkasındaki bilimsel gerçekler, su tasarrufu, bitki hastalıklarının engellenmesi, mevsimsel ve türel analizler...",
    date: "7 Haziran 2026",
    author: "Zir. Müh. Ahmet Kaya",
    category: "Sulama Teknolojileri",
    image: "https://images.unsplash.com/photo-1463123081488-729f60c3c527?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 25,
    title: "1 Dönüm Tarla İçin Ne Kadar Su Gerekir? Hesaplama Rehberi",
    slug: "1-donum-tarla-icin-ne-kadar-su-gerekir-hesaplama-rehberi",
    excerpt: "1 dönüm tarla sulaması için gereken net su miktarının bitki türü, toprak yapısı, klima özellikleri ve sulama yöntemi doğrultusunda bilimsel hesaplama formülleri ve pratik örnekleri...",
    date: "8 Haziran 2026",
    author: "Zir. Müh. Ahmet Kaya",
    category: "Sulama Teknolojileri",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 26,
    title: "Damla Sulama Sistemini Kendiniz Nasıl Kurarsınız?",
    slug: "damla-sulama-sistemini-kendiniz-nasil-kurarsiniz",
    excerpt: "Adım adım rehberimizle tarlanıza veya bahçenize damla sulama sistemini kendiniz kurun. İhtiyacınız olan malzeme listesi, kurulum aşamaları ve detaylı dönüm başı maliyet hesabı...",
    date: "11 Haziran 2026",
    author: "Zir. Müh. Ahmet Kaya",
    category: "Sulama Kurulumu",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=800&q=80"
  }
];

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80";

export default function Blog() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = FALLBACK_IMAGE;
  };

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
                <div className="aspect-[16/9] overflow-hidden bg-stone-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    onError={post.id === 5 ? undefined : handleImageError}
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
