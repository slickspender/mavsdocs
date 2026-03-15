'use client'

import { useEffect, useState } from 'react'

const providers = [
  {
    name: 'ChatGPT',
    buildUrl: (pageUrl: string, pageTitle: string) =>
      `https://chatgpt.com/?q=${encodeURIComponent(`Help me understand this documentation page: ${pageTitle}\n\n${pageUrl}`)}`,
    icon: (
      <svg className="size-3.5 flex-none" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
      </svg>
    ),
  },
  {
    name: 'Claude',
    buildUrl: (pageUrl: string, pageTitle: string) =>
      `https://claude.ai/new?q=${encodeURIComponent(`Help me understand this documentation page: ${pageTitle}\n\n${pageUrl}`)}`,
    icon: (
      <svg className="size-3.5 flex-none" viewBox="0 0 24 24" fill="currentColor">
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
      <svg className="size-3.5 flex-none" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
      </svg>
    ),
  },
  {
    name: 'Perplexity',
    buildUrl: (pageUrl: string, pageTitle: string) =>
      `https://www.perplexity.ai/search?q=${encodeURIComponent(`Help me understand this documentation page: ${pageTitle}\n\n${pageUrl}`)}`,
    icon: (
      <svg className="size-3.5 flex-none" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.94 0v6.41L3.43 2.56V7.6L0 10.54v3.2l3.43 2.77v4.93l4.51-3.85V24h1.32V14.03L3.85 9.5V7.78l4.09 3.49V0zm8.12 0v11.27l4.09-3.5v1.73l-5.41 4.53V24h1.32v-6.55l4.51 3.85v-4.93L24 13.74v-3.2l-3.43-2.94V2.56l-4.51 3.85zm5.37 10.64l-4.69 3.93v-2.13l4.69-4.01zm-18.86 0v-2.21l4.69 4.01v2.13zM8.88 7.27l3.08 2.63 3.08-2.63v2.36L12 12.45l-3.12-2.82z" />
      </svg>
    ),
  },
  {
    name: 'Grok',
    buildUrl: (pageUrl: string, pageTitle: string) =>
      `https://grok.com/?q=${encodeURIComponent(`Help me understand this documentation page: ${pageTitle}\n\n${pageUrl}`)}`,
    icon: (
      <svg className="size-3.5 flex-none" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.04 3.51h4.08l5.88 8.24-5.88 8.74H2.04l5.88-8.74zm7.14 0h4.08l8.7 12.98v4.0h-4.08V16.5L9.18 3.51zM17.88 3.51h4.08v4.0h-4.08z" />
      </svg>
    ),
  },
  {
    name: 'DeepSeek',
    buildUrl: (pageUrl: string, pageTitle: string) =>
      `https://chat.deepseek.com/?q=${encodeURIComponent(`Help me understand this documentation page: ${pageTitle}\n\n${pageUrl}`)}`,
    icon: (
      <svg className="size-3.5 flex-none" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.61 4.02c.19.06.37.14.55.23a7.67 7.67 0 0 1 3.34 3.39c.44.9.66 1.86.68 2.86.01.55-.05 1.1-.17 1.64-.24 1.05-.7 1.99-1.36 2.82-.53.67-1.15 1.24-1.85 1.72-.46.32-.95.58-1.47.78a6.65 6.65 0 0 1-2.45.49c-.73 0-1.43-.13-2.1-.4a5.82 5.82 0 0 1-1.75-1.06 6.27 6.27 0 0 1-1.35-1.75A5.87 5.87 0 0 1 4.1 12.4c-.03-.58.02-1.15.15-1.72.21-.93.6-1.78 1.15-2.54.48-.66 1.05-1.22 1.7-1.69a6.97 6.97 0 0 1 2.29-1.14c.54-.17 1.1-.27 1.66-.31.55-.04 1.1 0 1.56.02zm-.29 1.33c-.39-.05-.79-.04-1.18.01-.59.07-1.15.24-1.68.5a5.7 5.7 0 0 0-2.3 2.01c-.47.72-.76 1.51-.87 2.36-.07.52-.06 1.04.03 1.55.15.86.49 1.63 1.01 2.31a5.1 5.1 0 0 0 2.12 1.7c.62.26 1.27.38 1.95.36a5.28 5.28 0 0 0 2.49-.77c.69-.44 1.27-.99 1.73-1.65.48-.68.8-1.43.96-2.24.1-.53.13-1.07.08-1.61a5.1 5.1 0 0 0-.63-2.05 5.58 5.58 0 0 0-1.72-1.88c-.6-.39-1.25-.54-2.01-.6zM12.3 21.6c-2.72.15-5.06-.74-6.98-2.67a.42.42 0 0 1-.12-.2c-.01-.06.03-.08.08-.05.28.15.56.29.86.41.89.37 1.82.57 2.78.61a8.58 8.58 0 0 0 3.49-.6c.93-.39 1.75-.93 2.47-1.62.77-.74 1.37-1.59 1.81-2.55.39-.85.61-1.74.68-2.66.08-1.07-.06-2.11-.42-3.13-.31-.87-.75-1.67-1.33-2.38-.06-.08-.06-.12.03-.15.56-.21 1.14-.32 1.74-.33.07 0 .1.03.13.09a8.1 8.1 0 0 1 .98 3.3c.06.74.03 1.47-.09 2.2a9.07 9.07 0 0 1-1.32 3.42 8.9 8.9 0 0 1-2.55 2.69c-.71.49-1.48.85-2.24 1.62z" />
      </svg>
    ),
  },
  {
    name: 'Mistral',
    buildUrl: (pageUrl: string, pageTitle: string) =>
      `https://chat.mistral.ai/chat?q=${encodeURIComponent(`Help me understand this documentation page: ${pageTitle}\n\n${pageUrl}`)}`,
    icon: (
      <svg className="size-3.5 flex-none" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h4.5v4.5H3zm13.5 0H21v4.5h-4.5zM3 7.5h4.5V12H3zm4.5 0H12V12H7.5zm4.5 0h4.5V12H12zm4.5 0H21V12h-4.5zM3 12h4.5v4.5H3zm9 0h4.5v4.5H12zM3 16.5h4.5V21H3zm4.5 0H12V21H7.5zm4.5 0h4.5V21H12zm4.5 0H21V21h-4.5z" />
      </svg>
    ),
  },
  {
    name: 'Copilot',
    buildUrl: (pageUrl: string, pageTitle: string) =>
      `https://copilot.microsoft.com/?q=${encodeURIComponent(`Help me understand this documentation page: ${pageTitle}\n\n${pageUrl}`)}`,
    icon: (
      <svg className="size-3.5 flex-none" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.96 2.28c-3.15 0-6.38 2.04-7.78 5.12C1.82 8.52.62 11.1 1.5 13.42c.88 2.32 3.3 3.6 5.6 3.06.14-.04.28-.08.42-.14L12 14.28l4.48 2.06c.14.06.28.1.42.14 2.3.54 4.72-.74 5.6-3.06.88-2.32-.32-4.9-2.68-6.02-1.4-3.08-4.63-5.12-7.78-5.12h-.08zm0 2.22c2.42 0 4.92 1.52 6.12 3.86l.24.48-.48.22-4.76 2.18H10.9L6.12 9.06l-.48-.22.24-.48C7.08 6.02 9.54 4.5 11.96 4.5zM5.64 9.94l3.84 1.76v4.08l-3.6-1.66c-.1-.04-.2-.08-.32-.1-1.36-.34-2.32-1.54-2.32-2.94 0-.56.16-1.1.46-1.56.48.1 1.22.18 1.94.22v.2zm12.72 0c.72-.04 1.46-.12 1.94-.22.3.46.46 1 .46 1.56 0 1.4-.96 2.6-2.32 2.94-.12.02-.22.06-.32.1l-3.6 1.66v-4.08l3.84-1.76v-.2z" />
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

      <div className="grid grid-cols-2 gap-1.5">
        {providers.map((provider) => (
          <a
            key={provider.name}
            href={provider.buildUrl(pageUrl, pageTitle)}
            target="_blank"
            rel="noopener noreferrer"
            title={provider.name}
            className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[0.75rem] leading-tight text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            {provider.icon}
            <span className="truncate">{provider.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
