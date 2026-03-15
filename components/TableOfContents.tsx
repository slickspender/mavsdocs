'use client'

import { useEffect, useState } from 'react'
import OpenInLLM from './OpenInLLM'

const tocItems = [
  { id: 'overview', title: 'Overview', level: 2 },
  { id: 'basics', title: 'Basics', level: 2 },
  { id: 'runner-tags', title: 'Runner Tags', level: 2 },
  { id: 'x64-runners', title: 'x64 Runners', level: 3 },
  { id: 'arm-runners', title: 'ARM Runners', level: 3 },
  { id: 'free-upgrades', title: 'Free Upgrades', level: 2 },
  { id: 'pre-installed-packages', title: 'Pre-installed Packages', level: 2 },
  { id: 'ubuntu-x64', title: 'Ubuntu x64', level: 3 },
  { id: 'ubuntu-arm', title: 'Ubuntu ARM', level: 3 },
  { id: 'windows-x64', title: 'Windows x64 (Public Beta)', level: 3 },
  { id: 'pricing', title: 'Pricing', level: 2 },
  { id: 'faq', title: 'FAQ', level: 2 },
]

export default function TableOfContents() {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-80px 0px -80% 0px', threshold: 0 }
    )

    for (const item of tocItems) {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="sticky top-[calc(theme(spacing.24)+theme(spacing.8))] order-last hidden w-56 flex-none overflow-y-auto py-8 xl:block">
      {/* Header with list icon */}
      <div className="mb-3 flex items-center gap-1.5 px-0.5">
        <svg className="size-3.5 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <span className="text-[13px] font-semibold text-gray-900 dark:text-white">On this page</span>
      </div>

      <ul className="space-y-1.5">
        {tocItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block text-[15px] leading-snug transition-colors py-1 ${
                item.level === 3 ? 'pl-3' : ''
              } ${
                activeId === item.id
                  ? 'font-semibold text-olive-500'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300'
              }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      <OpenInLLM />
    </div>
  )
}
