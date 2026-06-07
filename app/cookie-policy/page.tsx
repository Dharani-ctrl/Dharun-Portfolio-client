import Link from "next/link"
import { ArrowLeft, Cookie } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | Vidzby.Dharun",
  description: "Cookie Policy for Vidzby.Dharun — understand how we use cookies on our website.",
}

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-24 max-w-4xl">

        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 group">
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
            <Cookie className="h-6 w-6 text-accent" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-accent border border-accent/30 bg-accent/5 px-3 py-1 rounded-full">Legal</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-3">Cookie Policy</h1>
        <p className="text-muted-foreground mb-12">Last updated: June 2025</p>

        <div className="prose prose-invert max-w-none space-y-10">

          <section className="bg-card border border-border rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1. What Are Cookies?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and improve your browsing experience.
            </p>
          </section>

          <section className="bg-card border border-border rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. How We Use Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Our website uses the following types of cookies:</p>

            <div className="space-y-4">
              {[
                {
                  name: "Essential Cookies",
                  color: "bg-green-500",
                  desc: "Required for the website to function properly. These cannot be disabled."
                },
                {
                  name: "Analytics Cookies",
                  color: "bg-blue-500",
                  desc: "Help us understand how visitors interact with our website using tools like Vercel Analytics."
                },
                {
                  name: "Preference Cookies",
                  color: "bg-purple-500",
                  desc: "Remember your settings and preferences such as language and theme."
                }
              ].map((cookie, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border/50">
                  <div className={`h-3 w-3 rounded-full ${cookie.color} mt-1 shrink-0`} />
                  <div>
                    <p className="font-semibold text-foreground mb-1">{cookie.name}</p>
                    <p className="text-sm text-muted-foreground">{cookie.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-card border border-border rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. Third-Party Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may use third-party services such as Google Analytics or Vercel Analytics that set their own cookies to track usage data. These third parties have their own privacy policies governing their use of cookies.
            </p>
          </section>

          <section className="bg-card border border-border rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4. Managing Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              You can control and manage cookies through your browser settings. Most browsers allow you to refuse or delete cookies. Please note that disabling cookies may affect the functionality of this website. Common browser cookie settings:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              {["Chrome: Settings → Privacy and Security → Cookies", "Firefox: Options → Privacy & Security → Cookies", "Safari: Preferences → Privacy → Manage Website Data", "Edge: Settings → Cookies and Site Permissions"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-card border border-border rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">5. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about our Cookie Policy, please contact us at <span className="text-accent">vidzby.dharun@gmail.com</span>.
            </p>
          </section>

        </div>
        {/* Developer Attribution */}
        <div className="mt-16 pt-8 border-t border-border flex items-center justify-center text-sm text-muted-foreground">
          <p className="flex items-center gap-1">
            Developed by <span className="text-foreground font-semibold">Dharani Dharan</span>
          </p>
        </div>
      </div>
    </main>
  )
}
