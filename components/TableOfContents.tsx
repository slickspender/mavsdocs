'use client'

import { useEffect, useState } from 'react'

const tocItems = [
  { id: 'redirect-url', title: 'Redirect URL', level: 2 },
  { id: 'fallback-redirects', title: 'Fallback redirects', level: 2 },
  { id: 'sign-in-and-sign-up', title: 'Sign-in and sign-up', level: 3 },
  { id: 'sign-out', title: 'Sign out', level: 3 },
  { id: 'organization-redirects', title: 'Organization redirects', level: 3 },
  { id: 'prefill-sign-in-and-sign-up-fields', title: 'Prefill sign in and sign up fields', level: 2 },
]

const llmLinks = [
  { label: 'Markdown', sublabel: 'Copy as markdown' },
  { label: 'OpenAI', sublabel: 'Open in ChatGPT' },
  { label: 'Anthropic', sublabel: 'Open in Claude' },
  { label: 'Cursor', sublabel: 'Open in Cursor' },
  { label: 'Zed', sublabel: 'Open in Zed' },
  { label: 'T3 Chat', sublabel: 'Open in T3 Chat' },
  { label: 'Grok', sublabel: 'Open in Grok' },
  { label: 'Perplexity', sublabel: 'Open in Perplexity' },
  { label: 'v0', sublabel: 'Open in v0' },
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

  // Group items: top-level (h2) and their children (h3)
  const groups: { item: typeof tocItems[0]; children: typeof tocItems }[] = []
  for (const item of tocItems) {
    if (item.level === 2) {
      groups.push({ item, children: [] })
    } else if (groups.length > 0) {
      groups[groups.length - 1].children.push(item)
    }
  }

  return (
    <div className="sticky top-[calc(theme(spacing.1)+theme(spacing.16))] order-last -mt-16 hidden w-56 flex-none overflow-y-auto py-16 xl:block [scrollbar-color:theme(colors.gray.100)_transparent] [scrollbar-width:thin] dark:[scrollbar-color:theme(colors.gray.800)_transparent] !max-h-[calc(100dvh-calc(theme(spacing.1)+theme(spacing.16)))]">
      <div className="relative">
        <ol aria-label="On this page" role="list" className="relative pl-9 text-sm/4 font-book text-gray-600 dark:text-gray-400 before:absolute before:inset-y-0 before:left-4 before:w-px before:bg-gray-200 dark:before:bg-gray-800">
          {groups.map((group, gi) => (
            <li key={group.item.id} className={`relative ${gi > 0 ? 'mt-3' : ''} group/item`}>
              <a
                href={`#${group.item.id}`}
                className={`block transition-colors hover:text-gray-950 dark:hover:text-white ${
                  activeId === group.item.id ? 'font-medium text-gray-950 dark:text-white' : ''
                }`}
              >
                {group.item.title}
              </a>

              {/* Sub-items with tree connector */}
              {group.children.length > 0 && (
                <ol role="list" className="relative mt-3 pl-4 before:absolute before:inset-y-0 before:-left-6 before:ml-px before:w-4 before:border-r before:border-gray-200 before:bg-white dark:before:border-gray-800 dark:before:bg-gray-950">
                  {group.children.map((child, ci) => (
                    <li key={child.id} className={`relative ${ci > 0 ? 'mt-3' : ''} group/subitem`}>
                      {/* First item: top connector SVG */}
                      {ci === 0 && (
                        <svg className="absolute -left-9 -top-3.5 size-4" viewBox="0 0 16 16" aria-hidden="true">
                          <rect width="16" height="16" className="fill-white dark:fill-gray-950" />
                          <path d="M 0.5 0 v 2 l 12 12 v 2" className="stroke-gray-200 dark:stroke-gray-800" fill="none" vectorEffect="non-scaling-stroke" />
                        </svg>
                      )}
                      {/* Last item: bottom connector SVG */}
                      {ci === group.children.length - 1 && (
                        <svg className="absolute -bottom-3.5 left-[-2.4375rem] size-4" viewBox="0 0 16 16" aria-hidden="true">
                          <rect width="16" height="16" className="fill-white dark:fill-gray-950" />
                          <path d="M 15.5 0 v 2 l -12 12 v 2" className="stroke-gray-200 dark:stroke-gray-800" fill="none" vectorEffect="non-scaling-stroke" />
                        </svg>
                      )}
                      <a
                        href={`#${child.id}`}
                        className={`block transition-colors hover:text-gray-950 dark:hover:text-white ${
                          activeId === child.id ? 'font-medium text-gray-950 dark:text-white' : ''
                        }`}
                      >
                        {child.title}
                      </a>
                    </li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ol>
      </div>

      {/* LLM links */}
      <div className="mt-6">
        <ul className="space-y-0.5">
          {llmLinks.map((link) => (
            <li key={link.label}>
              <button className="group/option relative flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-xs/4 font-book text-gray-900 transition-colors hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-900">
                <span className="size-4 flex-none" />
                {link.sublabel}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
