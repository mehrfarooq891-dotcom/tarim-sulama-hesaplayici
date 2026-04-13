import { Helmet } from "react-helmet-async";
import { Users, Target, Award, Heart } from "lucide-react";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Hakkımızda | Tarım Sulama Hesaplayıcı</title>
        <meta name="description" content="Tarım Sulama Hesaplayıcı neden yapıldı? Hikayemiz, misyonumuz ve bilimsel metodolojimiz hakkında bilgi edinin." />
      </Helmet>

      <div className="container mx-auto px-4 py-16 max-w-[1100px]">
        <div className="grid gap-16 md:grid-cols-2 items-center mb-24">
          <div className="space-y-8">
            <h1 className="text-6xl font-black leading-tight">Bu Araç Neden Yapıldı?</h1>
            <p className="text-xl leading-relaxed italic text-[var(--text-muted)] border-l-4 border-[var(--green-mid)] pl-6">
              "Birkaç yıl önce, Konya'dan tanıdığım bir çiftçi bana şunu söyledi: 'Tarlama ne kadar su vermem gerektiğini hâlâ tahmin ediyorum.' Bu sözler beni çok etkiledi..."
            </p>
            <p className="text-lg leading-relaxed">
              Yıllarca sahada çalışırken gördüm ki, en büyük su israfı ve verim kaybı, bitkinin gerçek ihtiyacını bilmemekten kaynaklanıyor. 
              Geleneksel yöntemler değerli olsa da, değişen iklim koşullarında artık bilimsel verilere dayalı kararlar vermemiz gerekiyor.
            </p>
          </div>
          <div className="bg-[var(--green-light)] rounded-[40px] aspect-square flex items-center justify-center text-[12rem]">
            🌱
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-24">
          <div className="p-8 bg-white border-2 rounded-3xl space-y-4">
            <Target className="h-10 w-10 text-[var(--green-mid)]" />
            <h3 className="text-2xl font-bold">Misyonumuz</h3>
            <p className="text-[var(--text-muted)]">
              Türk çiftçisinin su kaynaklarını en verimli şekilde kullanmasını sağlayarak hem cebini hem de toprağını korumak.
            </p>
          </div>
          <div className="p-8 bg-white border-2 rounded-3xl space-y-4">
            <Award className="h-10 w-10 text-[var(--green-mid)]" />
            <h3 className="text-2xl font-bold">Bilimsel Temel</h3>
            <p className="text-[var(--text-muted)]">
              Hesaplamalarımız, dünya çapında kabul görmüş FAO Penman-Monteith metodolojisine ve Türkiye'nin güncel iklim verilerine dayanır.
            </p>
          </div>
          <div className="p-8 bg-white border-2 rounded-3xl space-y-4">
            <Heart className="h-10 w-10 text-[var(--green-mid)]" />
            <h3 className="text-2xl font-bold">Çiftçi Dostu</h3>
            <p className="text-[var(--text-muted)]">
              Karmaşık formülleri bir kenara bıraktık; her seviyeden kullanıcının anlayabileceği, sade ve hızlı bir araç geliştirdik.
            </p>
          </div>
        </div>

        <section className="bg-stone-900 text-white rounded-[40px] p-12 md:p-20 space-y-8">
          <h2 className="text-4xl font-black">Önemli Not</h2>
          <p className="text-xl opacity-80 leading-relaxed">
            Bu araç, genel iklim verileri ve bitki katsayıları kullanılarak tavsiye niteliğinde sonuçlar üretir. 
            Tarlanızın özel mikro-kliması, toprak analizi ve yerel koşullar farklılık gösterebilir. 
            Büyük yatırımlar öncesinde mutlaka bir ziraat mühendisine danışmanızı öneririz.
          </p>
          <div className="pt-8 border-t border-white/20">
            <p className="font-bold">İletişim:</p>
            <p className="opacity-70">destek@tarimsulama.com</p>
          </div>
        </section>
      </div>
    </>
  );
}
