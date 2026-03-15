'use client'

import { useEffect, useState } from 'react'

const tocItems = [
  { id: 'overview', title: 'Overview', level: 2 },
  { id: 'basics', title: 'Basics', level: 2 },
  { id: 'cache-performance', title: 'Cache Performance Comparison', level: 2 },
  { id: 'use-cases', title: 'Use Cases', level: 2 },
  { id: 'npm-caching', title: 'NPM Package Caching', level: 3 },
  { id: 'bazel-caching', title: 'Bazel Build Caching', level: 3 },
  { id: 'how-it-works', title: 'How it works', level: 2 },
  { id: 'using-inside-container', title: 'Using Sticky Disks inside a container', level: 2 },
  { id: 'stickydisk-delete', title: 'useblacksmith/stickydisk-delete', level: 2 },
  { id: 'delete-by-key', title: 'Delete by Key', level: 3 },
  { id: 'delete-docker-cache', title: 'Delete Docker Cache', level: 3 },
  { id: 'cleanup-example', title: 'Example: Cleanup After Build', level: 2 },
  { id: 'availability', title: 'Availability', level: 2 },
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
      <div className="mb-3 flex items-center gap-1.5">
        <svg className="size-4 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <span className="text-sm font-medium text-gray-900 dark:text-white">On this page</span>
      </div>

      <ul className="space-y-1.5">
        {tocItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block text-[0.8125rem] leading-snug transition-colors ${
                item.level === 3 ? 'pl-3' : ''
              } ${
                activeId === item.id
                  ? 'font-medium text-gray-900 dark:text-white'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300'
              }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
