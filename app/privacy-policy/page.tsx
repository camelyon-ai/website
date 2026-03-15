import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Camelyon Inc.",
  description:
    "Learn how Camelyon Inc. collects, uses, stores, and protects your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen font-sans">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-bold tracking-tight text-primary">
            Camelyon
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted">
          Last updated: March 4, 2026
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground/90">
          <section>
            <h2 className="text-xl font-semibold">1. Introduction</h2>
            <p className="mt-3">
              Camelyon Inc. (&quot;Camelyon,&quot; &quot;we,&quot; &quot;us,&quot;
              or &quot;our&quot;) is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, store, share, and
              protect personal data when you use our website, products, and
              services (collectively, the &quot;Services&quot;).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">2. Data We Collect</h2>
            <p className="mt-3">We may collect the following types of information:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Account Information:</strong> Name, email address,
                company name, and billing details when you create an account or
                subscribe to our Services.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact
                with our Services, including pages visited, features used, and
                session duration.
              </li>
              <li>
                <strong>Advertising Data:</strong> Campaign performance data,
                ad spend metrics, and related analytics from connected
                third-party advertising platforms (e.g., Google Ads, Meta Ads,
                Amazon Ads) that you authorize us to access.
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type,
                device information, and operating system.
              </li>
              <li>
                <strong>Communications:</strong> Information you provide when
                contacting our support team or submitting inquiries.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">3. How We Use Your Data</h2>
            <p className="mt-3">We use the collected data to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Provide, maintain, and improve our Services.</li>
              <li>
                Analyze and optimize your advertising campaigns using AI-powered
                tools.
              </li>
              <li>
                Generate performance reports and actionable recommendations.
              </li>
              <li>Process payments and manage your account.</li>
              <li>
                Communicate with you about updates, security alerts, and support
                matters.
              </li>
              <li>
                Comply with legal obligations and enforce our terms of service.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              4. Data Storage and Security
            </h2>
            <p className="mt-3">
              We store your data on secure, encrypted servers hosted by
              industry-leading cloud providers. We implement appropriate
              technical and organizational measures to protect your personal
              data against unauthorized access, alteration, disclosure, or
              destruction, including:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Encryption of data in transit (TLS) and at rest (AES-256).</li>
              <li>Regular security audits and vulnerability assessments.</li>
              <li>Role-based access controls for internal systems.</li>
              <li>Secure authentication mechanisms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              5. Data Sharing and Third Parties
            </h2>
            <p className="mt-3">
              We do not sell your personal data. We may share data with third
              parties only in the following circumstances:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Service Providers:</strong> Trusted vendors who assist
                in delivering our Services (e.g., cloud hosting, payment
                processing, analytics), bound by data protection agreements.
              </li>
              <li>
                <strong>Advertising Platforms:</strong> Data exchanged with
                platforms you have authorized and connected to our Services,
                solely to optimize your campaigns.
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law,
                regulation, or legal process.
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a
                merger, acquisition, or sale of assets, with prior notice to
                affected users.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">6. Data Retention</h2>
            <p className="mt-3">
              We retain your personal data only as long as necessary to fulfill
              the purposes described in this policy, unless a longer retention
              period is required by law. When data is no longer needed, we
              securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">7. Your Rights</h2>
            <p className="mt-3">
              Depending on your jurisdiction, you may have the following rights
              regarding your personal data:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Access:</strong> Request a copy of the personal data we
                hold about you.
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate
                or incomplete data.
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                data, subject to legal obligations.
              </li>
              <li>
                <strong>Portability:</strong> Request your data in a structured,
                machine-readable format.
              </li>
              <li>
                <strong>Objection:</strong> Object to processing of your data
                for certain purposes.
              </li>
              <li>
                <strong>Withdraw Consent:</strong> Where processing is based on
                consent, withdraw it at any time.
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:privacy@camelyon.ai" className="text-primary underline">
                privacy@camelyon.ai
              </a>
              . We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">8. Cookies</h2>
            <p className="mt-3">
              We use essential cookies to ensure our Services function properly.
              We may also use analytics cookies to understand usage patterns.
              You can manage cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              9. Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. We will
              notify you of material changes by posting the updated policy on
              this page with a revised &quot;Last updated&quot; date. Your
              continued use of our Services after any changes constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">10. Contact Us</h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy or our data
              practices, please contact us at:
            </p>
            <p className="mt-3">
              Camelyon Inc.
              <br />
              Email:{" "}
              <a href="mailto:privacy@camelyon.ai" className="text-primary underline">
                privacy@camelyon.ai
              </a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <a href="/" className="text-lg font-bold text-primary">Camelyon</a>
          <div className="flex gap-8 text-sm text-muted">
            <a href="/#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="/#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
          </div>
          <p className="text-sm text-muted">
            &copy; 2026 Camelyon Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
