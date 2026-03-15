'use client'

import { useEffect, useState } from 'react'

const providers = [
  {
    name: 'ChatGPT',
    buildUrl: (pageUrl: string, pageTitle: string) =>
      `https://chatgpt.com/?q=${encodeURIComponent(`Help me understand this documentation page: ${pageTitle}\n\n${pageUrl}`)}`,
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
      </svg>
    ),
  },
  {
    name: 'Claude',
    buildUrl: (pageUrl: string, pageTitle: string) =>
      `https://claude.ai/new?q=${encodeURIComponent(`Help me understand this documentation page: ${pageTitle}\n\n${pageUrl}`)}`,
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.709 15.955l4.72-2.756.08-.046 2.698-1.575c.262-.153.262-.536 0-.689L9.51 9.314l-.08-.047-4.72-2.756c-.263-.153-.59.038-.59.345v2.513c0 .188.1.361.263.454l2.944 1.718a.263.263 0 0 1 0 .454L4.382 13.713a.526.526 0 0 0-.263.454v2.443c0 .307.327.498.59.345z" />
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z" />
      </svg>
    ),
  },
  {
    name: 'Gemini',
    buildUrl: (pageUrl: string, pageTitle: string) =>
      `https://gemini.google.com/app?q=${encodeURIComponent(`Help me understand this documentation page: ${pageTitle}\n\n${pageUrl}`)}`,
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
      </svg>
    ),
  },
]

export default function OpenInLLM() {
  const [pageUrl, setPageUrl] = useState('')
  const [pageTitle, setPageTitle] = useState('')

  useEffect(() => {
    setPageUrl(window.location.href)
    setPageTitle(document.title)
  }, [])

  if (!pageUrl) return null

  return (
    <div className="mt-6 border-t border-gray-200/70 pt-4 dark:border-gray-800/60">
      <div className="mb-3 flex items-center gap-1.5">
        <svg className="size-4 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
        <span className="text-sm font-medium text-gray-900 dark:text-white">Open in</span>
      </div>

      <ul className="space-y-1.5">
        {providers.map((provider) => (
          <li key={provider.name}>
            <a
              href={provider.buildUrl(pageUrl, pageTitle)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open in ${provider.name}`}
              className="flex items-center gap-2 text-[0.8125rem] leading-snug text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300"
            >
              {provider.icon}
              {provider.name}
              <svg className="ml-auto size-3 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
