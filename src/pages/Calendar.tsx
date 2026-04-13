import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const regions = [
  {
    id: "ege",
    name: "Ege Bölgesi",
    icon: "🌊",
    desc: "Ege'de yazlar sıcak ve kurak geçer. Özellikle zeytin ve pamuk tarımı için su yönetimi hayati önem taşır.",
    tip: "Aydın ve çevresinde Temmuz ayında buharlaşma o kadar yüksektir ki, gece sulaması yapmak su kaybını %20 azaltır.",
    calendar: [
      { month: "Haziran", freq: "4-6 günde bir", note: "Çiçeklenme dönemi takibi" },
      { month: "Temmuz", freq: "3-5 günde bir", note: "Maksimum su ihtiyacı" },
      { month: "Ağustos", freq: "4-6 günde bir", note: "Olgunlaşma takibi" },
    ]
  },
  {
    id: "akdeniz",
    name: "Akdeniz Bölgesi",
    icon: "☀️",
    desc: "Yüksek nem ve sıcaklık, bitkilerin terleme oranını artırır. Narenciye ve sera tarımı için hassas planlama gerekir.",
    tip: "Antalya'da sera sulamalarında otomasyon kullanmak, kök çürüklüğü riskini %40 azaltır.",
    calendar: [
      { month: "Haziran", freq: "2-4 günde bir", note: "Meyve tutumu" },
      { month: "Temmuz", freq: "1-3 günde bir", note: "Kritik sıcaklıklar" },
      { month: "Ağustos", freq: "2-4 günde bir", note: "Gelişim devamı" },
    ]
  },
  {
    id: "ic_anadolu",
    name: "İç Anadolu",
    icon: "🌾",
    desc: "Karasal iklimin hakim olduğu bölgede, kısıtlı su kaynaklarını verimli kullanmak zorunluluktur.",
    tip: "Konya'da Ağustos ayında sabah sularken rüzgar hızına dikkat edin; rüzgarlı havada yağmurlama yaparsanız suyun yarısı tarlaya ulaşmadan uçar gider.",
    calendar: [
      { month: "Haziran", freq: "7-10 günde bir", note: "Sapa kalkma sulaması" },
      { month: "Temmuz", freq: "5-7 günde bir", note: "Tane dolumu" },
      { month: "Ağustos", freq: "6-8 günde bir", note: "Hasat öncesi son su" },
    ]
  },
  {
    id: "marmara",
    name: "Marmara Bölgesi",
    icon: "🌿",
    desc: "Geçiş iklimine sahip bölgede, nem oranı yüksektir. Ayçiçeği ve meyve bahçeleri için dengeli sulama kritiktir.",
    tip: "Bursa'da şeftali bahçelerinde hasat öncesi aşırı sulama meyve tadını bozabilir, kontrollü gitmek gerekir.",
    calendar: [
      { month: "Haziran", freq: "6-8 günde bir", note: "Meyve büyüme" },
      { month: "Temmuz", freq: "4-6 günde bir", note: "Sıcaklık dengesi" },
      { month: "Ağustos", freq: "5-7 günde bir", note: "Hasat hazırlığı" },
    ]
  },
  {
    id: "dogu_anadolu",
    name: "Doğu Anadolu",
    icon: "⛰️",
    desc: "Yüksek rakım ve sert karasal iklim nedeniyle sulama sezonu daha kısadır ancak su ihtiyacı yoğundur.",
    tip: "Erzurum'da gece sıcaklıkları düşük olduğu için sabahın erken saatlerinde sulama yapmak bitkiyi şoka sokmaz.",
    calendar: [
      { month: "Haziran", freq: "8-12 günde bir", note: "Vejetatif gelişim" },
      { month: "Temmuz", freq: "6-9 günde bir", note: "Çiçeklenme" },
      { month: "Ağustos", freq: "7-10 günde bir", note: "Ürün olgunlaşma" },
    ]
  },
  {
    id: "karadeniz",
    name: "Karadeniz Bölgesi",
    icon: "🏔️",
    desc: "Her mevsim yağışlı olsa da, yaz aylarındaki kısa kurak dönemler fındık ve çay verimini etkileyebilir.",
    tip: "Rize'de çay bahçelerinde kurak geçen Temmuz haftalarında yapılacak bir can suyu, sürgün kalitesini artırır.",
    calendar: [
      { month: "Haziran", freq: "Yağışa bağlı", note: "Nem takibi" },
      { month: "Temmuz", freq: "10-15 günde bir", note: "Ek sulama gerekebilir" },
      { month: "Ağustos", freq: "12-18 günde bir", note: "Toprak nemi kontrolü" },
    ]
  },
  {
    id: "guneydogu_anadolu",
    name: "Güneydoğu Anadolu",
    icon: "🌵",
    desc: "Türkiye'nin en sıcak bölgesidir. GAP projesi ile sulama artsa da buharlaşma kaybı çok yüksektir.",
    tip: "Şanlıurfa'da pamuk sularken mutlaka damla sulama tercih edilmelidir; vahşi sulama tuzlanmaya neden olur.",
    calendar: [
      { month: "Haziran", freq: "3-5 günde bir", note: "Hızlı büyüme" },
      { month: "Temmuz", freq: "2-4 günde bir", note: "Aşırı sıcaklar" },
      { month: "Ağustos", freq: "3-5 günde bir", note: "Koza açımı" },
    ]
  }
];

function RegionContent({ region }: { region: typeof regions[0] }) {
  return (
    <div className="flex flex-col gap-8 w-full overflow-hidden">
      <div className="space-y-8 w-full">
        <Card className="border-none shadow-sm bg-white p-6 md:p-8 w-full">
          <h2 className="text-2xl md:text-3xl font-black mb-4">{region.name} İklim Özellikleri</h2>
          <p className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed">
            {region.desc}
          </p>
        </Card>

        <div className="rounded-2xl border-2 overflow-hidden shadow-sm bg-white w-full">
          <div className="overflow-x-auto w-full">
            <Table className="w-full">
              <TableHeader className="bg-stone-50">
                <TableRow>
                  <TableHead className="font-bold py-4 md:py-6">Ay</TableHead>
                  <TableHead className="font-bold py-4 md:py-6">Sulama Sıklığı</TableHead>
                  <TableHead className="font-bold py-4 md:py-6">Dikkat Edilecekler</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {region.calendar.map((row, j) => (
                  <TableRow key={j}>
                    <TableCell className="font-bold py-4 md:py-6">{row.month}</TableCell>
                    <TableCell>{row.freq}</TableCell>
                    <TableCell className="text-[var(--text-muted)]">{row.note}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 w-full">
        <Card className="border-none shadow-xl bg-[var(--green-light)] p-6 md:p-8 w-full">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="flex items-center gap-2 text-xl">
              💡 Bölge Tavsiyesi
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-[var(--text-primary)] italic leading-relaxed">
              "{region.tip}"
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm bg-blue-50 p-6 md:p-8 w-full">
          <h3 className="font-bold mb-2">Su Kaynağı Yönetimi</h3>
          <p className="text-sm text-blue-800">
            Bu bölgede yer altı sularının kullanımı kısıtlı olabilir. Yerel tarım müdürlüğünün duyurularını takip edin.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default function Calendar() {
  return (
    <>
      <Helmet>
        <title>Bölgesel Sulama Takvimi Türkiye | 2024 Sulama Rehberi</title>
        <meta name="description" content="Türkiye'nin 7 bölgesi için bitki ve iklim bazlı sulama takvimi. Ne zaman, ne kadar sulamalı?" />
      </Helmet>

      <div className="w-full max-w-[1100px] mx-auto px-4 py-12 md:py-16 overflow-hidden">
        <div className="mb-12 md:mb-16 text-center space-y-4 w-full">
          <h1 className="text-4xl md:text-5xl font-black">Türkiye Sulama Takvimi</h1>
          <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
            Bölgeye göre ne zaman sulayalım? Türkiye'nin her köşesi için iklim verilerine dayalı öneriler.
          </p>
        </div>

        <div className="w-full">
          <Accordion type="single" collapsible className="space-y-4 w-full">
            {regions.map((region) => (
              <AccordionItem key={region.id} value={region.id} className="border-2 rounded-2xl px-4 md:px-6 bg-white overflow-hidden w-full">
                <AccordionTrigger className="text-left font-bold text-lg md:text-xl py-6 hover:no-underline w-full">
                  <span className="flex items-center gap-4">
                    <span className="text-3xl">{region.icon}</span>
                    {region.name}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-8 w-full">
                  <RegionContent region={region} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}
