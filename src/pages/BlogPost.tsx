import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, Clock, ChevronLeft, Share2, Tag, BookOpen } from "lucide-react";
import { motion } from "motion/react";

const postsData: Record<string, any> = {
  "bugday-sulamasi-ne-zaman-yapilir-2026-rehberi": {
    title: "Buğday Sulaması Ne Zaman Yapılır? 2026 Rehberi",
    date: "3 Mayıs 2026",
    author: "Ahmet Kaya",
    readTime: "12 dk okuma",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2000&auto=format&fit=crop",
    category: "Bitki Besleme",
    content: (
      <div className="prose prose-stone max-w-none prose-headings:font-black prose-headings:text-[var(--green-dark)] prose-p:text-stone-600 prose-p:leading-relaxed prose-li:text-stone-600 font-medium">
        <p className="text-xl font-bold text-stone-800 mb-8 border-l-4 border-[var(--green-mid)] pl-6 py-2 italic">
          Buğday tarımında verimi belirleyen en kritik faktör doğru zamanda yapılan sulamadır. 2026 yılında değişen iklim koşulları ve artan su maliyetleri göz önüne alındığında, FAO metodolojisi ile modern buğday sulama kararları her zamankinden daha hayati bir önem taşıyor.
        </p>

        <h2 className="text-3xl mt-12 mb-6">Giriş: Buğday Su İhtiyacı Neden Önemlidir?</h2>
        <p>
          Buğday, dünyada ve Türkiye'de gıda güvenliğinin temel taşıdır. Ancak buğdayın verim potansiyeline ulaşması, toprakta bulunan nemin bitkinin gelişim evrelerine uygun şekilde yönetilmesine bağlıdır. <strong>Buğday sulama</strong> stratejisi, sadece su vermek değil, bitkinin "su stresine" girmesini önleyerek tane dolumunu optimize etmektir.
        </p>
        <p>
          2026 yılı tarım sezonu, artan kuraklık riskleri ve düzensiz yağış rejimleri ile karakterize edilmektedir. Bu rehberde, bilimsel veriler ışığında buğdayın hangi evrede ne kadar suya ihtiyaç duyduğunu ve FAO standartlarına göre nasıl planlama yapılması gerektiğini detaylandıracağız.
        </p>

        <h2 className="text-3xl mt-12 mb-6">Buğdayın Kritik Gelişim Dönemleri ve Sulama Zamanı</h2>
        <p>
          Buğday bitkisi, yaşam döngüsü boyunca farklı miktarlarda suya ihtiyaç duyar. Bazı dönemlerde su eksikliği verimi %50'ye kadar düşürebilirken, bazı dönemlerde sulama yapmak gereksiz maliyet oluşturabilir. İşte buğdayın 4 kritik sulama dönemi:
        </p>

        <h3 className="text-2xl mt-8 mb-4">1. Kardeşlenme Dönemi (Tiller Stage)</h3>
        <p>
          Tohumun çimlenmesinden sonra bitkinin yan sürgünler verdiği bu dönem, kök sisteminin güçlendiği zamandır. Eğer bu dönemde şiddetli bir kuraklık varsa, bitki yeterli kardeş yapamaz. Kardeşlenme başında yapılacak sulama, birim alandaki başak sayısını doğrudan artırır. 
        </p>

        <h3 className="text-2xl mt-8 mb-4">2. Sapa Kalkma Dönemi (Jointing Stage)</h3>
        <p>
          Bitkinin boy attığı ve vegetatif aksamın hızla geliştiği bu evre, en yüksek su tüketiminin başladığı dönemdir. Bitki bu dönemde su stresine girerse, sapa kalkma kısalır ve başak büyüklüğü olumsuz etkilenir.
        </p>

        <h3 className="text-2xl mt-8 mb-4">3. Başaklanma ve Çiçeklenme Dönemi (Heading & Flowering)</h3>
        <p>
          <strong>En kritik dönemdir.</strong> Başakların kından çıktığı ve çiçeklenmenin olduğu bu süreçte su noksanlığı, polen kısırlığına ve dolayısıyla başaktaki tane sayısının azalmasına neden olur. Toprak neminin bu dönemde tarla kapasitesinin %60-70'inden aşağı düşmemesi gerekir.
        </p>

        <h3 className="text-2xl mt-8 mb-4">4. Süt Olum Dönemi (Milk Stage)</h3>
        <p>
          Tanenin içinin dolduğu evredir. Bu dönemdeki sulama, bin tane ağırlığını ve hektolitre değerini artırır. Tanenin dolgun ve parlak olması için bu aşamadaki toprak nemi hayatiyet arz eder. Sarı olum dönemine geçildiğinde ise sulama kesilmelidir.
        </p>

        <h2 className="text-3xl mt-12 mb-6">FAO Penman-Monteith Metodolojisi ve Hassas Sulama</h2>
        <p>
          Birleşmiş Milletler Gıda ve Tarım Örgütü (FAO) tarafından önerilen Penman-Monteith denklemi, bitkinin terleme (transpirasyon) ve toprağın buharlaşma (evaporasyon) toplamı olan **Evapotranspirasyonu (ETc)** hesaplamak için kullanılır.
        </p>
        <p>
          Bu metodoloji; sıcaklık, nem, rüzgar hızı ve güneşlenme radyasyonu gibi verileri birleştirir. Buğday için bu hesaplama yapılırken bitki katsayısı (Kc) kullanılır. Erken dönemlerde Kc düşüktür (0.3-0.4), ancak başaklanma evresinde 1.15'e kadar çıkar. Yani buğday, çiçeklenme döneminde referans buharlaşmanın %15 daha fazlasını tüketme eğilimindedir.
        </p>

        <div className="bg-[var(--green-light)] p-8 rounded-[32px] my-10 border-2 border-[var(--green-mid)]/20 shadow-sm">
           <h4 className="text-xl font-black mb-4">Profesyonel İpucu:</h4>
           <p className="text-[var(--green-dark)] font-bold mb-0">
             "Tarım Sulama Hesaplayıcı" uygulamamız, bulunduğunuz bölgenin günlük meteorolojik verilerini FAO Penman-Monteith formülü ile işleyerek tarlanızın bugün kaç mm suya ihtiyacı olduğunu size söyler. Tahmin yollarını bırakın, bilimi kullanın.
           </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6">Mevsim Tavsiyeleri ve İklim Etkisi</h2>
        <h3 className="text-2xl mt-8 mb-4">İlkbahar Sulaması</h3>
        <p>
          Anadolu gibi kışları yağışlı, ilkbaharları kurak geçen bölgelerde ilk sulama genellikle Nisan ortası veya Mayıs başında (bölgelere göre değişir) sapa kalkma döneminde yapılır. Eğer Mart ayı çok kurak geçmişse, kardeşlenme sulaması da gerekebilir.
        </p>
        <h3 className="text-2xl mt-8 mb-4">Gece Sulamasının Avantajları</h3>
        <p>
          Güneşin kavurucu etkisinin olmadığı gece ve sabahın erken saatlerinde yapılan sulama, suyun evaporasyon yoluyla kaybolmasını %30'a kadar azaltır. Ayrıca bitkinin suyu absorbe etmesi için daha uzun bir serinlik süresi sağlar.
        </p>

        <h2 className="text-3xl mt-12 mb-6">Toprak Yapısı ve Su Miktarı</h2>
        <p>
          Ne kadar su verileceği toprağın su tutma kapasitesine bağlıdır:
        </p>
        <ul className="list-disc pl-8 space-y-3">
          <li><strong>Kumlu Topraklar:</strong> Suyu hızla sızdırır. Az miktarda ama sık aralıklarla sulanmalıdır.</li>
          <li><strong>Tınlı (Orta) Topraklar:</strong> İdeal topraklardır. Buğday için en iyi verim bu topraklarda alınır.</li>
          <li><strong>Killi Topraklar:</strong> Suyu çok iyi tutar ancak havalanması zordur. Fazla su (göllenme) bitki köklerini çürütebilir.</li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6">2026 Öngörüleri: Akıllı Tarımın Önemi</h2>
        <p>
          2026 sezonu için yapılan tahminler, sıcaklık ortalamalarının mevsim normallerinin 1.5 derece üzerinde olacağını gösteriyor. Bu durum, bitkinin terleme hızını artıracak ve sulama aralıklarını kısaltacaktır. Sensör teknolojileri ve mobil hesaplama araçları bu yıl çiftçinin en büyük yardımcısı olacaktır.
        </p>
        <p>
          Doğru sulama sadece verimi artırmaz, aynı zamanda yeraltı su kaynaklarımızın korunmasını sağlar. Gelecek nesillere verimli topraklar bırakmak için her damlanın hesabını yapmalıyız.
        </p>

        <h2 className="text-3xl mt-12 mb-6">Sonuç</h2>
        <p>
          Özetle; buğday sulama zamanı planlanırken takvime değil, bitkinin fenolojik evresine ve toprağın nem durumuna bakılmalıdır. Sapa kalkma ve çiçeklenme dönemlerini susuz bırakmamak, 2026 yılında başarılı bir hasat yapmanın anahtarıdır.
        </p>
        <p>
          Daha detaylı hesaplamalar ve bitki spesifik tavsiyeler için ana sayfamızdaki hesaplama aracını kullanmayı unutmayın. Bol bereketli bir sezon dileriz!
        </p>
      </div>
    )
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? postsData[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Yazı Bulunamadı</h1>
          <Link to="/blog" className="text-[var(--green-mid)] font-bold hover:underline">Blog'a Geri Dön</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>{post.title} | Tarım Sulama Blog</title>
        <meta name="description" content={post.title} />
      </Helmet>

      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <div className="absolute inset-0 z-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 pb-20 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 font-bold text-sm bg-white/10 backdrop-blur-md px-4 py-2 rounded-full transition-all">
            <ChevronLeft className="h-4 w-4" /> Yazı Listesi
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-[var(--green-mid)] text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">{post.category}</span>
            <div className="flex items-center gap-2 text-white/80 text-sm font-bold">
              <Clock className="h-4 w-4" /> {post.readTime}
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Sidebar info */}
            <aside className="md:w-1/4 order-2 md:order-1">
              <div className="sticky top-32 space-y-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center shrink-0">
                    <User className="h-6 w-6 text-stone-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Yazar</p>
                    <p className="font-black text-stone-800">{post.author}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center shrink-0">
                    <Calendar className="h-6 w-6 text-stone-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Tarih</p>
                    <p className="font-black text-stone-800">{post.date}</p>
                  </div>
                </div>
                <div className="pt-8 border-t">
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">Paylaş</p>
                  <div className="flex gap-4">
                    <button className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center hover:bg-[var(--green-mid)] hover:text-white transition-all cursor-pointer">
                      <Share2 className="h-5 w-5" />
                    </button>
                    <button className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center hover:bg-[var(--green-mid)] hover:text-white transition-all cursor-pointer">
                      <Tag className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Article */}
            <article className="md:w-3/4 order-1 md:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="content-area"
              >
                {post.content}
              </motion.div>

              {/* Call to Action */}
              <div className="mt-24 p-10 bg-[var(--green-dark)] rounded-[40px] text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 group-hover:rotate-0 transition-transform">
                  <BookOpen className="w-48 h-48" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-4">Su Tasarrufuna Bugün Başlayın</h3>
                  <p className="text-white/70 font-bold mb-8 max-w-lg leading-relaxed">
                    Bitkinizin türüne, bulunduğunuz konuma ve güncel hava durumuna göre saniyeler içinde bilimsel sulama planınızı oluşturun.
                  </p>
                  <Link to="/">
                    <button className="bg-[var(--green-mid)] text-white px-8 py-4 rounded-2xl font-black hover:bg-white hover:text-[var(--green-dark)] transition-all shadow-xl">
                      Hesaplama Aracına Git
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
