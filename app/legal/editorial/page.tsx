import Link from "next/link";
import { ShieldCheck, HelpCircle, FileText, CheckCircle, AlertTriangle, RefreshCw, Mail } from "lucide-react";

export default function EditorialPolicyPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <article className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 sm:p-12">
        <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-orange-500 mb-3 block">
          Editorial & Standards
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Editorial Policy
        </h1>
        <p className="mt-4 text-sm font-semibold text-slate-500 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl w-fit">
          Effective Date: 2026/06/01
        </p>

        <section className="mt-10 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            Official Products Lab is a product information hub created to help shoppers research trending e-commerce products before visiting dedicated product information pages, product subdomains, affiliate offers, or third-party product pages.
          </p>
          <p>
            This Editorial Policy explains how we create, organize, review, and update content on <a href="https://officialproductslab.com" className="text-orange-500 hover:text-orange-600 font-bold transition-colors">OfficialProductsLab.com</a>. Our goal is to provide clear, practical, and buyer-focused product information while avoiding unsupported claims, fake proof, exaggerated promises, and misleading product statements.
          </p>

          <hr className="border-slate-100" />

          {/* Section: Our Editorial Purpose */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Our Editorial Purpose
            </h2>
            <p>
              The main purpose of Official Products Lab is to help readers understand products before making a buying decision.
            </p>
            <p>
              Many online products are promoted through sales pages, affiliate pages, product funnels, campaign offers, or checkout pages. These pages can sometimes be difficult for shoppers to compare because they may focus heavily on benefits, discounts, or urgency.
            </p>
            <p>Our editorial approach is designed to organize product information into a clearer format so readers can better understand:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>What the product is</li>
              <li>What problem it is designed to address</li>
              <li>How the product is described or positioned</li>
              <li>What features are clearly mentioned</li>
              <li>What benefits are claimed or suggested</li>
              <li>What limitations buyers should consider</li>
              <li>Who the product may be suitable for</li>
              <li>Who may not need the product</li>
              <li>What details should be checked before ordering</li>
            </ul>
            <p className="font-semibold text-slate-900">
              Our content is written for general product research only. It is not professional advice and should not replace the reader’s own judgment, research, or guidance from qualified professionals where needed.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Content Sources */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Content Sources
            </h2>
            <p>
              Official Products Lab may create content using information from different available sources. These sources may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Product landing pages</li>
              <li>Affiliate sales pages</li>
              <li>Product offer pages</li>
              <li>Seller-provided product information</li>
              <li>Publicly available product descriptions</li>
              <li>Product information pages</li>
              <li>Product packaging details where available</li>
              <li>Brand or product promotional materials</li>
              <li>Customer feedback summaries where available</li>
              <li>Third-party product pages</li>
              <li>Public category research</li>
              <li>Internal product research notes</li>
            </ul>
            <p>
              When product information is taken from an affiliate page, offer page, or seller-provided source, we do not simply copy the content. We rewrite, reorganize, and present the information in a more buyer-focused way.
            </p>
            <p className="font-semibold text-slate-900">
              Our goal is to help readers understand the product more clearly, not to repeat every claim exactly as it appears on a sales page.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: How We Create Product Reviews */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              How We Create Product Reviews
            </h2>
            <p>
              Product reviews on Official Products Lab are structured to answer the questions shoppers usually have before visiting a product page.
            </p>
            <p>A typical review may include:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 border border-slate-100 rounded-2xl p-5 text-sm">
              <ul className="space-y-1 text-slate-600 list-disc list-inside">
                <li>Product overview</li>
                <li>How the product works</li>
                <li>Key features</li>
                <li>Product specifications</li>
                <li>Pros and cons</li>
                <li>Price and availability notes</li>
                <li>Who may consider the product</li>
              </ul>
              <ul className="space-y-1 text-slate-600 list-disc list-inside">
                <li>Who may not need the product</li>
                <li>Customer feedback discussion</li>
                <li>Legitimacy and buyer trust notes</li>
                <li>Comparison with similar types</li>
                <li>Safety, usage, and reminders</li>
                <li>Final verdict & FAQs</li>
              </ul>
            </div>
            <p>
              We aim to make each review useful, easy to scan, and practical for readers who want to compare product details before clicking through to a dedicated product information page or third-party offer.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Review Method */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Review Method
            </h2>
            <p>
              Our review method focuses on organizing available product information into clear buyer-focused sections. When reviewing a product, we look at factors such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Product category and intended use</li>
              <li>Main buyer problem and features clearly mentioned</li>
              <li>Claimed benefits and product specifications where available</li>
              <li>Usage instructions and package/bundle details</li>
              <li>Pricing, guarantee, refund policy, and shipping details</li>
              <li>Buyer suitability and possible limitations</li>
              <li>Safety, compatibility, and current product page availability</li>
            </ul>
            <p>
              We also consider whether the product information is clear, incomplete, overly promotional, or missing important buyer details.
            </p>
            <p className="font-semibold text-slate-900">
              If some information is not clearly available, we may say that it is “not clearly listed” or recommend checking the current product page for the latest details.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Claim Control */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Claim Control
            </h2>
            <p>
              Official Products Lab aims to avoid unsupported, exaggerated, or misleading product claims. Product pages and affiliate pages may sometimes use strong claims, urgent wording, or benefit-heavy language. When creating our content, we may soften or clarify such language to make it more responsible and realistic.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="p-6 bg-red-50/50 rounded-2xl border border-red-100">
                <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2 text-sm sm:text-base">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  Wording We Avoid
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-red-800/90 list-inside list-disc">
                  <li>Guaranteed results</li>
                  <li>Miracle solution / Instant transformation</li>
                  <li>Works for everyone</li>
                  <li>Clinically proven (unless supported)</li>
                  <li>FDA approved / Doctor recommended</li>
                  <li>Risk-free (unless terms support it)</li>
                  <li>Cures, treats, or prevents disease</li>
                  <li>Official manufacturer website (unless verified)</li>
                </ul>
              </div>

              <div className="p-6 bg-teal-50/50 rounded-2xl border border-teal-100">
                <h3 className="font-bold text-teal-900 mb-3 flex items-center gap-2 text-sm sm:text-base">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  Wording We Prefer
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-teal-800/90 list-inside list-disc">
                  <li>May support / Designed to help</li>
                  <li>Intended to support</li>
                  <li>Positioned as / Promoted as</li>
                  <li>May be useful for</li>
                  <li>Results may vary</li>
                  <li>Buyers should check current details</li>
                  <li>According to available product information</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Health, Wellness, Beauty, Fitness, and Body-Related Content */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Health, Wellness, Beauty, Fitness, and Body-Related Content
            </h2>
            <p>
              Some products covered on Official Products Lab may relate to wellness, supplements, beauty, personal care, sleep support, snoring, weight management, fitness, posture, skin care, hair care, or other body-related topics. For these categories, we take extra care with wording.
            </p>
            <p>
              Our content should not be treated as medical advice, diagnosis, treatment guidance, or a replacement for professional healthcare advice.
            </p>
            <p className="font-semibold text-slate-900">
              When relevant, we include reminders that users should speak with a qualified professional before using a product if they have medical conditions, allergies, skin sensitivities, or other health concerns. We do not intentionally present wellness or body-related products as guaranteed cures, treatments, or medical solutions.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Automotive, Gadget, and Technical Content */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Automotive, Gadget, and Technical Content
            </h2>
            <p>
              Official Products Lab may also cover automotive accessories, OBD2 devices, electronic tools, smart gadgets, home devices, or other technical products. For these categories, we avoid presenting product information as professional technical, automotive, safety, or repair advice.
            </p>
            <p>
              When relevant, we remind readers to check compatibility, setup instructions, charging/power requirements, safety warnings, warranty details, and local laws.
            </p>
            <p className="font-semibold text-slate-900">
              For automotive products, we avoid guaranteed fuel-saving or performance claims unless clearly supported by reliable evidence. Vehicle-related outcomes can depend on driving habits, maintenance, compatibility, road conditions, and proper use.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Product Specifications and Pricing */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Product Specifications and Pricing
            </h2>
            <p>
              Product specifications, pricing, bundle details, discounts, availability, and guarantees may change over time. When available, we may include specification details such as product type, category, size, packaging, compatibility, and availability.
            </p>
            <p>
              If pricing or package information is not clearly available, we do not invent it. Instead, we may state that pricing may vary or that readers should check the current product page.
            </p>
            <p className="font-semibold text-slate-900">
              Readers should always verify price, discount, shipping, refund policy, and package details directly on the current product page or checkout page before ordering.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Customer Reviews and Feedback */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Customer Reviews and Feedback
            </h2>
            <p>
              Official Products Lab may discuss customer reviews, feedback, complaints, or user experiences when that information is available from provided product sources or public product information.
            </p>
            <p className="font-semibold text-slate-900">
              We do not create fake customer reviews, fake ratings, fake testimonials, or fake endorsements.
            </p>
            <p>
              If verified customer review data is not clearly available, we may discuss the types of feedback shoppers should look for (e.g., ease of use, product quality, delivery experience, refund process, etc.). We encourage readers not to rely on one extremely positive or negative comment.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Affiliate Links and Commercial Relationships */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Affiliate Links and Commercial Relationships
            </h2>
            <p>
              Official Products Lab may include affiliate links, product links, sponsored links, advertising links, product subdomain links, or third-party offer links. This means we may earn a commission or receive compensation if readers click certain links or make purchases through those links, at no extra cost to them.
            </p>
            <p>
              Commercial relationships may influence which products are available for coverage or featured placement. However, our editorial goal is to present product information in a way that is clear, practical, and useful for readers.
            </p>
            <p className="text-slate-500 text-xs sm:text-sm">
              For more information, readers can review our <Link href="/legal/affiliate" className="text-orange-500 hover:text-orange-600 font-bold transition-colors">Affiliate Disclosure</Link> and <Link href="/legal/advertising" className="text-orange-500 hover:text-orange-600 font-bold transition-colors">Advertising Disclosure</Link> pages.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Product Subdomains and Dedicated Product Information Pages */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Product Subdomains and Dedicated Product Information Pages
            </h2>
            <p>
              Some products featured on Official Products Lab may have dedicated product information pages or subdomains. These pages may provide more detailed product-specific information.
            </p>
            <p>
              A dedicated product information page or product subdomain does not automatically mean that Official Products Lab is the manufacturer or direct seller of the product. Unless clearly stated, these pages should be understood as product information resources created to help users learn more before visiting an offer page or making a decision.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Content Updates */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Content Updates
            </h2>
            <p>
              Product information can change over time. Sellers may update prices, discounts, package options, refund policies, shipping terms, availability, product pages, claims, or checkout details.
            </p>
            <p>Because of this, Official Products Lab may update content when product details or pricing changes, correction requests are received, or links become broken.</p>
            <p className="font-semibold text-slate-900">
              We try to keep content useful and reasonably current, but we cannot guarantee that every page will always reflect the latest product details at all times. Readers should always check the current product page before ordering.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Corrections Policy */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Corrections Policy
            </h2>
            <p>
              We welcome correction requests from readers, product owners, advertisers, affiliate partners, or other relevant parties. If you believe a page contains outdated, incomplete, incorrect, unclear, or misleading information, please review our <Link href="/legal/corrections" className="text-orange-500 hover:text-orange-600 font-bold transition-colors">Corrections Policy</Link> and contact us.
            </p>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-2">
              <p className="text-sm font-semibold text-slate-800">Please include:</p>
              <ul className="list-disc pl-6 space-y-1 text-slate-600 text-xs sm:text-sm">
                <li>Product name</li>
                <li>Page URL</li>
                <li>Description of the issue</li>
                <li>Suggested correction & supporting source if available</li>
              </ul>
            </div>
            <p className="text-sm">
              Correction requests can be sent to: <a href="mailto:support@officialproductslab.com" className="text-orange-500 hover:text-orange-600 font-bold transition-colors">support@officialproductslab.com</a>
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Editorial Independence and Limitations */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Editorial Independence and Limitations
            </h2>
            <p>
              Official Products Lab aims to keep content useful, transparent, and buyer-focused. However, our content is based on available product information, and some product details may come from sellers, affiliate pages, promotional pages, or product offer pages.
            </p>
            <p>
              We do not guarantee that every seller claim is independently verified. Readers should use our content as a starting point for product research, not as the only source of information before buying.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Contact Us */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Contact Us
            </h2>
            <p>
              If you have questions about this Editorial Policy or want to request a correction, you can contact us at:
            </p>
            <div className="bg-[#FAF7F2] border border-slate-100 rounded-2xl p-5 space-y-2 text-slate-800 text-xs sm:text-sm font-semibold max-w-md">
              <p>Official Products Lab</p>
              <p>Email: <a href="mailto:support@officialproductslab.com" className="text-orange-500 hover:text-orange-600 transition-colors">support@officialproductslab.com</a></p>
              <p>Website: <a href="https://officialproductslab.com" className="text-orange-500 hover:text-orange-600 transition-colors">https://officialproductslab.com</a></p>
            </div>
          </div>

        </section>
      </article>
    </main>
  );
}
