"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, GraduationCap, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const handleWhatsAppContact = () => {
    // Updated WhatsApp number to 8801957424836 (formatted as 8801957424836 for international use)
    window.open("https://wa.me/8801957424836?text=Hello! I am interested in BUP admission courses.", "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-primary">BUP Admission</h1>
            </div>
            <Button onClick={handleWhatsAppContact} className="bg-green-600 hover:bg-green-700 text-white">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Unlock Your Future with BUP Admission Courses
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tailored programs to guide you through the admission process with expert guidance and proven strategies.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-accent text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
          >
            Explore Courses
          </Button>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Admission Courses</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our specialized programs designed to maximize your success in BUP admissions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Course 1: BUP FST Admission 2026 */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-accent">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-white rounded-lg shadow-sm border w-fit">
                  <Image
                    src="/images/bup-fst-logo.png"
                    alt="BUP FST Logo"
                    width={80}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-primary">BUP FST Admission Course 2026</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-6 leading-relaxed">
                  Comprehensive preparation for the BUP FST admission test. Gain insights and strategies to succeed with
                  our expert guidance.
                </CardDescription>
                <Link href="/courses/bup-fst-2026">
                  <Button className="w-full bg-primary hover:bg-accent transition-colors duration-300">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Course 2: BUP 2nd Timer Group Change 2026 */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-accent">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-secondary rounded-full w-fit">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-primary">BUP 2nd Timer Group Change 2026</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-6 leading-relaxed">
                  Specialized support for second-time applicants to enhance your chances of success with targeted
                  preparation strategies.
                </CardDescription>
                <Button
                  className="w-full bg-primary hover:bg-accent transition-colors duration-300"
                  onClick={handleWhatsAppContact}
                >
                  Discover More
                </Button>
              </CardContent>
            </Card>

            {/* Course 3: Group Change Unit Program */}
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-accent">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-secondary rounded-full w-fit">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-primary">Group Change Unit Admission Program</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-6 leading-relaxed">
                  Flexible group change options to suit your individual needs. Join our supportive community of
                  successful students.
                </CardDescription>
                <Button
                  className="w-full bg-primary hover:bg-accent transition-colors duration-300"
                  onClick={handleWhatsAppContact}
                >
                  Join Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h4>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get personalized guidance and join thousands of successful BUP admission candidates.
          </p>
          <Button
            size="lg"
            onClick={handleWhatsAppContact}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Need Help? Chat with Us on WhatsApp
          </Button>
        </div>
      </section>
    </div>
  )
}
