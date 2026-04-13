import { Link, useLocation } from "react-router-dom";
import { Droplets, Menu, X, Calculator, BookOpen, Calendar, Info, HelpCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Ana Sayfa", path: "/", icon: Calculator },
  { name: "Bitki Rehberi", path: "/rehber", icon: BookOpen },
  { name: "Sulama Takvimi", path: "/takvim", icon: Calendar },
  { name: "Damla Sulama", path: "/damla-sulama", icon: Droplets },
  { name: "SSS", path: "/sss", icon: HelpCircle },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-3xl group-hover:scale-110 transition-transform">🌱</span>
          <span className="text-xl font-black tracking-tight text-[var(--green-dark)]">
            Tarım Sulama <span className="text-[var(--green-mid)]">Hesaplayıcı</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "font-bold text-sm uppercase tracking-wider transition-colors hover:text-[var(--green-mid)]",
                location.pathname === item.path ? "text-[var(--green-mid)] border-b-2 border-[var(--green-mid)]" : "text-[var(--text-primary)]"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/hakkimizda">
            <Button variant="outline" className="border-2 font-bold">Hakkımızda</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-500",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col h-full p-8 pt-24 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-3xl font-black flex items-center gap-4",
                location.pathname === item.path ? "text-[var(--green-mid)]" : "text-[var(--text-primary)]"
              )}
            >
              <item.icon className="h-8 w-8" />
              {item.name}
            </Link>
          ))}
          <Link to="/hakkimizda" className="text-3xl font-black flex items-center gap-4">
            <Info className="h-8 w-8" />
            Hakkımızda
          </Link>
        </div>
      </div>
    </nav>
  );
}
