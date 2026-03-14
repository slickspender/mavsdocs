import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import DocContent from '@/components/DocContent'
import TableOfContents from '@/components/TableOfContents'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <Sidebar />
      <div className="pointer-events-none relative flex w-full flex-col px-6 lg:pl-[calc(theme(width.72)+theme(padding.6))] lg:pr-7">
        <main className="pointer-events-auto mx-auto flex w-full max-w-[43.5rem] flex-wrap items-start justify-between pt-[calc(theme(spacing.1)+theme(spacing.32))] xl:max-w-5xl" id="main">
          <DocContent />
          <TableOfContents />
        </main>
        <Footer />
      </div>
    </div>
  )
}
