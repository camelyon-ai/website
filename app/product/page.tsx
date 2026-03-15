import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product | Camelyon Inc.",
  description:
    "Discover how Camelyon's AI chatbot Chrome extension optimizes your advertising campaigns across Amazon Ads, Google Ads, Meta, and more.",
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
            Chrome Extension
          </span>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Your AI campaign assistant, right in your browser
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Camelyon is a Chrome extension chatbot that works alongside your ad
            platforms. Ask questions, get optimization recommendations, and take
            action — without leaving your browser.
          </p>
        </div>

        {/* Extension UI Preview */}
        <section className="mt-16">
          <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-border bg-surface p-1">
            <div className="rounded-xl bg-gradient-to-br from-primary/5 via-accent/5 to-transparent p-5">
              {/* Extension header */}
              <div className="mb-4 flex items-center gap-3 border-b border-border pb-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-xs font-bold text-white">
                  C
                </div>
                <span className="text-sm font-medium">Camelyon Assistant</span>
                <div className="ml-auto flex gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  <span className="text-[10px] text-muted">Connected</span>
                </div>
              </div>

              {/* Chat messages */}
              <div className="space-y-3">
                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-xs text-white">
                    How are my Amazon Sponsored Products performing this week?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-background px-4 py-2.5 text-xs shadow-sm">
                    <p>Your Sponsored Products campaigns this week:</p>
                    <div className="mt-2 space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-muted">Spend</span>
                        <span className="font-medium">$3,240</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted">Sales</span>
                        <span className="font-medium">$18,720</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted">ACoS</span>
                        <span className="font-medium text-accent">17.3%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted">ROAS</span>
                        <span className="font-medium text-primary">5.8x</span>
                      </div>
                    </div>
                    <p className="mt-2 text-muted">
                      I recommend increasing budget on Campaign #4 by 15% — it&apos;s converting at 2x your target ACoS.
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-xs text-white">
                    Do it. Also find negative keywords wasting spend.
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-background px-4 py-2.5 text-xs shadow-sm">
                    <p>Done. Budget increased by 15% on Campaign #4.</p>
                    <p className="mt-2">
                      I found 8 search terms with high spend and zero conversions. Adding them as negative keywords now...
                    </p>
                    <span className="mt-2 inline-block rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent">
                      Saving ~$420/week
                    </span>
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="mt-4 flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2.5">
                <span className="flex-1 text-xs text-muted">
                  Ask about your campaigns...
                </span>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mt-24">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
            Install the extension, connect your ad accounts, and start chatting.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Install the Extension",
                desc: "Add Camelyon to Chrome from the Chrome Web Store. It takes seconds and requires no configuration.",
              },
              {
                step: "02",
                title: "Connect Your Accounts",
                desc: "Authorize your Amazon Ads, Google Ads, or Meta accounts. Camelyon securely connects via official APIs.",
              },
              {
                step: "03",
                title: "Chat & Optimize",
                desc: "Ask questions in plain English. Get instant insights, recommendations, and take action directly from the chat.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Who It's For */}
        <section className="mt-24">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            Built for marketers who live in the browser
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
            Whether you&apos;re managing your own campaigns or running an
            agency, Camelyon fits your workflow.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "E-Commerce Sellers",
                desc: "Get instant answers about your Amazon and Google Shopping campaigns while browsing your ad console.",
              },
              {
                title: "Performance Agencies",
                desc: "Quickly pull insights across client accounts without switching tabs or building manual reports.",
              },
              {
                title: "Solo Marketers",
                desc: "Let the AI handle campaign analysis and keyword research so you can focus on strategy and creative.",
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

        {/* Core Features */}
        <section className="mt-24">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            What you can do with Camelyon
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Conversational Campaign Analysis",
                desc: "Ask about performance metrics, trends, and anomalies in natural language. Get clear, actionable answers instantly.",
              },
              {
                title: "AI-Powered Recommendations",
                desc: "Receive bid adjustments, budget reallocation suggestions, and keyword recommendations tailored to your goals.",
              },
              {
                title: "One-Click Actions",
                desc: "Apply optimizations directly from the chat — adjust bids, add negative keywords, pause underperformers, and more.",
              },
              {
                title: "Keyword Research & Harvesting",
                desc: "Discover high-performing search terms, identify wasted spend, and automate negative keyword management.",
              },
              {
                title: "Cross-Platform Insights",
                desc: "Compare performance across Amazon Ads, Google Ads, and Meta from a single conversation thread.",
              },
              {
                title: "Custom Alerts",
                desc: "Set up chat-based alerts for budget pacing, ACoS thresholds, or performance drops. Get notified right in the extension.",
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
                  Camelyon connects directly to the Amazon Ads API to give you
                  conversational access to your Sponsored Products, Sponsored
                  Brands, and Sponsored Display campaigns.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Ask about ACoS, TACoS, and ROAS in plain English",
                    "Get bid adjustment recommendations based on real-time data",
                    "Automatically harvest high-performing search terms as keywords",
                    "Identify and add negative keywords to eliminate wasted spend",
                    "Analyze product-level profitability across campaigns",
                    "Receive dayparting suggestions for peak conversion hours",
                    "Generate campaign performance summaries on demand",
                    "Monitor budget pacing and get overspend alerts",
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
              <div className="w-full shrink-0 md:w-64">
                <div className="rounded-xl border border-border bg-background p-5">
                  <div className="mb-3 text-sm font-medium">
                    Example Queries
                  </div>
                  <div className="space-y-2">
                    {[
                      "What's my ACoS this week?",
                      "Which keywords are wasting budget?",
                      "Increase bids on top converters by 10%",
                      "Show me campaigns over 30% ACoS",
                      "Add 'free' as negative keyword",
                      "Compare SP vs SB performance",
                    ].map((query, i) => (
                      <div
                        key={i}
                        className="rounded-lg bg-primary/5 px-3 py-2 text-xs text-foreground"
                      >
                        &quot;{query}&quot;
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Platforms */}
        <section className="mt-24">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            Supported platforms
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
            Connect your ad accounts and chat with your campaign data.
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
                desc: "1 ad account, basic chat queries, up to $5k ad spend",
              },
              {
                name: "Pro",
                price: "$149",
                period: "/mo",
                desc: "Unlimited accounts, AI actions, keyword management, up to $100k ad spend",
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                desc: "Unlimited ad spend, custom integrations, dedicated support, SLA",
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
              Install Camelyon and start optimizing
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/80">
              Free to start. No credit card required. Add the Chrome extension
              and connect your first ad account in under 2 minutes.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/#cta"
                className="rounded-full bg-white px-8 py-3 text-base font-medium text-primary-dark shadow-lg transition-colors hover:bg-white/90"
              >
                Add to Chrome — Free
              </a>
              <a
                href="mailto:sales@camelyon.ai"
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
