import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SkillVerse',
  description: 'SkillVerse is an AI-driven educational platform that connects small businesses with niche talent for short-term projects and upskilling. It uses advanced AI to match professionals seeking specific expertise with educators who can provide targeted, efficient learning experiences.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">SkillVerse</h1>
      <p className="mt-4 text-lg">SkillVerse is an AI-driven educational platform that connects small businesses with niche talent for short-term projects and upskilling. It uses advanced AI to match professionals seeking specific expertise with educators who can provide targeted, efficient learning experiences.</p>
    </main>
  )
}
