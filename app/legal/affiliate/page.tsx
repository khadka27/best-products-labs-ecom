import Link from "next/link";

export default function AffiliateDisclosurePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <article className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 sm:p-12">
        <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-orange-500 mb-3 block">
          Disclosures & Transparency
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Affiliate Disclosure
        </h1>
        <p className="mt-4 text-sm font-semibold text-slate-500 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl w-fit">
          Effective Date: 2026/06/01
        </p>

        <section className="mt-10 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            Official Products Lab is a product information hub that helps shoppers research trending e-commerce products through reviews, product summaries, buyer guides, category pages, and links to dedicated product information pages.
          </p>
          <p>
            Some pages on <a href="https://officialproductslab.com" className="text-orange-500 hover:text-orange-600 font-bold transition-colors">OfficialProductsLab.com</a> may contain affiliate links, product links, sponsored links, tracking links, or links to third-party product offers. This means we may earn a commission if you click a link and make a purchase through certain pages, at no extra cost to you.
          </p>
          <p className="font-semibold text-slate-900">
            This Affiliate Disclosure explains how affiliate links and commercial relationships may appear on our website.
          </p>

          <hr className="border-slate-100" />

          {/* Section: Our Affiliate Relationship */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Our Affiliate Relationship
            </h2>
            <p>
              Official Products Lab may participate in affiliate programs, referral programs, product partner programs, advertising campaigns, or similar commercial arrangements.
            </p>
            <p>
              When you click certain product links, buttons, images, banners, or calls-to-action on our website, we may receive compensation if you complete a purchase or take another qualifying action.
            </p>
            <p>These links may appear in places such as:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Product review articles</li>
              <li>Category pages</li>
              <li>Featured product sections</li>
              <li>Product comparison sections</li>
              <li>Buyer guides</li>
              <li>Product buttons</li>
              <li>“View Product Page” buttons</li>
              <li>“Check Price” buttons</li>
              <li>“See Product Details” buttons</li>
              <li>Links to dedicated product information pages</li>
              <li>Links to third-party product pages or checkout pages</li>
            </ul>
            <p>
              Affiliate commissions help support the operation of Official Products Lab, including content creation, website maintenance, product research, hosting, and ongoing updates.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: No Extra Cost to You */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              No Extra Cost to You
            </h2>
            <p>
              Using an affiliate link does not add any extra cost to your purchase.
            </p>
            <p>
              If you decide to buy a product after clicking a link from Official Products Lab, the price you pay is controlled by the product seller, affiliate platform, checkout provider, or third-party offer page.
            </p>
            <p className="font-semibold text-slate-900">
              In some cases, product prices, discounts, bundles, shipping fees, taxes, or promotional offers may change based on the seller, campaign, location, stock, or time of purchase.
            </p>
            <p>
              We encourage you to review the current product page carefully before placing an order.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Product Information and Editorial Independence */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Product Information and Editorial Independence
            </h2>
            <p>
              Our goal is to provide clear, buyer-focused product information. We write content to help readers understand what a product is, how it is positioned, what features it may offer, and what buyers should check before deciding whether to visit a product page.
            </p>
            <p>
              Affiliate relationships may influence which products are available for coverage, but they do not mean that every product is suitable for every visitor.
            </p>
            <p>Our product content may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Product overviews</li>
              <li>Feature breakdowns</li>
              <li>Pros and cons</li>
              <li>Price and availability notes</li>
              <li>Buyer suitability guidance</li>
              <li>Safety and usage reminders</li>
              <li>FAQs</li>
              <li>Links to product information pages or third-party offers</li>
            </ul>
            <p>
              We aim to avoid unsupported claims, fake reviews, fake ratings, false guarantees, or exaggerated promises. Product experiences, results, and suitability may vary from person to person.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Third-Party Product Offers */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Third-Party Product Offers
            </h2>
            <p>
              Official Products Lab may link to third-party websites, affiliate offer pages, product checkout pages, promotional pages, or dedicated product information pages. These third-party websites are not controlled by Official Products Lab.
            </p>
            <p>Third-party sellers or platforms may control:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Product pricing</li>
              <li>Discounts and bundle offers</li>
              <li>Product availability</li>
              <li>Shipping fees and delivery times</li>
              <li>Refund and return policies</li>
              <li>Guarantee terms</li>
              <li>Checkout process</li>
              <li>Customer service</li>
              <li>Payment processing</li>
              <li>Product claims and seller information</li>
            </ul>
            <p className="font-semibold text-slate-900">
              Before buying any product, you should review the current product page, seller terms, refund policy, privacy policy, shipping details, and checkout information.
            </p>
            <p>
              Official Products Lab is not responsible for third-party pricing changes, shipping issues, refund decisions, product quality, checkout problems, or customer service experiences.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Product Subdomains and Dedicated Product Information Pages */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Product Subdomains and Dedicated Product Information Pages
            </h2>
            <p>
              Some products featured on Official Products Lab may also have dedicated product information pages or product subdomains.
            </p>
            <p>
              For example, a product review on the main website may include a link such as “View Product Page,” “Check Current Price,” or “Continue to Product Information Page.”
            </p>
            <p>These pages are designed to provide more product-specific information, such as:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Product overview</li>
              <li>Main features</li>
              <li>How the product works</li>
              <li>Usage guidance</li>
              <li>Product details</li>
              <li>Pricing or package notes</li>
              <li>Frequently asked questions</li>
              <li>Links to third-party offers where applicable</li>
            </ul>
            <p className="font-semibold text-slate-900">
              A dedicated product information page does not always mean that Official Products Lab is the manufacturer or direct seller of the product. Unless clearly stated, we should not be understood as the official manufacturer, product owner, or direct checkout provider.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Link Placement */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Link Placement
            </h2>
            <p>
              Affiliate links may appear throughout the website wherever product-related links are useful for readers.
            </p>
            <p>Common affiliate or product link placements may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Product cards</li>
              <li>Product review CTAs</li>
              <li>Buttons near price sections</li>
              <li>“Where to Buy” sections</li>
              <li>Product comparison tables</li>
              <li>Featured product sections</li>
              <li>Image links</li>
              <li>Banner links</li>
              <li>Footer or sidebar product links where applicable</li>
            </ul>
            <p>
              We try to use clear link wording so readers understand when they are leaving an informational page and continuing to a product-related page.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Product Reviews, Ratings, and Claims */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Product Reviews, Ratings, and Claims
            </h2>
            <p>
              Official Products Lab may publish product reviews and buyer guides based on available product information, affiliate page content, seller-provided details, public product information, or research from product pages.
            </p>
            <p>
              We do not guarantee that every product will work exactly as described by a seller or product page.
            </p>
            <p>Unless clearly verified, we do not claim that a product is:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Guaranteed to work for everyone</li>
              <li>Clinically proven</li>
              <li>FDA approved</li>
              <li>Doctor recommended</li>
              <li>Risk-free</li>
              <li>A cure or treatment for any condition</li>
              <li>The official manufacturer’s product page</li>
              <li>The only place to buy a product</li>
            </ul>
            <p className="font-semibold text-slate-900">
              For health, wellness, beauty, fitness, snoring, supplement, body-related, automotive, gadget, or technical products, users should review product instructions, safety details, compatibility notes, and professional guidance where needed.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Sponsored Content and Advertising */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Sponsored Content and Advertising
            </h2>
            <p>
              Some content or placements on Official Products Lab may be sponsored, paid, promoted, or supported by advertising relationships.
            </p>
            <p>
              When content is sponsored or paid for directly, we aim to identify it clearly where appropriate.
            </p>
            <p>
              Affiliate links are different from traditional paid sponsorships because we may earn a commission only if a user clicks or completes a qualifying action. However, both types of relationships may create a material connection, which is why we provide this disclosure.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Your Responsibility as a Buyer */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Your Responsibility as a Buyer
            </h2>
            <p>
              Official Products Lab provides product information to help with research, but your purchase decision is your responsibility.
            </p>
            <p>Before buying any product, you should check:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Current product price</li>
              <li>Package or bundle details</li>
              <li>Shipping costs and delivery estimates</li>
              <li>Refund and return policy</li>
              <li>Guarantee terms</li>
              <li>Product instructions</li>
              <li>Compatibility or suitability</li>
              <li>Seller contact details</li>
              <li>Checkout page security</li>
              <li>Any health, safety, technical, or usage warnings</li>
            </ul>
            <p className="font-semibold text-slate-905">
              Do not rely only on one review, one claim, one advertisement, or one product page before making a decision.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Changes to This Affiliate Disclosure */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Changes to This Affiliate Disclosure
            </h2>
            <p>
              We may update this Affiliate Disclosure from time to time to reflect changes in our affiliate relationships, product coverage, website structure, advertising practices, or legal requirements.
            </p>
            <p>
              When we update this page, we will revise the “Effective Date” at the top. Your continued use of Official Products Lab after updates are posted means you accept the updated Affiliate Disclosure.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Contact Us */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Contact Us
            </h2>
            <p>
              If you have questions about this Affiliate Disclosure, product links, or commercial relationships on Official Products Lab, you can contact us at:
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
