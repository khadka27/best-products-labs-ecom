"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  Dumbbell,
  BookOpen,
  LayoutGrid,
} from "lucide-react";
import SearchBar from "./SearchBar";

const shopLinks = [
  {
    label: "All Products",
    href: "/products",
    icon: LayoutGrid,
    desc: "Browse everything we carry",
  },
  {
    label: "Equipment",
    href: "/products?type=ECOM",
    icon: Dumbbell,
    desc: "Pro-grade training gear",
  },
  {
    label: "Latest Articles",
    href: "/article",
    icon: BookOpen,
    desc: "Read our guides and updates",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (shopRef.current && !shopRef.current.contains(e.target as Node)) {
        setShopOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || searchOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen, searchOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_2px_20px_-4px_rgba(0,0,0,0.10)] border-b border-slate-200/60"
            : "bg-white/70 backdrop-blur-md border-b border-slate-100/80"
        }`}
      >
        {/* Top accent bar — orange theme */}
        <div className="h-0.5 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* ── Left: Hamburger + Logo ── */}
            <div className="flex items-center gap-3">
              <button
                id="mobile-menu-toggle"
                className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-all duration-200"
                onClick={() => { setMobileOpen(!mobileOpen); setSearchOpen(false); }}
                aria-label="Toggle menu"
              >
                <span
                  className="block transition-all duration-300"
                  style={{ transform: mobileOpen ? "rotate(90deg)" : "none" }}
                >
                  {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </span>
              </button>

              <Link href="/" className="flex items-center gap-2.5 group" aria-label="OfficialProductsLab home">
                <div className="relative">
                  <img
                    src="/logo.png"
                    alt="OfficialProductsLab logo"
                    className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="font-bold text-slate-900 tracking-tight hidden sm:inline-block text-[15px] group-hover:text-orange-500 transition-colors duration-200">
                  OfficialProductsLab
                </span>
              </Link>
            </div>

            {/* ── Center: Desktop Nav ── */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {/* Shop dropdown */}
              <div ref={shopRef} className="relative">
                <button
                  id="shop-dropdown-toggle"
                  onClick={() => setShopOpen(!shopOpen)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    shopOpen
                      ? "bg-orange-50 text-orange-600"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  Shop
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${shopOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Mega dropdown */}
                {shopOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-100 p-2 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3 pt-2 pb-1">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Browse</p>
                    </div>
                    {shopLinks.map(({ label, href, icon: Icon, desc }) => (
                      <Link
                        key={label}
                        href={href}
                        onClick={() => setShopOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-orange-50 group transition-colors duration-150"
                      >
                        <div className="w-9 h-9 rounded-lg bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center flex-shrink-0 transition-colors duration-150">
                          <Icon className="w-4 h-4 text-orange-500" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-800 group-hover:text-orange-600 transition-colors">{label}</p>
                          <p className="text-xs text-slate-500">{desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all duration-200"
              >
                About
              </Link>
              <Link
                href="/article"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all duration-200"
              >
                <BookOpen className="w-3.5 h-3.5" />
                Guides
              </Link>
            </nav>

            {/* ── Right: Search ── */}
            <div className="flex items-center gap-1">
              <button
                id="search-toggle"
                onClick={() => { setSearchOpen(!searchOpen); setMobileOpen(false); }}
                className={`p-2.5 rounded-xl transition-all duration-200 ${
                  searchOpen
                    ? "bg-orange-100 text-orange-600"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
                aria-label="Search products"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Search overlay ── */}
        {searchOpen && (
          <div className="border-t border-slate-100 bg-white/95 backdrop-blur-xl">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
              <SearchBar />
            </div>
          </div>
        )}
      </header>

      {/* ── Mobile side-drawer ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute top-0 left-0 h-full w-72 max-w-[85vw] bg-white shadow-2xl flex flex-col animate-in slide-in-from-left duration-200">
            {/* Drawer accent bar */}
            <div className="h-0.5 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400" />
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2.5"
              >
                <img src="/logo.png" alt="Logo" className="h-9 w-auto object-contain" />
                <span className="font-bold text-slate-900 text-sm">OfficialProductsLab</span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-xl text-slate-500 hover:bg-slate-100"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Drawer nav */}
            <nav className="flex-1 overflow-y-auto p-3 space-y-1" aria-label="Mobile navigation">
              <p className="px-3 pt-2 pb-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Shop</p>
              {shopLinks.map(({ label, href, icon: Icon, desc }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-orange-50 group transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3.5 h-3.5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 group-hover:text-orange-600">{label}</p>
                    <p className="text-xs text-slate-400">{desc}</p>
                  </div>
                </Link>
              ))}

              <div className="pt-3">
                <p className="px-3 pb-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Explore</p>
                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-100 text-sm font-medium text-slate-700"
                >
                  About Us
                </Link>
                <Link
                  href="/article"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-100 text-sm font-medium text-slate-700"
                >
                  <BookOpen className="w-4 h-4 text-slate-400" />
                  Guides & Articles
                </Link>
              </div>
            </nav>

            {/* Drawer footer CTA */}
            <div className="p-4 border-t border-slate-100">
              <Link
                href="/products"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm bg-orange-500 text-white hover:bg-orange-600 transition-colors shadow-md shadow-orange-200"
              >
                Browse All Products →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
