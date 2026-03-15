'use client'

import { useTheme } from './ThemeProvider'

const footerSections = [
  {
    title: 'Product',
    links: [
      { label: 'Authentication', href: '#' },
      { label: 'B2B Authentication', href: '#' },
      { label: 'Billing', href: '#' },
    ],
  },
  {
    title: 'SDKs',
    links: [
      { label: 'React', href: '#' },
      { label: 'Next.js', href: '#' },
      { label: 'Expo', href: '#' },
      { label: 'View all', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'Glossary', href: '#' },
      { label: 'Feature requests', href: '#' },
      { label: 'Startups', href: '#' },
      { label: 'LLM Leaderboard', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Brand assets', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms and conditions', href: '#' },
      { label: 'Terms of engagement', href: '#' },
      { label: 'Privacy policy', href: '#' },
      { label: 'Data processing agreement', href: '#' },
      { label: 'Do not sell/share my info', href: '#' },
      { label: 'Cookie manager', href: '#' },
    ],
  },
]

export default function Footer() {
  const { theme, setTheme } = useTheme()

  return (
    <footer className="pointer-events-auto mt-auto pb-24 xl:ml-[max(0px,calc((100%-64rem)/2))]">
      <div className="mx-auto max-w-[43.5rem] border-t border-gray-600/10 pt-16 dark:border-gray-900 xl:mx-0 xl:max-w-5xl">
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 text-sm/4 sm:grid-cols-3 xl:grid-cols-6">
          {/* Clerk logo column */}
          <div className="col-span-full xl:col-auto">
            <a href="/" className="block w-fit">
              <span className="text-sm font-bold tracking-widest uppercase text-gray-950 dark:text-white">mavsdocs</span>
            </a>
          </div>

          {/* Section columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-book text-gray-400">
                {section.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-medium text-gray-950 transition-colors hover:text-gray-700 dark:text-white dark:hover:text-gray-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright + Theme Toggles */}
        <div className="mt-16 flex items-center justify-between border-t border-gray-600/10 pt-6 dark:border-gray-900">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; 2026 mavsdocs
          </p>
          <div className="flex gap-x-1.5 rounded-full bg-gray-600/5 p-1 ring-1 ring-gray-600/5 ring-inset dark:bg-black/30 dark:ring-white/5" aria-label="Theme" role="toolbar">
            {/* Dark */}
            <button
              onClick={() => setTheme('dark')}
              className={`relative size-5 flex-none rounded-full outline-none transition-colors ${theme === 'dark' ? 'text-gray-950 dark:text-white' : 'text-gray-400 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-300'}`}
              aria-label="Dark"
            >
              <span className="absolute inset-[calc(-3/16*1rem)]" />
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-5">
                <path fill="currentColor" fillOpacity=".15" fillRule="evenodd" clipRule="evenodd" d="M15.25 10.68a4.614 4.614 0 0 1-5.929-5.93 5.274 5.274 0 1 0 5.929 5.93Z" />
                <path fill="currentColor" d="m15.25 10.68.743.098a.75.75 0 0 0-1.003-.802l.26.703ZM9.321 4.75l.704.26a.75.75 0 0 0-.803-1.003l.1.743Zm5.669 5.226a3.855 3.855 0 0 1-1.34.238v1.5c.653 0 1.28-.117 1.86-.331l-.52-1.407Zm-1.34.238A3.864 3.864 0 0 1 9.786 6.35h-1.5a5.364 5.364 0 0 0 5.364 5.364v-1.5ZM9.786 6.35c0-.473.085-.923.239-1.34l-1.407-.52a5.354 5.354 0 0 0-.332 1.86h1.5ZM5.5 9.977a4.524 4.524 0 0 1 3.92-4.484l-.198-1.486A6.024 6.024 0 0 0 4 9.977h1.5Zm4.523 4.523A4.523 4.523 0 0 1 5.5 9.977H4A6.023 6.023 0 0 0 10.023 16v-1.5Zm4.484-3.92a4.524 4.524 0 0 1-4.484 3.92V16a6.024 6.024 0 0 0 5.97-5.222l-1.486-.198Z" />
              </svg>
            </button>
            {/* Light */}
            <button
              onClick={() => setTheme('light')}
              className={`relative size-5 flex-none rounded-full outline-none transition-colors ${theme === 'light' ? 'text-gray-950 dark:text-white' : 'text-gray-400 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-300'}`}
              aria-label="Light"
            >
              <span className="absolute inset-[calc(-3/16*1rem)]" />
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-5">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 3v1.5M10 15.5V17M17 10h-1.5M4.5 10H3M14.95 14.95l-1.06-1.06M6.11 6.11L5.05 5.05M14.95 5.05l-1.06 1.06M6.11 13.89l-1.06 1.06" />
                <circle cx="10" cy="10" r="3.25" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            {/* System */}
            <button
              onClick={() => setTheme('system')}
              className={`relative size-5 flex-none rounded-full outline-none transition-colors ${theme === 'system' ? 'text-gray-950 dark:text-white' : 'text-gray-400 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-300'}`}
              aria-label="System"
            >
              <span className="absolute inset-[calc(-3/16*1rem)]" />
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-5">
                <rect x="3" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7.5 17h5M10 14v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
