import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Linking to Account Portal pages | Clerk Docs',
  description: 'Learn how to share direct links to your Account Portal pages, and how to set up fallback redirects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable} h-full scroll-pt-16 antialiased [font-synthesis-weight:none]`}>
      <body className="flex min-h-full flex-col bg-gray-50 font-sans text-gray-600 dark:bg-gray-950 dark:text-gray-400">
        {children}
      </body>
    </html>
  )
}
