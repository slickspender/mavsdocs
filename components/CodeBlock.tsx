export default function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 overflow-hidden rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50">
      <pre className="overflow-x-auto p-4 text-[0.8125rem] leading-6">
        <code className="font-mono text-gray-800 dark:text-gray-200">{children}</code>
      </pre>
    </div>
  )
}
