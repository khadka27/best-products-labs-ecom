"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, Lock } from "lucide-react";
import SearchBar from "./SearchBar";
import { useSession } from "next-auth/react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 bg-transparent pt-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full transition-all duration-300">
      
      {/* ── DESKTOP NAVBAR (lg and above) ── */}
      <div className="hidden lg:block relative w-full h-20">
        
        {/* Background Shape Layer */}
        <div className="absolute inset-0 -z-10 flex items-stretch text-[#b8c8cb] filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
          {/* Left Wing Bg */}
          <div className="flex-1 bg-current rounded-l-[24px]"></div>
          
          {/* Left Transition SVG Curve */}
          <svg viewBox="0 0 48 80" className="w-12 h-20 fill-current shrink-0 -mx-[1px]" preserveAspectRatio="none">
            <path d="M 0 0 L 12 0 C 30 0, 30 48, 48 48 L 48 80 L 0 80 Z" />
          </svg>
          
          {/* Center Notch Bg (with bottom bar of 32px height) */}
          <div className="w-[320px] h-20 shrink-0 relative bg-transparent">
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-current"></div>
          </div>
          
          {/* Right Transition SVG Curve */}
          <svg viewBox="0 0 48 80" className="w-12 h-20 fill-current shrink-0 -mx-[1px]" preserveAspectRatio="none">
            <path d="M 0 48 C 18 48, 18 0, 36 0 L 48 0 L 48 80 L 0 80 Z" />
          </svg>
          
          {/* Right Wing Bg */}
          <div className="flex-1 bg-current rounded-r-[24px]"></div>
        </div>

        {/* Content Layer */}
        <div className="absolute inset-0 flex items-center justify-between px-8 z-10">
          
          {/* Left Wing Navigation links */}
          <div className="flex-1 flex items-center gap-8 justify-start pl-4 text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-800">
            <Link href="/products" className="hover:text-black hover:scale-105 transition-all duration-300">
              Shop
            </Link>
            <Link href="/products" className="hover:text-black hover:scale-105 transition-all duration-300">
              Men
            </Link>
            <Link href="/products" className="hover:text-black hover:scale-105 transition-all duration-300">
              Women
            </Link>
            <Link href="/products" className="hover:text-black hover:scale-105 transition-all duration-300">
              Trending
            </Link>
          </div>

          {/* Center Notch Logo */}
          <div className="w-[320px] flex items-center justify-center pb-3">
            <Link href="/" className="font-extrabold text-[13px] sm:text-sm tracking-[0.3em] text-slate-900 uppercase transition-all duration-300 hover:opacity-85">
              officialproductslab
            </Link>
          </div>

          {/* Right Wing Navigation links & buttons */}
          <div className="flex-1 flex items-center gap-6 justify-end pr-4">
            <div className="flex items-center gap-8 text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-800 mr-2">
              <Link href="/products" className="hover:text-black hover:scale-105 transition-all duration-300">
                Seasonal
              </Link>
              <Link href="/products" className="hover:text-black hover:scale-105 transition-all duration-300">
                Accessories
              </Link>
            </div>

            {/* Search Button (matches Lock button style) */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`h-9 w-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 ${
                searchOpen
                  ? "bg-blue-600 text-white shadow-[0_4px_15px_rgba(37,99,235,0.4)]"
                  : "bg-slate-950 text-white hover:bg-black"
              }`}
              aria-label="Search"
            >
              <Search className="w-3.5 h-3.5" />
            </button>

            {/* Sign In / Up Button */}
            {session ? (
              <Link
                href="/admin"
                className="h-9 px-5 bg-slate-950 text-white rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center justify-center transition-all duration-300 hover:bg-black hover:scale-105 active:scale-95"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/admin"
                className="h-9 px-5 bg-slate-950 text-white rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center justify-center transition-all duration-300 hover:bg-black hover:scale-105 active:scale-95"
              >
                Sign In / Up
              </Link>
            )}

            {/* Lock / Dashboard Button */}
            <Link
              href="/admin"
              className="h-9 w-9 bg-slate-950 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black hover:scale-105 active:scale-95"
              aria-label="Admin Dashboard"
            >
              <Lock className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>

      {/* ── MOBILE/TABLET NAVBAR (under lg) ── */}
      <div className="lg:hidden flex items-center justify-between h-16 px-4 bg-[#b8c8cb] rounded-[20px] shadow-[0_6px_20px_rgba(0,0,0,0.04)] text-slate-800 relative z-10">
        
        {/* Left: Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="h-9 w-9 bg-slate-950 text-white rounded-full flex items-center justify-center transition-all hover:bg-black"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>

        {/* Center: Brand name */}
        <Link href="/" className="font-extrabold text-[11px] tracking-[0.2em] text-slate-900 uppercase">
          officialproductslab
        </Link>

        {/* Right: Search & Lock buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className={`h-9 w-9 rounded-full flex items-center justify-center transition-all ${
              searchOpen ? "bg-blue-600 text-white" : "bg-slate-950 text-white hover:bg-black"
            }`}
            aria-label="Search"
          >
            <Search className="w-3.5 h-3.5" />
          </button>
          
          <Link
            href="/admin"
            className="h-9 w-9 bg-slate-950 text-white rounded-full flex items-center justify-center transition-all hover:bg-black"
            aria-label="Admin Dashboard"
          >
            <Lock className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* ── SEARCH BAR COLLAPSIBLE ── */}
      {searchOpen && (
        <div className="mt-3 p-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-[0_15px_30px_rgba(0,0,0,0.06)] animate-in fade-in slide-in-from-top-2 duration-300">
          <SearchBar />
        </div>
      )}

      {/* ── MOBILE MENU COLLAPSIBLE ── */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-5 bg-[#b8c8cb]/95 backdrop-blur-xl rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.06)] flex flex-col gap-4 border border-white/20 animate-in fade-in slide-in-from-top-2 duration-300">
          <Link
            href="/products"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 bg-white/40 hover:bg-white/60 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-900 flex items-center justify-between transition-colors"
          >
            Shop
            <span className="text-lg">→</span>
          </Link>
          <Link
            href="/products"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 bg-white/40 hover:bg-white/60 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-900 flex items-center justify-between transition-colors"
          >
            Men
            <span className="text-lg">→</span>
          </Link>
          <Link
            href="/products"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 bg-white/40 hover:bg-white/60 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-900 flex items-center justify-between transition-colors"
          >
            Women
            <span className="text-lg">→</span>
          </Link>
          <Link
            href="/products"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 bg-white/40 hover:bg-white/60 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-900 flex items-center justify-between transition-colors"
          >
            Trending
            <span className="text-lg">→</span>
          </Link>
          <Link
            href="/products"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 bg-white/40 hover:bg-white/60 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-900 flex items-center justify-between transition-colors"
          >
            Seasonal
            <span className="text-lg">→</span>
          </Link>
          <Link
            href="/products"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 bg-white/40 hover:bg-white/60 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-900 flex items-center justify-between transition-colors"
          >
            Accessories
            <span className="text-lg">→</span>
          </Link>
          
          <hr className="border-white/20" />
          
          <Link
            href="/admin"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 bg-slate-950 text-white rounded-xl text-xs font-bold uppercase tracking-widest text-center transition-colors hover:bg-black"
          >
            {session ? "Dashboard" : "Sign In / Up"}
          </Link>
        </div>
      )}

    </header>
  );
}
