import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Camelyon Inc.",
  description:
    "Terms of Service for Camelyon Inc. Read our user agreement, acceptable use policy, and service terms.",
};

export default function Terms() {
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
        <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted">
          Last updated: March 4, 2026
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground/90">
          <section>
            <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
            <p className="mt-3">
              By accessing or using the services provided by Camelyon Inc.
              (&quot;Camelyon,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;), including our website, platform, APIs, and
              AI-powered campaign optimization tools (collectively, the
              &quot;Services&quot;), you agree to be bound by these Terms of
              Service (&quot;Terms&quot;). If you do not agree to these Terms,
              you may not use the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">2. Description of Services</h2>
            <p className="mt-3">
              Camelyon provides AI-powered tools and assistants designed to
              help businesses optimize their advertising and marketing
              campaigns. Our Services may include campaign analytics, automated
              budget allocation, A/B testing, audience targeting, and
              integrations with third-party advertising platforms such as
              Google Ads, Meta Ads, Amazon Ads, TikTok Ads, and LinkedIn Ads.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">3. Account Registration</h2>
            <p className="mt-3">
              To use certain features of the Services, you must create an
              account. You agree to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Provide accurate, current, and complete information during registration.</li>
              <li>Maintain the security of your account credentials.</li>
              <li>Promptly update your information if it changes.</li>
              <li>Accept responsibility for all activities that occur under your account.</li>
            </ul>
            <p className="mt-3">
              You must be at least 18 years of age to create an account and use
              the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">4. User Responsibilities</h2>
            <p className="mt-3">As a user of the Services, you are responsible for:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Ensuring that your use of the Services complies with all
                applicable laws, regulations, and third-party platform policies.
              </li>
              <li>
                Maintaining appropriate permissions and authorizations for any
                advertising accounts you connect to our platform.
              </li>
              <li>
                Reviewing and approving any automated actions or optimizations
                performed by our AI tools on your campaigns.
              </li>
              <li>
                Ensuring that your advertising content complies with applicable
                advertising standards and regulations.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">5. Acceptable Use</h2>
            <p className="mt-3">You agree not to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Use the Services for any unlawful purpose or in violation of
                any applicable laws or regulations.
              </li>
              <li>
                Attempt to gain unauthorized access to our systems, other
                users&apos; accounts, or connected third-party platforms.
              </li>
              <li>
                Reverse engineer, decompile, or disassemble any part of the
                Services.
              </li>
              <li>
                Use the Services to transmit malware, spam, or other harmful
                content.
              </li>
              <li>
                Resell, sublicense, or redistribute the Services without our
                prior written consent.
              </li>
              <li>
                Interfere with or disrupt the integrity or performance of the
                Services.
              </li>
              <li>
                Use the Services to engage in fraudulent advertising practices,
                including click fraud or impression fraud.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              6. Third-Party Integrations
            </h2>
            <p className="mt-3">
              Our Services integrate with third-party advertising platforms. By
              connecting your accounts on these platforms, you authorize
              Camelyon to access, retrieve, and modify campaign data as
              necessary to provide the Services. You acknowledge that:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Third-party platforms are governed by their own terms of
                service and policies.
              </li>
              <li>
                Camelyon is not responsible for the availability, accuracy, or
                policies of third-party platforms.
              </li>
              <li>
                You are responsible for maintaining valid credentials and
                permissions for connected accounts.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">7. Intellectual Property</h2>
            <p className="mt-3">
              All intellectual property rights in the Services, including
              software, algorithms, AI models, designs, trademarks, and
              documentation, are owned by Camelyon Inc. or its licensors.
              These Terms do not grant you any right, title, or interest in
              our intellectual property except for the limited right to use
              the Services as described herein.
            </p>
            <p className="mt-3">
              You retain ownership of your data, including campaign data and
              advertising content. By using the Services, you grant Camelyon a
              limited, non-exclusive license to use your data solely to
              provide and improve the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">8. Payment and Billing</h2>
            <p className="mt-3">
              Certain features of the Services require a paid subscription.
              By subscribing, you agree to pay all applicable fees as
              described in the pricing plan you select. Fees are
              non-refundable except as required by law or as expressly stated
              in these Terms. We reserve the right to modify pricing with 30
              days&apos; prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              9. Disclaimer of Warranties
            </h2>
            <p className="mt-3">
              The Services are provided &quot;as is&quot; and &quot;as
              available&quot; without warranties of any kind, either express or
              implied, including but not limited to implied warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement. Camelyon does not guarantee that:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>The Services will be uninterrupted, error-free, or secure.</li>
              <li>
                AI-generated recommendations or optimizations will achieve
                specific results or performance outcomes.
              </li>
              <li>
                The Services will be compatible with all third-party platforms
                at all times.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              10. Limitation of Liability
            </h2>
            <p className="mt-3">
              To the maximum extent permitted by applicable law, Camelyon Inc.
              and its officers, directors, employees, and agents shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, including but not limited to loss of profits,
              data, business opportunities, or goodwill, arising out of or
              related to your use of the Services.
            </p>
            <p className="mt-3">
              Our total aggregate liability for any claims arising from or
              related to these Terms or the Services shall not exceed the
              amount you paid to Camelyon in the twelve (12) months preceding
              the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">11. Indemnification</h2>
            <p className="mt-3">
              You agree to indemnify, defend, and hold harmless Camelyon Inc.
              and its affiliates from any claims, damages, losses, or expenses
              (including reasonable attorneys&apos; fees) arising from your use
              of the Services, your violation of these Terms, or your
              violation of any third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">12. Termination</h2>
            <p className="mt-3">
              Either party may terminate these Terms at any time. We may
              suspend or terminate your access to the Services immediately if
              you breach these Terms or engage in conduct that we reasonably
              believe is harmful to Camelyon, other users, or third parties.
              Upon termination, your right to use the Services ceases
              immediately, and we may delete your account data in accordance
              with our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">13. Governing Law</h2>
            <p className="mt-3">
              These Terms shall be governed by and construed in accordance with
              the laws of the State of Delaware, United States, without regard
              to its conflict of law provisions. Any disputes arising under
              these Terms shall be resolved exclusively in the state or
              federal courts located in Delaware.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              14. Changes to These Terms
            </h2>
            <p className="mt-3">
              We reserve the right to modify these Terms at any time. We will
              notify you of material changes by posting the updated Terms on
              this page with a revised &quot;Last updated&quot; date. Your
              continued use of the Services after any changes constitutes
              acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">15. Contact Us</h2>
            <p className="mt-3">
              If you have questions about these Terms of Service, please
              contact us at:
            </p>
            <p className="mt-3">
              Camelyon Inc.
              <br />
              Email:{" "}
              <a href="mailto:legal@camelyon.com" className="text-primary underline">
                legal@camelyon.com
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
