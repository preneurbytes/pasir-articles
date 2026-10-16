import type { Route } from "./+types/home";
import { Link } from "react-router";
import { RiArrowRightLine, RiTimeLine, RiFireLine } from "@remixicon/react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { AdSlot, SiteHeader } from "~/components/site-header";
import { SiteFooter } from "~/components/site-footer";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Pasir | Berani Bicara Fakta" },
    {
      name: "description",
      content: "Berita Indonesia dan dunia. Berani Bicara Fakta.",
    },
  ];
}

const articleUrl = "/nasional/20261006181606-20-1412369/rocky-gerung-saya-di-kalangan-istana-sekarang-akan-jadi-sasaran";

const latest = [
  {
    category: "Nasional",
    title: "Syarat tim nasional Indonesia U-20 lolos ke Piala Asia",
    time: "12 menit lalu",
    image: "photo-1529107386315-e1a2ed48a620",
  },
  {
    category: "Ekonomi",
    title: "Mengapa perhitungan kemiskinan BPS dan Bank Dunia berbeda?",
    time: "34 menit lalu",
    image: "photo-1542838132-92c53300491e",
  },
  {
    category: "Dunia",
    title: "Suara warga di tengah perubahan politik global",
    time: "1 jam lalu",
    image: "photo-1529107386315-e1a2ed48a620",
  },
];

const popular = [
  { title: "Polemik kebijakan publik dan penataan kota", category: "Nasional", views: "14.2k" },
  { title: "Harga kebutuhan pokok merangkak naik menjelang akhir tahun", category: "Ekonomi", views: "11.8k" },
  { title: "Persiapan tim nasional melakoni laga penentu", category: "Olahraga", views: "9.5k" },
  { title: "Prakiraan cuaca ekstrem di sejumlah daerah pesisir", category: "Lingkungan", views: "8.1k" },
  { title: "Inovasi AI lokal yang mulai dilirik industri global", category: "Teknologi", views: "7.4k" },
];

// Data Seksyen Kategori Tambahan
const ekbisArticles = [
  {
    title: "IHSG Ditutup Menguat Mendorong Penguatan Sektor Perbankan",
    time: "2 jam lalu",
    image: "photo-1611974789855-9c2a0a7236a3",
  },
  {
    title: "Strategi UMKM Bertahan di Tengah Lonjakan Harga Bahan Baku",
    time: "4 jam lalu",
    image: "photo-1556742049-0a670f4a4591",
  },
  {
    title: "Kementerian Keuangan Rilis Skema Insentif Pajak Industri Kreatif",
    time: "5 jam lalu",
    image: "photo-1454165804606-c3d57bc86b40",
  },
];

const teknoArticles = [
  {
    title: "Keamanan Data Nasional: Langkah Konkret Perlindungan Infrastruktur Digital",
    time: "1 jam lalu",
    image: "photo-1526374965328-7f61d4dc18c5",
  },
  {
    title: "Perkembangan Model AI Generatif dan Dampaknya Pada Produktivitas",
    time: "3 jam lalu",
    image: "photo-1485827404703-89b55fcc595e",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-5 sm:py-7">
          <AdSlot />
        </div>

        {/* SECTION: PILIHAN REDAKSI & OPINI */}
        <div className="mb-3 flex items-center gap-3 text-[10px] font-bold tracking-[.12em] text-muted-foreground">
          <Separator orientation="vertical" className="h-3" />
          <span className="text-foreground">PILIHAN REDAKSI</span>
          <span className="h-1.5 w-1.5 bg-highlight" />
        </div>

        <section className="grid gap-7 border-b pb-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(280px,.75fr)]">
          <article>
            <Link to={articleUrl} className="block aspect-[16/8] overflow-hidden bg-muted">
              <img
                className="size-full object-cover transition-transform duration-300 hover:scale-105"
                src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1400&q=85"
                alt="Gedung pemerintahan"
              />
            </Link>
            <div className="mt-4 flex items-center gap-2">
              <Badge className="rounded-none">Nasional</Badge>
              <span className="text-xs text-muted-foreground">Isu utama</span>
            </div>
            <h1 className="mt-2 max-w-4xl font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              <Link className="hover:text-primary" to={articleUrl}>
                Di tengah perubahan, publik menunggu satu hal: keberanian berkata jujur
              </Link>
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
              Keputusan besar selalu membawa dampak luas. Kami merangkum apa yang terjadi, siapa yang
              terdampak, dan pertanyaan yang belum terjawab.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span>
                Oleh <b className="text-foreground">Redaksi Pasir</b>
              </span>
              <span>·</span>
              <span>07 Okt 2026</span>
              <span>·</span>
              <span>6 menit baca</span>
            </div>
            <Link
              className="mt-2 inline-flex h-8 items-center gap-2 text-xs font-medium text-primary hover:underline"
              to={articleUrl}
            >
              BACA SELENGKAPNYA <RiArrowRightLine className="size-4" />
            </Link>
          </article>

          <aside className="border-t border-t-highlight pt-5 lg:border-l lg:border-t-0 lg:border-l-border lg:pl-6 lg:pt-0">
            <div className="mb-4 flex items-center gap-3 text-xs font-bold tracking-widest">
              OPINI
              <Separator className="flex-1" />
            </div>
            <Link
              to="/search?query=teknologi"
              className="block aspect-[16/8] overflow-hidden bg-muted"
            >
              <img
                className="size-full object-cover"
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80"
                alt="Warga menggunakan teknologi"
              />
            </Link>
            <Badge className="mt-3 rounded-none">Teknologi</Badge>
            <h2 className="mt-2 font-heading text-xl font-semibold leading-snug">
              <Link to="/search?query=teknologi">
                Ruang digital kita: makin ramai, tapi makin aman?
              </Link>
            </h2>
            <p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
              <RiTimeLine className="size-3.5" /> 5 menit lalu · 4 menit baca
            </p>
            <Separator className="my-4" />
            {[
              "Ketika harga naik, siapa yang paling merasakan dampaknya?",
              "Suara warga di tengah perubahan politik global",
            ].map((title, index) => (
              <Link
                className="flex gap-3 border-b py-3 text-sm font-medium hover:text-primary"
                key={title}
                to="/search?query=berita"
              >
                <span className="font-heading text-muted-foreground">0{index + 1}</span>
                {title}
                <RiArrowRightLine className="ml-auto size-4 shrink-0" />
              </Link>
            ))}
            <div className="mt-5">
              <AdSlot variant="rectangle" />
            </div>
          </aside>
        </section>

        {/* SECTION: BERITA TERKINI & YANG BANYAK DIBACA (POPULER) */}
        <section className="grid gap-8 py-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(260px,.7fr)]">
          <div>
            <div className="mb-4 flex items-end justify-between">
              <div>
                <p className="mb-1 text-[10px] font-bold tracking-[.14em] text-primary">
                  JANGAN LEWATKAN
                </p>
                <h2 className="m-0 font-heading text-3xl font-bold">Berita Terkini</h2>
              </div>
              <Link
                className="inline-flex h-8 items-center gap-2 text-xs font-medium text-primary hover:underline"
                to="/search?query=terkini"
              >
                LIHAT SEMUA <RiArrowRightLine className="size-4" />
              </Link>
            </div>
            {latest.map((story) => (
              <article
                key={story.title}
                className="grid grid-cols-[100px_1fr] gap-4 border-t py-4 sm:grid-cols-[155px_1fr]"
              >
                <Link
                  to="/search?query=terkini"
                  className="block aspect-[3/2] overflow-hidden bg-muted"
                >
                  <img
                    className="size-full object-cover"
                    src={`https://images.unsplash.com/${story.image}?auto=format&fit=crop&w=500&q=80`}
                    alt=""
                  />
                </Link>
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <Badge variant="secondary">{story.category}</Badge>
                  </div>
                  <h3 className="mt-2 mb-2 font-heading text-base font-semibold leading-snug sm:text-lg">
                    <Link to="/search?query=terkini" className="hover:text-primary">
                      {story.title}
                    </Link>
                  </h3>
                  <p className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <RiTimeLine className="size-3.5" />
                    {story.time}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* ASIDE: YANG BANYAK DIBACA / TERPOPULER */}
          <aside className="border-t border-t-highlight pt-5 lg:border-l lg:border-t-border lg:pl-6">
            <div className="mb-4 flex items-center gap-2 border-b-2 border-b-highlight pb-2">
              <RiFireLine className="size-4 text-primary" />
              <h2 className="text-xs font-bold tracking-widest uppercase">
                YANG BANYAK DIBACA
              </h2>
            </div>
            <div className="space-y-1">
              {popular.map((item, index) => (
                <Link
                  key={item.title}
                  className="group flex gap-3 border-b py-3 text-sm hover:text-primary"
                  to="/search?query=terpopuler"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center bg-highlight font-heading text-xs font-bold text-highlight-foreground">
                    0{index + 1}
                  </span>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                      {item.category}
                    </span>
                    <h3 className="line-clamp-2 font-medium leading-snug group-hover:text-primary">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            <Card className="mt-6 rounded-none border-0 bg-foreground text-background shadow-none">
              <CardContent className="p-5">
                <p className="m-0 font-heading text-lg font-semibold leading-relaxed">
                  “Fakta bukan milik siapa-siapa. Ia milik semua yang berani mencarinya.”
                </p>
                <p className="mb-0 mt-3 text-[10px] font-bold tracking-widest text-highlight">
                  PEGANGAN REDAKSI PASIR
                </p>
              </CardContent>
            </Card>
          </aside>
        </section>

        {/* SECTION BARU: EKONOMI & BISNIS (BLOCK SECTION KATEGORI) */}
        <section className="border-t py-8">
          <div className="mb-6 flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-3">
              <span className="h-4 w-1 bg-primary" />
              <h2 className="font-heading text-2xl font-bold">Ekonomi & Bisnis</h2>
            </div>
            <Link
              to="/search?query=Ekonomi"
              className="text-xs font-medium text-primary hover:underline"
            >
              Kanal Ekonomi →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ekbisArticles.map((art) => (
              <article key={art.title} className="group space-y-2">
                <Link to="/search?query=Ekonomi" className="block aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={`https://images.unsplash.com/${art.image}?auto=format&fit=crop&w=600&q=80`}
                    alt={art.title}
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <p className="text-[11px] text-muted-foreground flex items-center gap-1">
                  <RiTimeLine className="size-3" /> {art.time}
                </p>
                <h3 className="font-heading text-base font-semibold leading-snug group-hover:text-primary">
                  <Link to="/search?query=Ekonomi">{art.title}</Link>
                </h3>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION BARU: TEKNOLOGI & INOVASI */}
        <section className="border-t py-8">
          <div className="mb-6 flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-3">
              <span className="h-4 w-1 bg-highlight" />
              <h2 className="font-heading text-2xl font-bold">Teknologi & Inovasi</h2>
            </div>
            <Link
              to="/search?query=Teknologi"
              className="text-xs font-medium text-primary hover:underline"
            >
              Kanal Teknologi →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {teknoArticles.map((art) => (
              <article key={art.title} className="grid grid-cols-[120px_1fr] gap-4 sm:grid-cols-[180px_1fr]">
                <Link to="/search?query=Teknologi" className="block aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={`https://images.unsplash.com/${art.image}?auto=format&fit=crop&w=600&q=80`}
                    alt={art.title}
                    className="size-full object-cover"
                  />
                </Link>
                <div className="space-y-1">
                  <p className="text-[11px] text-muted-foreground flex items-center gap-1">
                    <RiTimeLine className="size-3" /> {art.time}
                  </p>
                  <h3 className="font-heading text-base font-semibold leading-snug hover:text-primary">
                    <Link to="/search?query=Teknologi">{art.title}</Link>
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* NEWSLETTER */}
        <Card
          id="newsletter"
          className="mb-9 rounded-none border-l-4 border-l-highlight bg-muted/40 shadow-none"
        >
          <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <p className="m-0 text-[10px] font-bold tracking-widest text-primary">
                SURAT DARI PASIR
              </p>
              <h2 className="mb-0 mt-1 font-heading text-2xl font-bold">
                Berita penting, tanpa kebisingan.
              </h2>
              <p className="mb-0 mt-1 text-sm text-muted-foreground">
                Pilihan berita dan perspektif redaksi langsung ke inbox Anda.
              </p>
            </div>
            <Button>
              IKUTI PASIR <RiArrowRightLine data-icon="inline-end" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <SiteFooter />
    </main>
  );
}