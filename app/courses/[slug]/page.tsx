"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, GraduationCap, ArrowLeft, Clock, Users, BookOpen, Award, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const courseData = {
  "bup-fst-2026": {
    title: "BUP FST Admission Course 2026",
    coverImage: "/images/bup-fst-cover.png",
    content: {
      greeting: "আসসালামু আলাইকুম, ভর্তিচ্ছু যোদ্ধা!",
      intro: "স্বপ্ন পূরণের যাত্রা এখান থেকেই শুরু। তোমার নিজের Identity তৈরি করে ফেলো আমাদের সাথে।",
      courseModule: {
        title: "🎯 BUP সেকেন্ড টাইমার স্পেশাল কোর্স মডিউল",
        description:
          "আমাদের এই কোর্সটি বিশেষভাবে সেকেন্ড টাইমারদের কথা মাথায় রেখে ডিজাইন করা হয়েছে, যাতে তারা তাদের প্রস্তুতির সকল ঘাটতি পূরণ করে লক্ষ্যে পৌঁছাতে পারে।",
      },
    },
  },
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courseData[params.slug as keyof typeof courseData]

  if (!course) {
    notFound()
  }

  const handleWhatsAppContact = () => {
    window.open("https://wa.me/8801957424836?text=Hello! I am interested in BUP FST Admission Course 2026.", "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 hover:opacity-80 transition-all duration-300 hover:scale-105 group"
              >
                <ArrowLeft className="h-5 w-5 text-primary transition-transform duration-300 group-hover:-translate-x-1" />
                <span className="text-sm text-muted-foreground">Back to Home</span>
              </Link>
              <div className="flex items-center gap-2 group">
                <GraduationCap className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                <h1 className="text-2xl font-bold text-primary transition-colors duration-300 group-hover:text-accent">
                  BUP Admission
                </h1>
              </div>
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

      {/* Hero Image Section - RESTORED */}
      <section className="relative h-96 md:h-[500px] overflow-hidden group">
        <Image
          src={course.coverImage || "/placeholder.svg"}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300 group-hover:bg-black/30">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg transition-transform duration-300 hover:scale-105">
              {course.title}
            </h1>
            <p className="text-xl md:text-2xl font-medium opacity-90 drop-shadow-md">স্বপ্ন পূরণের যাত্রা এখান থেকেই শুরু</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Greeting */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 transition-colors duration-300 hover:text-accent">
              {course.content.greeting}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{course.content.intro}</p>
          </div>

          {/* Course Module */}
          <Card className="mb-12 border-2 border-accent transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl text-primary transition-colors duration-300 hover:text-accent">
                {course.content.courseModule.title}
              </CardTitle>
              <CardDescription className="text-lg">{course.content.courseModule.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Course Features */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:scale-105 group">
                    <Clock className="h-5 w-5 text-primary transition-transform duration-300 group-hover:rotate-12" />
                    <span className="font-semibold">৬০+ লাইভ ক্লাস</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-green-50 hover:scale-105 group">
                    <BookOpen className="h-5 w-5 text-primary transition-transform duration-300 group-hover:rotate-12" />
                    <span className="font-semibold">প্রতি ক্লাস ১.৫ ঘণ্টা+</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-purple-50 hover:scale-105 group">
                    <Users className="h-5 w-5 text-primary transition-transform duration-300 group-hover:rotate-12" />
                    <span className="font-semibold">সাপ্তাহিক মেন্টরশিপ</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:scale-105 group">
                    <CheckCircle className="h-5 w-5 text-primary transition-transform duration-300 group-hover:rotate-12" />
                    <span className="font-semibold">মডেল টেস্ট</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-green-50 hover:scale-105 group">
                    <MessageCircle className="h-5 w-5 text-primary transition-transform duration-300 group-hover:rotate-12" />
                    <span className="font-semibold">২৪/৭ সাপোর্ট</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-orange-50 hover:scale-105 group">
                    <Award className="h-5 w-5 text-primary transition-transform duration-300 group-hover:rotate-12" />
                    <span className="font-semibold">রেকর্ডেড ক্লাস</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Subject Breakdown */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-6 text-center transition-colors duration-300 hover:text-accent">
              বিষয়ভিত্তিক ক্লাস বণ্টন
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                    📊
                  </div>
                  <h4 className="font-bold text-lg text-primary mb-2 transition-colors duration-300 group-hover:text-blue-600">
                    গণিত
                  </h4>
                  <p className="text-2xl font-bold text-blue-600 transition-transform duration-300 group-hover:scale-110">
                    ১৫+
                  </p>
                  <p className="text-sm text-muted-foreground">ক্লাস</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                    ⚛️
                  </div>
                  <h4 className="font-bold text-lg text-primary mb-2 transition-colors duration-300 group-hover:text-purple-600">
                    পদার্থবিজ্ঞান
                  </h4>
                  <p className="text-2xl font-bold text-purple-600 transition-transform duration-300 group-hover:scale-110">
                    ১৪+
                  </p>
                  <p className="text-sm text-muted-foreground">ক্লাস</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                    🧬
                  </div>
                  <h4 className="font-bold text-lg text-primary mb-2 transition-colors duration-300 group-hover:text-green-600">
                    জীববিজ্ঞান
                  </h4>
                  <p className="text-2xl font-bold text-green-600 transition-transform duration-300 group-hover:scale-110">
                    ১৪+
                  </p>
                  <p className="text-sm text-muted-foreground">ক্লাস</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                    🧪
                  </div>
                  <h4 className="font-bold text-lg text-primary mb-2 transition-colors duration-300 group-hover:text-orange-600">
                    রসায়ন
                  </h4>
                  <p className="text-2xl font-bold text-orange-600 transition-transform duration-300 group-hover:scale-110">
                    ১৬+
                  </p>
                  <p className="text-sm text-muted-foreground">ক্লাস</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Course Benefits */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-4 transition-colors duration-300 hover:text-accent">
              🎁 কোর্স থেকে তুমি যা যা পাচ্ছো
            </h3>
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 p-6 rounded-lg mb-4 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-yellow-400">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl transition-transform duration-300 hover:scale-125 hover:rotate-12">🎁</div>
                  <div>
                    <h4 className="text-xl font-bold text-orange-600 mb-2 transition-colors duration-300 hover:text-orange-700">
                      বিশেষ উপহার!
                    </h4>
                    <p className="text-gray-700 font-medium text-lg">
                      গিফট হিসেবে পাবে আমাদের আগের বছরের কোর্সের সকল রেকর্ডেড ক্লাস এবং ভার্সিটি স্পেশাল ইংলিশ রেকর্ডেড কোর্স।
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-blue-100 group">
                  <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="font-medium text-gray-700">
                    ভর্তি হওয়ার সাথে সাথেই গত বছরের সম্পূর্ণ রেকর্ডেড ক্লাসের গুগল ড্রাইভ লিঙ্ক
                  </span>
                </div>

                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-green-100 group">
                  <Users className="h-6 w-6 text-green-600 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="font-medium text-gray-700">
                    অভিজ্ঞ শিক্ষক প্যানেলের সরাসরি গাইডলাইন (Weekly Mentorship)
                  </span>
                </div>

                <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg border border-purple-200 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-purple-100 group">
                  <Clock className="h-6 w-6 text-purple-600 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="font-medium text-gray-700">প্রতি সপ্তাহের ক্লাসের রুটিন আগের সপ্তাহেই</span>
                </div>

                <div className="flex items-center gap-3 p-4 bg-red-50 rounded-lg border border-red-200 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-red-100 group">
                  <Award className="h-6 w-6 text-red-600 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="font-medium text-gray-700">তোমার স্বপ্ন পূরণে আমাদের কঠোর তত্ত্বাবধান</span>
                </div>

                <div className="flex items-center gap-3 p-4 bg-indigo-50 rounded-lg border border-indigo-200 md:col-span-2 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-indigo-100 group">
                  <BookOpen className="h-6 w-6 text-indigo-600 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="font-medium text-gray-700">
                    Weekly এক্সাম এবং সল্ভশীট যা BUP FST এর আগের বছরের প্রশ্ন এনালাইসিস করে বানানো তাই তোমার এক্সট্রা বই এর দরকার নেই।
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Teachers Section - Enhanced with hover effects */}
          <Card className="mb-12 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary flex items-center justify-center gap-3 transition-colors duration-300 hover:text-accent">
                <div className="p-3 bg-blue-100 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                BUP FST Course Teachers
              </CardTitle>
              <CardDescription className="text-lg">আমাদের অভিজ্ঞ শিক্ষক প্যানেল যারা তোমার সাফল্যের জন্য নিবেদিত</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Teacher cards with enhanced hover effects */}
                <Card className="border-2 border-blue-300 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center gap-4">
                      <div className="relative">
                        <div className="w-40 h-48 rounded-lg overflow-hidden border-4 border-blue-200 shadow-lg transition-all duration-300 group-hover:border-blue-400 group-hover:shadow-xl">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ekram.PNG-Feby4iFttmAO2Od65OrEShacx5GaYb.jpeg"
                            alt="Md Ekramul Hoque"
                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                            style={{ imageRendering: "crisp-edges" }}
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1 rounded-full transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                          <Award className="w-4 h-4" />
                        </div>
                      </div>
                      {/* Rest of teacher content with enhanced animations */}
                      <div className="text-center">
                        <div className="mb-3">
                          <h3 className="text-lg font-bold text-primary mb-1 transition-colors duration-300 group-hover:text-blue-600">
                            Course Advisor
                          </h3>
                          <h4 className="text-lg font-semibold text-gray-800 mb-1 transition-colors duration-300 group-hover:text-blue-700">
                            Md Ekramul Hoque
                          </h4>
                          <div className="space-y-1 text-xs text-gray-600">
                            <p className="font-medium text-purple-600">MSc, BSc, Environmental Science, BUP</p>
                            <p className="font-medium">Ex Math Instructor, 10 minute School</p>
                            <p className="font-medium">Math Instructor, SSC FRB, ACS</p>
                            <p className="font-medium text-blue-600">2nd Timer BUP FST Admission Specialist</p>
                          </div>
                        </div>

                        {/* Experience Highlights */}
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="bg-blue-50 p-2 rounded-lg text-center">
                            <div className="text-lg font-bold text-blue-600">5+</div>
                            <div className="text-xs text-blue-700">Years Experience</div>
                          </div>
                          <div className="bg-green-50 p-2 rounded-lg text-center">
                            <div className="text-lg font-bold text-green-600">2nd</div>
                            <div className="text-xs text-green-700">Timer Specialist</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Instructor Message */}
                    <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-400">
                      <p className="text-gray-700 leading-relaxed text-sm">
                        <span className="font-semibold text-blue-700">একরাম ভাইয়া</span> তোমাদের সাথে থাকবে তোমার জার্নির শেষ
                        পর্যন্ত। যাতে তোমার যত সমস্যা তুমি নিঃসন্দেহে বড় ভাই হিসেবে উনার সাথে কথা বলে পরামর্শ নিতে পারবে।
                        <span className="font-semibold text-green-700"> 2nd Timer</span> হিসেবে একরাম ভাইয়া নিজের অভিজ্ঞতা
                        তোমার সাথে শেয়ার করবে এবং ভুল ত্রুটি সব বলে দিবে যাতে তোমার চান্স মিস না যায়।
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Second Teacher - Fahim Bin Zaman */}
                <Card className="border-2 border-green-300 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center gap-4">
                      {/* Instructor Photo */}
                      <div className="relative">
                        <div className="w-40 h-48 rounded-lg overflow-hidden border-4 border-green-200 shadow-lg transition-all duration-300 group-hover:border-green-400 group-hover:shadow-xl">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fahim.jpg-YvPMJfJMUw1F0oVvb2FNTOvbDYIX1l.jpeg"
                            alt="Fahim Bin Zaman"
                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                            style={{ imageRendering: "crisp-edges" }}
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-green-600 text-white p-1 rounded-full transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                          <Award className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Instructor Details */}
                      <div className="text-center">
                        <div className="mb-3">
                          <h3 className="text-lg font-bold text-primary mb-1 transition-colors duration-300 group-hover:text-green-600">
                            Math Teacher
                          </h3>
                          <h4 className="text-lg font-semibold text-gray-800 mb-1 transition-colors duration-300 group-hover:text-green-700">
                            Fahim Bin Zaman
                          </h4>
                          <div className="space-y-1 text-xs text-gray-600">
                            <p className="font-medium text-purple-600">
                              CSE, Bangladesh University of Professionals (BUP)
                            </p>
                            <p className="font-medium text-green-600">Topper of BUP Admission Test</p>
                            <p className="font-medium text-orange-600">Awarded: Dean's Award of CSE Dept</p>
                            <p className="font-medium text-blue-600">Programming Expert</p>
                          </div>
                        </div>

                        {/* Experience Highlights */}
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="bg-green-50 p-2 rounded-lg text-center">
                            <div className="text-lg font-bold text-green-600">🏆</div>
                            <div className="text-xs text-green-700">BUP Topper</div>
                          </div>
                          <div className="bg-orange-50 p-2 rounded-lg text-center">
                            <div className="text-lg font-bold text-orange-600">🎖️</div>
                            <div className="text-xs text-orange-700">Dean's Award</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Instructor Message */}
                    <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-400">
                      <p className="text-gray-700 leading-relaxed text-sm">
                        <span className="font-semibold text-green-700">Fahim ভাইয়া</span> math ছাড়া কি পারতো প্রোগ্রামিং করতে?
                        সেই জন্য উনি থাকবে তোমাদের <span className="font-semibold text-blue-700">Math Instructor</span>{" "}
                        হিসেবে এবং
                        <span className="font-semibold text-green-700"> BUP Admission</span> এ হয়েছিলো টোপার!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Subject Specialists Section - SECOND */}
          <Card className="mb-12 border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-purple-50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary flex items-center justify-center gap-3">
                <div className="p-3 bg-gradient-to-r from-orange-100 to-purple-100 rounded-full">
                  <div className="text-2xl">🧪⚛️</div>
                </div>
                Subject Specialists
              </CardTitle>
              <CardDescription className="text-lg">Chemistry ও Physics এর ভয় দূর করার জন্য আমাদের বিশেষজ্ঞরা</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Chemistry Teacher */}
                <Card className="border-2 border-orange-300 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center gap-4">
                      {/* Instructor Photo */}
                      <div className="relative">
                        <div className="w-40 h-48 rounded-lg overflow-hidden border-4 border-orange-200 shadow-lg">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Habibullah.jpg-mQzZo106003sQrM57bE9TeeZaMzlxF.jpeg"
                            alt="MD Habibullah"
                            className="w-full h-full object-cover object-center"
                            style={{ imageRendering: "crisp-edges" }}
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-orange-600 text-white p-1 rounded-full">
                          <Award className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Instructor Details */}
                      <div className="text-center">
                        <div className="mb-3">
                          <h3 className="text-lg font-bold text-primary mb-1">Chemistry Teacher</h3>
                          <h4 className="text-lg font-semibold text-gray-800 mb-1">MD Habibullah</h4>
                          <div className="space-y-1 text-xs text-gray-600">
                            <p className="font-medium text-purple-600">
                              CSE, Bangladesh University of Professionals (BUP)
                            </p>
                            <p className="font-medium text-green-600">Topper of BUP Admission Test</p>
                            <p className="font-medium text-orange-600">Expert in Organic Chemistry</p>
                          </div>
                        </div>

                        {/* Experience Highlights */}
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="bg-orange-50 p-2 rounded-lg text-center">
                            <div className="text-lg font-bold text-orange-600">🏆</div>
                            <div className="text-xs text-orange-700">BUP Topper</div>
                          </div>
                          <div className="bg-red-50 p-2 rounded-lg text-center">
                            <div className="text-lg font-bold text-red-600">🧪</div>
                            <div className="text-xs text-red-700">Chemistry Expert</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Instructor Message */}
                    <div className="mt-4 p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-l-4 border-orange-400">
                      <p className="text-gray-700 leading-relaxed text-sm">
                        <span className="font-semibold text-orange-700">Chemistry</span> কিন্তু তোমাকে পড়তেই হবে তুমি
                        Biology or Math answer করো। এইটার কোনো পথ নেই তাই একদম শক্ত পড়াশুনা করে ফেলবে আর দূর করবে জৈব যৌগের ভয়{" "}
                        <span className="font-semibold text-red-700">হাবিবুল্লাহ ভাইয়ার</span> সাথে!
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Physics Teacher */}
                <Card className="border-2 border-purple-300 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center gap-4">
                      {/* Instructor Photo */}
                      <div className="relative">
                        <div className="w-40 h-48 rounded-lg overflow-hidden border-4 border-purple-200 shadow-lg">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hojaifa%20.jpg-q4BodnJyhTpTwsDgWAkge1jG9LpHim.jpeg"
                            alt="Hojaifa Rahman Khan"
                            className="w-full h-full object-cover object-center"
                            style={{ imageRendering: "crisp-edges" }}
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-purple-600 text-white p-1 rounded-full">
                          <Award className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Instructor Details */}
                      <div className="text-center">
                        <div className="mb-3">
                          <h3 className="text-lg font-bold text-primary mb-1">Physics Teacher</h3>
                          <h4 className="text-lg font-semibold text-gray-800 mb-1">Hojaifa Rahman Khan</h4>
                          <div className="space-y-1 text-xs text-gray-600">
                            <p className="font-medium text-purple-600">
                              CSE, Bangladesh University of Professionals (BUP)
                            </p>
                            <p className="font-medium text-green-600">Topper of BUP Admission Test</p>
                            <p className="font-medium text-indigo-600">Calculation Expert</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Instructor Message */}
                    <div className="mt-4 p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border-l-4 border-purple-400">
                      <p className="text-gray-700 leading-relaxed text-sm">
                        <span className="font-semibold text-purple-700">Physics</span> ও কিন্তু তোমাকে পড়তেই হবে তুমি
                        Biology or Math answer করো। এইটার কোনো পথ নেই তাই একদম শক্ত পড়াশুনা করে ফেলবে আর দূর করবে কঠিন Math এর
                        ভয় <span className="font-semibold text-indigo-700">হুজাইফা ভাইয়ার</span> সাথে!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-12 border-2 border-teal-200 bg-gradient-to-br from-teal-50 to-green-50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary flex items-center justify-center gap-3">
                <div className="p-3 bg-gradient-to-r from-teal-100 to-green-100 rounded-full">
                  <div className="text-2xl">👨‍🏫🧬</div>
                </div>
                Mentorship & Biology Specialists
              </CardTitle>
              <CardDescription className="text-lg">Weekly মেন্টরশিপ এবং Biology এর জন্য আমাদের বিশেষজ্ঞরা</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Mentorship Specialist */}
                <Card className="border-2 border-teal-300 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center gap-4">
                      {/* Instructor Photo */}
                      <div className="relative">
                        <div className="w-40 h-48 rounded-lg overflow-hidden border-4 border-teal-200 shadow-lg">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aziz.jpg-ugJsQ7nYW0MAGrnfz8ZIF28tWrrx1x.jpeg"
                            alt="Mohammad Arafath Aziz"
                            className="w-full h-full object-cover object-center"
                            style={{ imageRendering: "crisp-edges" }}
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-teal-600 text-white p-1 rounded-full">
                          <Users className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Instructor Details */}
                      <div className="text-center">
                        <div className="mb-3">
                          <h3 className="text-lg font-bold text-primary mb-1">Mentorship Specialist</h3>
                          <h4 className="text-lg font-semibold text-gray-800 mb-1">Mohammad Arafath Aziz</h4>
                          <div className="space-y-1 text-xs text-gray-600">
                            <p className="font-medium text-purple-600">CSE, BUP</p>
                            <p className="font-medium text-teal-600">Physics Instructor Also</p>
                          </div>
                        </div>

                        {/* Experience Highlights */}
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="bg-teal-50 p-2 rounded-lg text-center">
                            <div className="text-lg font-bold text-teal-600">📅</div>
                            <div className="text-xs text-teal-700">Weekly Sessions</div>
                          </div>
                          <div className="bg-cyan-50 p-2 rounded-lg text-center">
                            <div className="text-lg font-bold text-cyan-600">⚛️</div>
                            <div className="text-xs text-cyan-700">Physics Expert</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Instructor Message */}
                    <div className="mt-4 p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg border-l-4 border-teal-400">
                      <p className="text-gray-700 leading-relaxed text-sm">
                        তোমাদের <span className="font-semibold text-teal-700">Weekly মেন্টরশীপ সেশন</span> এবং{" "}
                        <span className="font-semibold text-cyan-700">Physics teacher</span> হিসেবে থাকছে{" "}
                        <span className="font-semibold text-blue-700">আজিজ ভাইয়া</span>। প্রত্যেক সপ্তাহে তোমাদের সাথে কথা বলবে
                        ভাইয়া এবং তোমাদের সকল সমস্যার সমাধান দিবে যাতে তোমার পথচলা সহজ হয়।
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Biology Teacher */}
                <Card className="border-2 border-green-300 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center gap-4">
                      {/* Instructor Photo */}
                      <div className="relative">
                        <div className="w-40 h-48 rounded-lg overflow-hidden border-4 border-green-200 shadow-lg">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jerin.jpg-ytDf5DsxJF5OVBJAojd6tuAL9G0IrQ.jpeg"
                            alt="Nushrat Jahan Jerin"
                            className="w-full h-full object-cover object-center"
                            style={{ imageRendering: "crisp-edges" }}
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-green-600 text-white p-1 rounded-full">
                          <Award className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Instructor Details */}
                      <div className="text-center">
                        <div className="mb-3">
                          <h3 className="text-lg font-bold text-primary mb-1">Biology Teacher</h3>
                          <h4 className="text-lg font-semibold text-gray-800 mb-1">Nushrat Jahan Jerin</h4>
                          <div className="space-y-1 text-xs text-gray-600">
                            <p className="font-medium text-purple-600">Environmental Science, BUP</p>
                            <p className="font-medium text-blue-600">Batch- 2020-2021</p>
                            <p className="font-medium text-green-600">3 Years of Experience</p>
                          </div>
                        </div>

                        {/* Experience Highlights */}
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="bg-green-50 p-2 rounded-lg text-center">
                            <div className="text-lg font-bold text-green-600">🌱</div>
                            <div className="text-xs text-green-700">Biology Expert</div>
                          </div>
                          <div className="bg-blue-50 p-2 rounded-lg text-center">
                            <div className="text-lg font-bold text-blue-600">3+</div>
                            <div className="text-xs text-blue-700">Years Experience</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Instructor Message */}
                    <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-400">
                      <p className="text-gray-700 leading-relaxed text-sm">
                        যাদের দরকার শুধু সিট এবং <span className="font-semibold text-green-700">জীববিজ্ঞানে</span> তুমি ভালো
                        তাহলে কিন্তু <span className="font-semibold text-pink-700">আপুর ক্লাস</span> করে আরো ভালো করতে হবে যাতে{" "}
                        <span className="font-semibold text-blue-700">Environmental Science</span> পড়ে আমেরিকায় স্কলারশিপ
                        নিয়ে PhD করতে পারো।
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Rules and Guidelines */}
          <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-bold text-red-700 mb-4">🚨 আমাদের প্রতিশ্রুতি ও নিয়মাবলী</h3>
            <p className="text-gray-700 mb-4">
              আমরা জানি, সফলতার জন্য একটি সঠিক নির্দেশনার পাশাপাশি কিছুটা চাপও প্রয়োজন। তাই আমরা তোমার পড়াশোনার ব্যাপারে থাকবো অনেক বেশি কঠোর।
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  <strong>নিয়মিত উপস্থিতি:</strong> তোমাকে অবশ্যই প্রতিটি ক্লাসে উপস্থিত থাকতে হবে। ক্লাস না করলে তোমার অভিভাবকের সাথে
                  যোগাযোগ করা হবে।
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  <strong>পারফরম্যান্স মনিটরিং:</strong> পরীক্ষায় কম নম্বর পেলেও সেই বিষয়টি তোমার অভিভাবকের সাথে জানানো হবে।
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>
                  <strong>অভিভাবকের নম্বর:</strong> ভর্তির সময়ই আমরা তোমার অভিভাবকের মোবাইল নম্বর সংগ্রহ করবো।
                </span>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              আর হ্যাঁ, তোমাদের জন্য একটি সারপ্রাইজ গিফট তো থাকছেই! 😉 সেটি সময়মতোই জানতে পারবে।
            </p>
          </div>

          {/* Video Section */}
          <Card className="mb-12 border-2 border-primary/20 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary flex items-center justify-center gap-3">
                <div className="p-3 bg-red-100 rounded-full">
                  <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93-.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                কোর্স সম্পর্কে বিস্তারিত ভিডিও
              </CardTitle>
              <CardDescription className="text-lg">আমাদের কোর্স সম্পর্কে আরও জানতে এই ভিডিওগুলো দেখুন</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.youtube.com/embed/m8hA6xr_QzA?si=LZkQ9L1Wm_5khuzn"
                      title="BUP FST Admission Course 2026 Details"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="text-center">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
                    >
                      <a
                        href="https://youtu.be/m8hA6xr_QzA?si=LZkQ9L1Wm_5khuzn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        YouTube এ দেখুন
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.youtube.com/embed/ksDKglignhc?si=Ndd0uQ0vAEG1o1zz"
                      title="BUP FST Course Additional Details"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="text-center">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
                    >
                      <a
                        href="https://youtu.be/ksDKglignhc?si=Ndd0uQ0vAEG1o1zz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        YouTube এ দেখুন
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">কোর্স পরিচিতি</p>
                    <p className="text-xs text-muted-foreground">বিস্তারিত তথ্য</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="p-2 bg-green-100 rounded-full">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">শিক্ষক পরিচিতি</p>
                    <p className="text-xs text-muted-foreground">অভিজ্ঞতা ও যোগ্যতা</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="p-2 bg-purple-100 rounded-full">
                    <Award className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">সাফল্যের গল্প</p>
                    <p className="text-xs text-muted-foreground">পূর্ববর্তী ছাত্রদের ফলাফল</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-4 transition-colors duration-300 hover:text-accent">
              তোমার স্বপ্নের যাত্রায় আমরা আছি তোমার পাশে
            </h3>
            <Button
              size="lg"
              onClick={handleWhatsAppContact}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:rotate-1"
            >
              <MessageCircle className="h-5 w-5 mr-2 transition-transform duration-300 hover:rotate-12" />
              এখনই যোগাযোগ করুন
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
