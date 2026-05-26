"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCategoryContext } from "@/context/CategoryContext";
import ProductCard from "@/components/ProductCard";
import SubcategoryCard from "@/components/SubcategoryCard";
import SkeletonCard from "@/components/SkeletonCard";
import type {
  Product,
  Subcategory,
  HeroSettings,
  Ingredient,
} from "@/lib/types";
import {
  ArrowRight,
  Grid3x3 as Grid3X3,
  ShoppingCart,
  LayoutGrid,
  List,
  FlaskConical,
  Sparkles,
  Users,
  Package,
  CheckCircle,
  MessageCircle,
  Star,
  Flame,
} from "lucide-react";

export default function HomePage() {
  const { activeCategory } = useCategoryContext();
  const [products, setProducts] = useState<Product[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
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
    ])
      .then(([prodsData, subs, hero, ings]) => {
        // Handle API errors by providing fallback empty arrays
        const prods = prodsData?.products || [];
        setProducts(Array.isArray(prods) ? prods : []);
        setSubcategories(Array.isArray(subs) ? subs : []);
        setIngredients(Array.isArray(ings) ? ings : []);
        setHeroSettings(hero && !hero.error ? hero : null);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
        // Set empty arrays as fallback
        setProducts([]);
        setSubcategories([]);
        setHeroSettings(null);
      })
      .finally(() => setLoading(false));
  }, [activeCategory]);

  const latestProducts = products.slice(0, 8);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    if (latestProducts.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlideIndex(
        (prevIndex) => (prevIndex + 1) % latestProducts.length,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [latestProducts.length]);

  // Default hero settings if not loaded
  const defaultHero: HeroSettings = {
    id: "default",
    title: "Explore Premium Products & Gear",
    subtitle: "High Quality Collections",
    description:
      "Discover curated premium products, fitness gear, and top lifestyle essentials selected for outstanding quality and reliability.",
    backgroundImage: "",
    backgroundType: "gradient",
    gradientFrom: "#007BFF",
    gradientVia: "#007BFF",
    gradientTo: "#007BFF",
    textColor: "#FFFFFF",
    overlayOpacity: 30,
    backgroundPosition: "center",
    backgroundSize: "cover",
    buyNowLink: "",
    updatedAt: new Date().toISOString(),
  };

  const hero = heroSettings || defaultHero;
  const primaryColor =
    (hero as any).primaryColor || hero.gradientFrom || "#007BFF";
  const ctaColor = (hero as any).ctaColor || "#FF6600";

  const productSkeletonKeys = ["p1", "p2", "p3", "p4"];
  const categorySkeletonKeys = [
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "c10",
    "c11",
    "c12",
  ];

  const featuredSectionClass =
    viewMode === "list"
      ? "space-y-3 sm:space-y-4 md:space-y-5 w-full"
      : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5";

  let featuredContent: ReactNode;
  if (loading) {
    featuredContent = (
      <div className={featuredSectionClass}>
        {productSkeletonKeys.map((key) => (
          <div
            key={key}
            className={
              viewMode === "list"
                ? "h-64 bg-[#F5F5F5] rounded-3xl animate-pulse border border-[#E5E5E5]"
                : "h-80"
            }
          >
            {viewMode === "grid" && <SkeletonCard />}
          </div>
        ))}
      </div>
    );
  } else if (latestProducts.length === 0) {
    featuredContent = (
      <div className="surface-shell rounded-3xl text-center py-16 text-[#333333]">
        <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-30" />
        <p className="text-lg">No products found for this category.</p>
      </div>
    );
  } else {
    featuredContent = (
      <div
        className={
          viewMode === "list"
            ? "flex flex-col gap-3 sm:gap-4 md:gap-5 w-full"
            : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        }
      >
        {latestProducts.map((product, index) => (
          <div
            key={product.id}
            className={
              viewMode === "list"
                ? "relative group bg-white border border-[#E5E5E5] rounded-2xl overflow-visible shadow-sm hover:shadow-lg transition-all duration-300 flex items-center h-auto min-h-32"
                : "relative group"
            }
          >
            {index === 0 && (
              <div className="absolute -top-3 -left-3 z-10 bg-[#FF6600] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg shadow-[#FF6600]/30 ring-2 ring-white animate-pulse flex items-center gap-1">
                <Star className="w-3 h-3 fill-white" />
                Top Pick
              </div>
            )}
            <div
              className={
                viewMode === "list"
                  ? "w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-4"
                  : "transition-all duration-300 group-hover:scale-105 w-full"
              }
            >
              <ProductCard product={product} variant={viewMode} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <main className="min-h-screen text-[#333333]">
      {/* Hero Banner - Blue Theme */}
      <section
        className="relative w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
        style={
          hero.backgroundType === "image" && hero.backgroundImage
            ? {
                backgroundImage: `url(${hero.backgroundImage})`,
                backgroundSize: hero.backgroundSize,
                backgroundPosition: hero.backgroundPosition,
              }
            : {
                background: `linear-gradient(135deg, ${hero.gradientFrom}, ${hero.gradientVia}, ${hero.gradientTo})`,
              }
        }
      >
        {/* Decorative Gradient Orbs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -mr-48 -mt-48"
          style={{ backgroundColor: `${primaryColor}33` }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl -ml-48 -mb-48"
          style={{ backgroundColor: `${primaryColor}1A` }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-4">
              {/* Badge */}
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                  <Sparkles className="w-4 h-4" />
                  Premium Collections
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                Premium Gear & Lifestyle Products
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl">
                Explore our handpicked selection of top-tier gear and quality
                essentials. Curated for style, durability, and outstanding
                value.
              </p>

              {/* Product Count Badge */}
              <div className="flex items-center gap-3 pt-2">
                <div className="px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm">
                  <span className="text-white font-bold text-lg">
                    {latestProducts.length}+
                  </span>
                  <span className="text-white/90 text-sm font-medium ml-2">
                    Premium Products
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 px-8 py-3 text-white font-bold rounded-lg transition-all hover:shadow-lg transform hover:scale-105 active:scale-95"
                  style={{ backgroundColor: ctaColor }}
                >
                  Browse Products <span className="text-xl">→</span>
                </a>
              </div>
            </div>

            {/* Right Side - Product Carousel */}
            <div className="hidden lg:flex items-center justify-center relative h-96">
              <div className="relative w-full h-full">
                {/* Circular gradient background */}
                <div
                  className="absolute inset-0 rounded-full blur-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor}33, ${primaryColor}33)`,
                  }}
                />

                {/* Carousel Container */}
                {latestProducts.length > 0 && (
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    {/* Current Product Image with Fade Transition */}
                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                      {/* Background Product Name Watermark */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-center">
                          <p className="text-6xl sm:text-7xl md:text-8xl font-black text-white/15 select-none leading-tight wrap-break-word max-w-full px-4 transform -skew-y-12">
                            {latestProducts[
                              currentSlideIndex
                            ]?.name?.toUpperCase() || "PRODUCT"}
                          </p>
                        </div>
                      </div>

                      {/* Product Image */}
                      <Image
                        src={
                          latestProducts[currentSlideIndex]?.image ||
                          "/placeholder-hero.png"
                        }
                        alt={
                          latestProducts[currentSlideIndex]?.name ||
                          "Featured Product"
                        }
                        fill
                        className="absolute object-contain drop-shadow-2xl transition-opacity duration-500 ease-in-out opacity-100 z-10"
                        priority
                      />

                      {/* Product Info Badge - Name Only */}
                      {/* <div className="absolute bottom-6 left-6 bg-white/95 rounded-xl px-5 py-3 shadow-xl backdrop-blur-sm max-w-xs z-20 border border-white/30">
                        <p className="text-sm font-bold text-slate-900 line-clamp-2">
                          {latestProducts[currentSlideIndex]?.name}
                        </p>
                      </div> */}

                      {/* Carousel Indicators (Dots) */}
                      <div className="absolute bottom-6 right-6 flex gap-2 z-20">
                        {latestProducts.map((product, index) => (
                          <button
                            key={product.id}
                            onClick={() => setCurrentSlideIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === currentSlideIndex
                                ? "bg-white w-8"
                                : "bg-white/50 hover:bg-white/75"
                            }`}
                            aria-label={`Go to product ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Loading State */}
                {latestProducts.length === 0 && (
                  <div className="relative z-10 w-full h-full flex items-center justify-center bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="text-center text-white">
                      <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium opacity-75">
                        Loading Products...
                      </p>
                    </div>
                  </div>
                )}

                {/* Quality Badge */}
                <div className="absolute top-6 right-6 w-24 h-24 bg-white/95 rounded-full flex items-center justify-center shadow-lg z-20">
                  <div className="text-center">
                    <p
                      className="text-2xl font-bold"
                      style={{ color: primaryColor }}
                    >
                      100%
                    </p>
                    <p className="text-xs font-semibold text-[#333333]">
                      Quality
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category chips - horizontal scroll */}
      {subcategories.length > 0 && (
        <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-lg sm:text-xl font-semibold text-[#000000] mb-4">
              Browse by Category
            </h3>
            <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
              {subcategories.map((sub) => (
                <Link
                  key={sub.id}
                  href={`/products?subcategory=${sub.slug}`}
                  className="min-w-55 shrink-0 bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-28 w-full">
                    <Image
                      src={sub.image || "/subcategory-placeholder.png"}
                      alt={sub.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-bold text-[#000000] line-clamp-2">
                      {sub.name}
                    </p>
                    <p className="text-xs text-[#333333] mt-1">
                      {sub.description ?? ""}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trust & Stats Section */}
      <section className="relative py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {/* Stat Cards */}
            {[
              { number: "10K+", label: "Satisfied Customers", Icon: Users },
              { number: "500+", label: "Premium Products", Icon: Package },
              { number: "99.8%", label: "Quality Assured", Icon: CheckCircle },
              {
                number: "24/7",
                label: "Customer Support",
                Icon: MessageCircle,
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group bg-white border border-[#E5E5E5] rounded-2xl p-4 sm:p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300"
                style={{ borderColor: `${primaryColor}26` }}
              >
                <stat.Icon
                  className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3"
                  style={{ color: primaryColor }}
                />
                <p className="text-xl sm:text-2xl font-bold text-[#000000]">
                  {stat.number}
                </p>
                <p className="text-xs sm:text-sm text-[#333333] mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 space-y-6 sm:space-y-8 md:space-y-10">
        {/* Latest Products */}
        <section id="products">
          <div className="glass-band rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor})`,
                  boxShadow: `0 10px 30px ${primaryColor}66`,
                }}
              >
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#000000] tracking-tight">
                  Featured Picks
                </h2>
                <p className="text-xs sm:text-sm text-[#333333] mt-0.5">
                  Hand-picked premium gear and staff favorites
                </p>
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-white border border-[#E5E5E5] p-1 rounded-xl self-start sm:self-center shadow-sm">
              <button
                onClick={() => setViewMode("list")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  viewMode === "list"
                    ? "shadow-md"
                    : "text-[#333333] hover:text-[#000000] hover:bg-[#F5F5F5]"
                }`}
                style={
                  viewMode === "list"
                    ? { backgroundColor: primaryColor, color: "#ffffff" }
                    : undefined
                }
              >
                <List className="w-4 h-4" /> List
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  viewMode === "grid"
                    ? "shadow-md"
                    : "text-[#333333] hover:text-[#000000] hover:bg-[#F5F5F5]"
                }`}
                style={
                  viewMode === "grid"
                    ? { backgroundColor: primaryColor, color: "#ffffff" }
                    : undefined
                }
              >
                <LayoutGrid className="w-4 h-4" /> Grid
              </button>
            </div>
          </div>

          {featuredContent}

          <div className="mt-10 sm:mt-12 flex justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 text-white text-sm sm:text-base font-bold rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300 group relative overflow-hidden"
              style={{ backgroundColor: primaryColor }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View All Products
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </section>

        {/* Active Ingredients */}
        {ingredients.length > 0 && (
          <section id="ingredients">
            <div className="glass-band rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 mb-6 sm:mb-8">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-linear-to-br from-[#28A745] to-[#1F8A39] flex items-center justify-center shadow-lg shadow-[#28A745]/30 shrink-0">
                  <FlaskConical className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#000000] tracking-tight">
                    Powerful Ingredients
                  </h2>
                  <p className="text-xs sm:text-sm text-[#333333] mt-0.5">
                    Science-backed components for maximum wellness benefits
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {ingredients.map((ing) => (
                <div
                  key={ing.id}
                  className="group bg-linear-to-br from-white to-[#F5F5F5] border border-[#28A745]/25 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg hover:border-[#28A745]/50 transition-all duration-300 overflow-hidden relative"
                >
                  {/* Background accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#28A745]/20 opacity-0 group-hover:opacity-50 rounded-full blur-2xl -mr-10 -mt-10 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    {/* Image */}
                    <div className="w-full h-32 sm:h-36 rounded-xl overflow-hidden border-2 border-[#28A745]/25 mb-4 group-hover:border-[#28A745]/50 transition-colors relative">
                      <Image
                        src={ing.image || "/ingredient-placeholder.png"}
                        alt={ing.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-sm sm:text-base font-bold text-[#000000] group-hover:text-[#28A745] transition-colors">
                      {ing.name}
                    </h3>
                    <p className="text-xs text-[#333333] mt-2 line-clamp-2">
                      Premium quality ingredient for optimal health benefits
                    </p>

                    {/* Badge */}
                    <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#28A745]/15 text-[#28A745] text-[10px] font-bold rounded-full">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Subcategories */}
        <section id="categories">
          <div className="glass-band rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 flex items-center gap-3 mb-5 sm:mb-6 md:mb-8">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shadow-lg shrink-0 bg-linear-to-br from-[#007BFF] to-[#007BFF] shadow-[#007BFF]/40">
              <Grid3X3 className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#000000] tracking-tight">
                Product Catalog & Reviews
              </h2>
              <p className="text-xs sm:text-sm text-[#333333] mt-0.5">
                Explore our comprehensive collections and find your perfect
                match
              </p>
            </div>
          </div>

          {loading && (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
              {categorySkeletonKeys.map((key) => (
                <div
                  key={key}
                  className="h-32 sm:h-40 bg-linear-to-br from-[#F5F5F5] to-white rounded-2xl border border-[#007BFF]/15 animate-pulse"
                />
              ))}
            </div>
          )}

          {!loading && subcategories.length === 0 && (
            <div className="surface-shell rounded-3xl text-center py-16 text-[#333333]">
              <Grid3X3 className="w-16 h-16 mx-auto mb-4 opacity-30" />
              <p className="text-lg">No subcategories found.</p>
            </div>
          )}

          {!loading && subcategories.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
              {subcategories.map((sub, idx) => (
                <div key={sub.id} className="group relative">
                  {idx < 2 && (
                    <div className="absolute -top-2 -right-2 z-10 bg-[#DC3545] text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md flex items-center gap-1">
                      <Flame className="w-3 h-3" />
                      New
                    </div>
                  )}
                  <div className="h-full transition-all duration-300 group-hover:scale-105">
                    <SubcategoryCard subcategory={sub} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 rounded-3xl bg-linear-to-r from-[#007BFF] via-[#007BFF] to-[#007BFF] relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-40 -mt-40"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full blur-3xl -ml-30 -mb-30"></div>

          <div className="max-w-3xl mx-auto relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Transform Your Wellness?
            </h2>
            <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have taken control of
              their health journey with our premium products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#FF6600] text-white font-bold rounded-xl hover:bg-[#E55C00] transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
              >
                Shop Now
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 text-white font-bold rounded-xl hover:bg-white/30 transition-all duration-300 border border-white/30 backdrop-blur-sm"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
