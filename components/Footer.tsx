"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Compass,
  Layers,
  BookOpen,
} from "lucide-react";

const exploreLinks = [
  { label: "Product Reviews", href: "/products" },
  { label: "Product Categories", href: "/products" },
  { label: "Latest Products", href: "/products" },
  { label: "Buyer Guides", href: "/article" },
  { label: "Featured Product Pages", href: "/products" },
];

const categoryLinks = [
  { label: "Automotive Products", href: "/products" },
  { label: "Beauty & Personal Care", href: "/products" },
  { label: "Wellness & Lifestyle", href: "/products" },
  { label: "Home & Kitchen Gadgets", href: "/products" },
  { label: "Tech & Smart Gadgets", href: "/products" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Editorial Process", href: "/legal/editorial" },
  { label: "How We Review Products", href: "/legal/how-we-review" },
];

const legalLinks = [
  { label: "Affiliate Disclosure", href: "/legal/affiliate" },
  { label: "Advertising Disclosure", href: "/legal/advertising" },
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms and Conditions", href: "/legal/terms" },
  { label: "Disclaimer", href: "/legal/disclaimer" },
  { label: "Cookie Policy", href: "/legal/cookies" },
  { label: "Corrections Policy", href: "/legal/corrections" },
  { label: "External Links Policy", href: "/legal/external-links" },
];

const socials = [
  { icon: Twitter, label: "Twitter / X", href: "#", color: "hover:bg-slate-700" },
  { icon: Instagram, label: "Instagram", href: "#", color: "hover:bg-slate-700" },
  { icon: Facebook, label: "Facebook", href: "#", color: "hover:bg-slate-700" },
  { icon: Youtube, label: "YouTube", href: "#", color: "hover:bg-slate-700" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribing(true);
    setTimeout(() => {
      setSubscribed(true);
      setSubscribing(false);
    }, 800);
  };

  return (
    <footer className="mt-12 md:mt-24 relative overflow-hidden bg-[#1E1E1E] text-slate-300">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-orange-600/5 blur-3xl pointer-events-none" />

      {/* ── Main footer content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10">

          {/* Brand column (wider) */}
          <div className="md:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 group mb-5" aria-label="OfficialProductsLab home">
              <img
                src="/logo.png"
                alt="OfficialProductsLab logo"
                className="h-14 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <span className="font-bold text-white text-base tracking-tight group-hover:text-orange-400 transition-colors duration-200">
                OfficialProductsLab
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              Official Products Lab is a product information hub that helps shoppers explore trending e-commerce products through clear reviews, category guides, buyer notes, and dedicated product information pages.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5 mb-6">
              <a
                href="mailto:support@officialproductslab.com"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-orange-400 transition-colors duration-200 group"
              >
                <Mail className="w-4 h-4 text-slate-500 group-hover:text-orange-400 transition-colors" />
                support@officialproductslab.com
              </a>
              <div className="flex items-center gap-2.5 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-slate-500" />
                United States
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-transparent transition-all duration-200 hover:bg-orange-500"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore links */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest mb-5">
              <Compass className="w-3.5 h-3.5 text-orange-500" />
              Explore
            </h3>
            <ul className="space-y-3">
              {exploreLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 hover:pl-1 inline-block transition-all"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories links */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest mb-5">
              <Layers className="w-3.5 h-3.5 text-orange-500" />
              Categories
            </h3>
            <ul className="space-y-3">
              {categoryLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 hover:pl-1 inline-block transition-all"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal links */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest mb-5">
              <BookOpen className="w-3.5 h-3.5 text-orange-500" />
              Company
            </h3>
            <ul className="space-y-3 mb-8">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 hover:pl-1 inline-block transition-all"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.slice(0, 2).map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200 hover:pl-1 inline-block transition-all"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest mb-2">
              <Mail className="w-3.5 h-3.5 text-orange-500" />
              Get Research Updates
            </h3>
            <p className="text-sm text-slate-400 mb-5 leading-relaxed">
              Readers can subscribe to receive new product reviews, buyer guides, and category updates from Official Products Lab.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-orange-500/10 border border-orange-500/30">
                <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-orange-300">You&apos;re in!</p>
                  <p className="text-xs text-slate-400">Check your inbox soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2.5" id="newsletter-form">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500/50 transition-all duration-200"
                    required
                  />
                </div>
                <button
                  id="newsletter-submit"
                  type="submit"
                  disabled={subscribing}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold bg-orange-500 text-white hover:bg-orange-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {subscribing ? (
                    <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  ) : (
                    <>
                      Subscribe <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            <p className="mt-3 text-xs text-slate-500 leading-relaxed">
              No spam. You can unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 order-2 sm:order-1">
            © {new Date().getFullYear()} OfficialProductsLab. All rights reserved.
          </p>

          <div className="flex items-center gap-4 order-1 sm:order-2 flex-wrap justify-center">
            {legalLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
