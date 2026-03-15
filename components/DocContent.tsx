'use client'

import { useState } from 'react'
import InlineCode from './InlineCode'
import CodeBlock from './CodeBlock'

export default function DocContent() {
  return (
    <article className="min-w-0 flex-1 py-8">
      <div className="mx-auto max-w-[44rem] px-6 lg:px-0">
        {/* Title */}
        <h1 className="text-pretty text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Sticky Disks
        </h1>
        <p className="mt-3 text-base leading-relaxed text-gray-500 dark:text-gray-400">
          Speed up your CI/CD pipelines by persisting dependency caches across builds using sticky disks.
        </p>

        {/* Content */}
        <div className="typography mt-8">
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

          <CodeBlock>{`name: CI
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
                  <td className="px-4 py-3">&lt; 1s</td>
                  <td className="px-4 py-3">0s</td>
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

          <CodeBlock>{`jobs:
  build:
    runs-on: blacksmith
    steps:
      - uses: actions/checkout@v4
      - uses: useblacksmith/setup-bazel@v1
      - run: bazel build //...`}</CodeBlock>

          {/* How it works */}
          <h2 id="how-it-works">
            <a href="#how-it-works">How it works</a>
          </h2>
          <p>
            When a workflow uses a Sticky Disk, the specified directory is mounted from a persistent
            volume that survives across workflow runs. On the first run, the directory is empty and your
            workflow populates it normally. On subsequent runs, the data is already present — no download needed.
          </p>

          {/* Using inside container */}
          <h2 id="using-inside-container">
            <a href="#using-inside-container">Using Sticky Disks inside a container</a>
          </h2>
          <p>
            Sticky Disks can be used inside containers by mounting the persistent volume into the container
            filesystem. Add the <InlineCode>container</InlineCode> key to your job configuration.
          </p>

          {/* stickydisk-delete */}
          <h2 id="stickydisk-delete">
            <a href="#stickydisk-delete">useblacksmith/stickydisk-delete</a>
          </h2>
          <p>
            Use the <InlineCode>useblacksmith/stickydisk-delete</InlineCode> action to programmatically
            delete sticky disks when they are no longer needed.
          </p>

          <h3 id="delete-by-key">
            <a href="#delete-by-key">Delete by Key</a>
          </h3>
          <p>
            Delete a specific sticky disk by providing its cache key.
          </p>

          <h3 id="delete-docker-cache">
            <a href="#delete-docker-cache">Delete Docker Cache</a>
          </h3>
          <p>
            Delete Docker layer caches associated with a build.
          </p>

          {/* Cleanup example */}
          <h2 id="cleanup-example">
            <a href="#cleanup-example">Example: Cleanup After Build</a>
          </h2>

          <CodeBlock>{`cleanup:
    needs: build
    if: always()
    steps:
      - name: Delete sticky disk
        uses: useblacksmith/stickydisk-delete@v1
        with:
          delete-key: deps-cache`}</CodeBlock>

          {/* Availability */}
          <h2 id="availability">
            <a href="#availability">Availability</a>
          </h2>
          <p>
            Sticky disks are available in the following regions:
          </p>

          <div className="mt-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50">
                  <th className="px-4 py-3 font-semibold text-gray-900 dark:text-white">Region</th>
                  <th className="px-4 py-3 font-semibold text-gray-900 dark:text-white">Sticky Disks</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 dark:text-gray-400">
                <tr className="border-b border-gray-100 dark:border-gray-800/60">
                  <td className="px-4 py-3">us-west</td>
                  <td className="px-4 py-3">&#x2705; Available</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-800/60">
                  <td className="px-4 py-3">eu-central</td>
                  <td className="px-4 py-3">&#x2705; Available</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">eu-west</td>
                  <td className="px-4 py-3">&#x1F51C; Coming soon</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Blue info callout */}
          <div className="callout callout-info mt-4">
            <div className="flex items-start gap-2.5">
              <svg className="mt-0.5 size-4 flex-none" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clipRule="evenodd" />
              </svg>
              <span>
                Sticky disk support in <InlineCode>eu-west</InlineCode> is coming soon.
                If your organization is in <InlineCode>eu-west</InlineCode> and you&apos;d like to use
                sticky disks now, <a href="#" className="font-medium underline">contact support</a> to
                request moving to a region that supports them.
              </span>
            </div>
          </div>

          {/* Pricing */}
          <h2 id="pricing">
            <a href="#pricing">Pricing</a>
          </h2>
          <p>
            Sticky Disks are included in your Blacksmith plan. Storage is billed based on peak usage
            per billing cycle.
          </p>

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

        {/* Ask a question input */}
        <div className="mt-8">
          <div className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2.5 dark:border-gray-700 dark:bg-gray-800/50">
            <input
              type="text"
              placeholder="Ask a question..."
              className="flex-1 bg-transparent text-sm text-gray-500 outline-none placeholder:text-gray-400 dark:text-gray-400 dark:placeholder:text-gray-500"
              readOnly
            />
            <kbd className="ml-2 rounded border border-gray-200 bg-gray-50 px-1.5 py-0.5 font-mono text-[0.625rem] font-medium text-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-500">
              ⌘I
            </kbd>
            <button className="ml-2 flex size-7 items-center justify-center rounded-full bg-emerald-500 text-white transition-colors hover:bg-emerald-600">
              <svg className="size-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
              </svg>
            </button>
          </div>
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
