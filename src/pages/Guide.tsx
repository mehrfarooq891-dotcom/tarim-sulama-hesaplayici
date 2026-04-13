import { Helmet } from "react-helmet-async";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const crops = [
  { 
    name: "Buğday", 
    desc: "Türkiye'nin temel gıdası olan buğday, özellikle sapa kalkma ve süt olum dönemlerinde suya çok ihtiyaç duyar.",
    data: [
      { period: "Çimlenme", need: "2-3 mm", method: "Yağmurlama" },
      { period: "Kardeşlenme", need: "4-5 mm", method: "Yağmurlama" },
      { period: "Sapa Kalkma", need: "6-8 mm", method: "Yağmurlama" },
      { period: "Başaklanma", need: "8-10 mm", method: "Yağmurlama" },
    ],
    tip: "Eğer İç Anadolu'da buğday ekiyorsanız, Nisan sonu ve Mayıs başındaki sulamalar verimi doğrudan ikiye katlayabilir."
  },
  { 
    name: "Mısır", 
    desc: "Mısır, yaprak alanı geniş bir bitki olduğu için buharlaşma kaybı yüksektir. Düzenli nem şarttır.",
    data: [
      { period: "V6-V10 Dönemi", need: "5-6 mm", method: "Damla" },
      { period: "Püskül Çıkarma", need: "9-11 mm", method: "Damla" },
      { period: "Tane Dolumu", need: "8-10 mm", method: "Damla" },
    ],
    tip: "Mısırda püskül çıkarma döneminde yapılacak bir günlük gecikme bile %10 verim kaybına neden olabilir."
  },
  { 
    name: "Domates", 
    desc: "Domates, kökleri çok derin olmayan ama sürekli nem isteyen bir bitkidir. Düzensiz sulama meyve kalitesini bozar.",
    data: [
      { period: "Fide Dönemi", need: "3-4 mm", method: "Damla" },
      { period: "Çiçeklenme", need: "6-7 mm", method: "Damla" },
      { period: "Meyve Büyüme", need: "8-10 mm", method: "Damla" },
    ],
    tip: "Eğer Ege bölgesinde domates yetiştiriyorsanız, Temmuz ayındaki sıcaklıkların günlük su tüketimini neredeyse iki katına çıkardığını mutlaka aklınızda tutun. Bir çiftçi arkadaşım Aydın'da bu hatayı yaparak sezon ortasında ürününü kaybetti."
  }
];

export default function Guide() {
  return (
    <>
      <Helmet>
        <title>Bitki Su Tüketimi Rehberi | Sulama Hesaplayıcı</title>
        <meta name="description" content="Buğday, mısır, domates, zeytin ve diğer bitkilerin günlük su ihtiyacı tabloları ve uzman tavsiyeleri." />
      </Helmet>

      <div className="container mx-auto px-4 py-16 max-w-[1100px]">
        <div className="mb-16 space-y-4">
          <h1 className="text-5xl font-black">Bitki Su Tüketimi Rehberi</h1>
          <p className="text-xl text-[var(--text-muted)] leading-relaxed max-w-3xl">
            Tarlanızdaki ürünün ne zaman ve ne kadar suya ihtiyaç duyduğunu bilmek, başarılı bir hasadın ilk adımıdır. 
            Aşağıdaki rehberde Türkiye koşullarına en uygun verileri sizin için derledik.
          </p>
        </div>

        <div className="space-y-24">
          {crops.map((crop, i) => (
            <section key={i} className="space-y-8">
              <div className="border-l-8 border-[var(--green-mid)] pl-6">
                <h2 className="text-4xl font-black mb-2">{crop.name} Sulama Rehberi</h2>
                <p className="text-lg text-[var(--text-muted)]">{crop.desc}</p>
              </div>

              <div className="rounded-2xl border-2 overflow-x-auto shadow-sm bg-white">
                <Table>
                  <TableHeader className="bg-stone-50">
                    <TableRow>
                      <TableHead className="font-bold py-6">Büyüme Dönemi</TableHead>
                      <TableHead className="font-bold py-6">Günlük Su İhtiyacı (mm)</TableHead>
                      <TableHead className="font-bold py-6">Önerilen Yöntem</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {crop.data.map((row, j) => (
                      <TableRow key={j}>
                        <TableCell className="font-bold py-6">{row.period}</TableCell>
                        <TableCell className="mono-data">{row.need}</TableCell>
                        <TableCell>{row.method}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <p className="text-lg leading-relaxed">
                {crop.tip}
              </p>

              <div className="bg-orange-50 rounded-2xl p-8 border-2 border-orange-200">
                <h3 className="text-xl font-bold text-orange-900 mb-2 flex items-center gap-2">
                  ⚠️ Dikkat Edilmesi Gerekenler
                </h3>
                <ul className="list-disc list-inside space-y-2 text-orange-800">
                  <li>Öğle sıcağında sulama yapmaktan kaçının; su damlacıkları mercek görevi görüp yaprakları yakabilir.</li>
                  <li>Toprak tipinizin suyu tutma kapasitesini mutlaka göz önünde bulundurun.</li>
                  <li>Hastalık riskini azaltmak için yaprakları değil, toprağı ıslatmaya çalışın.</li>
                </ul>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-24 text-center bg-[var(--green-light)] rounded-3xl p-16">
          <h2 className="text-3xl font-black mb-6">Tarlanız için özel hesaplama yapın</h2>
          <Link to="/">
            <Button className="bg-[var(--green-mid)] hover:bg-[var(--green-dark)] text-xl px-12 py-8 rounded-xl shadow-lg">
              Hesaplayıcıya Git →
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
