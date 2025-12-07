import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SkillVerse',
  description: 'SkillVerse is an AI-driven educational platform that connects small businesses with niche talent for short-term projects and upskilling. It uses advanced AI to match professionals seeking specific expertise with educators who can provide targeted, efficient learning experiences.',
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
