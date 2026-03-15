import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import ThemeProvider from '@/components/ThemeProvider'
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
  title: 'Caching Dependencies | MavsDocs',
  description: 'Learn how to cache dependencies with sticky disks for faster CI builds.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full scroll-pt-14 antialiased [font-synthesis-weight:none]`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('isDarkMode')||'light';var d=t==='system'?window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light':t;if(d==='dark')document.documentElement.classList.add('dark');document.documentElement.style.colorScheme=d}catch(e){}})()` }} />
      </head>
      <body className="flex min-h-full flex-col bg-white font-sans text-gray-700 dark:bg-[#0f1117] dark:text-gray-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
