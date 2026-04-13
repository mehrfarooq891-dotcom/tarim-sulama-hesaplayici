import { Helmet } from "react-helmet-async";
import { CheckCircle2, Droplets, Zap, ShieldCheck, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function DripIrrigation() {
  return (
    <>
      <Helmet>
        <title>Damla Sulama Rehberi | Avantajları ve Kurulum Maliyeti</title>
        <meta name="description" content="Damla sulama nedir? Avantajları, kurulum maliyetleri ve adım adım kurulum rehberi. Su tasarrufu ve verim artışı için en iyi yöntem." />
      </Helmet>

      <div className="container mx-auto px-4 py-16 max-w-[1100px]">
        <div className="mb-16 space-y-4">
          <h1 className="text-5xl font-black">Damla Sulama Nedir ve Neden Kullanmalısınız?</h1>
          <p className="text-xl text-[var(--text-muted)] leading-relaxed max-w-3xl">
            Damla sulama, suyu doğrudan bitki kök bölgesine, düşük basınçla ve damlalar halinde veren en verimli sulama yöntemidir.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 mb-24">
          <div className="space-y-8">
            <h2 className="text-3xl font-black">Damla Sulamanın 5 Gerçek Faydası</h2>
            <div className="space-y-6">
              {[
                { title: "Yüksek Su Tasarrufu", desc: "Suyu doğrudan köke verdiği için buharlaşma ve sızma kayıplarını %50'ye kadar azaltır." },
                { title: "Verim Artışı", desc: "Bitki su stresine girmez, sürekli ve dengeli nem sayesinde meyve kalitesi artar." },
                { title: "Gübre Tasarrufu", desc: "Gübre suyla birlikte doğrudan köke verilebilir (fertigasyon), bu da gübre kaybını önler." },
                { title: "Ot Kontrolü", desc: "Sadece bitki kökü sulandığı için sıra aralarındaki yabancı otların büyümesi engellenir." },
                { title: "İşçilik Azalması", desc: "Sistemi bir kez kurduktan sonra vana açıp kapatmak dışında fiziksel güç gerektirmez." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-[var(--green-mid)] text-white flex items-center justify-center shrink-0 font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-[var(--text-muted)]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-stone-100 rounded-3xl p-8 flex items-center justify-center text-8xl">
            💧
          </div>
        </div>

        <section className="mb-24 space-y-8">
          <h2 className="text-3xl font-black">Damla Sulama vs Yağmurlama — Karşılaştırma</h2>
          <div className="rounded-2xl border-2 overflow-x-auto shadow-sm bg-white">
            <table className="w-full text-left min-w-[600px]">
              <thead className="bg-stone-50">
                <tr className="border-b">
                  <th className="p-6 font-bold">Kriter</th>
                  <th className="p-6 font-bold">Damla Sulama</th>
                  <th className="p-6 font-bold">Yağmurlama</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { c: "Su Verimliliği", d: "✓ %90-95", y: "~ %70-80" },
                  { c: "Enerji İhtiyacı", d: "✓ Düşük Basınç", y: "✗ Yüksek Basınç" },
                  { c: "Rüzgar Etkisi", d: "✓ Etkilenmez", y: "✗ Çok Etkilenir" },
                  { c: "Hastalık Riski", d: "✓ Düşük", y: "✗ Yüksek (Yaprak Islanması)" },
                  { c: "Kurulum Maliyeti", d: "✗ Yüksek", y: "✓ Orta" },
                ].map((row, i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="p-6 font-bold">{row.c}</td>
                    <td className="p-6">{row.d}</td>
                    <td className="p-6">{row.y}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-24 grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-black">Kurulum Maliyeti Ne Kadar?</h2>
            <p className="text-lg text-[var(--text-muted)]">
              Maliyetler; tarlanın eğimi, su kaynağına uzaklığı ve kullanılan boru kalitesine göre değişir.
            </p>
            <div className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-100">
              <p className="text-2xl font-bold text-blue-900 mb-2">~ 8.000 TL - 15.000 TL</p>
              <p className="text-blue-800">Dönüm başına tahmini kurulum maliyeti (2024)</p>
              <p className="text-xs text-blue-600 mt-4 italic">* Fiyatlar tahmindir, güncel piyasa koşullarına göre değişebilir.</p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-black">Adım Adım Kurulum Süreci</h2>
            <div className="space-y-4">
              {[
                "Su kaynağı ve pompa seçimi",
                "Ana boru hattının döşenmesi",
                "Filtre ve gübreleme ünitesi montajı",
                "Laterallerin (damla boruları) serilmesi",
                "Sistemin test edilmesi ve sızıntı kontrolü"
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white border-2 rounded-xl">
                  <CheckCircle2 className="text-[var(--green-mid)]" />
                  <span className="font-bold">{i + 1}. {step}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="text-center bg-[var(--green-dark)] text-white rounded-3xl p-16">
          <h2 className="text-4xl font-black mb-6">Su Tasarrufunu Hesaplayın</h2>
          <p className="text-xl mb-10 opacity-90">Damla sulamaya geçerek ne kadar tasarruf edebileceğinizi görün.</p>
          <Link to="/">
            <Button className="bg-white text-[var(--green-dark)] hover:bg-stone-100 text-xl px-12 py-8 rounded-xl shadow-lg">
              Hesaplayıcıyı Kullan →
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
