import Link from "next/link"
import { ArrowLeft, Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Vidzby.Dharun",
  description: "Privacy Policy for Vidzby.Dharun — learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
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
            <Shield className="h-6 w-6 text-accent" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-accent border border-accent/30 bg-accent/5 px-3 py-1 rounded-full">Legal</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-3">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Last updated: June 2025</p>

        <div className="prose prose-invert max-w-none space-y-10">

          <section className="bg-card border border-border rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to Vidzby.Dharun. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="bg-card border border-border rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">We may collect information that you provide directly to us, including:</p>
            <ul className="space-y-2 text-muted-foreground">
              {["Your name and email address when you submit a contact or enquiry form", "Phone number (if provided)", "Project details and messages you send us", "Service preferences and requirements"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-card border border-border rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">We use the information we collect to:</p>
            <ul className="space-y-2 text-muted-foreground">
              {["Respond to your enquiries and service requests", "Send you project updates and communication", "Improve our website and services", "Comply with legal obligations"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-card border border-border rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy. Enquiry form submissions are stored securely and deleted after a reasonable period unless an active client relationship exists.
            </p>
          </section>

          <section className="bg-card border border-border rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">5. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">You have the right to access, correct, or delete any personal information we hold about you. To exercise these rights, please contact us at:</p>
            <p className="text-accent font-medium">vidzby.dharun@gmail.com</p>
          </section>

          <section className="bg-card border border-border rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">6. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions or concerns about this Privacy Policy, please contact us at <span className="text-accent">vidzby.dharun@gmail.com</span>.
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
