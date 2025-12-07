import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'InsightLoop',
  description: 'InsightLoop provides small businesses with AI-powered micro-analytics and mental health support for employees in one intuitive platform. It combines niche analytics tools with wellness to improve decision-making while fostering a healthier work environment.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">InsightLoop</h1>
      <p className="mt-4 text-lg">InsightLoop provides small businesses with AI-powered micro-analytics and mental health support for employees in one intuitive platform. It combines niche analytics tools with wellness to improve decision-making while fostering a healthier work environment.</p>
    </main>
  )
}
