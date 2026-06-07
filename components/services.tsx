"use client"

import * as Icons from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  features: string[];
  accentColor: string;
  stat: string;
  statLabel: string;
}

const services: ServiceItem[] = [
  {
    icon: "Video",
    title: "Videography",
    description: "Professional video production for commercials, corporate content, and creative projects with state-of-the-art equipment.",
    features: ["4K/8K Production", "Drone Footage", "Post-Production"],
    accentColor: "from-violet-500 to-purple-700",
    stat: "80+",
    statLabel: "Videos Produced",
  },
  {
    icon: "TrendingUp",
    title: "Digital Marketing",
    description: "Strategic video marketing campaigns that drive engagement, conversions, and brand awareness across all platforms.",
    features: ["Strategy Development", "Content Creation", "Analytics"],
    accentColor: "from-green-500 to-emerald-700",
    stat: "3x",
    statLabel: "Avg. Reach Growth",
  },
  {
    icon: "Share2",
    title: "Social Media Management",
    description: "Create and manage compelling social media content optimized for Instagram, YouTube, TikTok, and LinkedIn.",
    features: ["Content Planning", "Engagement", "Growth Strategy"],
    accentColor: "from-sky-500 to-blue-700",
    stat: "50+",
    statLabel: "Brands Managed",
  },
  {
    icon: "Calendar",
    title: "Event Coverage",
    description: "Comprehensive event coverage from pre-production planning to final delivery of highlight reels and full recordings.",
    features: ["Corporate Events", "Conferences", "Weddings"],
    accentColor: "from-orange-500 to-amber-700",
    stat: "100+",
    statLabel: "Events Covered",
  },
  {
    icon: "User",
    title: "Personal Branding",
    description: "Build your personal brand with strategic content creation, professional headshots, and cohesive visual identity.",
    features: ["Brand Strategy", "Content Series", "Profile Building"],
    accentColor: "from-rose-500 to-pink-700",
    stat: "40+",
    statLabel: "Brands Built",
  },
  {
    icon: "Film",
    title: "Cinematic Video Editing",
    description: "Transform raw footage into cinematic stories with professional color grading, smooth transitions, and visually compelling edits.",
    features: ["Advanced Color Grading", "Storytelling Edits", "Cinematic Transitions & Effects"],
    accentColor: "from-cyan-500 to-teal-700",
    stat: "200+",
    statLabel: "Reels Edited",
  },
]

export function Services() {
  const { ref: servicesRef, isVisible } = useScrollAnimation()

  return (
    <section id="services" className="py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8" ref={servicesRef}>

        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4 border border-accent/30 bg-accent/5 px-4 py-1.5 rounded-full">
            What We Offer
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-5 mt-2">
            Services That Transform Your <span className="text-accent">Vision</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From concept to delivery, we provide end-to-end creative solutions tailored to your brand's unique story.
          </p>
        </div>

        {/* Services List — alternating wide layout */}
        <div className="flex flex-col gap-5 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`group relative flex flex-col md:flex-row ${isEven ? "" : "md:flex-row-reverse"} items-center gap-0 rounded-3xl overflow-hidden border border-border/50 bg-card shadow-lg hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/30 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Colored accent side panel with shimmer */}
                <div className={`relative shrink-0 w-full md:w-56 h-32 md:h-auto min-h-[140px] bg-gradient-to-br ${service.accentColor} flex flex-col items-center justify-center p-8 gap-3 overflow-hidden`}>
                  {/* Shimmer sweep on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
                  <div className="h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center z-10">
                    <IconComponent className="h-9 w-9 text-white" />
                  </div>
                  <span className="text-white/50 text-5xl font-black leading-none select-none z-10">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 p-7 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 w-full">
                  <div className="flex-1">
                    {/* Stat Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl font-black text-accent">{service.stat}</span>
                      <span className="text-xs text-muted-foreground border border-border/60 px-2 py-0.5 rounded-full">{service.statLabel}</span>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Feature pills */}
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-background border border-border text-muted-foreground group-hover:border-accent/40 group-hover:text-foreground transition-colors duration-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow CTA → links to Contact section */}
                  <div className="shrink-0">
                    <Link
                      href="#contact"
                      onClick={(e) => e.stopPropagation()}
                      className="h-12 w-12 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-500 group/btn"
                    >
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all duration-300" />
                    </Link>
                  </div>
                </div>

                {/* Subtle hover glow */}
                <div className="absolute inset-0 bg-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}