import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold tracking-tight text-primary">
            Camelyon
          </span>
          <div className="hidden items-center gap-8 md:flex">
            <a href="/product" className="text-sm text-muted hover:text-foreground transition-colors">Product</a>
            <a href="#features" className="text-sm text-muted hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-muted hover:text-foreground transition-colors">How It Works</a>
            <a href="#pricing" className="text-sm text-muted hover:text-foreground transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#cta"
              className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
            >
            Get Started
            </a>
            <Link href="/login">Log in</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 pt-40 pb-24 text-center">
        <span className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
          AI-Powered Campaign Optimization
        </span>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Smarter campaigns.{" "}
          <span className="text-primary">Better results.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Camelyon&apos;s AI assistant analyzes, optimizes, and scales your
          marketing campaigns in real time — so you can focus on strategy, not
          spreadsheets.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#cta"
            className="rounded-full bg-primary px-8 py-3 text-base font-medium text-white shadow-lg shadow-primary/25 transition-colors hover:bg-primary-dark"
          >
            Start Free Trial
          </a>
          <a
            href="#how-it-works"
            className="rounded-full border border-border px-8 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface"
          >
            See How It Works
          </a>
        </div>

        {/* Hero visual */}
        <div className="mx-auto mt-16 w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-surface p-1">
          <div className="rounded-xl bg-gradient-to-br from-primary/10 via-accent/5 to-transparent p-12">
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-lg bg-background/80 p-4 shadow-sm">
                <div className="mb-2 text-xs text-muted">Click-through Rate</div>
                <div className="text-2xl font-bold text-primary">+42%</div>
                <div className="mt-1 h-2 w-full rounded-full bg-border">
                  <div className="h-2 w-[72%] rounded-full bg-primary"></div>
                </div>
              </div>
              <div className="rounded-lg bg-background/80 p-4 shadow-sm">
                <div className="mb-2 text-xs text-muted">Cost Per Lead</div>
                <div className="text-2xl font-bold text-accent">-38%</div>
                <div className="mt-1 h-2 w-full rounded-full bg-border">
                  <div className="h-2 w-[62%] rounded-full bg-accent"></div>
                </div>
              </div>
              <div className="rounded-lg bg-background/80 p-4 shadow-sm">
                <div className="mb-2 text-xs text-muted">ROAS</div>
                <div className="text-2xl font-bold text-primary-light">5.2x</div>
                <div className="mt-1 h-2 w-full rounded-full bg-border">
                  <div className="h-2 w-[85%] rounded-full bg-primary-light"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-surface px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to optimize campaigns
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Our AI assistant handles the heavy lifting so your team can focus on creative strategy and growth.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                  </svg>
                ),
                title: "Real-Time Analytics",
                desc: "Monitor campaign performance across all channels with live dashboards and AI-generated insights.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                ),
                title: "AI Budget Allocation",
                desc: "Automatically shift budgets to top-performing ads and channels to maximize your return on ad spend.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                  </svg>
                ),
                title: "Predictive Targeting",
                desc: "Identify high-intent audience segments before your competitors do, using predictive modeling.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                  </svg>
                ),
                title: "A/B Test Automation",
                desc: "Run and analyze multivariate tests automatically. Our AI picks winners and scales them fast.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                  </svg>
                ),
                title: "Multi-Channel Sync",
                desc: "Connect Google Ads, Meta, TikTok, LinkedIn and more. Manage everything from one unified dashboard.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
                title: "Brand Safety & Compliance",
                desc: "Built-in guardrails ensure your ads stay on-brand and compliant across every market.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Up and running in minutes
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              No complex setup. No steep learning curve. Just connect, configure, and let AI do the rest.
            </p>
          </div>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Connect Your Channels",
                desc: "Link your ad accounts from Google, Meta, TikTok, and other platforms with one-click integrations.",
              },
              {
                step: "02",
                title: "Set Your Goals",
                desc: "Define your KPIs — whether it's lower CPA, higher ROAS, or more conversions. The AI adapts to your objectives.",
              },
              {
                step: "03",
                title: "Watch AI Optimize",
                desc: "Camelyon continuously monitors, tests, and reallocates to maximize performance 24/7.",
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
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-y border-border bg-surface px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { stat: "500+", label: "Companies" },
              { stat: "$2.1B", label: "Ad Spend Optimized" },
              { stat: "42%", label: "Avg. ROAS Lift" },
              { stat: "98%", label: "Client Retention" },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-primary">{item.stat}</div>
                <div className="mt-1 text-sm text-muted">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Start free. Scale when you&apos;re ready.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "$0",
                period: "/mo",
                desc: "For small teams getting started",
                features: ["1 ad channel", "Basic analytics", "Up to $5k ad spend", "Email support"],
                cta: "Start Free",
                highlighted: false,
              },
              {
                name: "Pro",
                price: "$149",
                period: "/mo",
                desc: "For growing marketing teams",
                features: ["Unlimited channels", "AI optimization", "Up to $100k ad spend", "Priority support", "A/B testing"],
                cta: "Start Free Trial",
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                desc: "For large-scale operations",
                features: ["Everything in Pro", "Unlimited ad spend", "Custom integrations", "Dedicated CSM", "SLA guarantee"],
                cta: "Contact Sales",
                highlighted: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl border p-8 ${
                  plan.highlighted
                    ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                    : "border-border bg-background"
                }`}
              >
                {plan.highlighted && (
                  <span className="mb-4 inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted">{plan.desc}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={`mt-8 block w-full rounded-full py-3 text-center text-sm font-medium transition-colors ${
                    plan.highlighted
                      ? "bg-primary text-white hover:bg-primary-dark"
                      : "border border-border text-foreground hover:bg-surface"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="px-6 py-24">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-12 text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to supercharge your campaigns?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">
            Join hundreds of marketing teams using Camelyon to drive better
            results with less effort.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-full bg-white px-8 py-3 text-base font-medium text-primary-dark shadow-lg transition-colors hover:bg-white/90"
            >
              Start Your Free Trial
            </a>
            <a
              href="#"
              className="rounded-full border border-white/30 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <span className="text-lg font-bold text-primary">Camelyon</span>
          <div className="flex gap-8 text-sm text-muted">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="/contact" className="hover:text-foreground transition-colors">Contact</a>
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
