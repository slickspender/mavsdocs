'use client'

import { useTheme } from './ThemeProvider'

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed inset-x-0 top-0 z-[100] flex h-14 items-center border-b border-gray-200/70 bg-white/80 px-5 backdrop-blur-md dark:border-gray-800/60 dark:bg-[#0f1117]/80">
      {/* Mobile hamburger */}
      <div className="flex items-center lg:hidden">
        <button className="relative" aria-label="Open navigation">
          <div className="absolute -inset-3" />
          <svg className="size-5 stroke-gray-900 dark:stroke-gray-100" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        </button>
      </div>

      {/* Logo */}
      <a href="#" className="ml-4 flex items-center gap-2 lg:ml-0 lg:w-64 lg:border-r lg:border-gray-200/70 lg:pr-4 lg:dark:border-gray-800/60">
        <div className="flex size-7 items-center justify-center rounded-md bg-emerald-500">
          <svg className="size-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
          </svg>
        </div>
        <span className="text-[0.9375rem] font-semibold text-gray-900 dark:text-white">MavsDocs</span>
      </a>

      {/* Right side */}
      <div className="ml-auto flex items-center gap-3">
        {/* Search */}
        <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-500 dark:hover:border-gray-600 dark:hover:bg-gray-800 md:w-56">
          <svg className="size-4 flex-none" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <span className="hidden flex-1 text-left md:block">Search...</span>
          <kbd className="hidden rounded border border-gray-200 bg-white px-1.5 py-0.5 font-mono text-[0.625rem] font-medium text-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-500 md:inline">
            Ctrl K
          </kbd>
        </button>

        {/* Theme toggle */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : theme === 'light' ? 'dark' : 'light')}
          className="flex size-8 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          aria-label="Toggle theme"
        >
          {/* Sun (shown in dark mode) */}
          <svg className="hidden size-[1.125rem] dark:block" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="10" cy="10" r="3.25" />
            <path d="M10 3v1.5M10 15.5V17M17 10h-1.5M4.5 10H3M14.95 14.95l-1.06-1.06M6.11 6.11L5.05 5.05M14.95 5.05l-1.06 1.06M6.11 13.89l-1.06 1.06" />
          </svg>
          {/* Moon (shown in light mode) */}
          <svg className="size-[1.125rem] dark:hidden" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15.25 10.68a5.274 5.274 0 1 1-5.929-5.93 4.614 4.614 0 0 0 5.929 5.93Z" />
          </svg>
        </button>

        {/* GitHub link */}
        <a
          href="https://github.com"
          className="flex size-8 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          aria-label="GitHub"
        >
          <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
    </header>
  )
}
