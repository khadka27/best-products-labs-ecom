import Link from "next/link";
import { Link2, HelpCircle, FileText, Settings, Globe, AlertTriangle, ShieldCheck, Mail } from "lucide-react";

export default function ExternalLinksPolicyPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <article className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 sm:p-12">
        <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-orange-500 mb-3 block">
          Navigation & Transparency
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          External Links Policy
        </h1>
        <p className="mt-4 text-sm font-semibold text-slate-500 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl w-fit">
          Effective Date: 2026/06/01
        </p>

        <section className="mt-10 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            Official Products Lab is a product information hub created to help shoppers research trending e-commerce products through reviews, buyer guides, category pages, product summaries, and dedicated product information pages.
          </p>
          <p>
            Our website may include links to external websites, product subdomains, affiliate pages, third-party product offers, checkout pages, advertising pages, seller websites, and other online resources. This External Links Policy explains how external links may appear on <a href="https://officialproductslab.com" className="text-orange-500 hover:text-orange-600 font-bold transition-colors">OfficialProductsLab.com</a> and what visitors should understand before clicking them.
          </p>

          <hr className="border-slate-100" />

          {/* Section: Why We Use External Links */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Why We Use External Links
            </h2>
            <p>
              External links are used to help readers continue their product research beyond the information available on Official Products Lab.
            </p>
            <p>We may include external links to help visitors check:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Product information pages and product subdomains</li>
              <li>Third-party product websites and affiliate offer pages</li>
              <li>Checkout pages and seller websites</li>
              <li>Product support pages and advertising landing pages</li>
              <li>Public product sources and helpful reference pages</li>
            </ul>
            <p className="font-semibold text-slate-900">
              These links help visitors check current product details, pricing, packages, availability, refund terms, shipping information, product instructions, and seller policies.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Links to Product Subdomains */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Links to Product Subdomains
            </h2>
            <p>
              Some products featured on Official Products Lab may have dedicated product information pages or product subdomains.
            </p>
            <p>For example, a review article may include buttons such as:</p>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-xs sm:text-sm font-mono text-slate-600 flex flex-wrap gap-3">
              <span className="px-3 py-1.5 bg-white border border-slate-100 rounded-lg shadow-sm">View Product Page</span>
              <span className="px-3 py-1.5 bg-white border border-slate-100 rounded-lg shadow-sm">Check Current Price</span>
              <span className="px-3 py-1.5 bg-white border border-slate-100 rounded-lg shadow-sm">View Product Information Page</span>
              <span className="px-3 py-1.5 bg-white border border-slate-100 rounded-lg shadow-sm">Continue to Product Details</span>
              <span className="px-3 py-1.5 bg-white border border-slate-100 rounded-lg shadow-sm">See Product Availability</span>
            </div>
            <p>
              These links may take visitors to a product-specific page that provides additional product details, usage information, FAQs, pricing notes, and links to third-party offers where applicable.
            </p>
            <p className="font-semibold text-slate-900">
              A product subdomain or dedicated product information page does not automatically mean that Official Products Lab is the manufacturer, product owner, or direct seller. Unless clearly stated, these pages should be understood as product information resources.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Third-Party Websites */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Third-Party Websites
            </h2>
            <p>
              Official Products Lab may link to websites that are owned, operated, or controlled by third parties. Once you leave Official Products Lab and visit a third-party website, that website’s own terms, privacy policy, refund policy, shipping policy, checkout process, and customer support rules apply.
            </p>
            <p className="font-semibold text-slate-900">
              We do not control third-party websites and are not responsible for their content, claims, prices, offers, policies, or practices.
            </p>
            <p>Third-party websites may control:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 border border-slate-100 rounded-2xl p-5 text-sm">
              <ul className="space-y-1 text-slate-600 list-disc list-inside">
                <li>Product pricing & availability</li>
                <li>Discounts and bundles</li>
                <li>Shipping fees & delivery timelines</li>
                <li>Refund and return policies</li>
                <li>Guarantee terms</li>
              </ul>
              <ul className="space-y-1 text-slate-600 list-disc list-inside">
                <li>Checkout & payment processing</li>
                <li>Customer service & product claims</li>
                <li>Privacy and data security practices</li>
                <li>Cookie and tracking technologies</li>
              </ul>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Affiliate Links */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Affiliate Links
            </h2>
            <p>
              Some external links on Official Products Lab may be affiliate links. This means we may earn a commission if a visitor clicks a link and completes a qualifying action, such as making a purchase.
            </p>
            <p>Affiliate links may appear in reviews, category pages, comparison tables, buyer guides, CTA buttons, and dedicated product information pages.</p>
            <p className="font-semibold text-slate-900">
              Using an affiliate link does not add extra cost to the buyer. However, pricing, discounts, shipping, taxes, refund terms, and availability are controlled by the product seller or third-party platform.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Sponsored and Paid Links */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Sponsored and Paid Links
            </h2>
            <p>
              Some links may be sponsored, paid, promotional, or connected to advertising relationships. These links may appear in sponsored content, paid placements, banner ads, product promotions, native advertising, or advertising campaigns.
            </p>
            <p>Where appropriate, we may use labels such as: <em>Sponsored</em>, <em>Advertisement</em>, <em>Paid Placement</em>, <em>Promotional Content</em>, or <em>Partner Content</em>.</p>
            <p className="font-semibold text-slate-900">
              A sponsored or paid link does not guarantee that a product is suitable for every visitor. Readers should still review product details, terms, and policies before making a purchase decision.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Link Qualification and SEO Attributes */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Link Qualification and SEO Attributes
            </h2>
            <p>
              Official Products Lab may use link attributes to help search engines understand the relationship between our website and linked pages.
            </p>
            <p>For paid, sponsored, advertising, or affiliate links, we may use attributes such as:</p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <code className="text-xs bg-slate-100 border border-slate-200 px-2 py-0.5 rounded text-orange-600 font-mono mt-0.5">rel="sponsored"</code>
                <span>Used for links that are advertisements or paid placements.</span>
              </li>
              <li className="flex items-start gap-2">
                <code className="text-xs bg-slate-100 border border-slate-200 px-2 py-0.5 rounded text-orange-600 font-mono mt-0.5">rel="nofollow"</code>
                <span>Used when we do not want to imply endorsement or pass ranking signals.</span>
              </li>
              <li className="flex items-start gap-2">
                <code className="text-xs bg-slate-100 border border-slate-200 px-2 py-0.5 rounded text-orange-600 font-mono mt-0.5">rel="sponsored nofollow"</code>
                <span>Combined attributes for optimal advertising link compliance.</span>
              </li>
              <li className="flex items-start gap-2">
                <code className="text-xs bg-slate-100 border border-slate-200 px-2 py-0.5 rounded text-orange-600 font-mono mt-0.5">rel="ugc"</code>
                <span>Used for user-generated links (such as comments or forums) if applicable.</span>
              </li>
            </ul>
            <p className="font-semibold text-slate-900">
              These attributes are used for search engine transparency. They do not necessarily change how a visitor experiences the link.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Product Claims on Linked Pages */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Product Claims on Linked Pages
            </h2>
            <p>
              External product pages may include claims, testimonials, ratings, promotional language, discount messages, or benefit statements created by third-party sellers, advertisers, affiliate platforms, or product owners.
            </p>
            <p>
              Official Products Lab does not control the content of external product pages. Unless clearly stated, we do not independently verify every claim made by external sellers or product websites.
            </p>
            <p className="font-semibold text-slate-900">
              Before relying on claims made on a third-party product page, visitors should check product details, ingredients/materials, usage instructions, safety warnings, compatibility, customer support, and refund/guarantee terms.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Buyer Responsibility */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Buyer Responsibility
            </h2>
            <p>
              External links are provided to help visitors continue their research, but visitors are responsible for their own decisions after clicking a link.
            </p>
            <p className="font-semibold text-slate-900">
              Before buying any product from a linked page, you should verify current pricing, bundle details, discount availability, shipping cost, delivery estimates, refund/return terms, guarantees, compatibility, and checkout page security.
            </p>
            <p>
              Do not rely only on one product review, one advertisement, one product page, or one claim before making a purchase decision.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Broken, Outdated, or Incorrect Links */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Broken, Outdated, or Incorrect Links
            </h2>
            <p>
              Product pages and third-party offers may change over time. Links may become outdated, broken, redirected, or no longer relevant.
            </p>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-2">
              <p className="text-sm font-semibold text-slate-800">If you find a link issue, please report it to us and include:</p>
              <ul className="list-disc pl-6 space-y-1 text-slate-600 text-xs sm:text-sm">
                <li>The page URL where the link appears</li>
                <li>The product name & link or button text</li>
                <li>What happens when you click the link</li>
                <li>The correct link if you know it</li>
              </ul>
            </div>
            <p>We may review and update links when appropriate.</p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: External Links and Privacy */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              External Links and Privacy
            </h2>
            <p>
              When you click an external link, the destination website may collect information about your visit. This may include your IP address, browser information, device type, referral source, cookie data, product interaction, or purchase activity.
            </p>
            <p className="font-semibold text-slate-900">
              Official Products Lab is not responsible for the privacy practices of third-party websites. You should review the privacy policy and cookie policy of any external website you visit.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: No Endorsement Guarantee */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              No Endorsement Guarantee
            </h2>
            <p>
              A link from Official Products Lab to another website does not automatically mean we endorse, own, operate, control, or guarantee that website, seller, product, or offer.
            </p>
            <p className="font-semibold text-slate-900">
              External links are provided for product research, navigation, reference, affiliate tracking, advertising, or informational purposes. Readers should use their own judgment before interacting with third-party websites or purchasing any product.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Changes to This External Links Policy */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Changes to This External Links Policy
            </h2>
            <p>
              We may update this External Links Policy from time to time to reflect changes in our website structure, product subdomains, affiliate relationships, advertising practices, link usage, or legal requirements.
            </p>
            <p className="font-semibold text-slate-900">
              When we update this policy, we will revise the “Effective Date” at the top. Your continued use of Official Products Lab after updates are posted means you accept the updated External Links Policy.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Contact Us */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Contact Us
            </h2>
            <p>
              If you have questions about this External Links Policy or want to report a broken, outdated, or incorrect link, you can contact us at:
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
