'use client'

import { useEffect, useState } from 'react'

const tocItems = [
  { id: 'overview', title: 'Overview', level: 2 },
  { id: 'basics', title: 'Basics', level: 2 },
  { id: 'cache-performance', title: 'Cache Performance Comparison', level: 2 },
  { id: 'use-cases', title: 'Use Cases', level: 2 },
  { id: 'npm-caching', title: 'NPM Package Caching', level: 3 },
  { id: 'bazel-caching', title: 'Bazel Build Caching', level: 3 },
  { id: 'availability', title: 'Availability', level: 2 },
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
    <div className="sticky top-[calc(theme(spacing.14)+theme(spacing.8))] order-last hidden w-52 flex-none overflow-y-auto py-8 xl:block">
      <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
        On this page
      </h4>
      <ul className="space-y-2 border-l border-gray-200 dark:border-gray-800">
        {tocItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`-ml-px block border-l-2 py-0.5 text-[0.8125rem] transition-colors ${
                item.level === 3 ? 'pl-6' : 'pl-4'
              } ${
                activeId === item.id
                  ? 'border-emerald-500 font-medium text-emerald-600 dark:text-emerald-400'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-500 dark:hover:border-gray-700 dark:hover:text-gray-300'
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
