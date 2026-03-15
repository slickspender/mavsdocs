'use client'

import { useState } from 'react'
import InlineCode from './InlineCode'
import CodeBlock from './CodeBlock'

export default function DocContent() {
  return (
    <article className="min-w-0 flex-1 py-8">
      <div className="mx-auto max-w-[44rem] px-6 lg:px-0">
        {/* Title */}
        <h1 className="text-pretty text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
          Caching Dependencies with Sticky Disks
        </h1>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-gray-500 dark:text-gray-400">
          Speed up your CI/CD pipelines by persisting dependency caches across builds using sticky disks.
        </p>

        {/* Content */}
        <div className="typography mt-8">
          {/* Warning callout */}
          <div className="callout callout-warning">
            <strong>Beta</strong> &mdash; The <InlineCode>useblacksmith/stickydisk</InlineCode> action is currently in beta. If you encounter any issues, please contact support.
          </div>

          {/* Overview */}
          <h2 id="overview">
            <a href="#overview">Overview</a>
          </h2>
          <p>
            Sticky Disks allow you to persist directories across workflow runs, significantly reducing
            build times by caching dependencies, build artifacts, and other reusable data. Unlike
            traditional caching solutions, Sticky Disks provide <strong>near-instant restoration</strong> with
            no upload or download overhead.
          </p>

          {/* Basics */}
          <h2 id="basics">
            <a href="#basics">Basics</a>
          </h2>
          <p>
            To use a Sticky Disk, add the <InlineCode>useblacksmith/stickydisk</InlineCode> action to your
            workflow file. The action takes a <InlineCode>key</InlineCode> parameter that uniquely identifies
            the disk, and a <InlineCode>path</InlineCode> parameter specifying which directory to persist.
          </p>

          <CodeBlock filename=".github/workflows/ci.yml">{`name: CI
on: [push, pull_request]

jobs:
  build:
    runs-on: blacksmith
    steps:
      - uses: actions/checkout@v4

      - name: Cache node_modules
        uses: useblacksmith/stickydisk@v1
        with:
          key: node-modules-\${{ hashFiles('package-lock.json') }}
          path: node_modules

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test`}</CodeBlock>

          {/* Info callout */}
          <div className="callout callout-info">
            Sticky Disks are automatically garbage collected after 7 days of inactivity. You can configure this retention period in your workspace settings.
          </div>

          {/* Cache Performance Comparison */}
          <h2 id="cache-performance">
            <a href="#cache-performance">Cache Performance Comparison</a>
          </h2>
          <p>
            Sticky Disks provide significantly faster cache restoration compared to traditional approaches:
          </p>

          {/* Comparison table */}
          <div className="mt-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50">
                  <th className="px-4 py-3 font-semibold text-gray-900 dark:text-white">Method</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 dark:text-white">Restore Time</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 dark:text-white">Save Time</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 dark:text-gray-400">
                <tr className="border-b border-gray-100 dark:border-gray-800/60">
                  <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">Sticky Disks</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">&lt; 1s</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">0s</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800/60">
                  <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">actions/cache</td>
                  <td className="px-4 py-3">30-60s</td>
                  <td className="px-4 py-3">30-60s</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">No Cache</td>
                  <td className="px-4 py-3">N/A</td>
                  <td className="px-4 py-3">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Use Cases */}
          <h2 id="use-cases">
            <a href="#use-cases">Use Cases</a>
          </h2>

          <h3 id="npm-caching">
            <a href="#npm-caching">NPM Package Caching</a>
          </h3>
          <p>
            Cache your <InlineCode>node_modules</InlineCode> directory to avoid re-downloading packages
            on every build. Use the <InlineCode>package-lock.json</InlineCode> hash as the cache key to
            automatically invalidate when dependencies change.
          </p>

          <h3 id="bazel-caching">
            <a href="#bazel-caching">Bazel Build Caching</a>
          </h3>
          <p>
            For Bazel builds, use the dedicated{' '}
            <a href="https://github.com/useblacksmith/setup-bazel">useblacksmith/setup-bazel</a>{' '}
            action which automatically configures Sticky Disks for the Bazel output base and repository cache.
          </p>

          <CodeBlock filename=".github/workflows/bazel.yml">{`jobs:
  build:
    runs-on: blacksmith
    steps:
      - uses: actions/checkout@v4
      - uses: useblacksmith/setup-bazel@v1
      - run: bazel build //...`}</CodeBlock>

          {/* Availability */}
          <h2 id="availability">
            <a href="#availability">Availability</a>
          </h2>

          <div className="callout callout-note">
            Sticky Disks for the <InlineCode>eu-west</InlineCode> region are coming soon.
          </div>

          <div className="mt-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50">
                  <th className="px-4 py-3 font-semibold text-gray-900 dark:text-white">Region</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 dark:text-white">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 dark:text-gray-400">
                <tr className="border-b border-gray-100 dark:border-gray-800/60">
                  <td className="px-4 py-3">us-east-1</td>
                  <td className="px-4 py-3">Available</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800/60">
                  <td className="px-4 py-3">us-west-2</td>
                  <td className="px-4 py-3">Available</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">eu-west-1</td>
                  <td className="px-4 py-3">Coming Soon</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* FAQ */}
          <h2 id="faq">
            <a href="#faq">FAQ</a>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-4 space-y-2">
          <AccordionItem
            question="How much storage does each Sticky Disk get?"
            answer="Each Sticky Disk gets up to 50 GB of storage by default. Contact support if you need more."
          />
          <AccordionItem
            question="Can I use Sticky Disks with self-hosted runners?"
            answer="Sticky Disks are currently only available on Blacksmith-managed runners. Self-hosted runner support is on the roadmap."
          />
          <AccordionItem
            question="What happens when my cache key changes?"
            answer="When the cache key changes, a new Sticky Disk is created. The old disk will be garbage collected after the retention period expires (default: 7 days)."
          />
        </div>

        {/* Feedback Widget */}
        <div className="mt-20">
          <FeedbackWidget />
        </div>

        {/* Last updated */}
        <div className="mt-12 flex flex-col justify-between gap-4 md:flex-row md:items-center md:gap-2 lg:mt-16">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Last updated on{' '}
            <time dateTime="2026-03-10T20:55:33.000Z">Mar 10, 2026</time>
          </p>
          <a
            href="#"
            className="flex items-center gap-1.5 text-xs text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Edit on GitHub
          </a>
        </div>
      </div>
    </article>
  )
}

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-800">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800/50"
      >
        {question}
        <svg
          className={`size-4 flex-none text-gray-400 transition-transform dark:text-gray-500 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="border-t border-gray-200 px-4 py-3 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400">
          {answer}
        </div>
      )}
    </div>
  )
}

function FeedbackWidget() {
  return (
    <div>
      <span className="block text-sm font-medium text-gray-900 dark:text-white">
        Was this page helpful?
      </span>
      <div className="mt-3 flex flex-wrap gap-2">
        <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-1.5 text-xs text-gray-600 transition-colors hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 dark:border-gray-700 dark:text-gray-400 dark:hover:border-emerald-800 dark:hover:bg-emerald-900/20 dark:hover:text-emerald-400">
          <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V3a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904M14.25 9h2.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
          </svg>
          Yes
        </button>
        <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-1.5 text-xs text-gray-600 transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-700 dark:border-gray-700 dark:text-gray-400 dark:hover:border-red-800 dark:hover:bg-red-900/20 dark:hover:text-red-400">
          <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715A12.137 12.137 0 0 1 2.25 12c0-2.848.992-5.464 2.649-7.521C5.287 3.997 5.886 3.75 6.504 3.75h4.369a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7M7.498 15.25c-.483 0-.964-.078-1.423-.23" />
          </svg>
          No
        </button>
      </div>
    </div>
  )
}
