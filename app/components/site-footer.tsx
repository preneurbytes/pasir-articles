import { Link } from "react-router";
import {
  RiInstagramLine,
  RiTwitterXLine,
  RiFacebookCircleLine,
  RiYoutubeLine,
} from "@remixicon/react";
import { Separator } from "~/components/ui/separator";

const footerCategories = [
  "Terkini",
  "Nasional",
  "Dunia",
  "Ekonomi",
  "Olahraga",
  "Teknologi",
  "Gaya Hidup",
  "Analisis",
];

const footerCorporate = [
  { name: "Tentang Kami", href: "/about" },
  { name: "Redaksi & Tim", href: "/editorial" },
  { name: "Pedoman Media Siber", href: "/cyber-guidelines" },
  { name: "Karir", href: "/careers" },
  { name: "Pasang Iklan", href: "/advertise" },
  { name: "Kontak & Pengaduan", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Brief */}
          <div className="space-y-3">
            <img
              src="/logo.png"
              alt="Pasir - Berani Bicara Fakta"
              className="block h-auto w-32 sm:w-36"
            />
            <p className="text-xs leading-relaxed text-background/70">
              Media independen yang berkomitmen menyajikan kebenaran tanpa prasangka. Berani Bicara Fakta untuk publik Indonesia.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="text-background/80 hover:text-highlight" aria-label="Instagram">
                <RiInstagramLine className="size-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-highlight" aria-label="X Twitter">
                <RiTwitterXLine className="size-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-highlight" aria-label="Facebook">
                <RiFacebookCircleLine className="size-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-highlight" aria-label="YouTube">
                <RiYoutubeLine className="size-5" />
              </a>
            </div>
          </div>

          {/* Sitemap Kategori */}
          <div>
            <h4 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-highlight">
              Kanal Berita
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {footerCategories.map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/search?query=${encodeURIComponent(cat)}`}
                    className="text-background/75 hover:text-background hover:underline"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informasi Perusahaan / Redaksi */}
          <div>
            <h4 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-highlight">
              Informasi & Kebijakan
            </h4>
            <ul className="space-y-2 text-xs">
              {footerCorporate.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-background/75 hover:text-background hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Alamat & Kontak Redaksi */}
          <div className="space-y-2 text-xs text-background/70">
            <h4 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-highlight">
              Kantor Redaksi
            </h4>
            <p>Gedung Pasir Media, Lt. 4</p>
            <p>Jl. MH Thamrin No. 12, Jakarta Pusat 10340</p>
            <p className="pt-1">Email: redaksi@pasir.id</p>
            <p>Telepon: (021) 390-1234</p>
          </div>
        </div>

        <Separator className="my-8 bg-background/15" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-[10px] tracking-widest text-background/60 sm:flex-row sm:text-left">
          <span>© 2026 PASIR MEDIA. HAK CIPTA DILINDUNGI.</span>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:underline">Kebijakan Privasi</Link>
            <Link to="/terms" className="hover:underline">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}