'use client'

import { useState } from 'react'

export default function DocContent() {
  return (
    <article className="min-w-0 flex-1 py-8 relative">
      <div className="mx-auto max-w-[50rem] px-6 lg:px-0">
        
        {/* Breadcrumb - Over-title */}
        <div className="mb-3">
          <span className="text-sm font-bold text-olive-500">2x Faster Runners</span>
        </div>

        {/* Title row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Instance Types
          </h1>
          <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-50 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm transition-colors hover:bg-gray-50 dark:hover:bg-white/5">
            <svg className="size-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 12 6.75m0 0v-1.5m0 0A3.375 3.375 0 0 0 8.625 1.875M12 3.375V6.75" />
            </svg>
            Copy page
            <svg className="size-3.5 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </div>

        <p className="text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-10">
          Blacksmith runners are 2x faster and costs 75% less than GitHub-hosted runners
        </p>

        {/* Diff Example Block */}
        <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-50 shadow-sm mb-16">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/5 bg-[#f9f9f9] dark:bg-dark-100 px-5 py-3">
            <div className="flex items-center gap-3 text-sm font-semibold text-gray-600 dark:text-gray-400">
              <span className="font-mono text-xs tracking-tighter text-gray-400 dark:text-gray-500">&lt;/&gt;</span>
              Diff Example
            </div>
            <div className="flex items-center gap-4 text-gray-400 dark:text-gray-500">
              <button aria-label="Copy code" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 12 6.75m0 0v-1.5m0 0A3.375 3.375 0 0 0 8.625 1.875M12 3.375V6.75" />
                </svg>
              </button>
              <button aria-label="Wand edit" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Code */}
          <div className="font-mono text-[15px] sm:text-[16px] leading-loose py-3">
            <div className="flex px-5 py-1 text-[#5c6b89] dark:text-[#8b949e]">
              <span className="w-8 select-none text-right opacity-50 mr-4">1</span>
              <span><span className="text-[#3b82f6]">jobs</span>:</span>
            </div>
            <div className="flex px-5 py-1 text-[#5c6b89] dark:text-[#8b949e]">
              <span className="w-8 select-none text-right opacity-50 mr-4">2</span>
              <span>  <span className="text-[#3b82f6]">build</span>:</span>
            </div>
            <div className="flex px-5 py-1 bg-[#fee2e2]/40 dark:bg-[#7f1d1d]/20 text-[#b91c1c] dark:text-[#fca5a5]">
              <span className="w-8 select-none text-center opacity-70 mr-4">-</span>
              <span>    <span className="text-[#3b82f6]">runs-on</span>: <span className="text-[#7c3aed] dark:text-[#c084fc]">ubuntu-latest</span></span>
            </div>
            <div className="flex px-5 py-1 bg-[#dcfce7]/40 dark:bg-[#14532d]/20 text-[#15803d] dark:text-[#86efac]">
              <span className="w-8 select-none text-center opacity-70 mr-4">+</span>
              <span className="font-medium">    <span className="text-[#3b82f6]">runs-on</span>: <span className="text-[#15803d]">blacksmith-2vcpu-ubuntu-2404</span></span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="typography">
          <h2 id="overview" className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-12 scroll-mt-24">
            Overview
          </h2>
          <ul className="mb-6 ml-0 mt-4 space-y-5 list-disc pl-6">
            <li className="text-[16px] sm:text-[17px] leading-relaxed text-gray-600 dark:text-gray-400">
              <strong className="text-gray-900 dark:text-gray-100 font-semibold">We're substantially faster:</strong> We orchestrate jobs over our fleet of modern gaming CPUs
              which have significantly higher single-thread performance compared to their server
              counterparts. Blacksmith is twice as fast as GitHub's decade-old server hardware for most
              CI jobs. Learn more about our runners <a href="#" className="font-semibold underline decoration-2 underline-offset-2">here</a>.
            </li>
            <li className="text-[16px] sm:text-[17px] leading-relaxed text-gray-600 dark:text-gray-400">
              <strong className="text-gray-900 dark:text-gray-100 font-semibold">We're able to provision runners instantly:</strong> Blacksmith runs jobs in ephemeral Firecracker
              microVMs that boot in milliseconds...
            </li>
          </ul>
        </div>
      </div>

      {/* Floating Ask bar at bottom */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-[40rem] z-50 px-6 sm:px-0">
        <div className="relative flex items-center bg-white dark:bg-dark-50 shadow-lg rounded-xl border border-gray-200 dark:border-white/10 p-2 pr-3">
          <input 
            type="text" 
            placeholder="Ask a question..."
            className="flex-1 bg-transparent px-3 py-2 text-[15px] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none focus:ring-0 rounded-l-lg border-none"
          />
          <div className="flex items-center gap-2">
            <kbd className="hidden sm:flex items-center justify-center font-sans text-xs font-semibold text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-dark-100 border border-gray-200 dark:border-white/10 rounded px-1.5 py-0.5 h-[22px]">
              ⌘I
            </kbd>
            <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-200/80 dark:bg-gray-700 text-white transition-colors hover:bg-gray-300 dark:hover:bg-gray-600">
              <svg className="size-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

