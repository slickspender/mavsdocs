'use client'

import { useState } from 'react'

const navSections = [
  { title: 'Getting started', expanded: false },
  { title: 'Authentication flows', expanded: false },
  { title: 'User management', expanded: false },
  { title: 'Session management', expanded: false },
  { title: 'Organization management', expanded: false },
  { title: 'Billing management', expanded: false },
  {
    title: 'Account Portal',
    expanded: true,
    children: [
      { title: 'Overview', href: '#', active: false },
      { title: 'Getting started', href: '#', active: false },
      { title: 'Linking to Account Portal pages', href: '#', active: true },
      { title: 'Disable Account Portal', href: '#', active: false },
    ],
  },
  { title: 'Customizing Clerk', expanded: false },
  { title: 'Securing your app', expanded: false },
  { title: 'AI', expanded: false },
  { title: 'Development', expanded: false },
  { title: 'Clerk Dashboard', expanded: false },
  { title: 'How Clerk works', expanded: false },
]

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  )
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  )
}

export default function Sidebar() {
  const [sections, setSections] = useState(navSections)

  const toggleSection = (index: number) => {
    setSections((prev) =>
      prev.map((s, i) => (i === index ? { ...s, expanded: !s.expanded } : s))
    )
  }

  return (
    <nav
      className="sidebar-scroll fixed bottom-0 left-0 top-[calc(theme(spacing.1)+theme(spacing.16))] z-[100] hidden w-72 border-r border-gray-100 dark:border-gray-900 lg:flex"
    >
      <div
        className="isolate flex min-h-0 min-w-0 flex-auto flex-col overflow-y-auto bg-white pt-5 dark:bg-gray-950 lg:ml-[0.3rem] lg:pt-4"
        style={{
          '--root-indent': '0.5rem',
          '--nested-indent': '1.25rem',
          '--bar-width': '1px',
          '--active-bg': 'rgb(243 244 246)',
          '--active-text': 'rgb(3 7 18)',
        } as React.CSSProperties}
      >
        {/* SDK Selector */}
        <div className="relative z-20 px-3 lg:px-2">
          <div className="rounded-xl bg-gray-50 px-1 pb-1 pt-1.5 dark:bg-[#1D1D21]/50">
            <span className="mb-1.5 block px-2 text-xs font-medium text-gray-950 dark:text-white">
              Select your SDK
            </span>
            <button className="flex h-10 w-full items-center justify-between gap-x-2 rounded-lg bg-white py-2 pl-2.5 pr-3 text-[0.875rem]/5 font-book text-gray-950 shadow-[0_4px_8px_0_rgba(32,42,54,0.05),0_0_0_1px_rgba(32,42,54,0.08),0_1px_5px_-4px_rgba(19,19,22,0.7)] outline-none dark:bg-gray-900 dark:text-white dark:shadow-[0_4px_8px_rgba(0,0,0,0.05),0_0_0_1px_rgba(255,255,255,0.1),0_1px_6px_-4px_#000]">
              <span className="flex items-center gap-2.5">
                <span className="flex-none [&>:is(img,svg)]:size-6" aria-hidden="true">
                  <svg viewBox="0 0 180 180">
                    <mask height="180" id="nextjs-mask" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: 'alpha' }}>
                      <circle cx="90" cy="90" fill="currentColor" r="90" />
                    </mask>
                    <g mask="url(#nextjs-mask)">
                      <circle cx="90" cy="90" fill="currentColor" r="90" />
                      <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#nextjs-g1)" />
                      <rect fill="url(#nextjs-g2)" height="72" width="12" x="115" y="54" />
                    </g>
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="nextjs-g1" x1="109" x2="144.5" y1="116.5" y2="160.5">
                        <stop className="[stop-color:var(--light,white)_var(--dark,black)]" />
                        <stop offset="1" className="[stop-color:var(--light,white)_var(--dark,black)]" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient gradientUnits="userSpaceOnUse" id="nextjs-g2" x1="121" x2="120.799" y1="54" y2="106.875">
                        <stop className="[stop-color:var(--light,white)_var(--dark,black)]" />
                        <stop offset="1" className="[stop-color:var(--light,white)_var(--dark,black)]" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                Next.js
              </span>
              <svg className="size-4 flex-none text-gray-400 dark:text-gray-500" viewBox="0 0 16 16" fill="none">
                <path d="M4.75 6.75L8 10.25L11.25 6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Top-level nav items */}
        <div className="mt-4 px-2">
          {/* Guides */}
          <button className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-[0.875rem]/5 font-medium text-gray-950 transition-colors hover:bg-gray-50 dark:text-white dark:hover:bg-gray-900">
            <svg className="size-4 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
            </svg>
            <span className="flex-1 text-left">Guides</span>
            <ChevronRight className="size-3.5 text-gray-400 dark:text-gray-500" />
          </button>

          {/* Reference */}
          <button className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-[0.875rem]/5 font-medium text-gray-950 transition-colors hover:bg-gray-50 dark:text-white dark:hover:bg-gray-900">
            <svg className="size-4 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
            <span className="flex-1 text-left">Reference</span>
            <ChevronRight className="size-3.5 text-gray-400 dark:text-gray-500" />
          </button>
        </div>

        {/* Divider */}
        <div className="mx-4 my-2 border-t border-gray-100 dark:border-gray-900" />

        {/* Expandable sections */}
        <div className="px-2 pb-8">
          {sections.map((section, index) => (
            <div key={section.title}>
              <button
                onClick={() => toggleSection(index)}
                className="flex w-full items-center gap-1.5 rounded-md px-2 py-1.5 text-[0.875rem]/5 font-medium text-gray-950 transition-colors hover:bg-gray-50 dark:text-white dark:hover:bg-gray-900"
              >
                {section.expanded ? (
                  <ChevronDown className="size-3.5 flex-none text-gray-400 dark:text-gray-500" />
                ) : (
                  <ChevronRight className="size-3.5 flex-none text-gray-400 dark:text-gray-500" />
                )}
                <span className="flex-1 text-left">{section.title}</span>
              </button>

              {/* Children (if expanded and has children) */}
              {section.expanded && section.children && (
                <ul className="relative mb-1 ml-[0.6875rem] mt-0.5 border-l border-gray-200/80 pl-3 dark:border-gray-800">
                  {section.children.map((child) => (
                    <li key={child.title} className="relative">
                      <a
                        href={child.href}
                        className={`block rounded-md px-2 py-1 text-[0.875rem]/5 transition-colors ${
                          child.active
                            ? 'border-l-2 border-gray-950 -ml-[calc(0.75rem+1px)] pl-[calc(0.75rem+0.5rem-1px)] bg-gray-100 font-medium text-gray-950 dark:border-white dark:bg-gray-800/60 dark:text-white'
                            : 'font-book text-gray-600 hover:bg-gray-50 hover:text-gray-950 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white'
                        }`}
                      >
                        {child.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
