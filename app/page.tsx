"use client";

import { useEffect, useState, type ReactNode, Key } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCategoryContext } from "@/context/CategoryContext";
import ProductCard from "@/components/ProductCard";
import SkeletonCard from "@/components/SkeletonCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import type { Product, Subcategory, HeroSettings, Ingredient } from "@/lib/types";
import {
  ArrowRight,
  Grid3x3 as Grid3X3,
  LayoutGrid,
  List,
  FlaskConical,
  Star,
  Flame,
  ShoppingCart,
  CheckCircle,
  Zap,
  TrendingUp,
  Award,
} from "lucide-react";

/* ─── Section heading component ─────────────────────────────────────────── */
function SectionHeading({
  label,
  title,
  subtitle,
  action,
}: {
  label: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-end justify-between mb-8 sm:mb-10">
      <div>
        <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-orange-500 mb-2">
          {label}
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1.5 text-sm text-slate-500 font-medium">{subtitle}</p>
        )}
      </div>
      {action && <div className="flex-shrink-0 ml-4">{action}</div>}
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function HomePage() {
  const { activeCategory } = useCategoryContext();
  const [products, setProducts] = useState<Product[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [heroSettings, setHeroSettings] = useState<HeroSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch(`/api/products?type=${activeCategory}`).then((r) => r.json()),
      fetch(`/api/subcategories?type=${activeCategory}`).then((r) => r.json()),
      fetch("/api/hero-settings").then((r) => r.json()),
      fetch("/api/ingredients").then((r) => r.json()),
      fetch("/api/admin/testimonials").then((r) => r.json()),
    ])
      .then(([prodsData, subs, hero, ings, tests]) => {
        const prods = prodsData?.products || [];
        setProducts(Array.isArray(prods) ? prods : []);
        setSubcategories(Array.isArray(subs) ? subs : []);
        setIngredients(Array.isArray(ings) ? ings : []);
        setHeroSettings(hero && !hero.error ? hero : null);
        setTestimonials(Array.isArray(tests) ? tests.filter((t) => t.isPublished) : []);
      })
      .catch(() => {
        setProducts([]);
        setSubcategories([]);
        setHeroSettings(null);
      })
      .finally(() => setLoading(false));
  }, [activeCategory]);

  const latestProducts = products.slice(0, 8);

  useEffect(() => {
    if (latestProducts.length === 0) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((i) => (i + 1) % latestProducts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [latestProducts.length]);

  const defaultHero: HeroSettings = {
    id: "default",
    title: "Explore Trending Products With Clear Buyer-Focused Reviews",
    subtitle: "Hand-Picked",
    description:
      "Official Products Lab helps shoppers understand popular online products through simple reviews, product summaries, category guides, feature breakdowns, pricing notes, and dedicated product information pages. The goal is to make product research easier before a visitor decides to check a product offer.",
    backgroundImage: "",
    backgroundType: "gradient",
    gradientFrom: "#FAF7F2",
    gradientVia: "#FAF7F2",
    gradientTo: "#FAF7F2",
    textColor: "#0f172a",
    primaryColor: "#f97316",
    ctaColor: "#f97316",
    accentColor: "#f97316",
    overlayOpacity: 30,
    backgroundPosition: "center",
    backgroundSize: "cover",
    buyNowLink: "",
    updatedAt: new Date().toISOString(),
  };

  const hero = heroSettings || defaultHero;
  const productSkeletonKeys = ["p1", "p2", "p3", "p4"];
  const categorySkeletonKeys = ["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12"];

  /* ── Featured products content ── */
  let featuredContent: ReactNode;
  if (loading) {
    featuredContent = (
      <div className={viewMode === "list" ? "space-y-4" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"}>
        {productSkeletonKeys.map((key) => (
          <div key={key} className={viewMode === "list" ? "h-40 bg-slate-100 rounded-2xl animate-pulse" : "h-80"}>
            {viewMode === "grid" && <SkeletonCard />}
          </div>
        ))}
      </div>
    );
  } else if (latestProducts.length === 0) {
    featuredContent = (
      <div className="rounded-3xl text-center py-20 text-slate-400 border border-dashed border-slate-200 bg-slate-50">
        <ShoppingCart className="w-14 h-14 mx-auto mb-4 opacity-20" />
        <p className="text-base font-semibold">No products found for this category.</p>
        <p className="text-sm mt-1 text-slate-400">Try switching categories above.</p>
      </div>
    );
  } else {
    featuredContent = (
      <div className={viewMode === "list" ? "flex flex-col gap-4 w-full" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"}>
        {latestProducts.map((product, index) => (
          <div
            key={product.id}
            className={`relative group ${viewMode === "list" ? "overflow-visible" : ""}`}
          >
            {index === 0 && (
              <div className="absolute -top-3 -left-3 z-10 flex items-center gap-1 bg-orange-500 text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-lg shadow-orange-200 ring-2 ring-white">
                <Star className="w-2.5 h-2.5 fill-white" /> Top Pick
              </div>
            )}
            <ProductCard product={product} variant={viewMode} />
          </div>
        ))}
      </div>
    );
  }

  const heroStyle =
    hero.backgroundType === "image" && hero.backgroundImage
      ? {
          backgroundImage: `url(${hero.backgroundImage})`,
          backgroundSize: hero.backgroundSize,
          backgroundPosition: hero.backgroundPosition,
        }
      : hero.backgroundType === "gradient" && hero.id !== "default"
      ? {
          background: `linear-gradient(135deg, ${hero.gradientFrom}, ${hero.gradientVia}, ${hero.gradientTo})`,
        }
      : {};

  return (
    <main className="min-h-screen text-slate-800">

      {/* ════════════════════════════════════
          HERO
      ════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-[#FAF7F2]">
        {hero.backgroundType === "image" && hero.backgroundImage && (
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${hero.backgroundImage})`,
              backgroundSize: hero.backgroundSize,
              backgroundPosition: hero.backgroundPosition,
            }}
          >
            <div 
              className="absolute inset-0" 
              style={{ backgroundColor: `rgba(0,0,0,${hero.overlayOpacity / 100})` }} 
            />
          </div>
        )}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px] items-center gap-8 py-14 lg:py-20">

            {/* Left */}
            <div className="space-y-6 relative z-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-orange-500">
                {hero.subtitle || "Premium Collections"}
              </p>
              <h1 
                className="text-5xl sm:text-6xl lg:text-[4.25rem] font-black leading-[1.06] tracking-tight text-slate-900"
                dangerouslySetInnerHTML={{ 
                  __html: hero.title || `Premium <span class="italic text-orange-500">${activeCategory === "nutra" ? "Supplements" : "Products"}</span><br />For Your Life` 
                }} 
              />
              <p className="text-[15px] max-w-md leading-relaxed text-slate-500">
                {hero.description || "Discover curated premium products, fitness gear, and top lifestyle essentials."}
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a
                  href={hero.buyNowLink || "#products"}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition-all hover:-translate-y-0.5 shadow-lg shadow-orange-200/60"
                >
                  Explore More <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/products" className="text-sm font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1.5 transition-colors">
                  View All Products →
                </Link>
              </div>
              {latestProducts.length > 1 && (
                <div className="hidden sm:flex items-center gap-3 w-fit bg-[#2C2C2C] text-white rounded-2xl p-3 shadow-2xl mt-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-700 flex-shrink-0 relative">
                    <Image
                      src={latestProducts[1]?.featuredImage || latestProducts[1]?.image || "/placeholder-image.png"}
                      alt={latestProducts[1]?.name || "Product"}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Featured</p>
                    <p className="text-sm font-bold leading-snug line-clamp-2 max-w-[150px]">
                      {latestProducts[1]?.name || "Featured Product"}
                    </p>
                    <Link
                      href={`/products/${latestProducts[1]?.slug}`}
                      className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold px-3 py-1.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      View →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Right */}
            <div className="relative hidden lg:flex items-center justify-center h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[400px] h-[400px] rounded-full bg-[#EDE8DF]" />
              </div>
              {latestProducts.length > 0 ? (
                <>
                  <div className="relative z-10 w-[380px] h-[380px]">
                    <Image
                      src={latestProducts[currentSlideIndex]?.featuredImage || latestProducts[currentSlideIndex]?.image || "/placeholder-image.png"}
                      alt={latestProducts[currentSlideIndex]?.name || "Featured"}
                      fill
                      className="object-contain drop-shadow-2xl transition-opacity duration-500"
                      priority
                    />
                  </div>
                  <div className="absolute top-6 right-0 z-20 bg-[#2C2C2C] text-white rounded-2xl p-4 shadow-2xl w-[172px]">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Top Pick</p>
                    <p className="text-sm font-bold leading-snug line-clamp-2">
                      {latestProducts[currentSlideIndex]?.name}
                    </p>
                    <Link
                      href={`/products/${latestProducts[currentSlideIndex]?.slug}`}
                      className="mt-3 w-full flex items-center justify-center gap-1.5 py-2 rounded-xl text-[11px] font-bold bg-orange-500 text-white hover:bg-orange-600 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
                    <button
                      onClick={() => setCurrentSlideIndex((i) => (i - 1 + latestProducts.length) % latestProducts.length)}
                      className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors text-base font-bold border border-slate-100"
                      aria-label="Previous"
                    >←</button>
                    <div className="flex items-center gap-1.5">
                      {latestProducts.slice(0, 6).map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentSlideIndex(i)}
                          className={`rounded-full transition-all duration-300 ${i === currentSlideIndex ? "w-6 h-2.5 bg-orange-500" : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"}`}
                          aria-label={`Slide ${i + 1}`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={() => setCurrentSlideIndex((i) => (i + 1) % latestProducts.length)}
                      className="w-9 h-9 rounded-full bg-orange-500 shadow-md flex items-center justify-center text-white hover:bg-orange-600 transition-colors text-base font-bold"
                      aria-label="Next"
                    >→</button>
                  </div>
                </>
              ) : (
                <div className="relative z-10 flex items-center justify-center w-[380px] h-[380px] rounded-2xl bg-[#EDE8DF]/60">
                  <p className="text-slate-400 font-medium text-sm">Loading…</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="bg-[#2C2C2C] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-wrap items-stretch justify-center sm:justify-around divide-x divide-white/10">
              {[
                { icon: TrendingUp, number: "10K+", label: "Satisfied Customers" },
                { icon: Award, number: "500+", label: "Premium Products" },
                { icon: Star, number: "4.9 ★", label: "Average Rating" },
              ].map(({ icon: Icon, number, label }) => (
                <div key={label} className="flex items-center gap-3 px-8 py-1">
                  <Icon className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <div>
                    <p className="text-xl font-black text-orange-400 leading-tight">{number}</p>
                    <p className="text-xs text-slate-400 font-medium">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          BROWSE BY CATEGORY
      ════════════════════════════════════ */}
      {subcategories.length > 0 && (
        <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              label="Collections"
              title="Browse Product Categories"
              subtitle="Official Products Lab organizes products by category so shoppers can quickly find products that match their needs. Each category includes related product reviews, product summaries, and links to dedicated product information pages."
              action={
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-500 hover:text-orange-600 transition-colors border border-orange-200 hover:border-orange-400 px-4 py-2 rounded-xl"
                >
                  View All <ArrowRight className="w-4 h-4" />
                </Link>
              }
            />
            <div className="flex gap-5 overflow-x-auto no-scrollbar pb-3 -mx-1 px-1">
              {subcategories.map((sub, idx) => (
                <Link
                  key={sub.id}
                  href={`/products?subcategory=${sub.slug}`}
                  className="group relative min-w-[200px] sm:min-w-[240px] h-[280px] sm:h-[310px] shrink-0 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <Image
                    src={sub.image || "/subcategory-placeholder.png"}
                    alt={sub.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  {idx < 2 && (
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-orange-500 text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-lg">
                      <Flame className="w-2.5 h-2.5" /> New
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <h3 className="text-white font-bold text-base leading-snug line-clamp-2 group-hover:text-orange-300 transition-colors">
                      {sub.name}
                    </h3>
                    {sub.description && (
                      <p className="text-white/65 text-xs mt-1 line-clamp-1">{sub.description}</p>
                    )}
                    <span className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-bold text-orange-400 group-hover:gap-2 transition-all">
                      Shop Now <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 flex sm:hidden justify-center">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-orange-500 text-white text-sm font-bold hover:bg-orange-600 transition-colors shadow-md shadow-orange-200"
              >
                View All Categories <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════
          FEATURED PRODUCTS
      ════════════════════════════════════ */}
      <section id="products" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-orange-500 mb-2">
                Hand-Picked
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Featured Product Reviews
              </h2>
              <p className="mt-1.5 text-sm text-slate-500 font-medium leading-relaxed max-w-3xl">
                The featured review section highlights selected product reviews added to Official Products Lab. These reviews are designed to help readers understand what a product is, who it may suit, what features it offers, and what to check before visiting a product page.
              </p>
            </div>

            {/* View toggle */}
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-white border border-slate-200 p-1 rounded-xl shadow-sm">
                <button
                  onClick={() => setViewMode("list")}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold transition-all ${
                    viewMode === "list"
                      ? "bg-orange-500 text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <List className="w-4 h-4" /> List
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold transition-all ${
                    viewMode === "grid"
                      ? "bg-orange-500 text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" /> Grid
                </button>
              </div>
            </div>
          </div>

          {featuredContent}

          <div className="mt-12 flex justify-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-10 py-4 bg-slate-900 text-white text-sm font-bold rounded-2xl hover:bg-orange-500 transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-slate-900/20 group"
            >
              View All Products
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          INGREDIENTS
      ════════════════════════════════════ */}
      {ingredients.length > 0 && (
        <section id="ingredients" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              label="Science-Backed"
              title="Powerful Ingredients"
              subtitle="Premium quality components for maximum wellness benefits"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {ingredients.map((ing) => (
                <div
                  key={ing.id}
                  className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-40 w-full overflow-hidden bg-slate-50">
                    <Image
                      src={ing.image || "/ingredient-placeholder.png"}
                      alt={ing.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-tight">
                        {ing.name}
                      </h3>
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-green-50 flex items-center justify-center">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {ing.description || "Premium quality ingredient for optimal health benefits"}
                    </p>
                    
                    {ing.keyFeatures && (
                      <ul className="mt-3 space-y-1">
                        {ing.keyFeatures.split('\n').filter((f: string) => f.trim()).slice(0, 3).map((feature: string, i: Key | null | undefined) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-slate-600 line-clamp-1">{feature.trim()}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-slate-50">
                      <Zap className="w-3 h-3 text-orange-400" />
                      <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">
                        Verified Ingredient
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════
          PRODUCT CATALOG (pill grid)
      ════════════════════════════════════ */}
      <section id="categories" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="All Collections"
            title="Product Catalog"
            subtitle="Browse every category we carry"
            action={
              <Link
                href="/products"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-orange-500 hover:text-orange-600 transition-colors border border-orange-200 hover:border-orange-400 px-4 py-2 rounded-xl"
              >
                All Products <ArrowRight className="w-4 h-4" />
              </Link>
            }
          />

          {loading && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {categorySkeletonKeys.map((key) => (
                <div key={key} className="h-14 bg-slate-200 rounded-2xl animate-pulse" />
              ))}
            </div>
          )}

          {!loading && subcategories.length === 0 && (
            <div className="rounded-3xl text-center py-16 text-slate-400 border border-dashed border-slate-200 bg-white">
              <Grid3X3 className="w-12 h-12 mx-auto mb-3 opacity-20" />
              <p className="text-base font-semibold">No subcategories found.</p>
            </div>
          )}

          {!loading && subcategories.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {subcategories.map((sub, idx) => (
                <div key={sub.id} className="group relative">
                  {idx < 2 && (
                    <div className="absolute -top-2 -right-2 z-10 flex items-center gap-0.5 bg-orange-500 text-white text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full shadow-md">
                      <Flame className="w-2.5 h-2.5" /> New
                    </div>
                  )}
                  <Link
                    href={`/subcategory/${sub.slug}`}
                    className="flex items-center justify-center text-center px-4 py-3.5 h-full min-h-[56px] rounded-2xl bg-white border border-slate-200 text-sm font-bold text-slate-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:shadow-lg hover:shadow-orange-200/60 hover:-translate-y-0.5 transition-all duration-200 leading-snug shadow-sm"
                  >
                    {sub.name}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════ */}
      <TestimonialSlider testimonials={testimonials} />

      {/* ════════════════════════════════════
          CTA BANNER
      ════════════════════════════════════ */}
      <section className="px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-[#2C2C2C] px-8 sm:px-12 py-14 sm:py-20 text-center">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-orange-500/10 blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-orange-500/10 blur-3xl -ml-20 -mb-20 pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-orange-500/15 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                <Zap className="w-3 h-3" /> Limited Time Offer
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                Ready to Transform<br />
                <span className="text-orange-400">Your Wellness?</span>
              </h2>
              <p className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed">
                Join thousands of satisfied customers who have taken control of
                their health journey with our premium products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all hover:-translate-y-0.5 shadow-xl shadow-orange-500/30"
                >
                  Shop Now <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/15 transition-all border border-white/15 backdrop-blur-sm"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          HOW WE HELP & EDITORIAL PRINCIPLES
      ════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Section 1: How Official Products Lab Helps Shoppers */}
          <div className="space-y-10">
            <div className="max-w-3xl">
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-orange-500 mb-2.5 block">
                How We Help
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                How Official Products Lab Helps Shoppers
              </h2>
              <p className="mt-3 text-base text-slate-500 leading-relaxed">
                Online product research can be confusing when claims, prices, reviews, and buying options are scattered across different pages. Official Products Lab helps organize important product information into clear reviews and buyer guides so readers can understand the basics before visiting a product page.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { area: "Product Clarity", details: "Explains what the product is and what problem it is designed to address", bg: "bg-orange-500/5", border: "border-orange-500/10", text: "text-orange-600" },
                { area: "Feature Breakdown", details: "Highlights important features and explains their practical value", bg: "bg-blue-500/5", border: "border-blue-500/10", text: "text-blue-600" },
                { area: "Buyer Suitability", details: "Helps readers understand who may benefit from the product and who may not need it", bg: "bg-emerald-500/5", border: "border-emerald-500/10", text: "text-emerald-600" },
                { area: "Pros and Cons", details: "Gives a balanced look at strengths and limitations", bg: "bg-purple-500/5", border: "border-purple-500/10", text: "text-purple-600" },
                { area: "Pricing Guidance", details: "Points readers toward current price, package, and availability details", bg: "bg-amber-500/5", border: "border-amber-500/10", text: "text-amber-600" },
                { area: "Product Page Access", details: "Connects readers to dedicated product information pages when they want to learn more", bg: "bg-pink-500/5", border: "border-pink-500/10", text: "text-pink-600" },
              ].map((item) => (
                <div key={item.area} className={`p-6 rounded-2xl border ${item.border} ${item.bg} hover:shadow-lg transition-all duration-300`}>
                  <h3 className={`font-bold text-base ${item.text} mb-2`}>{item.area}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: What We Cover in Product Reviews */}
          <div className="space-y-10">
            <div className="max-w-3xl">
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-orange-500 mb-2.5 block">
                Review Content Structure
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                What We Cover in Product Reviews
              </h2>
              <p className="mt-3 text-base text-slate-500 leading-relaxed">
                Every product review on Official Products Lab is written to help readers understand the product before visiting a dedicated product page. The content focuses on practical details that shoppers usually check before making a buying decision.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {[
                  { section: "Product Overview", details: "Explains what the product is, what category it belongs to, and what it is designed to do" },
                  { section: "How It Works", details: "Describes the product’s intended working process or usage style" },
                  { section: "Key Features", details: "Breaks down the main features in a simple and buyer-friendly way" },
                  { section: "Specifications", details: "Lists product type, use purpose, setup, package details, and other available information" },
                  { section: "Pros and Cons", details: "Shows useful advantages and realistic limitations" },
                  { section: "Price and Availability", details: "Explains pricing notes, packages, discounts, and where to check current details" },
                  { section: "Buyer Notes", details: "Shares safety, usage, compatibility, refund, and expectation-related reminders" },
                  { section: "FAQs", details: "Answers common buyer questions in a simple format" },
                ].map((item) => (
                  <div key={item.section} className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-sm text-slate-900 mb-1">{item.section}</h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: Product Information, Not Pressure */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 px-8 py-10 sm:p-12 text-white border border-slate-800 shadow-xl">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1 space-y-4">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-orange-400">
                  Our Content Approach
                </span>
                <h2 className="text-3xl font-black tracking-tight leading-tight">
                  Product Information, Not Pressure
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Official Products Lab is built around helpful product research, not aggressive selling. The content is designed to help shoppers slow down, compare product details, and make a more informed decision before clicking through to a product page.
                </p>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { principle: "Clear Information", details: "Content is written to explain products in simple language" },
                  { principle: "Balanced Reviews", details: "Reviews include both useful points and limitations" },
                  { principle: "No Unrealistic Claims", details: "We avoid miracle claims, guaranteed results, and one-size-fits-all promises" },
                  { principle: "Buyer Awareness", details: "Readers are encouraged to check pricing, terms, refund policies, and product details" },
                  { principle: "Category Organization", details: "Products are grouped into clear categories for easier browsing" },
                  { principle: "Practical Guidance", details: "Each review focuses on what shoppers should know before buying" },
                ].map((item) => (
                  <div key={item.principle} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h3 className="font-bold text-sm text-orange-400 mb-1">{item.principle}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 4: Clear Information Before You Click */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-orange-500 block">
                Transparency Details
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Clear Information Before You Click
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Some pages on Official Products Lab may link to dedicated product information pages, third-party product offers, affiliate pages, checkout pages, or promotional product websites. These links help readers continue their product research, but visitors should always review the current product page before placing an order.
              </p>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { topic: "Affiliate Links", details: "Some pages may include links that can generate a commission at no extra cost to the buyer" },
                { topic: "Product Pricing", details: "Pricing, discounts, and packages may change based on the seller or campaign source" },
                { topic: "Availability", details: "Product stock and availability may vary over time" },
                { topic: "Refund Terms", details: "Guarantee and refund policies should be checked on the current product page" },
                { topic: "Third-Party Offers", details: "Some product pages may lead to external product websites or checkout pages" },
                { topic: "Buyer Responsibility", details: "Visitors should review all terms, product details, and checkout information before ordering" },
              ].map((item) => (
                <div key={item.topic} className="p-5 rounded-2xl border border-slate-100 bg-[#FAF7F2]/50 hover:bg-[#FAF7F2] transition-colors duration-200">
                  <h3 className="font-bold text-sm text-slate-900 mb-1.5">{item.topic}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Find Clear Product Information Before You Buy */}
          <div className="border-t border-slate-100 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-orange-500 block">
                Main Actions
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Find Clear Product Information Before You Buy
              </h2>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                Official Products Lab helps shoppers explore product reviews, compare features, understand pros and cons, and learn what to check before visiting a product page. Whether someone is researching a car gadget, beauty device, wellness product, home tool, or smart accessory, the platform gives them a clearer starting point.
              </p>
              <div className="flex gap-4">
                <Link href="/products" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition-colors">
                  Browse All Reviews
                </Link>
                <Link href="/legal/how-we-review" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors">
                  About Our Process
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {[
                { action: "Read Latest Reviews", details: "Explore recently added product reviews and buyer guides" },
                { action: "Browse Categories", details: "Find products by category and use case" },
                { action: "View Product Pages", details: "Continue to dedicated product information pages" },
                { action: "Compare Product Details", details: "Review features, pros, cons, pricing notes, and buyer suitability" },
                { action: "Check Buyer Notes", details: "Understand safety, usage, and expectation-related information before buying" },
              ].map((item) => (
                <div key={item.action} className="flex gap-4 items-center p-4 rounded-xl border border-slate-100 bg-white hover:border-orange-500/20 transition-all duration-200 shadow-sm">
                  <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-950">{item.action}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
