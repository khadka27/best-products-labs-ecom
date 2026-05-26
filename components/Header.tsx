"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, Lock, ShoppingCart, User } from "lucide-react";
import SearchBar from "./SearchBar";
import { useSession } from "next-auth/react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/60 backdrop-blur-sm border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 rounded-md hover:bg-slate-100"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="font-semibold text-slate-900 tracking-wide hidden sm:inline-block">
                OfficialProductsLab
              </span>
            </Link>
          </div>

          {/* Center: Nav Links (desktop) */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/products"
              className="text-sm text-slate-700 hover:text-slate-900"
            >
              Shop
            </Link>
            <Link
              href="/products?type=ECOM"
              className="text-sm text-slate-700 hover:text-slate-900"
            >
              Equipment
            </Link>
            <Link
              href="/products?type=NUTRA"
              className="text-sm text-slate-700 hover:text-slate-900"
            >
              Supplements
            </Link>
            <Link
              href="/about"
              className="text-sm text-slate-700 hover:text-slate-900"
            >
              About
            </Link>
            <Link
              href="/article"
              className="text-sm text-slate-700 hover:text-slate-900"
            >
              Guides
            </Link>
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-lg hover:bg-slate-100"
              aria-label="Open search"
            >
              <Search className="w-5 h-5 text-slate-700" />
            </button>

            <Link
              href="/cart"
              className="relative p-2 rounded-lg hover:bg-slate-100"
            >
              <ShoppingCart className="w-5 h-5 text-slate-700" />
              <span className="absolute -top-1 -right-1 text-[10px] bg-rose-500 text-white rounded-full px-1 leading-none">
                3
              </span>
            </Link>

            {session ? (
              <Link
                href="/account"
                className="p-2 rounded-lg hover:bg-slate-100 flex items-center gap-2"
              >
                <User className="w-5 h-5 text-slate-700" />
                <span className="hidden sm:inline text-sm text-slate-700">
                  {session.user?.name ?? "Account"}
                </span>
              </Link>
            ) : (
              <Link
                href="/admin"
                className="px-3 py-2 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-black"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/90 backdrop-blur-sm border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            <Link
              href="/products"
              className="py-2 px-3 rounded-md hover:bg-slate-100"
            >
              Shop
            </Link>
            <Link
              href="/products?type=ECOM"
              className="py-2 px-3 rounded-md hover:bg-slate-100"
            >
              Equipment
            </Link>
            <Link
              href="/products?type=NUTRA"
              className="py-2 px-3 rounded-md hover:bg-slate-100"
            >
              Supplements
            </Link>
            <Link
              href="/about"
              className="py-2 px-3 rounded-md hover:bg-slate-100"
            >
              About
            </Link>
            <Link
              href="/article"
              className="py-2 px-3 rounded-md hover:bg-slate-100"
            >
              Guides
            </Link>
            <div className="pt-2 border-t border-slate-100 mt-2">
              <Link
                href="/admin"
                className="block px-3 py-2 rounded-md text-sm bg-slate-900 text-white text-center"
              >
                Sign In / Dashboard
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Search collapsible */}
      {searchOpen && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
            <SearchBar />
          </div>
        </div>
      )}
    </header>
  );
}
