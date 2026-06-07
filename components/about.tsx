"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Camera, Award, Users, Zap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function About() {
  const { ref: aboutRef, isVisible } = useScrollAnimation()

  const features = [
    {
      icon: Camera,
      title: "Premium Equipment",
      description: "Latest 4K/8K cameras and professional editing suite",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for creative excellence and innovation",
    },
    {
      icon: Users,
      title: "Client Focused",
      description: "Dedicated to exceeding expectations on every project",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Efficient workflow without compromising quality",
    },
  ]

  return (
    <section id="about" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8" ref={aboutRef}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2
              className={`text-3xl lg:text-5xl font-bold text-balance transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
            >
              Creating Stories That <span className="text-accent">Inspire Action</span>
            </h2>

            <p
              className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              With over 5 years of experience in video production and digital marketing, I specialize in transforming
              brands through compelling visual narratives.
            </p>

            <p
              className={`text-muted-foreground leading-relaxed transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              My approach combines technical expertise with creative storytelling to deliver content that not only looks
              stunning but drives real results. From Fortune 500 companies to innovative startups, I've helped brands
              across industries amplify their message and connect with their audience.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`space-y-2 group transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <feature.icon className="h-5 w-5 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                  </div>
                  <h4 className="font-semibold group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-accent/20">
              <img
                src="/video-production-studio-workspace.jpg"
                alt="Video production workspace"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <Card className="absolute -bottom-6 -left-6 w-64 hover:scale-105 transition-transform duration-300 animate-float-delayed">
              <CardContent className="p-6">
                <div className="text-3xl font-bold mb-2 text-accent">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction Rate</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
