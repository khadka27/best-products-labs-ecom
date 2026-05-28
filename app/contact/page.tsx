import { Metadata } from "next";
import Link from "next/link";
import { Mail, HelpCircle, FileText, Lock, Globe, ShieldAlert, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Official Products Lab",
  description: "Get in touch with Official Products Lab for questions, correction requests, privacy requests, or business inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        {/* Header Section */}
        <div className="text-center mb-12 fade-in-up">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-orange-500 mb-3 block">
            Support & Inquiry
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
            Contact <span className="text-orange-600">Us</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Official Products Lab is a product information hub created to help shoppers research trending e-commerce products through clear reviews, buyer guides, category pages, product summaries, and dedicated product information pages.
          </p>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto mt-4">
            If you have a question, correction request, privacy concern, or issue related to product information on our website, you can contact us using the details below.
          </p>
        </div>

        {/* Quick Contact Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 mb-10 fade-in-up">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
            <Mail className="h-6 w-6 text-orange-500" />
            How to Contact Official Products Lab
          </h2>
          <p className="text-slate-600 mb-6">
            For general questions, correction requests, privacy-related requests, or product information concerns, please email us at:
          </p>
          
          <div className="bg-[#FAF7F2] border border-slate-100 rounded-2xl p-6 mb-6 max-w-md">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm text-orange-500">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-extrabold uppercase tracking-wider">Email Support</p>
                <a href="mailto:support@officialproductslab.com" className="text-lg sm:text-xl font-bold text-orange-600 hover:text-orange-700 transition-colors">
                  support@officialproductslab.com
                </a>
              </div>
            </div>
          </div>

          <p className="text-sm font-semibold text-slate-500 border-l-4 border-orange-500 pl-4 py-1">
            We aim to review messages as soon as possible. In most cases, you can expect a response within <span className="text-slate-800">2–5 business days</span>, depending on the nature of your request and message volume.
          </p>
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 fade-in-up">
          {/* Box 1: What We Cover */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-orange-500" />
              What You Can Contact Us About
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Common reasons to contact us include:
            </p>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-inside list-disc">
              <li>Questions about our product reviews or buyer guides</li>
              <li>Requests to correct outdated product information</li>
              <li>Concerns about pricing, availability, or offer details</li>
              <li>Reports of broken links or incorrect product page links</li>
              <li>Privacy-related requests or cookie-related questions</li>
              <li>Affiliate disclosure or advertising disclosure questions</li>
              <li>General website feedback or business inquiries</li>
            </ul>
            <p className="text-xs text-slate-400 mt-4 italic">
              Please include enough detail in your message so we can understand your request clearly.
            </p>
          </div>

          {/* Box 2: Response Time Details */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-teal-600" />
                Response Time Details
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                We do our best to respond to genuine messages within 2–5 business days. Response times may vary depending on:
              </p>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-inside list-disc mb-4">
                <li>Overall message volume</li>
                <li>Complexity of the request or verification steps</li>
                <li>Product research or correction review requirements</li>
                <li>Privacy and identity verification needs</li>
                <li>Business inquiry type</li>
              </ul>
            </div>
            <p className="text-xs text-slate-400 border-t border-slate-100 pt-4 italic">
              Note: Sending repeated messages may delay the review process.
            </p>
          </div>
        </div>

        {/* Detailed Guidelines Block */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 space-y-8 fade-in-up">
          
          {/* Section: Product Information Correction Requests */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
              <FileText className="h-6 w-6 text-orange-500" />
              Product Information Correction Requests
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Product details can change over time. Prices, discounts, packages, shipping details, refund policies, availability, and guarantee terms may be updated by third-party sellers, affiliate platforms, or product offer pages without notice.
            </p>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-3">
              <p className="text-sm font-semibold text-slate-800">
                If you notice outdated, incorrect, incomplete, or unclear product information on Official Products Lab, please contact us and include:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-slate-600 text-xs sm:text-sm">
                <li>The product name</li>
                <li>The page URL where you found the issue</li>
                <li>A short explanation of what needs correction</li>
                <li>Any source or updated information you want us to review</li>
              </ul>
            </div>
            <p className="text-slate-600 text-sm">
              We will review correction requests and update content when we believe changes are necessary and supported by available information.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Privacy Requests */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
              <Lock className="h-6 w-6 text-orange-500" />
              Privacy Requests
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              If you have a privacy-related question or want to make a data request, you can contact us at: <a href="mailto:support@officialproductslab.com" className="text-orange-500 hover:text-orange-600 font-bold transition-colors">support@officialproductslab.com</a>.
            </p>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
              <p className="text-sm font-semibold text-slate-800 mb-2">Privacy-related requests may include:</p>
              <ul className="list-disc pl-6 space-y-1 text-slate-600 text-xs sm:text-sm">
                <li>Requesting access to personal information we may hold about you</li>
                <li>Asking us to correct or delete your information</li>
                <li>Unsubscribing from email updates</li>
                <li>Asking questions about cookies or tracking</li>
                <li>Requesting information about how your data may be used</li>
              </ul>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm">
              For more details, please review our <Link href="/legal/privacy" className="text-orange-500 hover:text-orange-600 font-bold transition-colors">Privacy Policy</Link> and <Link href="/legal/cookies" className="text-orange-500 hover:text-orange-600 font-bold transition-colors">Cookie Policy</Link>.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Third-Party Product Pages and Offers */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
              <Globe className="h-6 w-6 text-orange-500" />
              Third-Party Product Pages and Offers
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Official Products Lab may link to product information pages, product subdomains, affiliate pages, third-party product offers, checkout pages, or promotional product websites.
            </p>
            <p className="text-slate-600 text-sm sm:text-base">
              Please note that we do not control third-party sellers, checkout pages, shipping, returns, refunds, guarantees, payment processing, or customer service for external product websites.
            </p>
            <p className="font-semibold text-slate-900 text-sm">
              If your question is about an order, payment, refund, delivery, subscription, or product support issue, you may need to contact the product seller or checkout provider directly.
            </p>
            <p className="text-slate-600 text-sm">
              However, if you believe one of our links is incorrect, outdated, misleading, or broken, you can report it to us.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Business and Partnership Inquiries */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
              <Globe className="h-6 w-6 text-orange-500" />
              Business and Partnership Inquiries
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              For business, advertising, sponsored placement, affiliate, or partnership inquiries, you can contact us at: <a href="mailto:support@officialproductslab.com" className="text-orange-500 hover:text-orange-600 font-bold transition-colors">support@officialproductslab.com</a>.
            </p>
            <p className="text-slate-600 text-sm">
              Please include your name, company name if applicable, website, product details, and the purpose of your inquiry. We review partnership opportunities carefully and may not respond to every promotional request.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Important Note & Disclaimer */}
          <div className="space-y-4 bg-orange-50/50 border border-orange-100 rounded-3xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-orange-955 flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-orange-600" />
              Important Security Note
            </h3>
            <p className="text-orange-900/80 text-xs sm:text-sm leading-relaxed">
              Please do not send sensitive personal information through email or contact forms unless necessary. This includes payment details, passwords, private medical information, government identification numbers, or confidential account information.
            </p>
            <p className="text-orange-900/80 text-xs sm:text-sm leading-relaxed font-semibold">
              Official Products Lab provides product reviews, buyer guides, product category pages, and product information resources for general research purposes only. Our content is not professional advice, and visitors should always verify current product details, pricing, terms, and policies before making a purchase decision.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Contact Details Footer Block */}
          <div className="pt-4">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.25em] text-slate-400 mb-4">
              Official Products Lab Contact Details
            </h3>
            <div className="bg-[#FAF7F2] border border-slate-100 rounded-2xl p-6 space-y-2 text-slate-800 text-sm font-semibold max-w-md">
              <p>Official Products Lab</p>
              <p>Website: <a href="https://officialproductslab.com" className="text-orange-500 hover:text-orange-600 transition-colors">https://officialproductslab.com</a></p>
              <p>Email: <a href="mailto:support@officialproductslab.com" className="text-orange-500 hover:text-orange-600 transition-colors">support@officialproductslab.com</a></p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
