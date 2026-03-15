'use client'

import { useState } from 'react'

const navSections = [
  {
    title: 'Getting Started',
    icon: 'rocket',
    children: [
      { title: 'Quickstart', href: '#', active: false },
      { title: 'Installation', href: '#', active: false },
      { title: 'Configuration', href: '#', active: false },
    ],
  },
  {
    title: 'Blacksmith Caching',
    icon: 'bolt',
    children: [
      { title: 'Overview', href: '#', active: false },
      { title: 'Docker Layer Caching', href: '#', active: false },
      { title: 'Caching Dependencies', href: '#', active: true },
      { title: 'Language Caches', href: '#', active: false },
    ],
  },
  {
    title: 'Runners',
    icon: 'server',
    children: [
      { title: 'GitHub Actions', href: '#', active: false },
      { title: 'Custom Runners', href: '#', active: false },
      { title: 'Runner Images', href: '#', active: false },
    ],
  },
  {
    title: 'Observability',
    icon: 'chart',
    children: [
      { title: 'Build Insights', href: '#', active: false },
      { title: 'Metrics', href: '#', active: false },
    ],
  },
  {
    title: 'Integrations',
    icon: 'puzzle',
    children: [
      { title: 'GitHub App', href: '#', active: false },
      { title: 'Slack', href: '#', active: false },
      { title: 'Webhooks', href: '#', active: false },
    ],
  },
]

function SectionIcon({ icon, className }: { icon: string; className?: string }) {
  const cls = className || 'size-4'
  switch (icon) {
    case 'rocket':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      )
    case 'bolt':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>
      )
    case 'server':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z" />
        </svg>
      )
    case 'chart':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      )
    case 'puzzle':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
        </svg>
      )
    default:
      return null
  }
}

export default function Sidebar() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>(() => {
    const initial: Record<number, boolean> = {}
    navSections.forEach((s, i) => {
      initial[i] = s.children.some(c => c.active) || i < 2
    })
    return initial
  })

  const toggleSection = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <nav
      className="sidebar-scroll fixed bottom-0 left-0 top-14 z-[100] hidden w-64 overflow-y-auto border-r border-gray-200/70 bg-white dark:border-gray-800/60 dark:bg-[#0f1117] lg:block"
    >
      <div className="px-4 pb-8 pt-6">
        {navSections.map((section, index) => (
          <div key={section.title} className={index > 0 ? 'mt-5' : ''}>
            {/* Section header */}
            <button
              onClick={() => toggleSection(index)}
              className="flex w-full items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 transition-colors hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
            >
              <SectionIcon icon={section.icon} className="size-3.5" />
              <span className="flex-1 text-left">{section.title}</span>
              <svg
                className={`size-3 flex-none text-gray-300 transition-transform dark:text-gray-600 ${expanded[index] ? 'rotate-90' : ''}`}
                fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Children */}
            {expanded[index] && (
              <ul className="mt-2 space-y-0.5 border-l border-gray-200 pl-3 dark:border-gray-800">
                {section.children.map((child) => (
                  <li key={child.title}>
                    <a
                      href={child.href}
                      className={`block rounded-md px-2.5 py-1.5 text-[0.8125rem] transition-colors ${
                        child.active
                          ? '-ml-[calc(0.75rem+1px)] border-l-2 border-emerald-500 pl-[calc(0.75rem+0.625rem-1px)] font-medium text-gray-900 dark:text-white'
                          : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
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
    </nav>
  )
}
