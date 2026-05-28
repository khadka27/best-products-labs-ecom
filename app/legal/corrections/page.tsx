import Link from "next/link";
import { CheckCircle, AlertTriangle, HelpCircle, FileText, Info, RefreshCw, Mail } from "lucide-react";

export default function CorrectionsPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <article className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 sm:p-12">
        <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-orange-500 mb-3 block">
          Accuracy & Updates
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Corrections Policy
        </h1>
        <p className="mt-4 text-sm font-semibold text-slate-500 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl w-fit">
          Effective Date: 2026/06/01
        </p>

        <section className="mt-10 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            Official Products Lab is a product information hub created to help shoppers research trending e-commerce products through product reviews, buyer guides, category pages, product summaries, and dedicated product information pages.
          </p>
          <p>
            We aim to provide clear, practical, and useful product information. However, product details can change over time. Prices, discounts, availability, shipping terms, refund policies, guarantee details, product claims, and offer pages may be updated by sellers, affiliate platforms, product pages, or third-party websites without notice.
          </p>
          <p className="font-semibold text-slate-900">
            This Corrections Policy explains how readers, product owners, advertisers, affiliate partners, or other relevant parties can report outdated, incomplete, unclear, or incorrect information on OfficialProductsLab.com.
          </p>

          <hr className="border-slate-100" />

          {/* Section: Our Commitment to Accuracy */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Our Commitment to Accuracy
            </h2>
            <p>
              Official Products Lab works to organize product information in a way that is easier for shoppers to understand before visiting a product page or third-party offer.
            </p>
            <p>Our content may include:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 border border-slate-100 rounded-2xl p-5 text-sm">
              <ul className="space-y-1 text-slate-600 list-disc list-inside">
                <li>Product overviews</li>
                <li>Feature summaries</li>
                <li>Pros and cons</li>
                <li>Price and availability notes</li>
                <li>Buyer suitability guidance</li>
              </ul>
              <ul className="space-y-1 text-slate-600 list-disc list-inside">
                <li>Usage and safety reminders</li>
                <li>Frequently Asked Questions</li>
                <li>Links to product information pages</li>
                <li>Links to third-party offers</li>
              </ul>
            </div>
            <p>
              We try to keep this information useful and reasonably current. However, we cannot guarantee that every page will always reflect the latest product details at all times.
            </p>
            <p className="font-semibold text-slate-900">
              Readers should always check the current product page, checkout page, seller terms, refund policy, shipping details, and guarantee information before making a purchase.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Why Corrections May Be Needed */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Why Corrections May Be Needed
            </h2>
            <p>
              Product information can change quickly, especially for products sold through online campaigns, affiliate offers, promotional pages, or third-party sellers.
            </p>
            <p>Corrections may be needed when:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>A product price, discount, or bundle offer changes</li>
              <li>Product availability or shipping details are updated</li>
              <li>Refund, return, or money-back guarantee terms change</li>
              <li>Product specifications are updated</li>
              <li>A product page or offer page is redesigned or updated</li>
              <li>A product link becomes broken or outdated</li>
              <li>A product claim needs clearer or softer wording</li>
              <li>A page contains outdated, incomplete, or unclear information</li>
              <li>A third-party offer no longer matches the details shown in our content</li>
            </ul>
            <p className="font-semibold text-slate-900">
              Because many product offers are controlled by third-party sellers or campaign sources, some details may change without direct notice to Official Products Lab.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: How to Request a Correction */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              How to Request a Correction
            </h2>
            <p>
              If you notice incorrect, outdated, incomplete, or unclear information on Official Products Lab, you can contact us and request a review.
            </p>
            <p>
              Please email us at: <a href="mailto:support@officialproductslab.com" className="text-orange-500 hover:text-orange-600 font-bold transition-colors">support@officialproductslab.com</a>
            </p>
            
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-2">
              <p className="text-sm font-semibold text-slate-800">To help us review your correction request faster, please include:</p>
              <ul className="list-disc pl-6 space-y-1 text-slate-600 text-xs sm:text-sm">
                <li>Product name</li>
                <li>Page URL where the issue appears</li>
                <li>A short explanation of the correction needed</li>
                <li>The specific section or statement you believe is outdated or incorrect</li>
                <li>Any updated source, product page, or supporting information you want us to review</li>
                <li>Your contact email in case we need clarification</li>
              </ul>
            </div>
            <p className="text-xs text-slate-400 italic">
              Please provide clear and specific details. General messages without enough context may take longer to review.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: What Happens After You Submit a Correction Request */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              What Happens After You Submit a Correction Request
            </h2>
            <p>
              When we receive a correction request, we may review the page, compare the information with available sources, check current product pages where possible, and decide whether an update is needed.
            </p>
            <p>Our update process may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Reviewing the reported page and checking the relevant product information</li>
              <li>Comparing current product details with existing content</li>
              <li>Updating outdated or unclear wording</li>
              <li>Removing unsupported or unverifiable claims</li>
              <li>Fixing broken or incorrect links</li>
              <li>Clarifying pricing, availability, or guarantee notes</li>
              <li>Adding a stronger disclaimer where needed</li>
              <li>Leaving the content unchanged if the request is not supported</li>
            </ul>
            <p className="font-semibold text-slate-900">
              We do not guarantee that every correction request will result in a change. Updates are made when we believe a correction is necessary, supported, and useful for readers.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Product Pricing and Availability Updates */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Product Pricing and Availability Updates
            </h2>
            <p>
              Product pricing, discount campaigns, bundles, shipping fees, and stock availability can change frequently.
            </p>
            <p>
              If a review mentions pricing or package information, that information may become outdated after publication. In many cases, we may use general wording such as “pricing may vary” or “check the current product page” to avoid misleading readers.
            </p>
            <p className="font-semibold text-slate-900">
              Official Products Lab is not responsible for price changes, offer changes, stock changes, or checkout updates made by third-party sellers or product platforms.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Product Claims and Wording Corrections */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Product Claims and Wording Corrections
            </h2>
            <p>
              Some product pages, affiliate pages, or promotional materials may use strong claims about benefits, results, performance, or user experiences. If we identify claims that seem too strong, unclear, unsupported, or potentially misleading, we may revise the wording to make it more cautious and buyer-friendly.
            </p>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-2">
              <p className="text-sm font-semibold text-slate-800">For example, we may change stronger claims into wording such as:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 text-xs sm:text-sm list-inside list-disc">
                <li>May support</li>
                <li>Designed to help</li>
                <li>Intended to support</li>
                <li>Positioned as / Promoted as</li>
                <li>Results may vary</li>
                <li>Buyers should check current details</li>
                <li>According to available product information</li>
              </ul>
            </div>
            <p className="font-semibold text-slate-900">
              We avoid presenting unsupported miracle claims, guaranteed results, fake proof, fake ratings, fake reviews, or unverified certifications as facts.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Broken Links and Product Page Issues */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Broken Links and Product Page Issues
            </h2>
            <p>
              If you find a broken link, incorrect product page link, redirect issue, or confusing button placement, please report it to us.
            </p>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-2">
              <p className="text-sm font-semibold text-slate-800">When reporting a link issue, please include:</p>
              <ul className="list-disc pl-6 space-y-1 text-slate-600 text-xs sm:text-sm">
                <li>Page URL where the link appears</li>
                <li>The button or link text & Product name</li>
                <li>What happens when you click the link</li>
                <li>The correct link if you know it</li>
              </ul>
            </div>
            <p>We may update or remove broken links when we confirm the issue.</p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Third-Party Website Limitations */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Third-Party Website Limitations
            </h2>
            <p>
              Official Products Lab may link to product information pages, product subdomains, affiliate offer pages, checkout pages, promotional product websites, or third-party seller pages. We do not control third-party websites.
            </p>
            <p className="font-semibold text-slate-900">
              This means we cannot directly control product pricing, availability, checkout processes, shipping timelines, refund decisions, guarantee claims, customer support, product quality, seller policies, or third-party website updates.
            </p>
            <p>
              If your issue relates to an order, payment, refund, shipping delay, subscription, or product support problem, you may need to contact the product seller or checkout provider directly. However, if you believe our content or link creates confusion, you can still contact us and request a review.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Correction Review Time */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Correction Review Time
            </h2>
            <p>
              We try to review correction requests within a reasonable time.
            </p>
            <p className="font-semibold text-slate-900">
              In most cases, correction requests may be reviewed within 2–7 business days, depending on the complexity of the issue, availability of supporting information, and current request volume.
            </p>
            <p>
              Some requests may take longer if they require product research, offer verification, link checking, or comparison with multiple sources.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Updates to Published Content */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Updates to Published Content
            </h2>
            <p>
              When we update a page, we may make small edits or larger revisions depending on the issue.
            </p>
            <p>
              Updates may include correcting outdated details, rewriting unclear wording, removing unsupported claims, updating price or availability notes, adding missing buyer reminders, fixing broken links, updating product page CTAs, adding disclaimers, improving safety/compatibility notes, or clarifying disclosures.
            </p>
            <p className="font-semibold text-slate-900">
              We may not always publish a separate update notice for every small correction.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Reader Responsibility */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Reader Responsibility
            </h2>
            <p>
              Official Products Lab is designed to support product research, but readers are responsible for verifying current product details before making a purchase.
            </p>
            <p className="font-semibold text-slate-900">
              Before ordering any product, readers should always check the current product page or checkout page for product details, price, discount, package information, shipping terms, refund policy, guarantee terms, seller info, usage instructions, safety warnings, and compatibility requirements.
            </p>
            <p>
              Our content should be used as a helpful starting point, not the only source of information before buying.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Changes to This Corrections Policy */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Changes to This Corrections Policy
            </h2>
            <p>
              We may update this Corrections Policy from time to time to reflect changes in our content process, product coverage, review practices, affiliate relationships, website structure, or legal requirements.
            </p>
            <p className="font-semibold text-slate-900">
              When we update this page, we will revise the “Effective Date” at the top. Your continued use of Official Products Lab after updates are posted means you accept the updated Corrections Policy.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Contact Us */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Contact Us
            </h2>
            <p>
              To request a correction or report outdated product information, contact us at:
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
