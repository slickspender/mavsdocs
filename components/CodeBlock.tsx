'use client'

import { useState } from 'react'

export default function CodeBlock({ children, filename }: { children: React.ReactNode; filename?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const text = typeof children === 'string' ? children : ''
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative mt-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
      {filename && (
        <div className="flex items-center border-b border-gray-200 bg-gray-50 px-4 py-2 text-xs font-medium text-gray-500 dark:border-gray-800 dark:bg-gray-900/50 dark:text-gray-400">
          {filename}
        </div>
      )}
      <div className="relative bg-gray-50 dark:bg-gray-900/50">
        <pre className="overflow-x-auto p-4 text-[0.8125rem] leading-6">
          <code className="font-mono text-gray-800 dark:text-gray-200">{children}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute right-2 top-2 flex size-8 items-center justify-center rounded-md bg-white/80 text-gray-400 opacity-0 shadow-sm ring-1 ring-gray-200 transition-opacity hover:text-gray-600 group-hover:opacity-100 dark:bg-gray-800/80 dark:ring-gray-700 dark:hover:text-gray-300"
          aria-label="Copy code"
        >
          {copied ? (
            <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          ) : (
            <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9.75a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
