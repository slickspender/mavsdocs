'use client'

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[100]">
      {/* Main navbar */}
      <header className="flex h-14 items-center border-b border-gray-200/70 bg-white px-5 dark:border-gray-800/60 dark:bg-[#0f1117]">
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
        <a href="#" className="ml-4 flex items-center gap-2.5 lg:ml-0">
          {/* Anvil/Blacksmith-style icon */}
          <div className="flex size-8 items-center justify-center">
            <svg className="size-8 text-gray-900 dark:text-white" viewBox="0 0 32 32" fill="currentColor">
              <rect x="4" y="4" width="11" height="11" rx="2" />
              <rect x="17" y="4" width="11" height="11" rx="2" />
              <rect x="4" y="17" width="11" height="11" rx="2" />
              <rect x="17" y="17" width="11" height="11" rx="2" opacity="0.4" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold tracking-wide text-gray-900 dark:text-white">MAVS</span>
            <span className="text-sm font-bold tracking-wide text-gray-900 dark:text-white">DOCS</span>
          </div>
        </a>

        {/* Centered search */}
        <div className="mx-auto hidden md:block">
          <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800/50 dark:text-gray-500 dark:hover:border-gray-600 dark:hover:bg-gray-800 md:w-72">
            <svg className="size-4 flex-none" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <span className="flex-1 text-left">Search...</span>
            <kbd className="rounded border border-gray-200 bg-white px-1.5 py-0.5 font-mono text-[0.625rem] font-medium text-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-500">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Right side — Ask AI */}
        <div className="ml-auto flex items-center gap-3 md:ml-0">
          <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
            Ask AI
          </button>
        </div>
      </header>

      {/* Secondary bar — Docs tab */}
      <div className="flex h-10 items-center border-b border-gray-200/70 bg-white px-5 dark:border-gray-800/60 dark:bg-[#0f1117] lg:px-5">
        <a href="#" className="-mb-px flex items-center gap-2 border-b-2 border-gray-900 pb-2.5 text-sm font-medium text-gray-900 dark:border-white dark:text-white">
          <svg className="size-4 text-gray-500 dark:text-gray-400" viewBox="0 0 16 16" fill="currentColor">
            <rect x="1" y="1" width="6" height="6" rx="1" />
            <rect x="9" y="1" width="6" height="6" rx="1" />
            <rect x="1" y="9" width="6" height="6" rx="1" />
            <rect x="9" y="9" width="6" height="6" rx="1" />
          </svg>
          Docs
        </a>
      </div>
    </div>
  )
}
