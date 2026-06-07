"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { testimonialsApi } from "@/lib/api"

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const { ref: testimonialsRef, isVisible } = useScrollAnimation()

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await testimonialsApi.getAll()
        setTestimonials(data)
      } catch (error) {
        console.error("Error fetching testimonials:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchTestimonials()
  }, [])

  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8" ref={testimonialsRef}>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Client <span className="text-accent">Success Stories</span></h2>
          <p className="text-muted-foreground">Trusted by brands to deliver exceptional results.</p>
        </div>
        
        {loading ? (
          <div className="text-center py-12 text-muted-foreground">Loading testimonials...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial._id}
                className={`border-border hover:border-accent/50 transition-all duration-500 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="h-12 w-12 rounded-full bg-accent/10 border border-accent flex items-center justify-center font-bold text-accent">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}