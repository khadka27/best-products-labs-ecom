import Link from "next/link";

export default function AdvertisingDisclosurePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <article className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 sm:p-12">
        <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-orange-500 mb-3 block">
          Disclosures & Transparency
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Advertising Disclosure
        </h1>
        <p className="mt-4 text-sm font-semibold text-slate-500 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl w-fit">
          Effective Date: 2026/06/01
        </p>

        <section className="mt-10 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            Official Products Lab is a product information hub that helps shoppers research trending e-commerce products through reviews, buyer guides, product summaries, category pages, and links to dedicated product information pages.
          </p>
          <p>
            This Advertising Disclosure explains how advertising, sponsored placements, paid promotions, display ads, native advertising, product promotions, and similar commercial relationships may appear on <a href="https://officialproductslab.com" className="text-orange-500 hover:text-orange-600 font-bold transition-colors">OfficialProductsLab.com</a> and related pages or subdomains that link to this disclosure.
          </p>
          <p className="font-semibold text-slate-900">
            Our goal is to keep advertising relationships clear while continuing to provide useful, buyer-focused product information.
          </p>

          <hr className="border-slate-100" />

          {/* Section: Advertising Relationships */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Advertising Relationships
            </h2>
            <p>
              Official Products Lab may display advertising or participate in commercial relationships with advertisers, product sellers, affiliate networks, ad networks, promotional partners, or third-party platforms.
            </p>
            <p>Advertising may appear in different forms, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Display ads</li>
              <li>Banner ads</li>
              <li>Native advertising placements</li>
              <li>Sponsored product placements</li>
              <li>Paid promotional sections</li>
              <li>Product promotion widgets</li>
              <li>Contextual advertising</li>
              <li>Retargeting or remarketing ads</li>
              <li>Third-party ad network placements</li>
              <li>Commercial product links</li>
            </ul>
            <p>
              Some advertising relationships may generate revenue when a visitor views an ad, clicks a link, visits a product page, submits information, or makes a purchase.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Sponsored Content */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Sponsored Content
            </h2>
            <p>
              Some content, product placements, or promotional sections on Official Products Lab may be sponsored or paid for by advertisers, product partners, or third-party brands.
            </p>
            <p>
              When content is sponsored, paid, or created in direct partnership with an advertiser, we aim to identify it clearly where appropriate.
            </p>
            <p>Sponsored content may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Sponsored product guides</li>
              <li>Sponsored product placements</li>
              <li>Paid brand mentions</li>
              <li>Promotional banners</li>
              <li>Advertorial-style content</li>
              <li>Native ad placements</li>
              <li>Paid product highlights</li>
              <li>Campaign-based product features</li>
            </ul>
            <p className="font-semibold text-slate-900">
              Sponsored content does not automatically mean that every claim made by a product seller is independently verified by Official Products Lab. Visitors should still review the current product page, seller information, terms, refund policy, and checkout details before making a purchase.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Display Ads and Ad Networks */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Display Ads and Ad Networks
            </h2>
            <p>
              Official Products Lab may use third-party ad networks or advertising platforms to display ads on the website. These platforms may use cookies, tracking pixels, device identifiers, scripts, and similar technologies to deliver ads, measure performance, prevent fraud, and improve relevance.
            </p>
            <p>Ad networks may collect or process information such as:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device type</li>
              <li>Approximate location</li>
              <li>Pages viewed</li>
              <li>Ad interactions</li>
              <li>Referral data</li>
              <li>Cookie or tracking data</li>
            </ul>
            <p>
              Ads may be based on page content, general user behavior, ad platform settings, or other signals allowed by applicable law and platform policies.
            </p>
            <p>
              If we use platforms such as Google AdSense, Google Ads, Meta Ads, display ad networks, native ad platforms, or similar services, those platforms may have their own privacy policies, advertising settings, and opt-out options.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Native Advertising */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Native Advertising
            </h2>
            <p>
              Native advertising is advertising that may visually match the look or format of surrounding content. Because native ads can sometimes resemble editorial content, we aim to label sponsored or advertising-based placements clearly where appropriate.
            </p>
            <p>Labels may include wording such as:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Advertisement</li>
              <li>Sponsored</li>
              <li>Sponsored Content</li>
              <li>Paid Placement</li>
              <li>Promotional Content</li>
              <li>Partner Content</li>
            </ul>
            <p>
              The purpose of these labels is to help visitors understand when content or placement may be commercial in nature.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Product Promotions */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Product Promotions
            </h2>
            <p>
              Some products featured on Official Products Lab may appear because they are part of a product campaign, affiliate offer, advertising relationship, sponsored placement, or promotional partnership.
            </p>
            <p>Product promotions may appear in:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Homepage featured sections</li>
              <li>Product review pages</li>
              <li>Category pages</li>
              <li>Product cards</li>
              <li>Buyer guides</li>
              <li>Comparison sections</li>
              <li>Sidebar placements</li>
              <li>Banner sections</li>
              <li>CTA buttons</li>
              <li>Dedicated product information pages</li>
            </ul>
            <p className="font-semibold text-slate-900">
              A product being promoted on Official Products Lab does not mean it is suitable for every visitor. Product results, experiences, pricing, availability, and satisfaction may vary.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Editorial Independence */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Editorial Independence
            </h2>
            <p>
              Advertising relationships may influence which products are available for coverage, featured placement, or promotional visibility. However, advertising does not automatically control every statement, review angle, buyer note, or limitation mentioned in our content.
            </p>
            <p>We aim to write product information in a way that is useful, balanced, and clear for readers.</p>
            <p>Our review and buyer guide content may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Product overviews</li>
              <li>Feature summaries</li>
              <li>Pros and cons</li>
              <li>Price and availability notes</li>
              <li>Buyer suitability guidance</li>
              <li>Usage reminders</li>
              <li>Safety notes</li>
              <li>FAQs</li>
              <li>Links to dedicated product information pages</li>
            </ul>
            <p>
              We try to avoid unsupported claims, fake reviews, fake ratings, false guarantees, unrealistic promises, and misleading product statements.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Affiliate Links vs Advertising */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Affiliate Links vs Advertising
            </h2>
            <p>
              Affiliate links and advertising are related but not always the same.
            </p>
            <p>
              Affiliate links may generate a commission if a visitor clicks a link and completes a qualifying action, such as making a purchase. Advertising may involve display ads, sponsored placements, paid product promotions, or ad network content.
            </p>
            <p className="font-semibold text-slate-900">
              Both affiliate links and advertising may create commercial relationships, which is why Official Products Lab provides separate Affiliate Disclosure and Advertising Disclosure pages.
            </p>
            <p>
              Some pages may contain both affiliate links and advertising placements.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Third-Party Offers and External Websites */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Third-Party Offers and External Websites
            </h2>
            <p>
              Official Products Lab may link to third-party websites, product sellers, affiliate offer pages, checkout pages, promotional pages, ad landing pages, or dedicated product information pages. These external websites are controlled by third parties, not by Official Products Lab.
            </p>
            <p>Third-party websites may control:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Product pricing</li>
              <li>Product availability</li>
              <li>Discounts and bundles</li>
              <li>Shipping terms</li>
              <li>Refund policies</li>
              <li>Guarantee terms</li>
              <li>Checkout process</li>
              <li>Payment processing</li>
              <li>Customer service</li>
              <li>Product claims</li>
              <li>Advertising claims</li>
            </ul>
            <p className="font-semibold text-slate-900">
              Visitors should always review the current product page, checkout details, seller terms, privacy policy, and refund policy before buying or submitting personal information.
            </p>
            <p>
              Official Products Lab is not responsible for third-party pricing changes, shipping issues, refund decisions, product quality, checkout problems, or customer service experiences.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: User Responsibility */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              User Responsibility
            </h2>
            <p>
              Advertising and product promotion content should not be the only basis for a purchase decision.
            </p>
            <p>Before buying any product, visitors should check:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Whether the product fits their needs</li>
              <li>Current price and package details</li>
              <li>Refund and return policy</li>
              <li>Shipping costs and delivery estimates</li>
              <li>Product instructions</li>
              <li>Compatibility or suitability</li>
              <li>Seller information</li>
              <li>Checkout security</li>
              <li>Health, safety, technical, or usage warnings where relevant</li>
            </ul>
            <p className="font-semibold text-slate-900">
              Official Products Lab does not guarantee product results, seller performance, shipping timelines, refunds, or customer service outcomes from third-party websites.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Ad Personalization and Cookies */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Ad Personalization and Cookies
            </h2>
            <p>
              Some advertising tools may use cookies or similar technologies to personalize ads, measure performance, or track campaign activity.
            </p>
            <p>
              Depending on your location and the tools used, certain advertising cookies may require consent before they are placed on your device.
            </p>
            <p>
              You may be able to manage ad personalization through your browser settings, device settings, cookie consent tools, or advertising platform controls. For more information about how we use cookies and tracking technologies, please review our <Link href="/legal/privacy" className="text-orange-500 hover:text-orange-600 transition-colors font-bold">Privacy Policy</Link> and Cookie Policy.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Changes to This Advertising Disclosure */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Changes to This Advertising Disclosure
            </h2>
            <p>
              We may update this Advertising Disclosure from time to time to reflect changes in our advertising relationships, ad networks, sponsored placements, product promotions, website structure, or legal requirements.
            </p>
            <p>
              When we update this page, we will revise the “Effective Date” at the top. Your continued use of Official Products Lab after updates are posted means you accept the updated Advertising Disclosure.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Contact Us */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Contact Us
            </h2>
            <p>
              If you have questions about this Advertising Disclosure, sponsored content, advertising relationships, or product promotions on Official Products Lab, you can contact us at:
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
