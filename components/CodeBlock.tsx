export default function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-[0.9375rem]/7 text-gray-600 dark:text-gray-400">
      <code className="whitespace-nowrap">{children}</code>
    </p>
  )
}
