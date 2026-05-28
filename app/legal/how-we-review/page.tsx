import Link from "next/link";
import { HelpCircle, Star, ShieldAlert, List, AlertTriangle, RefreshCw, Mail, CheckCircle } from "lucide-react";

export default function HowWeReviewPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <article className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 sm:p-12">
        <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-orange-500 mb-3 block">
          Review Methodology
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          How We Review Products
        </h1>
        <p className="mt-4 text-sm font-semibold text-slate-500 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl w-fit">
          Effective Date: 2026/06/01
        </p>

        <section className="mt-10 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            Official Products Lab is a product information hub created to help shoppers research trending e-commerce products before visiting dedicated product information pages, product subdomains, affiliate offers, or third-party product pages.
          </p>
          <p>
            Our review process is designed to make product information easier to understand. We focus on product purpose, features, possible benefits, limitations, pricing notes, buyer suitability, safety reminders, and important details shoppers should check before making a buying decision.
          </p>
          <p className="font-semibold text-slate-900">
            This page explains how we select products, what we look for, how we organize reviews, and what readers should understand about our review process.
          </p>

          <hr className="border-slate-100" />

          {/* Section: Our Review Purpose */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Our Review Purpose
            </h2>
            <p>
              The goal of our product reviews is not to pressure readers into buying. Our goal is to help shoppers understand products more clearly before they continue to a product page or third-party offer.
            </p>
            <p>
              Many trending e-commerce products are promoted through sales pages, affiliate pages, product funnels, paid ads, or campaign-based offers. These pages may focus heavily on benefits, discounts, urgency, or product claims.
            </p>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-3">
              <p className="text-sm font-semibold text-slate-800">Our reviews aim to help readers understand:</p>
              <ul className="list-disc pl-6 space-y-1 text-slate-600 text-xs sm:text-sm">
                <li>What the product is and what problem it is designed to address</li>
                <li>How the product is positioned or promoted</li>
                <li>What features are clearly mentioned and what benefits are claimed</li>
                <li>What limitations buyers should consider</li>
                <li>Who may find the product useful and who may not need it</li>
                <li>What details should be checked before ordering</li>
              </ul>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Product Selection */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Product Selection
            </h2>
            <p>
              We may choose products based on buyer interest, product category relevance, search demand, market trends, affiliate availability, product visibility, or usefulness to online shoppers.
            </p>
            <p>Products may be selected because they are:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Trending in online advertising</li>
              <li>Frequently searched by shoppers</li>
              <li>Promoted through product pages or campaign offers</li>
              <li>Relevant to popular categories</li>
              <li>Useful for comparison-style research</li>
              <li>Connected to buyer-intent keywords</li>
              <li>Commonly discussed in product review searches</li>
              <li>Suitable for category-level product discovery</li>
            </ul>
            <p className="font-semibold text-slate-900">
              Product selection does not automatically mean that Official Products Lab endorses, owns, manufactures, or directly sells the product.
            </p>
            <p>
              Some products may also be included because readers are actively searching for information about price, features, complaints, legitimacy, benefits, usage, or where to buy.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Product Categories We Cover */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Product Categories We Cover
            </h2>
            <p>
              Official Products Lab may cover different types of e-commerce products across multiple categories, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Automotive products</li>
              <li>Beauty and personal care products</li>
              <li>Wellness and lifestyle products</li>
              <li>Home and kitchen gadgets</li>
              <li>Fitness and body support products</li>
              <li>Tech and smart gadgets</li>
              <li>Sleep support products</li>
              <li>Practical daily-use items</li>
            </ul>
            <p>
              Each category may require a slightly different review approach. For example, wellness and body-related products need more careful safety wording, while automotive or gadget products may require compatibility and usage reminders.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Review Criteria */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Review Criteria
            </h2>
            <p>
              When reviewing a product, we look at the information that matters most to shoppers before they visit a product page or make a purchase decision.
            </p>
            <p>Our review criteria may include:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 border border-slate-100 rounded-2xl p-5 text-sm">
              <ul className="space-y-1 text-slate-600 list-disc list-inside">
                <li>Product type and category</li>
                <li>Main use case and target audience</li>
                <li>Product features and claimed benefits</li>
                <li>Ease of use and setup/usage style</li>
                <li>Product specifications</li>
              </ul>
              <ul className="space-y-1 text-slate-600 list-disc list-inside">
                <li>Package or bundle details</li>
                <li>Pricing, discount, and offer clarity</li>
                <li>Refund, guarantee, and shipping details</li>
                <li>Buyer suitability and possible limitations</li>
                <li>Safety or compatibility notes</li>
              </ul>
            </div>
            <p className="font-semibold text-slate-900">
              We do not treat every product claim as a guaranteed fact. When a product page makes strong claims, we may soften the wording and explain it in a more cautious way.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: What We Check */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              What We Check
            </h2>
            <p>
              Our reviews are based on available product information. Depending on the product, we may review product landing pages, affiliate pages, seller-provided content, public product information, promotional materials, offer pages, or product information pages.
            </p>
            <p>When creating a review, we may check:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Product claims and descriptions</li>
              <li>Feature explanations and specifications</li>
              <li>Usage instructions and safety/compatibility information</li>
              <li>Pricing, package details, and discount claims</li>
              <li>Shipping notes and refund/guarantee policies</li>
              <li>Customer feedback claims where available</li>
              <li>Product page and offer page wording</li>
              <li>Third-party seller details where available</li>
            </ul>
            <p className="font-semibold text-slate-900">
              If certain information is not clearly listed, we do not invent it. We may state that the information is not clearly listed or recommend checking the current product page.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Review Structure */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Review Structure
            </h2>
            <p>
              Most product reviews on Official Products Lab follow a clear buyer-focused structure.
            </p>
            <p>A typical review may include:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 border border-slate-100 rounded-2xl p-5 text-sm">
              <ul className="space-y-1 text-slate-600 list-disc list-inside">
                <li>Introduction and quick buyer summary</li>
                <li>Quick verdict & Product overview</li>
                <li>How the product works & Key features</li>
                <li>Product specifications</li>
                <li>Pros and cons</li>
                <li>Who should consider/who may not need it</li>
              </ul>
              <ul className="space-y-1 text-slate-600 list-disc list-inside">
                <li>Price, packages, and availability</li>
                <li>Where to buy or learn more</li>
                <li>Reviews, feedback, and complaints</li>
                <li>Legitimacy discussion</li>
                <li>Comparison & Safety/Usage/Buyer notes</li>
                <li>Final verdict & FAQs</li>
              </ul>
            </div>
            <p>
              This structure helps readers scan the page easily and find the information they care about most.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Features and Benefits */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Features and Benefits
            </h2>
            <p>
              We explain product features in simple language so readers can understand what each feature may mean in practical use.
            </p>
            <p>
              When discussing benefits, we avoid treating every product claim as guaranteed. Instead of presenting strong claims as certain results, we use more careful wording when needed.
            </p>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-2">
              <p className="text-sm font-semibold text-slate-800">For example, we may use phrases such as:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 text-xs sm:text-sm list-inside list-disc">
                <li>May support</li>
                <li>Designed to help</li>
                <li>Intended to support</li>
                <li>Positioned as / Promoted as</li>
                <li>May be useful for</li>
                <li>Results may vary</li>
                <li>Buyers should check current details</li>
                <li>According to available information</li>
              </ul>
            </div>
            <p>
              This helps keep product information more realistic and buyer-friendly.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Pros and Cons */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Pros and Cons
            </h2>
            <p>
              Every useful product review should help readers understand both the strengths and limitations of a product. Our pros and cons sections are designed to highlight practical points such as ease of use, convenience, category fit, possible buyer value, pricing/page transparency, and compatibility considerations.
            </p>
            <p className="font-semibold text-slate-900">
              We do not add fake negative points just to make a review look balanced. We also do not ignore obvious limitations just to make a product look better.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Pricing and Availability */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Pricing and Availability
            </h2>
            <p>
              Product pricing, packages, discounts, shipping fees, stock availability, and guarantee terms may change over time.
            </p>
            <p>
              When pricing details are clearly available, we may include them in the review. When pricing is unclear or likely to change, we may recommend checking the current product information page.
            </p>
            <p className="font-semibold text-slate-900">
              Readers should always confirm pricing directly on the current product page or checkout page before ordering. We avoid guessing if these details are not clearly available.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Buyer Suitability */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Buyer Suitability
            </h2>
            <p>
              A product may be useful for one type of shopper but unnecessary or unsuitable for another. That is why we include buyer suitability sections where appropriate.
            </p>
            <p>
              We may explain who may consider a product based on intended use cases, budget, lifestyle fit, compatibility, safety, and limitations. We also clarify who may not need the product, helping readers manage expectations.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Safety and Usage Notes */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Safety and Usage Notes
            </h2>
            <p>
              Some product categories require extra caution. This is especially true for wellness, supplement, beauty, snoring, fitness, skin-care, hair-care, body-related, automotive, electronic, or technical products.
            </p>
            <p>
              For wellness, beauty, fitness, snoring, supplement, or body-related products, we remind readers to speak with a qualified professional before using a product if they have health or medical concerns. For automotive, gadget, or technical products, we remind readers to check compatibility, setup instructions, usage warnings, power requirements, and local laws.
            </p>
            <p className="font-semibold text-slate-900">
              Our reviews are not a replacement for professional advice.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: What We Avoid */}
          <div className="space-y-4 bg-red-50/50 border border-red-100 rounded-3xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-red-955 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              What We Avoid
            </h3>
            <p className="text-red-900/80 text-xs sm:text-sm mb-3">
              Official Products Lab aims to avoid misleading, unsupported, or exaggerated content. We do not intentionally create or publish:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-red-900/80 text-xs sm:text-sm list-inside list-disc">
              <li>Fake customer reviews or ratings</li>
              <li>Fake testimonials or endorsements</li>
              <li>Unsupported miracle claims</li>
              <li>Guaranteed result claims</li>
              <li>False scarcity or official claims</li>
              <li>Misleading medical claims</li>
              <li>Unverified doctor recommended claims</li>
              <li>Claims that a product works for everyone</li>
            </ul>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Customer Reviews and Complaints */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Customer Reviews and Complaints
            </h2>
            <p>
              When available, we may discuss customer reviews, feedback, complaints, or buyer concerns.
            </p>
            <p>
              We do not invent customer reviews or ratings. If verified customer feedback is not clearly available, we may explain what shoppers should look for when checking reviews (e.g., ease of use, delivery experience, product quality, refund experience, etc.). We encourage readers to look for repeated patterns rather than isolated comments.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Product Subdomains and Product Information Pages */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Product Subdomains and Product Information Pages
            </h2>
            <p>
              Some products covered on Official Products Lab may also have dedicated product information pages or product subdomains.
            </p>
            <p>
              A product subdomain does not automatically mean that Official Products Lab is the manufacturer or direct seller. Unless clearly stated, it should be understood as a dedicated product information page designed to help readers learn more before visiting an offer or checkout page.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Affiliate and Advertising Relationships */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Affiliate and Advertising Relationships
            </h2>
            <p>
              Some pages on Official Products Lab may include affiliate links, advertising links, sponsored placements, product links, or links to third-party offers. This means we may earn a commission or receive compensation if visitors click certain links or make purchases through those links, at no extra cost to them.
            </p>
            <p>
              Commercial relationships may influence which products are available for coverage or featured placement. However, our review process aims to keep product information clear, practical, and useful for readers.
            </p>
            <p className="text-slate-500 text-xs sm:text-sm">
              Readers should always review the current product page, seller terms, refund policy, shipping details, and checkout information before buying.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Final Verdicts */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Final Verdicts
            </h2>
            <p>
              Our final verdicts are based on available product information, not guaranteed results. A final verdict may consider product purpose, feature clarity, ease of use, buyer suitability, limitations, pricing transparency, and safety/compatibility notes.
            </p>
            <p className="font-semibold text-slate-900">
              A final verdict should not be understood as a promise that a product will work for everyone or deliver a specific result.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Content Updates and Corrections */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Content Updates and Corrections
            </h2>
            <p>
              Product information may change after a review is published. Sellers may update pricing, discounts, product pages, claims, refund policies, shipping information, package details, or availability.
            </p>
            <p>
              We may update reviews when new details emerge, links break, claims need softening, or correction requests are received. If you notice outdated or incorrect information, please review our <Link href="/legal/corrections" className="text-orange-500 hover:text-orange-600 font-bold transition-colors">Corrections Policy</Link> and contact us with the product name, URL, and a description of the issue.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Reader Responsibility */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Reader Responsibility
            </h2>
            <p>
              Official Products Lab is designed to help with product research, but readers are responsible for their own buying decisions.
            </p>
            <p>
              Before ordering any product, readers should check the current product page, price, packages, shipping terms, refund policy, guarantees, safety warnings, compatibility, and seek professional guidance where needed.
            </p>
            <p className="font-semibold text-slate-900">
              Our content should be used as a starting point for research, not the only source of information.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Contact Us */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Contact Us
            </h2>
            <p>
              If you have questions about how we review products or want to request a correction, you can contact us at:
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
