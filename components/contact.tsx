"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, Mail, Phone, MapPin } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { contactApi } from "@/lib/api"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const { ref: contactRef, isVisible } = useScrollAnimation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      await contactApi.submit(formData)
      setSubmitMessage("Thank you! Your message has been sent successfully.")
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    } catch (error) {
      setSubmitMessage("Sorry, there was an error sending your message. Please try again.")
      console.error("Contact form error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8" ref={contactRef}>
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Form Section */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <Card className="hover:shadow-xl hover:shadow-accent/10 transition-shadow duration-500">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <Input 
                        placeholder="Your name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input 
                        type="email" 
                        placeholder="your@gmail.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone (Optional)</label>
                      <Input 
                        placeholder="+91 1234567890" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Service Interest</label>
                      <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="videography">Videography</SelectItem>
                          <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                          <SelectItem value="branding">Branding</SelectItem>
                          <SelectItem value="events">Event Management</SelectItem>
                          <SelectItem value="social-media">Social Media Management</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea 
                      placeholder="Tell me about your project..." 
                      className="min-h-[120px]" 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full gap-2 bg-accent hover:bg-accent/90 text-white hover:scale-[1.02] transition-all duration-300"
                  >
                    <Send className="h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  {submitMessage && (
                    <div className={`text-center p-3 rounded-md ${submitMessage.includes("error") ? "bg-destructive/10 text-destructive" : "bg-accent/10 text-accent"}`}>
                      {submitMessage}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl border border-border flex items-start gap-4 hover:border-accent transition-colors">
              <div className="p-3 bg-accent/10 rounded-lg text-accent"><Mail className="h-6 w-6" /></div>
              <div>
                <h4 className="font-bold">Email</h4>
                <p className="text-muted-foreground text-sm">vidzby.dharun@gmail.com</p>
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border flex items-start gap-4 hover:border-accent transition-colors">
              <div className="p-3 bg-accent/10 rounded-lg text-accent"><Phone className="h-6 w-6" /></div>
              <div>
                <h4 className="font-bold">Phone</h4>
                <p className="text-muted-foreground text-sm">+91 8148627434</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}