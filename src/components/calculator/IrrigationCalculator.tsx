import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CROPS, SOILS, PROVINCES, METHODS, calculateIrrigation } from "@/lib/irrigation-logic";
import { Droplets, Info, RefreshCw, Download, Share2, Lightbulb, CheckCircle2, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export default function IrrigationCalculator() {
  const [crop, setCrop] = useState("bugday");
  const [area, setArea] = useState(10);
  const [unit, setUnit] = useState<'donum' | 'hektar'>('donum');
  const [soil, setSoil] = useState("tinli");
  const [province, setProvince] = useState("Ankara");
  const [method, setMethod] = useState("damla");
  const [season, setSeason] = useState("yaz");
  const [results, setResults] = useState<any>(null);

  const handleCalculate = () => {
    const res = calculateIrrigation(crop, soil, province, method, season, area, unit);
    setResults(res);
    // Scroll to results
    setTimeout(() => {
      document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="mx-auto max-w-[1100px] space-y-12">
      <Card className="border-none shadow-2xl overflow-hidden rounded-[16px]">
        <CardHeader className="bg-[var(--green-light)] border-b border-[var(--border)] py-8">
          <CardTitle className="text-3xl font-serif flex items-center gap-3">
            <span className="text-4xl">🌿</span> Sulama Hesaplama Aracı
          </CardTitle>
          <CardDescription className="text-lg text-[var(--text-muted)]">
            Tarlanızın ve ürününüzün özelliklerini seçerek ihtiyacınız olan suyu hesaplayın.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8 space-y-10">
          <div className="grid gap-8 md:grid-cols-2">
            {/* 1. Bitki Türü */}
            <div className="space-y-3">
              <Label htmlFor="crop" className="text-lg font-bold">1. Bitki Türü</Label>
              <Select value={crop} onValueChange={setCrop}>
                <SelectTrigger id="crop" className="bg-stone-50 border-2 focus:ring-[var(--green-mid)]">
                  <SelectValue placeholder="Bitki seçin" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(CROPS).map(([key, data]) => (
                    <SelectItem key={key} value={key}>{data.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-sm text-[var(--text-muted)] flex items-center gap-1">
                <Info className="h-3 w-3" /> {CROPS[crop].tooltip}
              </p>
            </div>

            {/* 2. Tarla Büyüklüğü */}
            <div className="space-y-3">
              <Label htmlFor="area" className="text-lg font-bold">2. Tarla Büyüklüğü</Label>
              <div className="flex gap-2">
                <Input
                  id="area"
                  type="number"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="bg-stone-50 border-2"
                  placeholder="Örn: 10"
                />
                <div className="flex rounded-lg border-2 overflow-hidden shrink-0">
                  <button 
                    onClick={() => setUnit('donum')}
                    className={cn("px-4 py-2 text-sm font-bold", unit === 'donum' ? "bg-[var(--green-mid)] text-white" : "bg-white")}
                  >
                    Dönüm
                  </button>
                  <button 
                    onClick={() => setUnit('hektar')}
                    className={cn("px-4 py-2 text-sm font-bold", unit === 'hektar' ? "bg-[var(--green-mid)] text-white" : "bg-white")}
                  >
                    Hektar
                  </button>
                </div>
              </div>
              <p className="text-sm text-[var(--text-muted)] flex items-center gap-1">
                <Info className="h-3 w-3" /> 1 Hektar = 10 Dönüm. Türkiye'de çoğu çiftçi dönüm kullanır.
              </p>
            </div>

            {/* 3. Toprak Tipi */}
            <div className="space-y-3 md:col-span-2">
              <Label className="text-lg font-bold">3. Toprak Tipi</Label>
              <RadioGroup value={soil} onValueChange={setSoil} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {Object.entries(SOILS).map(([key, data]) => (
                  <Label
                    key={key}
                    className={cn(
                      "flex flex-col items-center gap-3 p-6 rounded-xl border-2 cursor-pointer transition-all hover:border-[var(--green-mid)]",
                      soil === key ? "border-[var(--green-mid)] bg-[var(--green-light)]" : "bg-white"
                    )}
                  >
                    <RadioGroupItem value={key} className="sr-only" />
                    <span className="text-3xl">
                      {key === 'kumlu' ? '🪨' : key === 'tinli' ? '🌍' : '🧱'}
                    </span>
                    <span className="font-bold">{data.name}</span>
                  </Label>
                ))}
              </RadioGroup>
              <p className="text-sm text-[var(--text-muted)] flex items-center gap-1">
                <Info className="h-3 w-3" /> {SOILS[soil].tooltip}
              </p>
            </div>

            {/* 4. Şehir / Bölge */}
            <div className="space-y-3">
              <Label htmlFor="province" className="text-lg font-bold">4. Şehir / Bölge</Label>
              <Select value={province} onValueChange={setProvince}>
                <SelectTrigger id="province" className="bg-stone-50 border-2">
                  <SelectValue placeholder="Şehir seçin" />
                </SelectTrigger>
                <SelectContent>
                  {PROVINCES.map((p) => (
                    <SelectItem key={p.name} value={p.name}>{p.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-sm text-[var(--text-muted)] flex items-center gap-1">
                <Info className="h-3 w-3" /> Bölgenizin iklimi sulama süresini etkiler.
              </p>
            </div>

            {/* 5. Sulama Dönemi */}
            <div className="space-y-3">
              <Label className="text-lg font-bold">5. Sulama Dönemi</Label>
              <RadioGroup value={season} onValueChange={setSeason} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "s-spring", value: "ilkbahar", label: "🌸 İlkbahar" },
                  { id: "s-summer", value: "yaz", label: "☀️ Yaz" },
                  { id: "s-autumn", value: "sonbahar", label: "🍂 Sonbahar" },
                ].map((item) => (
                  <Label
                    key={item.value}
                    htmlFor={item.id}
                    className={cn(
                      "flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all text-center font-bold min-h-[52px]",
                      season === item.value 
                        ? "border-[var(--green-mid)] bg-[var(--green-light)] text-[var(--green-dark)] shadow-sm" 
                        : "bg-white border-stone-200 hover:border-stone-300 text-[var(--text-muted)]"
                    )}
                  >
                    <RadioGroupItem value={item.value} id={item.id} className="sr-only" />
                    {item.label}
                  </Label>
                ))}
              </RadioGroup>
            </div>

            {/* 5. Sulama Yöntemi */}
            <div className="space-y-3 md:col-span-2">
              <Label className="text-lg font-bold">6. Sulama Yöntemi</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(METHODS).map(([key, data]) => (
                  <button
                    key={key}
                    onClick={() => setMethod(key)}
                    className={cn(
                      "flex items-center gap-4 p-6 rounded-xl border-2 text-left transition-all",
                      method === key ? "border-[var(--green-mid)] bg-[var(--green-light)]" : "bg-white hover:border-stone-300"
                    )}
                  >
                    <span className="text-3xl">{key === 'damla' ? '💧' : '🌧️'}</span>
                    <div>
                      <p className="font-bold text-lg">{data.name}</p>
                      <p className="text-xs text-[var(--text-muted)]">{data.tooltip}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Button 
            onClick={handleCalculate} 
            className="w-full bg-[var(--green-mid)] hover:bg-[var(--green-dark)] text-xl py-8 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            💧 Sulama İhtiyacını Hesapla
          </Button>
        </CardContent>
      </Card>

      <AnimatePresence>
        {results && (
          <motion.div
            id="results-section"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="grid gap-6 md:grid-cols-2">
              {/* Card 1 */}
              <Card className="border-none shadow-xl bg-[var(--sky-blue)]">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <p className="text-sm font-bold uppercase tracking-widest text-blue-800 mb-2">Günlük Su İhtiyacı</p>
                  <p className="text-5xl font-mono font-black text-blue-900 mb-2">
                    {results.dailyLitre.toLocaleString('tr-TR')} <span className="text-2xl">Litre</span>
                  </p>
                  <p className="text-[var(--text-muted)]">günlük tarlanız için gereken su</p>
                  <div className="w-full mt-6 h-3 bg-white/50 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600" 
                      style={{ width: `${Math.min(100, (results.dailyLitre / (area * 1000)) * 10)}%` }}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className="border-none shadow-xl bg-stone-900 text-white">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <p className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-2">Haftalık Toplam</p>
                  <p className="text-5xl font-mono font-black text-white mb-2">
                    {results.weeklyLitre.toLocaleString('tr-TR')} <span className="text-2xl">Litre</span>
                  </p>
                  <p className="text-stone-400">bu hafta için toplam sulama</p>
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card className="border-none shadow-xl">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <p className="text-sm font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2">Sulama Süresi (Günlük)</p>
                  <p className="text-5xl font-mono font-black text-[var(--green-dark)] mb-2">
                    {results.hours} <span className="text-2xl">sa</span> {results.minutes} <span className="text-2xl">dk</span>
                  </p>
                  <p className="text-[var(--text-muted)]">{METHODS[method as keyof typeof METHODS].name} yöntemine göre</p>
                </CardContent>
              </Card>

              {/* Card 4 */}
              <Card className={cn("border-none shadow-xl", method === 'damla' ? "bg-[var(--green-light)]" : "bg-orange-50")}>
                <CardContent className="p-8 flex flex-col items-center text-center">
                  {method === 'damla' ? (
                    <>
                      <CheckCircle2 className="h-12 w-12 text-[var(--green-mid)] mb-4" />
                      <p className="text-xl font-bold text-[var(--green-dark)]">✓ Verimli sulama seçtiniz!</p>
                      <p className="text-[var(--text-muted)] mt-2">Damla sulama ile suyunuzu en iyi şekilde koruyorsunuz.</p>
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="h-12 w-12 text-orange-500 mb-4" />
                      <p className="text-xl font-bold text-orange-900">Tasarruf Potansiyeli</p>
                      <p className="text-3xl font-mono font-black text-orange-600 my-2">
                        {results.savings.toLocaleString('tr-TR')} L
                      </p>
                      <p className="text-orange-800 text-sm">Damla sulamaya geçerek haftalık bu kadar su tasarrufu yapabilirsiniz.</p>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Weekly Schedule Table */}
            <Card className="border-none shadow-xl overflow-hidden">
              <CardHeader className="bg-stone-50 border-b">
                <CardTitle className="text-xl">Haftalık Sulama Takvimi</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-center">
                    <thead>
                      <tr className="bg-stone-100 text-sm font-bold">
                        <th className="py-4 px-2">Pzt</th>
                        <th className="py-4 px-2">Sal</th>
                        <th className="py-4 px-2">Çar</th>
                        <th className="py-4 px-2">Per</th>
                        <th className="py-4 px-2">Cum</th>
                        <th className="py-4 px-2">Cmt</th>
                        <th className="py-4 px-2">Paz</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        {Array.from({ length: 7 }).map((_, i) => (
                          <td key={i} className="py-6 px-2">
                            <span className={cn(
                              "px-3 py-1 rounded-full text-[10px] font-bold uppercase",
                              results.schedule === 'TAM' || results.schedule.includes('Günde 2') ? "bg-blue-100 text-blue-700" :
                              results.schedule === 'ORTA' ? (i % 2 === 0 ? "bg-blue-100 text-blue-700" : "bg-stone-100 text-stone-400") :
                              "bg-stone-100 text-stone-400"
                            )}>
                              {results.schedule === 'TAM' || results.schedule.includes('Günde 2') ? 'SULAMA' : 
                               results.schedule === 'ORTA' ? (i % 2 === 0 ? 'SULAMA' : 'YOK') : 'YOK'}
                            </span>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Akıllı Tavsiye Box */}
            <div className="bg-[var(--green-light)] rounded-2xl p-8 border-2 border-[var(--green-mid)] flex gap-6 items-start">
              <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                <Lightbulb className="h-6 w-6 text-[var(--green-mid)]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[var(--green-dark)]">Uzman Tavsiyesi</h3>
                <p className="text-[var(--text-primary)] leading-relaxed">
                  {soil === 'kumlu' && "Kumlu toprağınız suyu hızlı geçirdiği için günde 2 kez kısa sulama, 1 kez uzun sulamadan daha etkilidir."}
                  {province === 'Konya' && "Konya'nın karasal ikliminde Temmuz ayında buharlaşma yüksektir. Sabah 06:00–08:00 arası sulama yapın."}
                  {method === 'yagmurlama' && "Damla sulamaya geçiş yaparsanız yıllık su faturanızı %35 azaltabilirsiniz."}
                  {soil !== 'kumlu' && province !== 'Konya' && method !== 'yagmurlama' && 
                    `${CROPS[crop].name} bitkiniz için ${season} döneminde düzenli nem takibi çok önemlidir. Toprağın 10cm altını kontrol ederek sulama yapın.`}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="flex-1 min-h-[52px] gap-2 border-2" onClick={() => window.print()}>
                <Download className="h-4 w-4" /> PDF İndir
              </Button>
              <Button variant="outline" className="flex-1 min-h-[52px] gap-2 border-2 text-green-600 border-green-200 hover:bg-green-50">
                <Share2 className="h-4 w-4" /> WhatsApp'ta Paylaş
              </Button>
              <Button variant="outline" className="flex-1 min-h-[52px] gap-2 border-2" onClick={() => setResults(null)}>
                <RefreshCw className="h-4 w-4" /> Yeni Hesaplama
              </Button>
            </div>

            <p className="text-center text-xs text-[var(--text-muted)] italic">
              Bu sonuçlar Penman-Monteith yöntemi ile hesaplanmıştır. Yerel koşullar farklılık gösterebilir.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
