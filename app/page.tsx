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
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 group">
              <GraduationCap className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
              <h1 className="text-2xl font-bold text-primary transition-colors duration-300 group-hover:text-accent">
                BUP Admission
              </h1>
            </div>
            <Button
              onClick={handleWhatsAppContact}
              className="bg-green-600 hover:bg-green-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <MessageCircle className="h-4 w-4 mr-2 transition-transform duration-300 hover:rotate-12" />
              WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary to-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero.jpg-tSS1HlO0AtmxUiNhNSDb2mN77R1a5Z.jpeg"
            alt="BUP Campus"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-blue-900/70 transition-opacity duration-300 hover:bg-blue-900/60"></div>
        </div>

        <div className="relative container mx-auto px-4 py-32 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg animate-fade-in-up">
            Unlock Your Future with BUP Admission Courses
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto drop-shadow-md animate-fade-in-up animation-delay-200">
            Tailored programs to guide you through the admission process with expert guidance and proven strategies.
          </p>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up animation-delay-400 hover:rotate-1"
          >
            Explore Courses
          </Button>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4 transition-colors duration-300 hover:text-accent">
              Our Admission Courses
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our specialized programs designed to maximize your success in BUP admissions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Course 1: BUP FST Admission 2026 */}
            <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-accent group cursor-pointer hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-white rounded-lg shadow-sm border w-fit transition-all duration-300 group-hover:shadow-lg group-hover:scale-110">
                  <Image
                    src="/images/bup-fst-logo.png"
                    alt="BUP FST Logo"
                    width={80}
                    height={60}
                    className="object-contain transition-transform duration-300 group-hover:rotate-3"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-primary transition-colors duration-300 group-hover:text-accent">
                  BUP FST Admission Course 2026
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-6 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                  If your target is BUP (Faculty of Science and Technology) Enroll this course
                </CardDescription>
                <Link href="/courses/bup-fst-2026">
                  <Button className="w-full bg-primary hover:bg-accent transition-all duration-300 hover:shadow-lg hover:scale-105">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Course 2: BUP FST Special Exam Batch 2026 */}
            <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-accent group cursor-pointer hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-secondary rounded-full w-fit transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                  <Users className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <CardTitle className="text-xl font-bold text-primary transition-colors duration-300 group-hover:text-accent">
                  BUP FST Special Exam Batch 2026
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-6 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                  If you want to build a strong preparation by giving BUP Standard Model Test and Practice questions
                </CardDescription>
                <Link href="/exam-batch">
                  <Button className="w-full bg-primary hover:bg-accent transition-all duration-300 hover:shadow-lg hover:scale-105">
                    Enroll our Exam batch
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Course 3: Group Change Unit Program */}
            <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-accent group cursor-pointer hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-secondary rounded-full w-fit transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                  <GraduationCap className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <CardTitle className="text-xl font-bold text-primary transition-colors duration-300 group-hover:text-accent">
                  Group Change Unit Admission Program
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-6 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                  Flexible group change options to suit your individual needs. Join our supportive community of
                  successful students.
                </CardDescription>
                <Button
                  className="w-full bg-primary hover:bg-accent transition-all duration-300 hover:shadow-lg hover:scale-105"
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
      <section className="bg-primary py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h4 className="text-3xl font-bold text-white mb-4 transition-transform duration-300 hover:scale-105">
            Ready to Start Your Journey?
          </h4>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get personalized guidance and join thousands of successful BUP admission candidates.
          </p>
          <Button
            size="lg"
            onClick={handleWhatsAppContact}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:rotate-1"
          >
            <MessageCircle className="h-5 w-5 mr-2 transition-transform duration-300 hover:rotate-12" />
            Need Help? Chat with Us on WhatsApp
          </Button>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
