"use client"

import { Card, CardContent } from "@/components/ui/card"
// Import everything from lucide-react to allow string-to-component mapping
import * as Icons from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

// Updated Interface: icon is now a string to match your seedDatabase.js
interface ServiceItem {
  icon: string; 
  title: string;
  description: string;
  features: string[];
}

const services: ServiceItem[] = [
  {
    icon: "Video",
    title: "Videography",
    description: "Professional video production for commercials, corporate content, and creative projects with state-of-the-art equipment.",
    features: ["4K/8K Production", "Drone Footage", "Post-Production"],
  },
  {
    icon: "TrendingUp",
    title: "Digital Marketing",
    description: "Strategic video marketing campaigns that drive engagement, conversions, and brand awareness across all platforms.",
    features: ["Strategy Development", "Content Creation", "Analytics"],
  },
  {
    icon: "Share2",
    title: "Social Media Management",
    description: "Create and manage compelling social media content optimized for Instagram, YouTube, TikTok, and LinkedIn.",
    features: ["Content Planning", "Engagement", "Growth Strategy"],
  },
  {
    icon: "Calendar",
    title: "Event Management",
    description: "Comprehensive event coverage from pre-production planning to final delivery of highlight reels and full recordings.",
    features: ["Corporate Events", "Conferences", "Weddings"],
  },
  {
    icon: "User",
    title: "Personal Branding",
    description: "Build your personal brand with strategic content creation, professional headshots, and cohesive visual identity.",
    features: ["Brand Strategy", "Content Series", "Profile Building"],
  },
  {
    icon: "Film",
    title: "Cinematic Video Editing",
    description: "Transform raw footage into cinematic stories with professional color grading, smooth transitions, and visually compelling edits.",
    features: ["Advanced Color Grading",
    "Storytelling Edits",
    "Cinematic Transitions & Effects"],
  },
]

export function Services() {
  const { ref: servicesRef, isVisible } = useScrollAnimation()

  return (
    <section id="services" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8" ref={servicesRef}>
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Services That Transform Your <span className="text-accent">Vision</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to delivery, I provide end-to-end creative solutions tailored to your brand's unique story.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            // DYNAMIC ICON FIX: Lookup the icon component by its name string
            const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;
            
            return (
              <Card
                key={index}
                className={`group border-border hover:border-accent/50 transition-all duration-500 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 space-y-6">
                  {/* Icon Container */}
                  <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                    <IconComponent className="h-7 w-7 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature List */}
                  <ul className="space-y-3 pt-4 border-t border-border/50">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm group/item">
                        <div className="h-2 w-2 rounded-full bg-accent group-hover/item:scale-125 transition-transform duration-300" />
                        <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  )
}