import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'InsightLoop',
  description: 'InsightLoop provides small businesses with AI-powered micro-analytics and mental health support for employees in one intuitive platform. It combines niche analytics tools with wellness to improve decision-making while fostering a healthier work environment.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
