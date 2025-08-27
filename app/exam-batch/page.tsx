"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, GraduationCap, CheckCircle, Target, BookOpen, Award } from "lucide-react"
import Link from "next/link"

export default function ExamBatchPage() {
  const handleWhatsAppContact = () => {
    window.open("https://wa.me/8801957424836?text=Hello! I am interested in BUP FST Special Exam Batch 2026.", "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <GraduationCap className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
              <h1 className="text-2xl font-bold text-primary transition-colors duration-300 group-hover:text-accent">
                BUP Admission
              </h1>
            </Link>
            <Button
              onClick={handleWhatsAppContact}
              className="bg-green-600 hover:bg-green-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">BUP FST Special Exam Batch 2026</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">পরীক্ষার হলে নার্ভাস না হয়ে সঠিক উত্তর করার জন্য বিশেষ প্রস্তুতি</p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-red-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-red-700 mb-4">সমস্যাটি কী? 🤔</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg leading-relaxed text-gray-700">
                তুমি অনেক পড়াশুনা করলা সব সিলেবাস তোমার শেষ কিন্তু পরীক্ষার হলে গিয়ে তুমি নার্ভাস হয়ে ভালো মতো সঠিক উত্তর করতে পারলে না।
                তাহলে তোমার পড়ে লাভ কই?
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-4">তাহলে এই জিনিস এর সলিউশন কি? 🎯</h2>
            <p className="text-xl text-green-600 font-semibold">এক্সাম ! পরীক্ষা ! মডেল টেস্ট ✍! এবং সমস্যা সমাধান ✅</p>
          </div>

          <Card className="max-w-4xl mx-auto border-green-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-green-700 mb-4">তুমি চান্স পাবা ৪ টি ধাপে</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">সপ্তাহে পরীক্ষা দিতে হবে প্রত্যেক অধ্যায় এর উপর</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">পরীক্ষার পর যেই প্রশ্ন ভুল করেছা তা খুঁজে বের করে নোট রাখতে হবে যাতে।</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    সিলেবাস শেষ করে দিতে হবে Final Model test According to BUP Standard Question
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Then You will solve the main problem from final model test 📝</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">আমাদের BUP FST Special Exam Batch 2026</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-blue-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Target className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl text-blue-700">Weekly Exam (অধ্যায় ভিত্তিক)</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  আমরা প্রতি সপ্তাহে তোমাকে টার্গেট দিবো এবং বলে দিবো যে এই সপ্তাহে নির্ধারিত অধ্যায় পড়ে কমপ্লিট করতে হবে।
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                  <CardTitle className="text-xl text-purple-700">Solve Sheet with Description</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">এর পর সপ্তাহ শেষে তুমি পরীক্ষা দিবে এবং তোমার রেজাল্ট এর সাথে সল্ভ দেয়া হবে।</p>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-4xl mx-auto mt-8 bg-yellow-50 border-yellow-200 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <p className="text-gray-700 text-center">
                <strong>কারণ:</strong> তোমাকে সব পরীক্ষার লিঙ্ক দিয়ে দিলে তুমি পড়বে না তুমি এক্সাম লিঙ্ক ফেলে রাখবে আর দিবো দিবো বলে
                দেয়া হবে না।
                <br />
                <br />
                <span className="text-red-600 font-semibold">তোমার খারাপ হাক আমরা চাই না । তোমার ভালোর জন্যই এই প্ল্যান।</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Study Routine */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">প্রথম ২ সপ্তাহের সম্ভাব্য রুটিন</h2>
            <p className="text-lg text-gray-600">আমাদের পরিকল্পিত অধ্যায়ভিত্তিক পড়াশুনার সময়সূচী</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Week 1 */}
            <Card className="border-blue-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardTitle className="text-2xl text-center">Week 1</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300">
                    <div className="font-semibold text-green-700">Biology</div>
                    <div className="text-gray-700">পরিসাংখ্য ও শেষাংশ</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                    <div className="font-semibold text-blue-700">Math</div>
                    <div className="text-gray-700">সরলরেখা</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300">
                    <div className="font-semibold text-purple-700">Chemistry</div>
                    <div className="text-gray-700">গুণগত রসায়ন (১ম অংশ)</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-300">
                    <div className="font-semibold text-orange-700">Physics</div>
                    <div className="text-gray-700">তেজস্ক্রিয়তা</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                    <div className="font-semibold text-blue-700">Math</div>
                    <div className="text-gray-700">বৃত্ত</div>
                  </div>
                  <div className="p-3 bg-red-100 rounded-lg border-l-4 border-red-500">
                    <div className="font-semibold text-red-700">Weekly Exam -01</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Week 2 */}
            <Card className="border-purple-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
                <CardTitle className="text-2xl text-center">Week 2</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300">
                    <div className="font-semibold text-purple-700">Chemistry</div>
                    <div className="text-gray-700">গুণগত রসায়ন (২য় অংশ)</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-300">
                    <div className="font-semibold text-orange-700">Physics</div>
                    <div className="text-gray-700">নিউটনীয়ান বলবিদ্যা</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300">
                    <div className="font-semibold text-green-700">Biology</div>
                    <div className="text-gray-700">শ্বাসক্রিয়া ও শ্বসন + চলন ও অঙ্গসঞ্চালনা</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300">
                    <div className="font-semibold text-purple-700">Chemistry</div>
                    <div className="text-gray-700">পরিবেশ রসায়ন</div>
                  </div>
                  <div className="p-3 bg-red-100 rounded-lg border-l-4 border-red-500">
                    <div className="font-semibold text-red-700">Weekly Exam -02</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-green-100 to-blue-100 border-green-200">
              <CardContent className="p-6">
                <p className="text-lg text-gray-700">
                  <strong>বিশেষ দ্রষ্টব্য:</strong> এই রুটিন অনুসরণ করে নিয়মিত পড়াশুনা করলে তুমি পরীক্ষার জন্য সম্পূর্ণ প্রস্তুত হয়ে যাবে।
                  প্রতি সপ্তাহে মেন্টরশিপ সেশন ও পরীক্ষার মাধ্যমে তোমার অগ্রগতি যাচাই করা হবে।
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center border-green-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <Award className="h-12 w-12 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg text-green-700">Final Model Test</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center border-blue-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg text-blue-700">Final Model Test Solve Sheet 📋</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center border-purple-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg text-purple-700">Bonus Classes</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center border-orange-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                <CardTitle className="text-lg text-orange-700">
                  Mentorship Session before BUP exam week !!! 🎯
                </CardTitle>
              </CardHeader>
            </Card>
          </div>

          <Card className="max-w-4xl mx-auto mt-8 bg-blue-50 border-blue-200">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">মোট ১০০০+ MCQ</h3>
              <p className="text-lg text-gray-700">তুমি সল্ভ করবে এবং আমরা খোঁজ নিবো।</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">বিশেষ প্রি-বুকিং অফার!</h2>

          <Card className="max-w-2xl mx-auto bg-white text-gray-800 hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <p className="text-lg mb-6">
                আমাদের অনেক ছাত্র/ছাত্রী আমাদের বলেছে এক্সাম ব্যাচ এর ফী একটু কম রাখতে । তাই এখন যারা প্রি-বুকিং করে ভর্তি হবে তাদের জন্য
                মাত্র-
              </p>
              <div className="text-4xl font-bold text-green-600 mb-4">৭৯৯ টাকা</div>
              <p className="text-sm text-gray-600 mb-6">প্রি-বুকিং প্রাইস</p>

              <div className="bg-yellow-100 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-700">
                  <strong>আমাদের এক্সাম ব্যাচ শুরু হবে September - 1st week</strong>
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> যারা আমাদের পেইড ব্যাচ এ আছো তাদের এই সকল জিনিস কোর্সের সাথেই যুক্ত।
                </p>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                আমাদের পেইড ব্যাচে - BUP FST Special Course 2026 এ ভর্তি হতে চাও যোগাযোগ করে ফেলো। Specially for HSC 25 and
                2nd timer যাদের পড়ায় পিছিয়ে আছো।
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact & Payment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-green-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-green-700 mb-4">যোগাযোগ ও পেমেন্ট তথ্য</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-lg mb-4">
                    <strong>You can knock me in my Whatsapp - (হটলাইন)</strong>
                  </p>
                  <Button
                    onClick={handleWhatsAppContact}
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    01957424836 (Ekram)
                  </Button>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-700 mb-4">Payment Policy</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <strong>Send Money to Bkash/Nagad:</strong> 01999957767
                    </p>
                    <p>and after send money- fillup this form -</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
