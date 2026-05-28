import Link from "next/link";

export default function DisclaimerPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <article className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 sm:p-12">
        <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-orange-500 mb-3 block">
          Disclaimers & Limits
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Disclaimer
        </h1>
        <p className="mt-4 text-sm font-semibold text-slate-500 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl w-fit">
          Effective Date: 2026/06/01
        </p>

        <section className="mt-10 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            Official Products Lab is a product information hub created to help shoppers research trending e-commerce products through reviews, buyer guides, category pages, product summaries, and links to dedicated product information pages.
          </p>
          <p>
            The information on <a href="https://officialproductslab.com" className="text-orange-500 hover:text-orange-600 font-bold transition-colors">OfficialProductsLab.com</a> is provided for general informational and product research purposes only. By using this website, you understand and agree that the content should not be treated as professional advice, product guarantees, or a replacement for your own research.
          </p>

          <hr className="border-slate-100" />

          {/* Section: Informational Purpose Only */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Informational Purpose Only
            </h2>
            <p>
              The content on Official Products Lab is designed to help visitors better understand products before visiting a product page or third-party offer.
            </p>
            <p>Our website may include information about:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Product features</li>
              <li>Claimed benefits</li>
              <li>Product specifications</li>
              <li>Pros and cons</li>
              <li>Price and availability notes</li>
              <li>Buyer suitability</li>
              <li>Usage instructions</li>
              <li>Safety reminders</li>
              <li>Customer feedback summaries where available</li>
              <li>Links to dedicated product information pages or third-party offers</li>
            </ul>
            <p className="font-semibold text-slate-900">
              This information is intended to support product research. It should not be treated as a guarantee that a product will work, solve a problem, or be suitable for every visitor.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: No Professional Advice */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              No Professional Advice
            </h2>
            <p>
              Official Products Lab does not provide professional advice. Nothing on this website should be understood as medical, legal, financial, automotive, technical, fitness, safety, or professional advice.
            </p>
            <p>
              You should not rely only on our content when making decisions involving your health, vehicle, finances, safety, legal rights, personal care, or technical equipment.
            </p>
            <p className="font-semibold text-slate-900">
              If you need professional guidance, you should speak with a qualified professional in the relevant field.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Health, Wellness, Beauty, Fitness, and Body-Related Products */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Health, Wellness, Beauty, Fitness, and Body-Related Products
            </h2>
            <p>
              Some products featured on Official Products Lab may relate to wellness, supplements, beauty, personal care, sleep support, snoring, fitness, weight management, posture, skin care, hair care, or other body-related topics.
            </p>
            <p>
              Content about these products is for general product research only. It is not medical advice and should not be used to diagnose, treat, cure, or prevent any disease or health condition.
            </p>
            <p>
              Before using any wellness, supplement, beauty, snoring, fitness, or body-related product, you should speak with a qualified healthcare professional if you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Have a medical condition</li>
              <li>Are pregnant or nursing</li>
              <li>Take prescription or over-the-counter medication</li>
              <li>Have allergies or sensitive skin</li>
              <li>Have breathing, sleep, dental, or jaw-related concerns</li>
              <li>Have a history of skin irritation or product sensitivity</li>
              <li>Are unsure whether a product is suitable for you</li>
              <li>Experience discomfort, side effects, or unexpected reactions</li>
            </ul>
            <p className="font-semibold text-slate-900">
              You should always read product labels, instructions, warnings, ingredient information, and usage directions before using any product.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Automotive, Gadget, and Technical Products */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Automotive, Gadget, and Technical Products
            </h2>
            <p>
              Some products featured on Official Products Lab may relate to automotive accessories, OBD2 devices, fuel-efficiency support products, electronics, smart gadgets, home tools, or technical devices.
            </p>
            <p>
              Our content about these products is not automotive repair advice, engineering advice, technical advice, or safety certification.
            </p>
            <p>Before using automotive, electronic, or technical products, you should check:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Vehicle compatibility</li>
              <li>Device compatibility</li>
              <li>Installation instructions</li>
              <li>Power or charging requirements</li>
              <li>Product warnings</li>
              <li>Warranty terms</li>
              <li>Safety instructions</li>
              <li>Local laws or regulations where applicable</li>
              <li>Professional advice where needed</li>
            </ul>
            <p className="font-semibold text-slate-900">
              For automotive products, results may depend on vehicle condition, driving habits, maintenance history, road conditions, product compatibility, and proper use. No product should be viewed as a guaranteed replacement for proper vehicle maintenance or professional inspection.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Product Results May Vary */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Product Results May Vary
            </h2>
            <p>
              Product results, user experiences, and satisfaction may vary. A product that works well for one person may not work the same way for another. Results can depend on many factors, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Product type</li>
              <li>Personal expectations</li>
              <li>Correct usage</li>
              <li>Product compatibility</li>
              <li>Individual condition or situation</li>
              <li>Lifestyle and routine</li>
              <li>Vehicle condition or environment</li>
              <li>Shipping and seller experience</li>
              <li>Product version or package purchased</li>
            </ul>
            <p className="font-semibold text-slate-900">
              Official Products Lab does not guarantee specific results, outcomes, savings, improvements, performance, or satisfaction from any product mentioned on the website.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Product Claims and Seller Information */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Product Claims and Seller Information
            </h2>
            <p>
              Some product information on Official Products Lab may come from product pages, affiliate pages, seller descriptions, promotional materials, offer pages, or publicly available product content.
            </p>
            <p>
              We may summarize, rewrite, organize, or explain product information to make it easier for shoppers to understand. However, we do not guarantee that every claim made by a product seller, manufacturer, affiliate page, advertisement, or third-party offer is complete, accurate, verified, or current.
            </p>
            <p>Unless clearly verified, we do not claim that a product is:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Guaranteed to work</li>
              <li>Clinically proven</li>
              <li>FDA approved</li>
              <li>Doctor recommended</li>
              <li>Risk-free</li>
              <li>Suitable for everyone</li>
              <li>A cure or treatment for any condition</li>
              <li>The official manufacturer’s product page</li>
              <li>The only place to buy the product</li>
            </ul>
            <p className="font-semibold text-slate-900">
              Visitors should review current product details carefully before making a purchase decision.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Pricing, Availability, and Offer Details */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Pricing, Availability, and Offer Details
            </h2>
            <p>
              Product pricing, discounts, bundles, shipping fees, stock availability, refund policies, and guarantee terms may change without notice.
            </p>
            <p>
              Official Products Lab may mention pricing or offer details when they are available, but those details may become outdated because sellers, affiliate platforms, or promotional campaigns can change them at any time.
            </p>
            <p className="font-semibold text-slate-900">
              Before ordering any product, always check the current product page, checkout page, seller terms, refund policy, and shipping information.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Third-Party Responsibility */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Third-Party Responsibility
            </h2>
            <p>
              Official Products Lab may link to third-party websites, product information pages, affiliate offers, seller pages, checkout pages, advertisements, or promotional campaigns. These third-party websites are not controlled by Official Products Lab.
            </p>
            <p>We are not responsible for:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Product quality</li>
              <li>Product safety</li>
              <li>Product effectiveness</li>
              <li>Product pricing</li>
              <li>Product availability</li>
              <li>Shipping delays</li>
              <li>Refund decisions</li>
              <li>Return handling</li>
              <li>Checkout errors</li>
              <li>Payment processing</li>
              <li>Seller customer service</li>
              <li>Third-party website content</li>
              <li>Third-party privacy practices</li>
              <li>Claims made by product sellers</li>
              <li>Changes made on external product pages</li>
            </ul>
            <p className="font-semibold text-slate-900">
              When you leave Official Products Lab and visit a third-party website, you are responsible for reviewing that website’s terms, privacy policy, refund policy, product details, and checkout information.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Affiliate and Advertising Disclosure */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Affiliate and Advertising Disclosure
            </h2>
            <p>
              Some links on Official Products Lab may be affiliate links, product links, sponsored links, advertising links, or links to third-party offers.
            </p>
            <p>
              This means we may earn a commission or receive compensation if you click certain links, visit product pages, or make purchases through those links, at no extra cost to you.
            </p>
            <p>
              Commercial relationships may influence which products are featured or linked on the website, but they do not guarantee that a product is right for every visitor. Please review our <Link href="/legal/affiliate" className="text-orange-500 hover:text-orange-600 transition-colors font-bold">Affiliate Disclosure</Link> and <Link href="/legal/advertising" className="text-orange-500 hover:text-orange-600 transition-colors font-bold">Advertising Disclosure</Link> pages for more details.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: No Warranty */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              No Warranty
            </h2>
            <p>
              Official Products Lab is provided on an “as is” and “as available” basis.
            </p>
            <p>We do not make warranties or guarantees about:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Website availability</li>
              <li>Content accuracy</li>
              <li>Product effectiveness</li>
              <li>Product safety</li>
              <li>Product suitability</li>
              <li>Third-party seller reliability</li>
              <li>External website performance</li>
              <li>Pricing accuracy</li>
              <li>Availability of any offer</li>
              <li>Completeness of product information</li>
            </ul>
            <p className="font-semibold text-slate-900">
              We aim to provide useful product information, but errors, outdated details, or incomplete information may occur.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: User Responsibility */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              User Responsibility
            </h2>
            <p>
              You are responsible for your own research, decisions, purchases, and product use.
            </p>
            <p>Before buying or using any product, you should:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Read the product page carefully</li>
              <li>Check current price and package details</li>
              <li>Review refund and return policies</li>
              <li>Read product instructions and warnings</li>
              <li>Confirm compatibility or suitability</li>
              <li>Speak with a qualified professional where needed</li>
              <li>Avoid relying on one claim, review, or advertisement</li>
              <li>Make sure the product fits your needs and expectations</li>
            </ul>
            <p className="font-semibold text-slate-900">
              Your decision to click a link, visit a product page, or purchase a product is your own responsibility.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Verification Reminder */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Verification Reminder
            </h2>
            <p>
              Before ordering any product mentioned on Official Products Lab, always verify the latest information directly on the current product page or checkout page.
            </p>
            <p>This includes:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Product name</li>
              <li>Product version</li>
              <li>Ingredients or materials</li>
              <li>Package contents</li>
              <li>Price</li>
              <li>Discounts</li>
              <li>Shipping terms</li>
              <li>Refund policy</li>
              <li>Guarantee terms</li>
              <li>Usage instructions</li>
              <li>Seller contact information</li>
              <li>Any warnings or restrictions</li>
            </ul>
            <p className="font-semibold text-slate-900">
              Do not assume that older product information, copied offer details, or review summaries are always current.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Changes to This Disclaimer */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Changes to This Disclaimer
            </h2>
            <p>
              We may update this Disclaimer from time to time to reflect changes in our website, content practices, product coverage, affiliate relationships, advertising relationships, or legal requirements.
            </p>
            <p>
              When this page is updated, we will revise the “Effective Date” at the top. Your continued use of Official Products Lab after updates are posted means you accept the updated Disclaimer.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Contact Us */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Contact Us
            </h2>
            <p>
              If you have questions about this Disclaimer or want to report outdated product information, you can contact us at:
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
