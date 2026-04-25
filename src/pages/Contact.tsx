import { Helmet } from "react-helmet-async";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Send, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>İletişim | Tarım Sulama Hesaplayıcı</title>
        <meta name="description" content="Tarım Sulama Hesaplayıcı ekibiyle iletişime geçin. Soru, öneri ve görüşlerinizi bize iletebilirsiniz." />
      </Helmet>

      {/* Section 1 — Heading */}
      <section className="bg-stone-50 py-24 border-b">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 text-[var(--green-dark)]"
          >
            Bizimle İletişime Geçin
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600 font-bold"
          >
            Bir sorunuz veya öneriniz mi var? Sizden haber almayı çok isteriz.
          </motion.p>
        </div>
      </section>

      {/* Section 2 — Contact form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white border-2 border-stone-100 p-10 rounded-[40px] shadow-sm">
            <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" className="space-y-8">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-lg font-bold">Ad Soyad</Label>
                <Input id="name" name="name" type="text" required placeholder="Örn: Ahmet Yılmaz" className="h-14 border-2 focus:ring-[var(--green-mid)]" />
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="email" className="text-lg font-bold">E-posta Adresi</Label>
                <Input id="email" name="email" type="email" required placeholder="Örn: ahmet@example.com" className="h-14 border-2 focus:ring-[var(--green-mid)]" />
              </div>

              <div className="space-y-3">
                <Label htmlFor="subject" className="text-lg font-bold">Konu</Label>
                <Input id="subject" name="subject" type="text" required placeholder="Mesajınızın konusu" className="h-14 border-2 focus:ring-[var(--green-mid)]" />
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="text-lg font-bold">Mesajınız</Label>
                <Textarea id="message" name="message" required rows={5} placeholder="Bize nasıl yardımcı olabiliriz?" className="border-2 focus:ring-[var(--green-mid)]" />
              </div>

              <Button type="submit" className="w-full h-16 bg-[var(--green-dark)] hover:bg-[var(--green-mid)] text-xl font-black rounded-2xl transition-all gap-3 shadow-lg">
                <Send className="h-5 w-5" /> Mesaj Gönder
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Section 3 — Info boxes */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-8 bg-[var(--green-light)] rounded-3xl border-2 border-[var(--green-mid)]/10 shadow-sm flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                 <Mail className="h-6 w-6 text-[var(--green-mid)]" />
              </div>
              <div>
                <p className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-1">E-posta</p>
                <a href="mailto:bilgi@tarimsulama.com" className="text-lg font-black text-[var(--green-dark)] hover:underline">bilgi@tarimsulama.com</a>
              </div>
            </div>
            
            <div className="p-8 bg-[var(--green-light)] rounded-3xl border-2 border-[var(--green-mid)]/10 shadow-sm flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                 <Phone className="h-6 w-6 text-[var(--green-mid)]" />
              </div>
              <div>
                <p className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-1">Telefon</p>
                <a href="tel:+903124440534" className="text-lg font-black text-[var(--green-dark)] hover:underline">+90 (312) 444 0 534</a>
              </div>
            </div>

            <div className="p-8 bg-[var(--green-light)] rounded-3xl border-2 border-[var(--green-mid)]/10 shadow-sm flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                 <MapPin className="h-6 w-6 text-[var(--green-mid)]" />
              </div>
              <div>
                <p className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-1">Adres</p>
                <p className="text-sm font-black text-[var(--green-dark)]">Cyberpark B Blok 402, Bilkent, Ankara</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Small SEO text */}
      <section className="py-12 border-t bg-stone-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-stone-400 italic">
            Türkiye için ücretsiz bir çevrimiçi sulama hesaplayıcı olan Tarım Sulama Hesaplayıcı ekibiyle iletişime geçin.
          </p>
        </div>
      </section>
    </>
  );
}
