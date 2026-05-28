import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <article className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 sm:p-12">
        <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-orange-500 mb-3 block">
          Terms & Policies
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Terms and Conditions
        </h1>
        <p className="mt-4 text-sm font-semibold text-slate-500 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl w-fit">
          Effective Date: 2026/06/01
        </p>

        <section className="mt-10 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            Welcome to Official Products Lab. These Terms and Conditions (“Terms”) explain the rules for using <a href="https://officialproductslab.com" className="text-orange-500 hover:text-orange-600 font-bold transition-colors">OfficialProductsLab.com</a>, our product review pages, category pages, buyer guides, product information pages, and any related subdomains or services that link to these Terms.
          </p>
          <p className="font-semibold text-slate-900">
            By accessing or using this website, you agree to follow these Terms. If you do not agree with these Terms, please stop using the website.
          </p>

          <hr className="border-slate-100" />

          {/* Section: About Official Products Lab */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              About Official Products Lab
            </h2>
            <p>
              Official Products Lab is a product information hub created to help shoppers research trending e-commerce products before visiting dedicated product information pages or third-party product offers.
            </p>
            <p>Our website may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Product reviews</li>
              <li>Buyer guides</li>
              <li>Product category pages</li>
              <li>Product summaries</li>
              <li>Feature breakdowns</li>
              <li>Price and availability notes</li>
              <li>Links to product information pages</li>
              <li>Links to third-party offers, affiliate pages, or checkout pages</li>
            </ul>
            <p>
              Official Products Lab is not the manufacturer, owner, or direct seller of every product mentioned on the website unless clearly stated. Product information is provided for general research and informational purposes only.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Website Use */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Website Use
            </h2>
            <p>
              You may use Official Products Lab for personal, non-commercial research and informational purposes.
            </p>
            <p>
              You agree to use the website only in a lawful and respectful way. You may browse our content, read product reviews, compare information, and use links to continue your own product research.
            </p>
            <p className="font-semibold text-slate-900">
              You may not use this website in a way that damages the website, disrupts its operation, misuses its content, or violates any applicable law.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: No Misuse of the Website */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              No Misuse of the Website
            </h2>
            <p>
              You agree not to misuse Official Products Lab or its content.
            </p>
            <p>Prohibited activity includes, but is not limited to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Copying, scraping, or republishing large portions of website content without permission</li>
              <li>Using automated bots, crawlers, or scripts to extract content in a harmful or excessive way</li>
              <li>Attempting to hack, damage, overload, or interfere with the website</li>
              <li>Uploading or sending harmful code, spam, or malicious content</li>
              <li>Using the website for fraud, misleading activity, or unlawful purposes</li>
              <li>Impersonating Official Products Lab or falsely representing a relationship with us</li>
              <li>Removing copyright, disclosure, disclaimer, or attribution notices from our content</li>
            </ul>
            <p>
              We reserve the right to restrict access to the website if we believe a user has violated these Terms or used the website in a harmful way.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Content Accuracy */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Content Accuracy
            </h2>
            <p>
              We aim to provide clear, useful, and updated product information. However, product details can change over time.
            </p>
            <p>
              Product pricing, discounts, packages, availability, shipping terms, refund policies, guarantees, features, ingredients, specifications, and promotional offers may change without notice.
            </p>
            <p>
              Because many products are sold or promoted through third-party websites, we cannot guarantee that all information on Official Products Lab will always be complete, current, or error-free.
            </p>
            <p className="font-semibold text-slate-905">
              Before making a purchase decision, you should always review the current product page, seller information, checkout page, terms, privacy policy, refund policy, and product details.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Product Reviews and Buyer Guides */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Product Reviews and Buyer Guides
            </h2>
            <p>
              Our product reviews and buyer guides are created to help users understand products more clearly before visiting a dedicated product information page or third-party offer.
            </p>
            <p>Our content may discuss:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>What a product is</li>
              <li>How it is positioned</li>
              <li>Claimed benefits</li>
              <li>Key features</li>
              <li>Product specifications</li>
              <li>Pros and cons</li>
              <li>Price and availability notes</li>
              <li>Buyer suitability</li>
              <li>Safety and usage reminders</li>
              <li>Common questions shoppers may have</li>
            </ul>
            <p>
              Our content should not be treated as professional advice, medical advice, financial advice, technical advice, automotive advice, legal advice, or a guarantee of product performance.
            </p>
            <p className="font-semibold text-slate-900">
              Your results, experience, and satisfaction with any product may vary.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Affiliate Links and Commercial Relationships */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Affiliate Links and Commercial Relationships
            </h2>
            <p>
              Some links on Official Products Lab may be affiliate links, product information links, sponsored links, third-party offer links, or links to checkout pages.
            </p>
            <p>
              This means we may earn a commission if you click certain links or purchase through certain product pages, at no extra cost to you.
            </p>
            <p>
              Affiliate relationships do not mean that every product is suitable for every user. You are responsible for reviewing product details, pricing, terms, refund policies, and suitability before making a purchase.
            </p>
            <p>
              We may also link to product subdomains or dedicated product information pages that provide more details about a specific product.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: External Links and Third-Party Websites */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              External Links and Third-Party Websites
            </h2>
            <p>
              Official Products Lab may contain links to external websites, product sellers, affiliate platforms, promotional pages, checkout pages, advertising partners, or other third-party resources.
            </p>
            <p>
              Once you leave Official Products Lab and visit a third-party website, you are subject to that third party’s own terms, privacy policy, refund policy, shipping policy, and checkout process.
            </p>
            <p>We do not control third-party websites and are not responsible for:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Product pricing changes</li>
              <li>Product availability</li>
              <li>Shipping delays</li>
              <li>Refund decisions</li>
              <li>Checkout problems</li>
              <li>Product quality issues</li>
              <li>Third-party website content</li>
              <li>Third-party privacy practices</li>
              <li>Claims made by product sellers</li>
              <li>Customer service provided by external sellers</li>
            </ul>
            <p className="font-semibold text-slate-900">
              You should carefully review any third-party website before submitting personal information or placing an order.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: No Professional Advice */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              No Professional Advice
            </h2>
            <p>
              The content on Official Products Lab is provided for general informational and product research purposes only. Nothing on this website should be considered professional advice.
            </p>
            <p>This includes, but is not limited to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Medical or health advice</li>
              <li>Supplement or wellness advice</li>
              <li>Legal advice</li>
              <li>Financial advice</li>
              <li>Automotive repair advice</li>
              <li>Technical or safety advice</li>
              <li>Fitness or personal care advice</li>
            </ul>
            <p>
              For health, wellness, beauty, supplement, fitness, snoring, or body-related products, you should speak with a qualified professional before using a product if you have a medical condition, allergies, pregnancy, sensitive skin, ongoing medication use, or any safety concerns.
            </p>
            <p>
              For automotive, electronic, gadget, or technical products, you should check compatibility, instructions, safety warnings, and professional guidance where needed.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: User Responsibility */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              User Responsibility
            </h2>
            <p>
              You are responsible for how you use the information on Official Products Lab.
            </p>
            <p>
              Before buying or using any product, you should consider your own needs, expectations, budget, safety concerns, compatibility requirements, and product suitability.
            </p>
            <p className="font-semibold text-slate-900">
              You agree that any purchase decision you make after using our website is your own decision.
            </p>
            <p>
              Official Products Lab does not guarantee that any product will meet your expectations, solve a problem, deliver specific results, or be suitable for your personal situation.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Intellectual Property */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Intellectual Property
            </h2>
            <p>
              The content on Official Products Lab, including text, layout, branding, graphics, design elements, page structure, and original written material, is owned by or licensed to Official Products Lab unless otherwise stated.
            </p>
            <p>
              You may read and use the website content for personal research. You may not copy, reproduce, republish, distribute, modify, sell, or exploit our content for commercial purposes without written permission.
            </p>
            <p>
              Product names, trademarks, logos, and brand names mentioned on the website belong to their respective owners. Use of these names does not imply ownership, endorsement, or official partnership unless clearly stated.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: User Submissions */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              User Submissions
            </h2>
            <p>
              If you submit a message, correction request, feedback, review comment, inquiry, or other content through our website or email, you agree that the information you provide is accurate to the best of your knowledge.
            </p>
            <p>
              You also agree not to submit content that is unlawful, abusive, misleading, defamatory, spammy, harmful, or violates the rights of others.
            </p>
            <p>
              We may use submitted feedback or correction requests to improve website content, respond to inquiries, or update product information.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Limitation of Liability */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Limitation of Liability
            </h2>
            <p>
              Official Products Lab is provided on an “as available” and “as is” basis.
            </p>
            <p>
              To the fullest extent allowed by law, Official Products Lab, its owners, team members, partners, contributors, and related parties are not responsible for any loss, damage, cost, claim, or issue that may result from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Use of the website</li>
              <li>Reliance on website content</li>
              <li>Product purchases made through third-party links</li>
              <li>Third-party seller actions</li>
              <li>Product performance or lack of results</li>
              <li>Shipping, refund, or checkout issues</li>
              <li>Website errors, downtime, or technical problems</li>
              <li>Inaccurate, incomplete, or outdated product information</li>
              <li>User decisions based on product reviews or buyer guides</li>
            </ul>
            <p className="font-semibold text-slate-900">
              Your use of the website and any linked third-party website is at your own risk.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: No Guarantee of Website Availability */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              No Guarantee of Website Availability
            </h2>
            <p>
              We aim to keep Official Products Lab available and working properly, but we do not guarantee that the website will always be secure, uninterrupted, error-free, or available at all times.
            </p>
            <p>
              We may update, change, suspend, or remove parts of the website at any time without notice.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Privacy */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Privacy
            </h2>
            <p>
              Your use of Official Products Lab is also governed by our Privacy Policy.
            </p>
            <p>
              The Privacy Policy explains how we may collect, use, store, and share information when you visit the website, use forms, subscribe to updates, interact with cookies, or click product-related links. Please review our <Link href="/legal/privacy" className="text-orange-500 hover:text-orange-600 transition-colors font-bold">Privacy Policy</Link> for more details.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Disclosure */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Disclosure
            </h2>
            <p>
              Official Products Lab may receive compensation through affiliate links, product links, sponsored placements, advertising, or other commercial relationships.
            </p>
            <p>
              We aim to keep our content useful and transparent, but users should always review the current product page and third-party terms before making a purchase decision. For more details, please review our Affiliate Disclosure and Advertising Disclosure pages.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Changes to These Terms */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time to reflect changes in our website, business practices, legal requirements, product coverage, affiliate relationships, or user experience.
            </p>
            <p>
              When we update these Terms, we will revise the “Effective Date” at the top of this page. Your continued use of Official Products Lab after changes are posted means you accept the updated Terms.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Termination or Restriction of Access */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Termination or Restriction of Access
            </h2>
            <p>
              We reserve the right to restrict, suspend, or block access to the website if we believe a user has violated these Terms, misused the website, attempted to harm the website, or engaged in unlawful or abusive behavior.
            </p>
            <p>
              We may take this action without prior notice where necessary to protect the website, users, content, or business operations.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Governing Law */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Governing Law
            </h2>
            <p>
              These Terms are intended to be interpreted according to applicable laws and general website use principles.
            </p>
            <p>
              These Terms shall be governed by the laws of the United States, without regard to conflict of law principles.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Contact Us */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Contact Us
            </h2>
            <p>
              If you have questions about these Terms and Conditions, you can contact us at:
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
