import { Droplets, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-stone-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-3xl">🌱</span>
              <span className="text-xl font-black tracking-tight text-[var(--green-dark)]">
                Tarım Sulama <span className="text-[var(--green-mid)]">Hesaplayıcı</span>
              </span>
            </Link>
            <p className="text-[var(--text-muted)] max-w-md leading-relaxed">
              Toprağınızın Bereketini Bilimle Koruyun. Türkiye'nin çiftçi platformu olarak, bilimsel verilerle tarlanızın bereketini artırmayı hedefliyoruz. 
              Suyu tasarruflu kullanarak geleceğimizi koruyoruz.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
                <MapPin className="h-5 w-5 shrink-0 text-[var(--green-mid)]" />
                <span>Ankara Teknoloji Geliştirme Bölgesi, Cyberpark, B Blok No: 402, Bilkent, Ankara, Türkiye</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                <Phone className="h-5 w-5 text-[var(--green-mid)]" />
                <span>+90 (312) 444 0 534</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                <Mail className="h-5 w-5 text-[var(--green-mid)]" />
                <span>bilgi@tarimsulama.com</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold">Hızlı Bağlantılar</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-[var(--text-muted)] hover:text-[var(--green-mid)]">Ana Sayfa</Link></li>
              <li><Link to="/rehber" className="text-[var(--text-muted)] hover:text-[var(--green-mid)]">Bitki Rehberi</Link></li>
              <li><Link to="/takvim" className="text-[var(--text-muted)] hover:text-[var(--green-mid)]">Sulama Takvimi</Link></li>
              <li><Link to="/damla-sulama" className="text-[var(--text-muted)] hover:text-[var(--green-mid)]">Damla Sulama</Link></li>
              <li><Link to="/sss" className="text-[var(--text-muted)] hover:text-[var(--green-mid)]">Sık Sorulan Sorular</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold">Yasal</h4>
            <ul className="space-y-3">
              <li><Link to="/hakkimizda" className="text-[var(--text-muted)] hover:text-[var(--green-mid)]">Hakkımızda</Link></li>
              <li className="text-[var(--text-muted)]">Kullanım Koşulları</li>
              <li className="text-[var(--text-muted)]">Gizlilik Politikası</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t text-center space-y-4">
          <p className="text-sm font-bold text-[var(--green-dark)]">
            © 2021-2024 Tarım Sulama Hesaplayıcı — Ticaret Sicil No: 123456-78
          </p>
          <div className="flex justify-center gap-6 text-sm text-[var(--text-muted)] font-medium">
            <span>Instagram: @tarimsulama</span>
            <span>Twitter: @tarimsulama</span>
            <span>LinkedIn: @tarimsulama</span>
          </div>
          <p className="text-xs text-[var(--text-muted)] italic">
            Hesaplama sonuçları tavsiye niteliğindedir. Profesyonel danışmanlık yerine geçmez.
          </p>
        </div>
      </div>
    </footer>
  );
}
