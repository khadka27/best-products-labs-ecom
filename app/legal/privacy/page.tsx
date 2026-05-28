import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <article className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 sm:p-12">
        <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-orange-500 mb-3 block">
          Legal & Transparency
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm font-semibold text-slate-500 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl w-fit">
          Effective Date: 2026/06/01
        </p>

        <section className="mt-10 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            Official Products Lab (“Official Products Lab,” “we,” “our,” or “us”) respects your privacy. This Privacy Policy explains how we collect, use, share, and protect information when you visit <a href="https://officialproductslab.com" className="text-orange-500 hover:text-orange-600 font-bold transition-colors">OfficialProductsLab.com</a>, browse our product reviews, use category pages, subscribe to updates, submit a form, or click links to dedicated product information pages or third-party product offers.
          </p>
          <p>
            This Privacy Policy applies to OfficialProductsLab.com and any related pages, services, or product subdomains that link to this policy.
          </p>
          <p className="font-semibold text-slate-900">
            By using our website, you agree to the practices described in this Privacy Policy.
          </p>

          <hr className="border-slate-100" />

          {/* Section: Information We Collect */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Information We Collect
            </h2>
            <p>
              We may collect information that you provide directly, information collected automatically when you use the website, and limited data collected through third-party tools.
            </p>
            <p>The type of information we may collect includes:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Name and email address if you contact us or subscribe to updates</li>
              <li>Messages or details submitted through contact forms</li>
              <li>IP address, browser type, device type, and operating system</li>
              <li>Pages visited, links clicked, time spent on pages, and browsing activity</li>
              <li>Cookie data, tracking data, and analytics information</li>
              <li>Product link clicks, affiliate link interactions, and referral data</li>
              <li>Newsletter subscription details and email engagement activity</li>
            </ul>
            <p className="text-slate-500 text-xs sm:text-sm italic bg-slate-50 border border-slate-100 rounded-xl p-4">
              We do not intentionally collect sensitive personal information such as government identification numbers, payment card details, private medical records, or financial account information through this website.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: How We Collect Information */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              How We Collect Information
            </h2>
            <p>
              We collect information in a few different ways depending on how you interact with the website.
            </p>
            <p>
              Some information is collected directly from you when you fill out a contact form, subscribe to a newsletter, send us an email, or request information. Other information may be collected automatically through cookies, analytics tools, tracking pixels, server logs, or similar technologies.
            </p>
            <p>
              We may also receive limited information from third-party tools used for analytics, affiliate tracking, advertising, spam protection, email delivery, hosting, and website security.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: How We Use Your Information */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              How We Use Your Information
            </h2>
            <p>
              We use collected information to operate, improve, protect, and manage Official Products Lab.
            </p>
            <p>We may use your information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Respond to your messages, questions, feedback, or correction requests</li>
              <li>Send newsletter updates if you have subscribed</li>
              <li>Improve product reviews, category pages, buyer guides, and website layout</li>
              <li>Understand how visitors use the website</li>
              <li>Measure traffic, page performance, and user engagement</li>
              <li>Track product link clicks and affiliate link performance</li>
              <li>Improve website security and prevent spam or abuse</li>
              <li>Analyze marketing and advertising performance</li>
              <li>Comply with legal obligations or respond to valid legal requests</li>
            </ul>
            <p className="font-semibold text-slate-900">
              We do not sell your personal information directly to third parties.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Cookies and Tracking Technologies */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Cookies and Tracking Technologies
            </h2>
            <p>
              Official Products Lab may use cookies, pixels, tags, scripts, and similar tracking technologies. These tools help the website function properly, understand visitor behavior, measure content performance, and support affiliate or advertising activity.
            </p>
            <p>
              Cookies are small files stored on your browser or device. They may help remember preferences, measure page visits, track clicks, and improve the user experience.
            </p>
            <p>
              We may use different types of cookies, including essential cookies, analytics cookies, affiliate tracking cookies, advertising cookies, and preference cookies.
            </p>

            <div className="overflow-x-auto border border-slate-100 rounded-2xl shadow-sm mt-4">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 border-b border-slate-100 font-bold">
                    <th className="p-4">Cookie Type</th>
                    <th className="p-4">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-900">Essential Cookies</td>
                    <td className="p-4">Help the website function properly</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-900">Analytics Cookies</td>
                    <td className="p-4">Help us understand traffic and visitor behavior</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-900">Affiliate Cookies</td>
                    <td className="p-4">Help track referrals and product link clicks</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-900">Advertising Cookies</td>
                    <td className="p-4">Help measure ads, campaigns, and remarketing activity</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-900">Preference Cookies</td>
                    <td className="p-4">Help remember user choices or settings</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4">
              Some cookies are necessary for the website to work. Other cookies, such as analytics, advertising, affiliate, or tracking cookies, may require consent depending on your location and applicable law.
            </p>
            <p>
              You can manage or disable cookies through your browser settings. Please note that disabling cookies may affect website performance, tracking accuracy, or certain features.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Third-Party Tools and Services */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Third-Party Tools and Services
            </h2>
            <p>
              We may use third-party tools to help operate, analyze, secure, and improve our website. These third-party services may collect information according to their own privacy policies.
            </p>
            <p>Examples of third-party tools we may use include:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Google Analytics for traffic and behavior analysis</li>
              <li>Google Search Console for search performance monitoring</li>
              <li>Microsoft Clarity or similar tools for user behavior insights</li>
              <li>Affiliate platforms for referral tracking and commission attribution</li>
              <li>Email marketing tools for newsletter delivery</li>
              <li>Ad networks or advertising platforms for campaign measurement</li>
              <li>Hosting providers, security tools, and spam protection services</li>
            </ul>
            <p>
              These tools may use cookies, scripts, pixels, or similar technologies. We do not control how third-party platforms collect, store, or process data once you interact with them directly.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Affiliate Links and Product Pages */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Affiliate Links and Product Pages
            </h2>
            <p>
              Official Products Lab may link to dedicated product information pages, product subdomains, affiliate websites, promotional product pages, checkout pages, or third-party seller websites.
            </p>
            <p>
              When you click a product button, affiliate link, or third-party offer link, the external website or affiliate platform may collect information such as your IP address, browser data, referral source, click activity, purchase activity, or other tracking information.
            </p>
            <p>
              Some links on our website may generate a commission if you make a purchase through them, at no extra cost to you. Product pricing, discounts, availability, shipping, refund policies, and guarantee terms may change depending on the product seller or campaign source.
            </p>
            <p className="font-semibold text-slate-900">
              Before submitting personal information or placing an order on any third-party website, you should review that website’s privacy policy, terms, refund policy, and checkout details.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Advertising and Remarketing */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Advertising and Remarketing
            </h2>
            <p>
              Official Products Lab may use advertising tools, pixels, or remarketing technologies to measure campaign performance or show relevant content and ads.
            </p>
            <p>
              These tools may collect information about your browsing behavior, device, approximate location, product link interactions, and page activity. This information may be used to measure conversions, improve marketing performance, limit ad frequency, or personalize advertising where allowed.
            </p>
            <p>
              You may be able to opt out of certain personalized ads through your browser settings, device settings, advertising platform controls, or applicable opt-out tools.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Newsletter and Email Communication */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Newsletter and Email Communication
            </h2>
            <p>
              If you subscribe to our newsletter or product research updates, we may collect your email address and send you updates about new product reviews, buyer guides, category pages, and related content.
            </p>
            <p>
              You can unsubscribe at any time by using the unsubscribe link in our emails or by contacting us directly.
            </p>
            <p>
              We do not send newsletter emails unless you have subscribed or otherwise agreed to receive communication from us.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Contact Forms and User Messages */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Contact Forms and User Messages
            </h2>
            <p>
              When you contact us through a form or email, we may collect your name, email address, message content, and any other information you choose to provide.
            </p>
            <p>
              We use this information to respond to your request, answer questions, review correction requests, investigate issues, or provide support.
            </p>
            <p className="font-semibold text-slate-900">
              Please do not send sensitive personal information through contact forms.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: How We Share Information */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              How We Share Information
            </h2>
            <p>
              We may share limited information with trusted third-party service providers when necessary to operate the website, improve performance, track affiliate activity, deliver emails, protect the website, or comply with legal requirements.
            </p>
            <p>We may share information with:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Website hosting and security providers</li>
              <li>Analytics and performance measurement tools</li>
              <li>Email delivery or newsletter platforms</li>
              <li>Affiliate networks and tracking platforms</li>
              <li>Advertising and remarketing partners</li>
              <li>Spam prevention and fraud detection tools</li>
              <li>Legal authorities if required by law</li>
            </ul>
            <p className="font-semibold text-slate-900">
              We do not knowingly sell personal information directly to data brokers.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Data Retention */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Data Retention
            </h2>
            <p>
              We keep personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy.
            </p>
            <p>
              For example, contact form messages may be retained as needed to respond to your request or maintain business records. Newsletter data may be stored until you unsubscribe or request deletion. Analytics and cookie data may be retained based on the settings of the tools we use.
            </p>
            <p>
              When information is no longer needed, we may delete, anonymize, or aggregate it.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Data Security */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Data Security
            </h2>
            <p>
              We use reasonable technical, administrative, and organizational measures to protect information from unauthorized access, loss, misuse, alteration, or disclosure.
            </p>
            <p>
              However, no website, server, internet transmission, or digital storage method is completely secure. Because of this, we cannot guarantee absolute security.
            </p>
            <p className="font-semibold text-slate-900">
              You use the website at your own risk.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Your Privacy Rights */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Your Privacy Rights
            </h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information.
            </p>
            <p>These rights may include the ability to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Request access to personal information we may hold about you</li>
              <li>Ask us to correct inaccurate or incomplete information</li>
              <li>Request deletion of personal information, subject to legal or operational limits</li>
              <li>Unsubscribe from email communication</li>
              <li>Opt out of certain marketing or tracking activities</li>
              <li>Manage or reject cookies through browser settings or consent tools</li>
              <li>Object to or restrict certain processing where applicable</li>
              <li>Request data portability where applicable law provides this right</li>
            </ul>
            <p>
              To make a privacy request, contact us using the email address listed below. We may need to verify your identity before processing certain requests.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: EU, UK, and International Visitors */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              EU, UK, and International Visitors
            </h2>
            <p>
              If you are located in the European Union, United Kingdom, or another region with privacy or data protection laws, you may have additional rights regarding your personal information.
            </p>
            <p>
              Where required by applicable law, we may rely on legal bases such as consent, legitimate interests, legal compliance, contractual necessity, or your direct request to process information.
            </p>
            <p>
              For visitors in regions with cookie consent requirements, non-essential cookies such as analytics, advertising, affiliate, or tracking cookies may require consent before they are used.
            </p>
            <p>
              You may also have the right to lodge a complaint with a data protection authority in your country or region.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Children’s Privacy */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Children’s Privacy
            </h2>
            <p>
              Official Products Lab is not intended for children under the age of 13. We do not knowingly collect personal information from children.
            </p>
            <p>
              If you believe a child has provided personal information through our website, please contact us and we will take reasonable steps to delete the information.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: External Links */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              External Links
            </h2>
            <p>
              Our website may contain links to third-party websites, product information pages, affiliate offers, checkout pages, advertisements, or other external resources.
            </p>
            <p>
              We are not responsible for the privacy practices, content, claims, pricing, refund policies, shipping terms, or checkout process of third-party websites.
            </p>
            <p>
              When you leave Official Products Lab, you should review the privacy policy and terms of the external website before submitting personal information or making a purchase.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Changes to This Privacy Policy */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our website, tools, data practices, legal requirements, or business operations.
            </p>
            <p>
              When we update this Privacy Policy, we will revise the “Effective Date” at the top of this page.
            </p>
            <p>
              Your continued use of the website after changes are posted means you accept the updated Privacy Policy.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Contact Us */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Contact Us
            </h2>
            <p>
              For privacy questions, data requests, correction requests, or concerns about this Privacy Policy, you can contact us at:
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
