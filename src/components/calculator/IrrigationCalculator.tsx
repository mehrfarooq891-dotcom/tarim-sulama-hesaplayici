import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CROPS, SOILS, PROVINCES, METHODS, calculateIrrigation } from "@/lib/irrigation-logic";
import { Droplets, Info, RefreshCw, ChevronRight, ChevronLeft, CheckCircle2, AlertTriangle, Lightbulb } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export default function IrrigationCalculator() {
  const [step, setStep] = useState(1);
  const [crop, setCrop] = useState("bugday");
  const [area, setArea] = useState(10);
  const [unit, setUnit] = useState<'donum' | 'hektar'>('donum');
  const [soil, setSoil] = useState("tinli");
  const [province, setProvince] = useState("Ankara");
  const [method, setMethod] = useState("damla");
  const [season] = useState("yaz"); // Default to summer as most critical
  const [results, setResults] = useState<any>(null);

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleCalculate = () => {
    const res = calculateIrrigation(crop, soil, province, method, season, area, unit);
    setResults(res);
    setStep(6); // Result step
  };

  const reset = () => {
    setStep(1);
    setResults(null);
  };

  const steps = [
    { title: "Bitki Seçin", icon: "🌱" },
    { title: "Alan", icon: "📏" },
    { title: "Toprak Tipi", icon: "🌍" },
    { title: "Bölge/Şehir", icon: "📍" },
    { title: "Sulama Yöntemi", icon: "🚿" },
  ];

  return (
    <div className="mx-auto max-w-[900px] w-full" id="hesapla">
      <Card className="border shadow-2xl overflow-hidden rounded-2xl bg-white">
        <CardHeader className="bg-[var(--green-light)] border-b py-6 text-center">
          <CardTitle className="text-2xl font-merriweather flex items-center justify-center gap-2">
             🌿 Sulama Hesaplama Aracı
          </CardTitle>
          {step <= 5 && (
            <div className="flex justify-center gap-2 mt-4">
              {steps.map((s, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "h-2 w-8 rounded-full transition-all",
                    step > i ? "bg-[var(--green-dark)]" : "bg-stone-200"
                  )} 
                />
              ))}
            </div>
          )}
        </CardHeader>
        <CardContent className="p-6 md:p-10">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold mb-2">Adım 1: Hangi bitkiyi yetiştiriyorsunuz?</h3>
                  <p className="text-[var(--text-muted)] text-sm">Ürün seçimi sulama ihtiyacını doğrudan belirler.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {Object.entries(CROPS).map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => { setCrop(key); nextStep(); }}
                      className={cn(
                        "flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all hover:shadow-md",
                        crop === key ? "border-[var(--green-dark)] bg-[var(--green-light)]" : "border-stone-100 bg-white"
                      )}
                    >
                      <span className="text-3xl">
                        {key === 'bugday' && '🌾'}
                        {key === 'misir' && '🌽'}
                        {key === 'pamuk' && '☁️'}
                        {key === 'domates' && '🍅'}
                        {key === 'aycicegi' && '🌻'}
                        {key === 'patates' && '🥔'}
                        {key === 'arpa' && '🌾'}
                        {key === 'sogan' && '🧅'}
                        {key === 'biber' && '🫑'}
                        {key === 'kavun' && '🍈'}
                      </span>
                      <span className="text-xs font-bold text-center">{data.name}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold mb-2">Adım 2: Toplam alan ne kadar?</h3>
                </div>
                <div className="max-w-xs mx-auto space-y-6">
                  <div className="flex justify-center p-1 bg-stone-100 rounded-lg">
                    <button
                      onClick={() => setUnit('donum')}
                      className={cn("flex-1 py-2 font-bold rounded-md transition-all", unit === 'donum' ? "bg-white shadow-sm text-[var(--green-dark)]" : "text-stone-500")}
                    >Dönüm</button>
                    <button
                      onClick={() => setUnit('hektar')}
                      className={cn("flex-1 py-2 font-bold rounded-md transition-all", unit === 'hektar' ? "bg-white shadow-sm text-[var(--green-dark)]" : "text-stone-500")}
                    >Hektar</button>
                  </div>
                  <div className="space-y-4">
                    <Label className="text-sm font-bold">Alan Miktarı</Label>
                    <Input
                      type="number"
                      value={area}
                      onChange={(e) => setArea(Number(e.target.value))}
                      className="text-center text-2xl font-bold"
                    />
                  </div>
                  <Button onClick={nextStep} className="w-full bg-[var(--green-dark)] h-14">
                    Devam Et <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <button onClick={prevStep} className="w-full text-stone-400 text-sm font-bold flex items-center justify-center gap-1 group overflow-hidden">
                    <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Geri Dön
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold mb-2">Adım 3: Toprak yapınız nasıl?</h3>
                  <p className="text-[var(--text-muted)] text-sm">Toprak yapısı su tutma kapasitesini belirler.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: 'kumlu', name: 'Kumlu toprak', icon: '🏖️' },
                    { id: 'tinli', name: 'Tınlı toprak (ideal)', icon: '🌍' },
                    { id: 'killi', name: 'Killi toprak', icon: '🧱' }
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => { setSoil(s.id); nextStep(); }}
                      className={cn(
                        "flex flex-col items-center gap-4 p-8 rounded-xl border-2 transition-all hover:bg-stone-50",
                        soil === s.id ? "border-[var(--green-dark)] bg-[var(--green-light)]" : "border-stone-100 bg-white"
                      )}
                    >
                      <span className="text-4xl">{s.icon}</span>
                      <div className="text-center">
                        <p className="font-bold">{s.name}</p>
                        {s.id === 'tinli' && <span className="text-[10px] text-green-700 bg-green-100 px-2 py-0.5 rounded-full uppercase font-black">İdeal</span>}
                      </div>
                    </button>
                  ))}
                </div>
                <button onClick={prevStep} className="w-full text-stone-400 text-sm font-bold flex items-center justify-center gap-1">
                  <ChevronLeft className="h-4 w-4" /> Geri Dön
                </button>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold mb-2">Adım 4: Bölgenizi Seçin</h3>
                  <p className="text-[var(--text-muted)] text-sm">İklim verilerini bölgenize göre ayarlıyoruz.</p>
                </div>
                <div className="max-w-sm mx-auto space-y-6">
                  <Select value={province} onValueChange={setProvince}>
                    <SelectTrigger className="h-14 text-lg">
                      <SelectValue placeholder="Şehir seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      {PROVINCES.map((p) => (
                        <SelectItem key={p.name} value={p.name}>{p.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button onClick={nextStep} className="w-full bg-[var(--green-dark)] h-14">
                    Devam Et <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <button onClick={prevStep} className="w-full text-stone-400 text-sm font-bold flex items-center justify-center gap-1">
                    <ChevronLeft className="h-4 w-4" /> Geri Dön
                  </button>
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold mb-2">Adım 5: Sulama Yöntemi</h3>
                </div>
                <div className="grid gap-4">
                  {[
                    { id: 'damla', name: '💧 Damla Sulama', desc: '%30-50 Tasarruf Sağlar' },
                    { id: 'yagmurlama', name: '🌧️ Yağmurlama', desc: 'Geniş Alanlar İçin' },
                    { id: 'salma', name: '🚿 Salma Sulama', desc: 'Geleneksel Yöntemler' }
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setMethod(m.id)}
                      className={cn(
                        "flex items-center justify-between p-6 rounded-xl border-2 transition-all",
                        method === m.id ? "border-[var(--green-dark)] bg-[var(--green-light)]" : "border-stone-100 bg-white"
                      )}
                    >
                      <div className="text-left">
                        <p className="font-bold text-lg">{m.name}</p>
                        <p className="text-xs text-[var(--text-muted)]">{m.desc}</p>
                      </div>
                      {method === m.id && <div className="h-6 w-6 rounded-full bg-[var(--green-dark)] flex items-center justify-center text-white text-[10px]">✓</div>}
                    </button>
                  ))}
                </div>
                <Button onClick={handleCalculate} className="w-full bg-[var(--green-dark)] h-16 text-lg font-black tracking-tight">
                  💧 HESAPLAMAYI BİTİR
                </Button>
                <button onClick={prevStep} className="w-full text-stone-400 text-sm font-bold flex items-center justify-center gap-1">
                  <ChevronLeft className="h-4 w-4" /> Geri Dön
                </button>
              </motion.div>
            )}

            {step === 6 && results && (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-black uppercase mb-4 tracking-widest animate-bounce">Hesaplama Hazır</span>
                  <h3 className="text-3xl font-black mb-2 text-[var(--green-dark)]">Sonuçlarınız</h3>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Card className="border-none bg-[var(--sky-blue)] shadow-lg overflow-hidden">
                    <CardContent className="p-8 text-center">
                      <p className="text-xs font-black uppercase tracking-widest text-blue-800 mb-4 opacity-70">Günlük Su İhtiyacı</p>
                      <p className="text-5xl font-mono font-black text-blue-900 leading-none">
                        {results.dailyLitre.toLocaleString('tr-TR')}
                      </p>
                      <p className="text-blue-700 font-bold mt-2">Litre / Gün</p>
                    </CardContent>
                  </Card>

                  <Card className="border-none bg-stone-900 shadow-lg text-white">
                    <CardContent className="p-8 text-center">
                      <p className="text-xs font-black uppercase tracking-widest text-stone-400 mb-4 opacity-70">Haftalık Toplam</p>
                      <p className="text-5xl font-mono font-black text-white leading-none">
                        {results.weeklyLitre.toLocaleString('tr-TR')}
                      </p>
                      <p className="text-stone-400 font-bold mt-2">Litre / Hafta</p>
                    </CardContent>
                  </Card>
                </div>

                {method !== 'damla' && (
                  <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6 flex flex-col items-center text-center gap-2">
                    <AlertTriangle className="h-8 w-8 text-orange-500" />
                    <p className="font-bold text-orange-900">Tasarruf Potansiyeli!</p>
                    <p className="text-sm text-orange-800">Damla sulamaya geçerek haftalık <span className="font-black text-lg text-orange-600">{results.savings.toLocaleString('tr-TR')} Litre</span> su tasarrufu yapabilirsiniz.</p>
                  </div>
                )}

                <div className="bg-[var(--green-light)] rounded-2xl p-6 flex items-start gap-4 border-2 border-[var(--green-dark)]">
                  <Lightbulb className="h-6 w-6 text-[var(--green-dark)] shrink-0 mt-1" />
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-[var(--green-dark)]">Tavsiye</h4>
                    <p className="text-sm text-[var(--green-dark)] opacity-90 leading-relaxed font-semibold">
                      {results.schedule === 'ORTA' ? "Sulama işlemini gün aşırı yapmanız kök gelişimini destekler." : "Bitkiniz yüksek su istiyor, sulamayı sabah erken veya akşam geç saatlerde yapın."}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" className="flex-1 min-h-[56px] border-2" onClick={() => window.print()}>
                     Raporu İndir
                  </Button>
                  <Button onClick={reset} className="flex-1 min-h-[56px] bg-[var(--green-dark)]">
                    <RefreshCw className="mr-2 h-4 w-4" /> Yeniden Hesapla
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  );
}
