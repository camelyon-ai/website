import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product | Camelyon Inc.",
  description:
    "Discover how Camelyon's AI assistant optimizes your advertising campaigns across Amazon Ads, Google Ads, Meta, and more.",
};

export default function Product() {
  return (
    <div className="min-h-screen font-sans">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-bold tracking-tight text-primary">
            Camelyon
          </a>
          <a
            href="/#cta"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
          >
            Get Started
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-6 pt-32 pb-24">
        {/* Hero */}
        <div className="text-center">
          <span className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            Product Overview
          </span>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            The AI assistant that optimizes your ad campaigns
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Camelyon connects to your advertising platforms, analyzes
            performance data in real time, and automatically applies
            optimizations to maximize ROI — all from a single dashboard.
          </p>
        </div>

        {/* Who It's For */}
        <section className="mt-24">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            Built for modern marketing teams
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
            Whether you&apos;re a solo marketer or a large agency, Camelyon
            adapts to your workflow.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "E-Commerce Brands",
                desc: "Optimize product ads across Amazon, Google Shopping, and Meta to drive sales and lower ACoS.",
              },
              {
                title: "Performance Agencies",
                desc: "Manage multiple client accounts from one platform with AI-powered budget allocation and reporting.",
              },
              {
                title: "Growth Teams",
                desc: "Scale campaigns faster with automated A/B testing, audience discovery, and bid optimization.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Platform UI Preview */}
        <section className="mt-24">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            One dashboard. Full visibility.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
            See all your campaigns, channels, and performance metrics in one
            place.
          </p>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-surface p-1">
            <div className="rounded-xl bg-gradient-to-br from-primary/5 via-accent/5 to-transparent p-6">
              {/* Mock Dashboard */}
              <div className="mb-4 flex items-center gap-3 border-b border-border pb-4">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
                <span className="ml-2 text-xs text-muted">
                  Camelyon Dashboard
                </span>
              </div>

              {/* Top metrics */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  { label: "Total Ad Spend", value: "$24,580", change: "-12% waste" },
                  { label: "Conversions", value: "3,847", change: "+28% vs last month" },
                  { label: "Avg. ROAS", value: "5.2x", change: "+1.8x improvement" },
                  { label: "Active Campaigns", value: "42", change: "Across 4 channels" },
                ].map((m, i) => (
                  <div key={i} className="rounded-lg bg-background p-4 shadow-sm">
                    <div className="text-xs text-muted">{m.label}</div>
                    <div className="mt-1 text-xl font-bold">{m.value}</div>
                    <div className="mt-1 text-xs text-primary">{m.change}</div>
                  </div>
                ))}
              </div>

              {/* Channel breakdown */}
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-background p-4 shadow-sm">
                  <div className="mb-3 text-sm font-medium">
                    Channel Performance
                  </div>
                  {[
                    { name: "Amazon Ads", spend: "$8,200", roas: "6.1x", width: "85%" },
                    { name: "Google Ads", spend: "$7,400", roas: "4.8x", width: "70%" },
                    { name: "Meta Ads", spend: "$5,980", roas: "4.2x", width: "60%" },
                    { name: "TikTok Ads", spend: "$3,000", roas: "5.5x", width: "75%" },
                  ].map((ch, i) => (
                    <div key={i} className="mb-3">
                      <div className="flex items-center justify-between text-xs">
                        <span>{ch.name}</span>
                        <span className="text-muted">
                          {ch.spend} &middot; {ch.roas} ROAS
                        </span>
                      </div>
                      <div className="mt-1 h-2 w-full rounded-full bg-border">
                        <div
                          className="h-2 rounded-full bg-primary"
                          style={{ width: ch.width }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg bg-background p-4 shadow-sm">
                  <div className="mb-3 text-sm font-medium">
                    AI Recommendations
                  </div>
                  <div className="space-y-3">
                    {[
                      {
                        action: "Increase budget",
                        detail: "Amazon Sponsored Products — Campaign #12 is converting at 2.1x above target. Recommended +20% budget.",
                        status: "High confidence",
                      },
                      {
                        action: "Pause underperformer",
                        detail: "Google Search — 'broad match' ad group has 0.3% CTR. Recommend pausing and reallocating.",
                        status: "Medium confidence",
                      },
                      {
                        action: "New audience found",
                        detail: "Meta — Lookalike segment 'High-LTV Buyers' shows 3.2x projected ROAS. Recommend testing.",
                        status: "High confidence",
                      },
                    ].map((rec, i) => (
                      <div
                        key={i}
                        className="rounded-md border border-border p-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium">
                            {rec.action}
                          </span>
                          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                            {rec.status}
                          </span>
                        </div>
                        <p className="mt-1 text-[11px] leading-relaxed text-muted">
                          {rec.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="mt-24">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            Core features
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                title: "AI-Powered Budget Optimization",
                desc: "Our AI continuously monitors campaign performance and automatically shifts budgets to top-performing ads, channels, and audiences. Reduce wasted spend and maximize every dollar.",
              },
              {
                title: "Automated A/B Testing",
                desc: "Create and run multivariate tests across ad creatives, copy, audiences, and bidding strategies. Camelyon identifies winners with statistical confidence and scales them automatically.",
              },
              {
                title: "Predictive Audience Targeting",
                desc: "Machine learning models analyze conversion patterns to discover high-intent audience segments. Target the right people before your competitors find them.",
              },
              {
                title: "Real-Time Performance Dashboard",
                desc: "Track all your campaigns across every channel in a unified dashboard with live metrics, AI-generated insights, and customizable reports.",
              },
              {
                title: "Cross-Channel Attribution",
                desc: "Understand how each channel contributes to conversions with multi-touch attribution modeling. Make informed decisions about where to invest.",
              },
              {
                title: "Custom Alerts & Automation Rules",
                desc: "Set up custom triggers — pause ads that overspend, boost budgets when ROAS exceeds targets, or get notified when performance anomalies occur.",
              },
            ].map((feature, i) => (
              <div key={i} className="rounded-2xl border border-border p-6">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Amazon Ads Integration */}
        <section className="mt-24">
          <div className="rounded-2xl border border-border bg-surface p-8 md:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-start">
              <div className="flex-1">
                <span className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
                  Amazon Ads Integration
                </span>
                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  Deep integration with Amazon Ads
                </h2>
                <p className="mt-4 leading-relaxed text-muted">
                  Camelyon connects directly to the Amazon Ads API to provide
                  comprehensive campaign management and optimization for
                  Sponsored Products, Sponsored Brands, and Sponsored Display
                  campaigns.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Automated bid adjustments based on real-time ACoS and TACoS targets",
                    "Keyword harvesting — automatically promote high-performing search terms",
                    "Negative keyword management to eliminate wasted spend",
                    "Product-level profitability analysis with COGS integration",
                    "Dayparting optimization to bid higher during peak conversion hours",
                    "Campaign structure recommendations based on catalog size",
                    "Automated reporting for Sponsored Products, Brands, and Display",
                    "Budget pacing to prevent overspend and maximize daily impression share",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full shrink-0 md:w-72">
                <div className="rounded-xl border border-border bg-background p-5">
                  <div className="mb-3 text-sm font-medium">
                    Amazon Ads Overview
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-muted">
                        Sponsored Products
                      </div>
                      <div className="text-lg font-bold">$5,400</div>
                      <div className="text-xs text-accent">ACoS: 18.2%</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted">
                        Sponsored Brands
                      </div>
                      <div className="text-lg font-bold">$1,800</div>
                      <div className="text-xs text-accent">ACoS: 22.1%</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted">
                        Sponsored Display
                      </div>
                      <div className="text-lg font-bold">$1,000</div>
                      <div className="text-xs text-accent">ACoS: 15.8%</div>
                    </div>
                    <div className="border-t border-border pt-3">
                      <div className="text-xs text-muted">Total ROAS</div>
                      <div className="text-2xl font-bold text-primary">
                        6.1x
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Integrations */}
        <section className="mt-24">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            Integrations
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
            Connect all your advertising channels and manage them from one
            place.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              "Amazon Ads",
              "Google Ads",
              "Meta Ads",
              "TikTok Ads",
              "LinkedIn Ads",
              "Microsoft Ads",
              "Pinterest Ads",
              "Snapchat Ads",
            ].map((platform, i) => (
              <div
                key={i}
                className="flex items-center justify-center rounded-xl border border-border bg-surface p-5 text-sm font-medium"
              >
                {platform}
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Summary */}
        <section className="mt-24">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
            Start free. Upgrade as you grow.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "$0",
                period: "/mo",
                desc: "1 channel, basic analytics, up to $5k ad spend",
              },
              {
                name: "Pro",
                price: "$149",
                period: "/mo",
                desc: "Unlimited channels, AI optimization, up to $100k ad spend, A/B testing",
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                desc: "Unlimited ad spend, custom integrations, dedicated CSM, SLA",
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl border p-6 text-center ${
                  plan.highlighted
                    ? "border-primary bg-primary/5"
                    : "border-border"
                }`}
              >
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted">{plan.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="/#pricing"
              className="text-sm font-medium text-primary underline"
            >
              View full pricing details
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-12 text-center text-white">
            <h2 className="text-3xl font-bold">
              Start optimizing your campaigns today
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/80">
              Free to start. No credit card required. Connect your first
              channel in under 2 minutes.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/#cta"
                className="rounded-full bg-white px-8 py-3 text-base font-medium text-primary-dark shadow-lg transition-colors hover:bg-white/90"
              >
                Start Free Trial
              </a>
              <a
                href="mailto:sales@camelyon.com"
                className="rounded-full border border-white/30 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </section>
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
