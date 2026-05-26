import Link from "next/link";
import { Twitter, Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-12 md:mt-24 bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand + description */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="font-semibold text-white">
                OfficialProductsLab
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 max-w-sm">
              Curated gear and supplements to help you train harder, recover
              faster, and live better.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-md hover:bg-slate-900/60"
              >
                <Twitter className="w-5 h-5 text-slate-300" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 rounded-md hover:bg-slate-900/60"
              >
                <Instagram className="w-5 h-5 text-slate-300" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 rounded-md hover:bg-slate-900/60"
              >
                <Facebook className="w-5 h-5 text-slate-300" />
              </a>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h4 className="text-sm font-semibold text-white">Shop</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/products" className="hover:text-white">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?type=ECOM" className="hover:text-white">
                  Equipment
                </Link>
              </li>
              <li>
                <Link href="/products?type=NUTRA" className="hover:text-white">
                  Supplements
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-white">Support</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-white">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-white">
              Stay in the loop
            </h4>
            <p className="mt-3 text-sm text-slate-400">
              Sign up for exclusive deals and product drops.
            </p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                aria-label="Email address"
                type="email"
                placeholder="your@email.com"
                className="w-full px-3 py-2 rounded-md bg-slate-900/60 text-slate-100 placeholder-slate-400 focus:outline-none"
              />
              <button className="px-4 py-2 bg-amber-500 text-slate-900 rounded-md font-semibold">
                Join
              </button>
            </form>
            <p className="mt-4 text-xs text-slate-500">
              © {new Date().getFullYear()} OfficialProductsLab. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
