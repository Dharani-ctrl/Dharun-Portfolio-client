"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Hero() {
  const { ref: heroRef, isVisible } = useScrollAnimation()

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 animate-gradient" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div
              className={`inline-block transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <span className="text-sm font-medium text-accent px-4 py-2 rounded-full bg-accent/10 border border-accent/20 hover:bg-accent/20 transition-colors duration-300">
                Creative Video Producer
              </span>
            </div>

            <h1
              className={`text-5xl lg:text-7xl font-bold leading-tight text-balance transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Crafting Visual Stories That <span className="text-accent animate-text-shimmer">Captivate</span>
            </h1>

            <p
              className={`text-lg lg:text-xl text-muted-foreground max-w-xl text-pretty transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              Transforming brands through compelling videography, strategic digital marketing, and creative storytelling
              that resonates with your audience.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <Button size="lg" className="gap-2 group hover:scale-105 transition-transform duration-300 text-black bg-accent">
                View My Work
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent hover:scale-105 transition-transform duration-300"
              >
                <Play className="h-4 w-4 group-hover:scale-110 transition-transform" />
                Watch Showreel
              </Button>
            </div>

            <div
              className={`flex items-center gap-8 pt-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="group">
                <div className="text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">Videos Created</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="group">
                <div className="text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  10+
                </div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="group">
                <div className="text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  3+
                </div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-accent/20 to-primary/20 shadow-2xl shadow-accent/20 hover:shadow-accent/30 transition-shadow duration-500">
              <img
                src="/professional-video-creator-with-camera.jpg"
                alt="Professional video creator"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-float">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
                  <Play className="h-6 w-6 text-accent-foreground relative z-10" />
                </div>
                <div>
                  <div className="text-sm font-medium">Available for Work</div>
                  <div className="text-xs text-muted-foreground">Reply time: {"<"} 2 hrs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-8 w-px bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  )
}
