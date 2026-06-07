import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Vidzby.Dharun",
  description: "Terms of Service for Vidzby.Dharun — the rules governing the use of our services.",
}

export default function TermsOfServicePage() {
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
            <FileText className="h-6 w-6 text-accent" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-accent border border-accent/30 bg-accent/5 px-3 py-1 rounded-full">Legal</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-3">Terms of Service</h1>
        <p className="text-muted-foreground mb-12">Last updated: June 2025</p>

        <div className="prose prose-invert max-w-none space-y-10">

          <section className="bg-card border border-border rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using the services of Vidzby.Dharun, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not use our services.
            </p>
          </section>

          <section className="bg-card border border-border rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">2. Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vidzby.Dharun provides freelance video production, editing, digital marketing, event coverage, and related creative services. The scope of each project is agreed upon individually before work commences.
            </p>
          </section>

          <section className="bg-card border border-border rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">3. Payment & Fees</h2>
            <p className="text-muted-foreground leading-relaxed">
              Payment terms are agreed upon before project commencement. A deposit may be required for certain projects. Final deliverables are released upon receipt of full payment. All fees are non-refundable unless explicitly agreed otherwise in writing.
            </p>
          </section>

          <section className="bg-card border border-border rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">4. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              Upon full payment, the client receives a license to use the delivered content for agreed purposes. Vidzby.Dharun retains the right to display completed work in its portfolio and marketing materials unless otherwise agreed in writing.
            </p>
          </section>

          <section className="bg-card border border-border rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">5. Client Responsibilities</h2>
            <ul className="space-y-2 text-muted-foreground">
              {["Provide accurate project briefs and requirements", "Supply necessary assets and permissions on time", "Provide timely feedback during revision rounds", "Obtain all necessary permissions for locations and individuals featured in videos"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-card border border-border rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">6. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vidzby.Dharun shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services. Our liability is limited to the amount paid for the specific project.
            </p>
          </section>

          <section className="bg-card border border-border rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">7. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms of Service, contact us at <span className="text-accent">vidzby.dharun@gmail.com</span>.
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
