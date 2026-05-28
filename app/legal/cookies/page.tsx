import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <article className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 sm:p-12">
        <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-orange-500 mb-3 block">
          Cookies & Tracking
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Cookie Policy
        </h1>
        <p className="mt-4 text-sm font-semibold text-slate-500 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl w-fit">
          Effective Date: 2026/06/01
        </p>

        <section className="mt-10 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            Official Products Lab (“Official Products Lab,” “we,” “our,” or “us”) uses cookies and similar tracking technologies on <a href="https://officialproductslab.com" className="text-orange-500 hover:text-orange-600 font-bold transition-colors">OfficialProductsLab.com</a> and related pages or subdomains that link to this Cookie Policy.
          </p>
          <p>
            This Cookie Policy explains what cookies are, how we use them, what types of cookies may appear on our website, how third-party tools may use cookies, and how you can manage your cookie choices.
          </p>
          <p className="font-semibold text-slate-900">
            By continuing to use our website, you acknowledge that cookies and similar technologies may be used as described in this policy, subject to your consent choices where required by applicable law.
          </p>

          <hr className="border-slate-100" />

          {/* Section: What Cookies Are */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              What Cookies Are
            </h2>
            <p>
              Cookies are small text files that are stored on your browser, computer, phone, or other device when you visit a website.
            </p>
            <p>
              Cookies help websites remember information about your visit. They can support basic website functions, improve user experience, measure traffic, track link clicks, personalize content, and support advertising or affiliate attribution.
            </p>
            <p>
              Cookies may be placed by the website you are visiting or by third-party services used on that website.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Similar Tracking Technologies */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Similar Tracking Technologies
            </h2>
            <p>
              In addition to cookies, Official Products Lab may use similar technologies to understand website activity, measure performance, and support product-related tracking.
            </p>
            <p>These technologies may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Tracking pixels</li>
              <li>Tags</li>
              <li>Scripts</li>
              <li>Web beacons</li>
              <li>Local storage</li>
              <li>Session storage</li>
              <li>Device identifiers</li>
              <li>Analytics codes</li>
              <li>Affiliate tracking links</li>
              <li>Advertising pixels</li>
            </ul>
            <p className="font-semibold text-slate-900">
              These tools may collect information such as page visits, clicks, browser type, device type, referral source, approximate location, and interaction with product links or ads.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Types of Cookies We May Use */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Types of Cookies We May Use
            </h2>
            <p>
              Official Products Lab may use different types of cookies depending on website features, analytics setup, affiliate tracking, advertising tools, and user preferences.
            </p>

            <div className="overflow-x-auto border border-slate-100 rounded-2xl shadow-sm mt-4">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 border-b border-slate-100 font-bold">
                    <th className="p-4 w-1/4">Cookie Type</th>
                    <th className="p-4">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-900">Essential Cookies</td>
                    <td className="p-4">Help the website load, function properly, support security, and remember basic settings</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-900">Analytics Cookies</td>
                    <td className="p-4">Help us understand website traffic, page performance, visitor behavior, and content engagement</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-900">Affiliate Cookies</td>
                    <td className="p-4">Help track product link clicks, referrals, product page visits, and commission attribution</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-900">Advertising Cookies</td>
                    <td className="p-4">Help deliver ads, measure campaigns, support remarketing, and improve ad relevance</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-900">Preference Cookies</td>
                    <td className="p-4">Help remember choices such as cookie settings, display preferences, or form behavior</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4">
              Some cookies are necessary for the website to function. Others are used for analytics, advertising, affiliate tracking, performance measurement, or personalization.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Why We Use Cookies */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Why We Use Cookies
            </h2>
            <p>
              We use cookies and similar technologies to improve how Official Products Lab works and to better understand how visitors interact with our content.
            </p>
            <p>Cookies may help us:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Keep the website functioning properly</li>
              <li>Improve page speed, layout, and user experience</li>
              <li>Understand which pages visitors read most</li>
              <li>Measure clicks on product cards, review CTAs, and product buttons</li>
              <li>Track affiliate referrals and product page visits</li>
              <li>Analyze traffic sources and search performance</li>
              <li>Improve product reviews, buyer guides, and category pages</li>
              <li>Measure advertising or promotional campaign performance</li>
              <li>Prevent spam, abuse, fraud, or technical issues</li>
              <li>Remember cookie preferences where applicable</li>
            </ul>
            <p className="font-semibold text-slate-900">
              Cookies help us make the website more useful for shoppers researching products online.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Essential Cookies */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Essential Cookies
            </h2>
            <p>
              Essential cookies are needed for the website to work properly. These cookies may support page loading, site security, form functionality, cookie preference storage, and basic technical operations.
            </p>
            <p>
              Because these cookies are required for core website functions, they may not always require user consent depending on applicable law.
            </p>
            <p className="font-semibold text-slate-900">
              If you disable essential cookies through your browser, some parts of the website may not work correctly.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Analytics Cookies */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Analytics Cookies
            </h2>
            <p>
              Analytics cookies help us understand how visitors use Official Products Lab.
            </p>
            <p>We may use analytics tools to learn:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Which pages are visited</li>
              <li>How long visitors stay on pages</li>
              <li>Which product reviews receive attention</li>
              <li>Which buttons or links are clicked</li>
              <li>Which traffic sources bring visitors to the site</li>
              <li>How users move between homepage, category pages, review articles, and product pages</li>
              <li>Whether there are technical issues affecting user experience</li>
            </ul>
            <p>
              Analytics data helps us improve content quality, page structure, site speed, navigation, and product research usefulness.
            </p>
            <p className="font-semibold text-slate-900">
              Analytics tools may collect information such as IP address, browser type, device type, page URL, referral source, and interaction data.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Affiliate Tracking Cookies */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Affiliate Tracking Cookies
            </h2>
            <p>
              Official Products Lab may use affiliate links and product tracking technologies. These may help track when a visitor clicks a product button, visits a dedicated product information page, or continues to a third-party product offer.
            </p>
            <p>Affiliate tracking cookies may be used to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Record that a visitor clicked a product-related link</li>
              <li>Attribute a referral to Official Products Lab</li>
              <li>Measure performance of product cards, review CTAs, and offer links</li>
              <li>Confirm whether a qualifying action or purchase occurred</li>
              <li>Support affiliate commission tracking</li>
            </ul>
            <p>
              Affiliate cookies are usually controlled by affiliate platforms, tracking providers, product sellers, or third-party offer pages.
            </p>
            <p className="font-semibold text-slate-900">
              Clicking a product link may take you to another website where that third party may place its own cookies according to its own policies.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Advertising and Remarketing Cookies */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Advertising and Remarketing Cookies
            </h2>
            <p>
              Official Products Lab may use advertising cookies, pixels, or remarketing tools if we run ads, display sponsored placements, measure campaign performance, or use ad networks.
            </p>
            <p>Advertising cookies may help:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Show relevant ads</li>
              <li>Measure ad impressions and clicks</li>
              <li>Track campaign performance</li>
              <li>Support remarketing or retargeting</li>
              <li>Limit how often an ad is shown</li>
              <li>Understand whether an ad led to a product page visit or conversion</li>
            </ul>
            <p className="font-semibold text-slate-900">
              Advertising cookies may be placed by third-party ad networks or advertising platforms. These platforms may use information about your activity on this website and other websites to personalize or measure ads, depending on your settings and applicable law.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Preference Cookies */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Preference Cookies
            </h2>
            <p>
              Preference cookies help remember choices you make on the website.
            </p>
            <p>These may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Cookie consent choices</li>
              <li>Display preferences</li>
              <li>Form settings</li>
              <li>Region or language preferences where applicable</li>
              <li>Previously selected options or user interface settings</li>
            </ul>
            <p className="font-semibold text-slate-900">
              Preference cookies help make repeat visits smoother and more consistent.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Third-Party Cookies */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Third-Party Cookies
            </h2>
            <p>
              Some cookies on Official Products Lab may be placed by third-party tools, platforms, or external services.
            </p>
            <p>These may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Google Analytics or similar analytics tools</li>
              <li>Google Search Console-related measurement tools</li>
              <li>Microsoft Clarity or heatmap/session insight tools</li>
              <li>Advertising networks</li>
              <li>Affiliate platforms</li>
              <li>Product offer tracking tools</li>
              <li>Email marketing tools</li>
              <li>Spam protection services</li>
              <li>Embedded media or widgets</li>
              <li>Hosting, security, or performance tools</li>
            </ul>
            <p>
              Third-party cookies are controlled by the third party that places them. We do not fully control how third-party platforms use cookies, store data, or process information.
            </p>
            <p className="font-semibold text-slate-900">
              You should review the privacy and cookie policies of the third-party platforms you interact with.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Cookies on Product Subdomains and External Product Pages */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Cookies on Product Subdomains and External Product Pages
            </h2>
            <p>
              Official Products Lab may link to dedicated product information pages, product subdomains, affiliate offer pages, checkout pages, or third-party product websites.
            </p>
            <p>
              When you visit a product subdomain or click through to an external product offer, additional cookies or tracking technologies may be used.
            </p>
            <p>These cookies may support:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Product page performance</li>
              <li>Affiliate tracking</li>
              <li>Offer attribution</li>
              <li>Checkout tracking</li>
              <li>Advertising measurement</li>
              <li>Product availability tracking</li>
              <li>Conversion reporting</li>
            </ul>
            <p className="font-semibold text-slate-900">
              If you leave Official Products Lab and visit a third-party product website, that external website’s cookie policy and privacy policy will apply.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Cookie Consent */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Cookie Consent
            </h2>
            <p>
              Depending on your location, certain cookies may require your consent before they are placed on your device.
            </p>
            <p>
              For example, visitors in the European Union, United Kingdom, or other regions with cookie consent rules may need to accept or manage non-essential cookies before analytics, advertising, affiliate tracking, or personalization cookies are used.
            </p>
            <p>Non-essential cookies may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Analytics cookies</li>
              <li>Advertising cookies</li>
              <li>Remarketing cookies</li>
              <li>Affiliate tracking cookies</li>
              <li>Personalization cookies</li>
              <li>Third-party tracking cookies</li>
            </ul>
            <p>
              Essential cookies that are required for the website to function may be used without consent where allowed by applicable law.
            </p>
            <p className="font-semibold text-slate-900">
              If a cookie banner or consent tool is available, you may be able to accept, reject, or customize cookie preferences.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: How You Can Manage Cookies */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              How You Can Manage Cookies
            </h2>
            <p>
              You can manage cookies in several ways.
            </p>
            <p>You may be able to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Accept or reject cookies through a cookie banner where available</li>
              <li>Change cookie preferences through a website consent tool</li>
              <li>Disable cookies in your browser settings</li>
              <li>Delete cookies already stored on your device</li>
              <li>Block third-party cookies</li>
              <li>Use private browsing or incognito mode</li>
              <li>Adjust ad personalization settings on advertising platforms</li>
              <li>Use browser extensions or privacy tools to limit tracking</li>
            </ul>
            <p className="font-semibold text-slate-900">
              Most browsers allow you to manage cookies through settings. The exact steps depend on your browser and device. Please note that blocking or deleting cookies may affect website functionality, analytics accuracy, affiliate tracking, saved preferences, or certain features.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Browser Controls */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Browser Controls
            </h2>
            <p>
              You can usually manage cookies directly through your browser. Common browser options may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Blocking all cookies</li>
              <li>Blocking third-party cookies</li>
              <li>Deleting cookies after each session</li>
              <li>Clearing stored cookies manually</li>
              <li>Receiving alerts before cookies are stored</li>
              <li>Managing site-specific cookie permissions</li>
            </ul>
            <p className="font-semibold text-slate-900">
              For the most accurate instructions, visit the help section of your browser.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Do Not Track Signals */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Do Not Track Signals
            </h2>
            <p>
              Some browsers offer “Do Not Track” or similar privacy signals.
            </p>
            <p className="font-semibold text-slate-900">
              Because there is no consistent industry standard for how websites should respond to these signals, Official Products Lab may not respond to all Do Not Track signals automatically. You can still control cookies through browser settings, consent tools, or third-party opt-out options where available.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Updates to This Cookie Policy */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Updates to This Cookie Policy
            </h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our website, analytics tools, advertising tools, affiliate relationships, cookie practices, product subdomains, or legal requirements.
            </p>
            <p className="font-semibold text-slate-900">
              When we update this Cookie Policy, we will revise the “Effective Date” at the top of this page. Your continued use of Official Products Lab after updates are posted means you accept the updated Cookie Policy.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Contact Us */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Contact Us
            </h2>
            <p>
              If you have questions about this Cookie Policy or how cookies are used on Official Products Lab, you can contact us at:
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
