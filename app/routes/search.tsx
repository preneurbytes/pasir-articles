import type { Route } from "./+types/search";
import { useState } from "react";
import { Form, Link } from "react-router";
import {
  RiSearchLine,
  RiTimeLine,
  RiCloseLine,
} from "@remixicon/react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Separator } from "~/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { AdSlot, SiteHeader } from "~/components/site-header";
import { SiteFooter } from "~/components/site-footer";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Pencarian Berita — Pasir" },
    { name: "description", content: "Cari berita, topik, dan tokoh di Pasir." },
  ];
}

const topicsList = [
  "ROCKY GERUNG",
  "PEMERINTAHAN",
  "POLITIK",
  "WANTIMPRES",
  "EKONOMI",
  "NASIONAL",
  "HUKUM",
  "INTERNASIONAL",
];

const results = [
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

export function loader({ request }: Route.LoaderArgs) {
  return {
    query: new URL(request.url).searchParams.get("query")?.trim() || "",
  };
}

export default function Search({ loaderData }: Route.ComponentProps) {
  const query = loaderData?.query || "rocky gerung";
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("terbaru");

  const orderedTopics = [
    ...selectedTopics,
    ...topicsList.filter((t) => !selectedTopics.includes(t)),
  ];

  const toggleTopic = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const clearAllFilters = () => {
    setSelectedTopics([]);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-5">
          <AdSlot />
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
          <section>
            <p className="mb-2 text-xs font-bold tracking-widest text-muted-foreground">
              HASIL PENCARIAN
            </p>
            <h1 className="mb-5 font-heading text-3xl font-bold sm:text-4xl">
              Cari berita
            </h1>

            {/* Form Input Pencarian */}
            <Form method="get" action="/search" className="flex gap-2">
              <div className="relative flex-1">
                <RiSearchLine className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  className="h-11 pl-10"
                  name="query"
                  defaultValue={query}
                  placeholder="Cari berita, topik, atau tokoh"
                />
              </div>
              <Button type="submit" size="lg">
                Cari
              </Button>
            </Form>

            {/* Filter Multi-Select Topik */}
            <div className="mt-6">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className={`inline-flex h-9 shrink-0 items-center justify-center px-4 text-xs font-bold transition-all uppercase ${
                    selectedTopics.length === 0
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "border border-primary bg-background text-foreground hover:bg-primary/10"
                  }`}
                >
                  SEMUA
                </button>

                {orderedTopics.map((topic) => {
                  const isSelected = selectedTopics.includes(topic);

                  return (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => toggleTopic(topic)}
                      className={`inline-flex h-9 shrink-0 items-center justify-center gap-1.5 px-4 text-xs font-bold transition-all uppercase ${
                        isSelected
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "border border-primary bg-background text-foreground hover:bg-primary/10"
                      }`}
                    >
                      <span>{topic}</span>
                      {isSelected && <RiCloseLine className="size-4 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Metadata & Dropdown Urutkan */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="m-0 text-sm text-muted-foreground">
                Hasil untuk{" "}
                <strong className="text-foreground">“{query}”</strong>
                {selectedTopics.length > 0 && (
                  <span>
                    {" "}dengan topik{" "}
                    <strong className="text-primary">
                      “{selectedTopics.join(", ")}”
                    </strong>
                  </span>
                )}
                <span> · 1–3 dari 24 berita</span>
              </p>

              {/* Dropdown Sorting */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Urutkan:</span>
                <Select value={sortBy} onValueChange={(value) => setSortBy(value ?? "terbaru")}>
                  <SelectTrigger className="h-8 w-[130px] text-xs">
                    <SelectValue placeholder="Urutkan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="terbaru">Terbaru</SelectItem>
                    <SelectItem value="terpopuler">Terpopuler</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator className="my-4" />

            {/* List Berita Sederhana (Gambar 2) */}
            {results.map((story) => (
              <article
                key={story.title}
                className="grid grid-cols-[100px_1fr] gap-4 border-b py-4 sm:grid-cols-[155px_1fr]"
              >
                <Link
                  to="/nasional/rocky-gerung"
                  className="block aspect-[3/2] overflow-hidden bg-muted"
                >
                  <img
                    className="size-full object-cover transition-transform duration-300 hover:scale-105"
                    src={`https://images.unsplash.com/${story.image}?auto=format&fit=crop&w=500&q=80`}
                    alt={story.title}
                  />
                </Link>

                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <Badge variant="secondary">{story.category}</Badge>
                  </div>

                  <h3 className="mt-2 mb-2 font-heading text-base font-semibold leading-snug sm:text-lg">
                    <Link to="/nasional/rocky-gerung" className="hover:text-primary">
                      {story.title}
                    </Link>
                  </h3>

                  <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <RiTimeLine className="size-3.5" />
                    {story.time}
                  </p>
                </div>
              </article>
            ))}

            <div className="flex justify-center py-7">
              <Button variant="outline">Muat berita lainnya</Button>
            </div>
          </section>

          {/* Sidebar */}
          <aside className="space-y-5">
            <AdSlot variant="rectangle" />

            <Card className="rounded-none shadow-none">
              <CardContent className="p-5">
                <p className="mb-2 text-xs font-bold tracking-widest">
                  TOPIK POPULER
                </p>
                {["Rocky Gerung", "Pemerintahan", "Politik", "Wantimpres"].map(
                  (topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => toggleTopic(topic.toUpperCase())}
                      className="flex w-full items-center justify-between border-t py-3 text-left text-sm hover:text-primary"
                    >
                      <span>{topic}</span>
                    </button>
                  ),
                )}
              </CardContent>
            </Card>

            <AdSlot variant="rectangle" />
          </aside>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}