export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Developer Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Typing the Same Forms.<br />
          <span className="text-[#58a6ff]">Auto-Fill Them Securely.</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          FormVault stores encrypted form templates and fills repetitive browser forms across any website with one click — built for QA engineers and web developers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get FormVault — $9/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          {[
            ["AES-256", "Client-side encryption"],
            ["1-Click", "Instant form filling"],
            ["Any Site", "Works everywhere"]
          ].map(([stat, label]) => (
            <div key={stat} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            ["Encrypted Templates", "All form data is encrypted client-side before syncing. Your data never leaves your device in plain text."],
            ["Browser Extension", "Lightweight extension detects form fields and fills them instantly from your saved templates."],
            ["Multi-Site Support", "Map templates to specific URLs or use them globally across any website you work on."],
            ["Team Sync", "Share encrypted templates with teammates via Supabase-backed sync — no plain-text sharing."]
          ].map(([title, desc]) => (
            <div key={title as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited form templates",
              "Browser extension (Chrome & Firefox)",
              "Client-side AES-256 encryption",
              "Cross-device sync via Supabase",
              "URL-based template mapping",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start for $9/mo
          </a>
          <p className="text-xs text-[#8b949e] mt-3">Cancel anytime. No hidden fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "Is my form data actually private?",
              "Yes. All data is encrypted with AES-256 on your device before it ever reaches our servers. We cannot read your form templates."
            ],
            [
              "Which browsers are supported?",
              "The extension supports Chrome and Firefox. Edge and Brave (Chromium-based) also work via the Chrome extension."
            ],
            [
              "Can I cancel my subscription?",
              "Absolutely. Cancel anytime from your account dashboard. You keep access until the end of your billing period."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} FormVault. All rights reserved.
      </footer>
    </main>
  );
}
