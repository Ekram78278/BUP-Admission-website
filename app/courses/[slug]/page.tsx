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
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <ArrowLeft className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Back to Home</span>
              </Link>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-8 w-8 text-primary" />
                <h1 className="text-2xl font-bold text-primary">BUP Admission</h1>
              </div>
            </div>
            <Button onClick={handleWhatsAppContact} className="bg-green-600 hover:bg-green-700 text-white">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Cover Image Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={course.coverImage || "/placeholder.svg"}
          alt={course.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">{course.title}</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Greeting */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{course.content.greeting}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{course.content.intro}</p>
          </div>

          {/* Course Module */}
          <Card className="mb-12 border-2 border-accent">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl text-primary">{course.content.courseModule.title}</CardTitle>
              <CardDescription className="text-lg">{course.content.courseModule.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Course Features */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-semibold">৬০+ লাইভ ক্লাস</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span className="font-semibold">প্রতি ক্লাস ১.৫ ঘণ্টা+</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-semibold">সাপ্তাহিক মেন্টরশিপ</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="font-semibold">মডেল টেস্ট</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <span className="font-semibold">২৪/৭ সাপোর্ট</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="font-semibold">রেকর্ডেড ক্লাস</span>
                  </div>
                </div>
              </div>

              {/* Subject Breakdown */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-6 text-center">বিষয়ভিত্তিক ক্লাস বণ্টন</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors duration-300 hover:shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-3">📊</div>
                      <h4 className="font-bold text-lg text-primary mb-2">গণিত</h4>
                      <p className="text-2xl font-bold text-blue-600">১৫+</p>
                      <p className="text-sm text-muted-foreground">ক্লাস</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors duration-300 hover:shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-3">⚛️</div>
                      <h4 className="font-bold text-lg text-primary mb-2">পদার্থবিজ্ঞান</h4>
                      <p className="text-2xl font-bold text-purple-600">১৪+</p>
                      <p className="text-sm text-muted-foreground">ক্লাস</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-green-200 hover:border-green-400 transition-colors duration-300 hover:shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-3">🧬</div>
                      <h4 className="font-bold text-lg text-primary mb-2">জীববিজ্ঞান</h4>
                      <p className="text-2xl font-bold text-green-600">১৪+</p>
                      <p className="text-sm text-muted-foreground">ক্লাস</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-orange-200 hover:border-orange-400 transition-colors duration-300 hover:shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-3">🧪</div>
                      <h4 className="font-bold text-lg text-primary mb-2">রসায়ন</h4>
                      <p className="text-2xl font-bold text-orange-600">১৬+</p>
                      <p className="text-sm text-muted-foreground">ক্লাস</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Course Benefits */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">🎁 কোর্স থেকে তুমি যা যা পাচ্ছো</h3>
                <div className="space-y-3">
                  {/* Special Gift Section */}
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 p-4 rounded-lg mb-4 animate-pulse">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">🎁</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg font-bold text-orange-600">বিশেষ উপহার!</span>
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-red-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                        <span className="text-gray-700 font-medium">
                          গিফট হিসেবে পাবে আমাদের আগের বছরের কোর্সের সকল রেকর্ডেড ক্লাস এবং ভার্সিটি স্পেশাল ইংলিশ রেকর্ডেড কোর্স।
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>ভর্তি হওয়ার সাথে সাথেই গত বছরের সম্পূর্ণ রেকর্ডেড ক্লাসের গুগল ড্রাইভ লিঙ্ক</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>অভিজ্ঞ শিক্ষক প্যানেলের সরাসরি গাইডলাইন (Weekly Mentorship)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>প্রতি সপ্তাহের ক্লাসের রুটিন আগের সপ্তাহেই</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>তোমার স্বপ্ন পূরণে আমাদের কঠোর তত্ত্বাবধান</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Weekly এক্সাম এবং সল্ভশীট যা BUP FST এর আগের বছরের প্রশ্ন এনালাইসিস করে বানানো তাই তোমার এক্সট্রা বই এর দরকার নেই।
                    </span>
                  </div>
                </div>
              </div>

              {/* Rules and Guidelines */}
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-700 mb-4">🚨 আমাদের প্রতিশ্রুতি ও নিয়মাবলী</h3>
                <p className="text-gray-700 mb-4">
                  আমরা জানি, সফলতার জন্য একটি সঠিক নির্দেশনার পাশাপাশি কিছুটা চাপও প্রয়োজন। তাই আমরা তোমার পড়াশোনার ব্যাপারে থাকবো অনেক বেশি
                  কঠোর।
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>নিয়মিত উপস্থিতি:</strong> তোমাকে অবশ্যই প্রতিটি ক্লাসে উপস্থিত থাকতে হবে। ক্লাস না করলে তোমার অভিভাবকের
                      সাথে যোগাযোগ করা হবে।
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>পারফরম্যান্স মনিটরিং:</strong> পরীক্ষায় কম নম্বর পেলেও সেই বিষয়টি তোমার অভিভাবককে জানানো হবে।
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
            </CardContent>
          </Card>

          {/* Video Section */}
          <Card className="mb-12 border-2 border-primary/20 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary flex items-center justify-center gap-3">
                <div className="p-3 bg-red-100 rounded-full">
                  <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        YouTube এ দেখুন
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.youtube.com/embed/ksDKglignhc?si=Ndd0uQ0vAEG1o1zz"
                      title="BUP FST Admission Course Additional Details"
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
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
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

          {/* Demo Classes Section */}
          <Card className="mb-12 border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary flex items-center justify-center gap-3">
                <div className="p-3 bg-blue-100 rounded-full animate-pulse">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                ডেমো ক্লাস দেখুন
              </CardTitle>
              <CardDescription className="text-lg">আমাদের শিক্ষাদান পদ্ধতি সম্পর্কে জানতে ডেমো ক্লাসগুলো দেখুন</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-green-300">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">ফেসবুক ডেমো ক্লাস</h3>
                  <p className="text-gray-600 mb-4">আমাদের প্রকৃত ক্লাসের অভিজ্ঞতা নিন এবং শিক্ষাদান পদ্ধতি সম্পর্কে জানুন</p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Clock className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-blue-800">লাইভ ক্লাস</p>
                      <p className="text-xs text-blue-600">ইন্টারঅ্যাক্টিভ শিক্ষা</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <div className="p-2 bg-green-100 rounded-full">
                      <BookOpen className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-green-800">প্রশ্ন সমাধান</p>
                      <p className="text-xs text-green-600">স্টেপ বাই স্টেপ</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <div className="p-2 bg-purple-100 rounded-full">
                      <Users className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-purple-800">শিক্ষক-ছাত্র</p>
                      <p className="text-xs text-purple-600">সরাসরি যোগাযোগ</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <a
                      href="https://www.facebook.com/share/v/1B5pqPXV3N/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      ডেমো ক্লাস দেখুন
                      <div className="flex gap-1 ml-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-white rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-white rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </a>
                  </Button>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    💡 <strong>টিপস:</strong> ডেমো ক্লাস দেখে আমাদের শিক্ষাদান পদ্ধতি সম্পর্কে ধারণা নিন
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">তোমার স্বপ্নের যাত্রায় আমরা আছি তোমার পাশে</h3>
            <Button
              size="lg"
              onClick={handleWhatsAppContact}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              এখনই যোগাযোগ করুন
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
