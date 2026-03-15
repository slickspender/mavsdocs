import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import DocContent from '@/components/DocContent'
import TableOfContents from '@/components/TableOfContents'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-sage-background">
      <Navbar />
      <Sidebar />
      <div className="pointer-events-none relative flex w-full flex-col px-6 lg:pl-[calc(theme(width.64)+theme(padding.8))] lg:pr-12">
        <main className="pointer-events-auto flex w-full max-w-[48rem] flex-wrap items-start justify-between gap-10 pt-[calc(theme(spacing.24)+theme(spacing.8))] xl:max-w-[80rem]" id="main">
          <DocContent />
          <TableOfContents />
        </main>
        <Footer />
      </div>
    </div>
  )
}
