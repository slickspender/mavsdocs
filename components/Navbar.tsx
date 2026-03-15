'use client'

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[100]">
      {/* Main navbar */}
      <header className="flex h-14 items-center border-b border-gray-200/70 dark:border-white/10 bg-white dark:bg-dark px-5 lg:px-6">
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
        <a href="/" className="ml-4 flex items-center gap-2.5 lg:ml-0">
          <div className="flex size-7 items-center justify-center rounded bg-gray-900 dark:bg-white">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-5 text-white dark:text-gray-900">
              <path d="M16 2L2 9.5L16 17L30 9.5L16 2Z" fill="currentColor"/>
              <path d="M2.00003 22.5L16 30L30 22.5V13.8438L16 21.3438L2.00003 13.8438V22.5Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="flex flex-col leading-[0.8] tracking-widest text-[#101010] dark:text-white font-bold text-[0.65rem] uppercase">
            <span>mavs</span>
            <span>docs</span>
          </div>
        </a>

        {/* Centered search */}
        <div className="mx-auto hidden md:block w-full max-w-sm px-4">
          <button className="flex w-full items-center gap-2 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-50 px-3 py-1.5 text-sm text-gray-500 dark:text-gray-400 shadow-sm transition-colors hover:border-gray-300 dark:hover:border-white/20">
            <svg className="size-4 flex-none" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <span className="flex-1 text-left">Search...</span>
            <kbd className="font-mono text-[0.65rem] font-bold text-gray-400 dark:text-gray-500">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Right side — Ask AI */}
        <div className="ml-auto flex items-center md:ml-0">
          <button className="hidden md:flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-50 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm transition-colors hover:bg-gray-50 dark:hover:bg-white/5">
            <svg className="size-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
            Ask AI
          </button>
        </div>
      </header>

      {/* Secondary bar — Docs tab */}
      <div className="flex h-10 items-center border-b border-gray-200 dark:border-white/10 bg-sage-background dark:bg-dark px-5 lg:px-6">
        <a href="#" className="-mb-px flex items-center gap-2 border-b-[3px] border-emerald-500 pb-2 text-[13px] font-semibold text-gray-900 dark:text-white">
          <svg className="size-3.5 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
          </svg>
          Docs
        </a>
      </div>
    </div>
  )
}
