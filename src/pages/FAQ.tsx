import { Helmet } from "react-helmet-async";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Hesaplama sonuçları ne kadar doğru?",
    a: "Hesaplamalarımız, FAO tarafından kabul edilen Penman-Monteith yöntemine dayanır. Türkiye'nin 81 ili için ortalama iklim verilerini kullanıyoruz. Sonuçlar %90 oranında gerçeğe yakındır, ancak tarlanızdaki anlık hava durumu ve toprak nemi sonuçları biraz değiştirebilir."
  },
  {
    q: "Hangi sulama yöntemi daha iyidir, damla mı yoksa yağmurlama mı?",
    a: "Genellikle damla sulama en iyisidir. Su tasarrufu sağlar, yabancı ot gelişimini azaltır ve verimi artırır. Ancak çok geniş alanlarda ve belirli tarla bitkilerinde (örneğin yonca) yağmurlama daha pratik olabilir. Aracımızda her iki yöntemi de karşılaştırabilirsiniz."
  },
  {
    q: "Toprak tipimi nasıl anlarım?",
    a: "Basit bir test yapabilirsiniz: Bir miktar nemli toprağı elinizde sıkın. Eğer hemen dağılıyorsa kumludur, top gibi kalıyor ama dokununca dağılıyorsa tınlıdır, yapış yapış olup şeklini koruyorsa killi topraktır. Emin değilseniz 'Tınlı' seçeneğini kullanın."
  },
  {
    q: "Sabah mı, akşam mı sulama yapılmalı?",
    a: "En ideal zaman sabah gün doğumundan hemen öncedir (05:00 - 08:00). Bu saatlerde rüzgar azdır ve buharlaşma düşüktür. Akşam sulaması da yapılabilir ancak gece boyu nemli kalan yapraklarda mantar hastalığı riski artabilir."
  },
  {
    q: "1 dönüm buğday için ne kadar su gerekir?",
    a: "Bu, bölgenize ve mevsime göre değişir. Örneğin İç Anadolu'da yaz aylarında günlük 5-6 ton su gerekebilirken, Karadeniz'de bu miktar çok daha düşüktür. En doğru rakam için hesaplayıcımızı kullanmanızı öneririz."
  },
  {
    q: "Kuraklık döneminde ne yapmalıyım?",
    a: "Kuraklıkta sulama aralıklarını açmak yerine, sulama miktarını azaltıp sıklığını korumak bitkiyi hayatta tutar. Ayrıca malçlama (toprak yüzeyini örtme) yaparak buharlaşmayı engelleyebilirsiniz."
  },
  {
    q: "Bu araç ücretsiz mi?",
    a: "Evet, Tarım Sulama Hesaplayıcı tamamen ücretsizdir ve Türk çiftçisine destek olmak amacıyla geliştirilmiştir."
  },
  {
    q: "Sonuçları PDF olarak nasıl kaydedebilirim?",
    a: "Hesaplama yaptıktan sonra sonuçların altındaki 'PDF İndir' butonuna basarak veya tarayıcınızın 'Yazdır' (Ctrl+P) özelliğini kullanarak sonuçları kaydedebilirsiniz."
  },
  {
    q: "Hesaplama hangi yönteme dayanıyor?",
    a: "Sistemimiz, bitki katsayısı (Kc) ve referans evapotranspirasyon (ETo) değerlerini çarparak bitkinin gerçek su tüketimini (ETc) bulan bilimsel metoda dayanır."
  },
  {
    q: "Küçük bahçem için de kullanabilir miyim?",
    a: "Tabii ki! Tarla büyüklüğünü '1' dönüm seçerek veya metrekare bazında oranlayarak küçük bahçeleriniz için de su ihtiyacını görebilirsiniz."
  }
];

export default function FAQ() {
  return (
    <>
      <Helmet>
        <title>Sık Sorulan Sorular | Sulama Hesaplama SSS</title>
        <meta name="description" content="Tarımsal sulama hakkında en çok sorulan sorular ve uzman cevapları. Toprak tipi, sulama zamanı ve yöntemleri hakkında bilgi." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(f => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.a
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-16 max-w-[800px]">
        <div className="mb-16 text-center space-y-4">
          <h1 className="text-5xl font-black">Sık Sorulan Sorular</h1>
          <p className="text-xl text-[var(--text-muted)]">
            Sulama ve tarım hakkında merak ettiğiniz her şey.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-2 rounded-2xl px-6 bg-white overflow-hidden">
              <AccordionTrigger className="text-left font-bold text-lg py-6 hover:no-underline hover:text-[var(--green-mid)]">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-[var(--text-muted)] leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-24 p-12 bg-stone-50 rounded-3xl border-2 border-dashed border-stone-200 text-center">
          <h3 className="text-2xl font-bold mb-4">Başka bir sorunuz mu var?</h3>
          <p className="text-[var(--text-muted)] mb-8">
            Bize her zaman e-posta yoluyla ulaşabilirsiniz. Uzman ekibimiz size yardımcı olmaktan mutluluk duyacaktır.
          </p>
          <a href="mailto:destek@tarimsulama.com" className="font-bold text-[var(--green-mid)] text-xl hover:underline">
            destek@tarimsulama.com
          </a>
        </div>
      </div>
    </>
  );
}
