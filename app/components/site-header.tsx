import { useState } from "react";
import { Form, Link } from "react-router";
import {
  RiMenuLine,
  RiSearchLine,
  RiCalendarLine,
  RiStockLine,
  RiFlashlightLine,
  RiInstagramLine,
  RiTwitterXLine,
  RiFacebookCircleLine,
  RiYoutubeLine,
  RiTiktokLine,
} from "@remixicon/react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";

const sections = [
  "Terkini",
  "Nasional",
  "Dunia",
  "Ekonomi",
  "Olahraga",
  "Teknologi",
  "Gaya Hidup",
  "Analisis",
];

const breakingNews = [
  "IHSG menguat 0.4% di perdagangan sesi pertama hari ini",
  "KPU umumkan jadwal tahapan pemilu susulan daerah terpapar bencana",
  "Timnas U-20 bersiap melakoni laga penentu di kualifikasi Piala Asia",
];



export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      {/* Main Header Container */}
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Mobile Menu Button & Brand Logo */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            aria-label="Buka menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <RiMenuLine />
          </Button>

          <Link to="/" className="brand block text-center no-underline" aria-label="Pasir beranda">
            <img
              src="/logo.png"
              alt="Pasir - Berani Bicara Fakta"
              className="block h-auto w-32 sm:w-36"
            />
          </Link>
        </div>

        {/* Search Bar (Inline & Langsung Terlihat) */}
        <Form
          action="/search"
          method="get"
          className="hidden flex-1 max-w-md items-center gap-1.5 md:flex"
        >
          <div className="relative w-full">
            <RiSearchLine className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              name="query"
              placeholder="Cari berita, topik, atau tokoh…"
              aria-label="Cari berita"
              className="h-9 w-full pl-9 pr-3 text-xs"
            />
          </div>
          <Button type="submit" size="sm" className="h-9 px-4 text-xs font-semibold">
            Cari
          </Button>
        </Form>

        {/* Ikuti PASIR + Ikon Sosial Media Lengkap */}
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 border-r pr-3 lg:flex">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Ikuti Kami:
            </span>
            <div className="flex items-center gap-1.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Instagram Pasir"
              >
                <RiInstagramLine className="size-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="X Twitter Pasir"
              >
                <RiTwitterXLine className="size-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Facebook Pasir"
              >
                <RiFacebookCircleLine className="size-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="YouTube Pasir"
              >
                <RiYoutubeLine className="size-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="TikTok Pasir"
              >
                <RiTiktokLine className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar (Tampil di layar kecil) */}
      <div className="border-t px-4 py-2 md:hidden">
        <Form action="/search" method="get" className="flex items-center gap-2">
          <div className="relative flex-1">
            <RiSearchLine className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              name="query"
              placeholder="Cari berita..."
              className="h-8 w-full pl-8 text-xs"
            />
          </div>
          <Button type="submit" size="sm" className="h-8 text-xs">
            Cari
          </Button>
        </Form>
      </div>

      {/* Navbar Kategori */}
      <nav aria-label="Navigasi utama" className="border-y-2 border-b-highlight bg-foreground text-background">
        <div
          className={cn(
            "mx-auto max-w-7xl flex-wrap items-center gap-x-7 px-4 text-background sm:px-6",
            menuOpen ? "flex py-2" : "hidden md:flex",
          )}
        >
          {sections.map((section) => (
            <Link
              key={section}
              to={`/search?query=${encodeURIComponent(section)}`}
              onClick={() => setMenuOpen(false)}
              className="flex min-h-10 items-center text-[10px] font-bold uppercase tracking-[.08em] text-background/85 no-underline transition-colors hover:text-highlight"
            >
              {section}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export function AdSlot({ variant = "banner" }: { variant?: "banner" | "rectangle" }) {
  return (
    <aside
      aria-label="Ruang iklan"
      className={cn(
        "ad-slot flex items-center justify-center border border-dashed bg-muted/30 text-center text-[10px] font-medium uppercase tracking-[.2em] text-muted-foreground",
        variant === "banner" ? "min-h-24 w-full" : "min-h-64 w-full",
      )}
    >
      <span>
        Ruang Iklan <span className="normal-case tracking-normal">· {variant === "banner" ? "728 × 90" : "300 × 250"}</span>
      </span>
    </aside>
  );
}