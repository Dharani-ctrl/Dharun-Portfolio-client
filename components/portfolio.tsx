"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"
import { workCategories } from "@/lib/data"
import Link from "next/link"

export function Portfolio() {
  const { ref: portfolioRef, isVisible } = useScrollAnimation()

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-4 lg:px-8" ref={portfolioRef}>
        <div className="animate-in fade-in duration-700">
          {/* Header Section */}
          <div
            className={`flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-wider mb-6 lg:mb-0">
              OUR WORK
            </h2>
            <p className="text-lg text-muted-foreground lg:max-w-md leading-relaxed font-medium">
              A full-service video production studio crafting films, ads, events, documentaries, and digital content.
            </p>
          </div>

          {/* Cards Stacked Layout */}
          <div className="flex flex-col gap-8 max-w-5xl mx-auto pb-48">
            {workCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link
                  href={`/work/${category.slug}`}
                  key={index}
                  className={`group sticky rounded-3xl overflow-hidden shadow-2xl hover:shadow-accent/20 transition-all duration-500 cursor-pointer border border-border/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
                  style={{
                    top: `calc(8rem + ${index * 1.5}rem)`,
                    transitionDelay: `${index * 30}ms`,
                    height: 'max(60vh, 400px)'
                  }}
                >
                  {/* Background Media */}
                  {category.bgVideo ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src={category.bgVideo}
                    />
                  ) : (
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${category.bgImage}')` }}
                    />
                  )}
                  {/* Overlay Gradient for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 group-hover:via-black/50 transition-colors duration-500" />

                  {/* Content Container */}
                  <div className="relative z-10 w-full h-full p-6 md:p-10 flex flex-col justify-between">

                    {/* Top: Icon */}
                    <div className="flex items-center gap-6 w-full">
                      <div className="h-16 w-16 shrink-0 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-accent/90 group-hover:border-accent transition-all duration-500 shadow-sm">
                        <Icon className="h-8 w-8 text-white transition-colors duration-500" />
                      </div>
                    </div>

                    {/* Bottom: Text & Button */}
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mt-auto">
                      <div className="max-w-2xl">
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 transition-all duration-300 group-hover:text-accent">
                          {category.title}
                        </h3>
                        <p className="text-gray-300 text-base md:text-lg lg:text-xl transition-colors duration-300 leading-relaxed group-hover:text-white">
                          {category.description}
                        </p>
                      </div>

                      <div className="flex items-center shrink-0 w-full md:w-auto justify-between md:justify-end border-t border-white/10 md:border-t-0 pt-4 md:pt-0 mt-4 md:mt-0">
                        <span className="inline-flex md:hidden lg:inline-flex items-center text-xs font-bold text-white tracking-widest uppercase transition-colors duration-300 mr-4">
                          {category.type === "video" ? "VIEW PROJECTS" : "ENQUIRE NOW"}
                        </span>
                        <div className="h-14 w-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500 shadow-sm">
                          <ArrowRight className="h-6 w-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>

                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}