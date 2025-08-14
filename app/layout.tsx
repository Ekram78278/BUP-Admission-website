import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { Facebook, Youtube } from "lucide-react"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "BUP Admission Courses 2026 | Unlock Your Future",
  description:
    "Comprehensive BUP admission preparation courses for FST, 2nd timer group change, and unit programs. Expert guidance for university admission success.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <body className="font-sans">
        {children}

        <footer className="bg-slate-50 border-t border-slate-200 py-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">BUP Admission</h3>
              <p className="text-slate-600">Your pathway to academic excellence</p>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center gap-4 mb-6">
              <a
                href="https://www.facebook.com/share/1Coy23vPGD/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                Facebook Page
              </a>
              <a
                href="https://www.youtube.com/@blackboardforall41/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                <Youtube className="h-5 w-5" />
                YouTube Channel
              </a>
            </div>

            <div className="text-sm text-slate-500">© 2024 BUP Admission. All rights reserved.</div>
          </div>
        </footer>
      </body>
    </html>
  )
}
