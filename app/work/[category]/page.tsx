"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Play, CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { contactApi } from "@/lib/api"
import { workCategories, categoryVideos } from "@/lib/data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function WorkDetailsPage() {
  const params = useParams()
  const router = useRouter()

  const categorySlug = params.category as string
  const category = workCategories.find(c => c.slug === categorySlug)

  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [error, setError] = useState("")

  // Video Player State
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null)

  if (!category) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Category not found</h1>
          <Button onClick={() => router.push("/#portfolio")}>Go Back</Button>
        </div>
      </main>
    )
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      await contactApi.submit({
        ...formData,
        service: category.title
      })
      setSubmitSuccess(true)
    } catch (err: any) {
      setError(err.message || "Failed to submit inquiry. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <section className="flex-1 pt-32 pb-24 lg:pt-40 lg:pb-32 px-4 lg:px-8 container mx-auto">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="mb-12 flex flex-col items-center relative">
            <Button
              variant="ghost"
              className="absolute left-0 top-0 lg:top-2 hover:bg-accent/10"
              onClick={() => router.push("/#portfolio")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
            </Button>
            <h2 className="text-3xl lg:text-5xl font-bold uppercase tracking-widest text-accent mt-16 lg:mt-0 mb-4 text-center">
              {category.title}
            </h2>
            <div className="h-1 w-24 bg-accent rounded-full mb-8"></div>
          </div>

          {category.type === "video" ? (
            /* Videos Grid View */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {(categoryVideos[category.slug] || []).map((video, idx) => {
                const isPlaying = playingVideoId === video.id;
                return (
                  <div
                    key={idx}
                    onClick={() => !isPlaying && setPlayingVideoId(video.id)}
                    className="relative aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer border border-border shadow-lg bg-black"
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    {isPlaying ? (
                      <video
                        src={video.videoUrl}
                        autoPlay
                        controls
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 transition-colors duration-500 group-hover:to-black/90" />

                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-[#FF0000] p-4 sm:p-5 rounded-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,0,0,0.6)]">
                            <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1" />
                          </div>
                        </div>

                        <div className="absolute bottom-6 left-4 right-4">
                          <h3 className="text-white text-center font-bold text-lg sm:text-xl drop-shadow-md line-clamp-2">
                            {video.title}
                          </h3>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            /* Enquiry Form View */
            <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-2xl">
              {submitSuccess ? (
                <div className="text-center py-12 animate-in zoom-in duration-500">
                  <CheckCircle2 className="w-20 h-20 text-accent mx-auto mb-6" />
                  <h3 className="text-3xl font-bold mb-4">Request Sent!</h3>
                  <p className="text-muted-foreground mb-8 text-lg">
                    Thank you for your interest in our {category.title} services. Our team will review your details and contact you shortly.
                  </p>
                  <Button onClick={() => router.push("/#portfolio")} className="rounded-full px-8">
                    Return to Portfolio
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="text-center mb-8">
                    <p className="text-muted-foreground text-lg">
                      Fill out the form below to inquire about our <strong className="text-foreground">{category.title}</strong> services.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name</label>
                      <Input
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address</label>
                      <Input
                        required
                        type="email"
                        placeholder="Your Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number (Optional)</label>
                    <Input
                      type="tel"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Details</label>
                    <Textarea
                      required
                      placeholder="Tell us about your project requirements..."
                      className="min-h-[120px] bg-background border-border"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  {error && <p className="text-destructive text-sm text-center">{error}</p>}

                  <Button
                    type="submit"
                    className="w-full rounded-full py-6 text-lg font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending Request...
                      </>
                    ) : (
                      "Submit Inquiry"
                    )}
                  </Button>
                </form>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
