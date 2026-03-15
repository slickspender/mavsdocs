'use client'

import { useState } from 'react'

// Top-level flat nav items (no section grouping)
const topLinks: any[] = []

// Grouped sections
const sections = [
  {
    title: 'Getting Started',
    children: [
      { title: 'Welcome', icon: 'document', href: '#' },
      { title: 'Quickstart', icon: 'play', href: '#' },
    ],
  },
  {
    title: 'Performance',
    children: [
      { title: 'Instance Types', icon: 'server', href: '#' },
      { title: 'Static IP', icon: 'globe', href: '#' },
      { title: '40x Faster Docker Builds', icon: 'lightning', href: '#' },
      { title: 'Container Caching (Beta)', icon: 'container', href: '#' },
      { title: 'Docker Pulls', icon: 'docker', href: '#' },
      { title: 'Git Checkout Caching (Beta)', icon: 'git', href: '#' },
    ],
  },
  {
    title: 'Testboxes',
    children: [
      { title: 'Testboxes (Beta)', icon: 'box', href: '#' },
      { title: 'CLI Reference', icon: 'terminal', href: '#' },
    ],
  },
  {
    title: 'Observability',
    children: [
      { title: 'Run History', icon: 'clock', href: '#' },
      { title: 'Logs', icon: 'document-text', href: '#' },
      { title: 'SSH Access', icon: 'terminal', href: '#' },
      { title: 'Monitors', icon: 'monitor', href: '#' },
      { title: 'Metrics', icon: 'chart-bar', href: '#' },
      { title: 'Test Analytics', icon: 'beaker', href: '#' },
      { title: 'CI Analytics', icon: 'chart-line', href: '#' },
    ],
  },
  {
    title: 'Administration',
    children: [
      { title: 'Permissions', icon: 'shield-check', href: '#' },
      { title: 'Network & IP Allowlisting', icon: 'globe', href: '#' },
    ],
  },
  {
    title: 'FAQ',
    children: [
      { title: 'Settings', icon: 'gear', href: '#' },
      { title: 'Terms of Service', icon: 'document-text', href: '#' },
      { title: 'Privacy Policy', icon: 'lock-closed', href: '#' },
    ],
  },
]

function NavIcon({ icon, className }: { icon: string; className?: string }) {
  const cls = className || 'size-4'
  switch (icon) {
    case 'bar-chart':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      )
    case 'folder':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
        </svg>
      )
    case 'lock':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
      )
    case 's-badge':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33" />
        </svg>
      )
    case 'monitor':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Z" />
        </svg>
      )
    case 'document':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
      )
    case 'play':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
        </svg>
      )
    case 'refresh':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182M2.985 19.644l3.181-3.182" />
        </svg>
      )
    case 'download':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
      )
    case 'gear':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      )
    case 'disk':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      )
    case 'lightning':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>
      )
    case 'container':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      )
    case 'docker':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
        </svg>
      )
    default:
      return null
  }
}

export default function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    '2x Faster Runners': false,
    '4x Faster Cache': true,
  })

  const toggleExpand = (title: string) => {
    setExpandedItems(prev => ({ ...prev, [title]: !prev[title] }))
  }

  return (
    <nav
      className="sidebar-scroll fixed bottom-0 left-0 top-24 z-[100] hidden w-64 overflow-y-auto border-r border-sage-border bg-sage-background lg:block"
    >
      <div className="px-4 pb-8 pt-4">
        {/* Top flat links */}
        <div className="space-y-0.5 mb-6">
          {topLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[13px] font-medium text-gray-600 transition-colors hover:bg-black/5 hover:text-gray-900"
            >
              <NavIcon icon={link.icon} className="size-4 flex-none text-gray-400" />
              {link.title}
            </a>
          ))}
        </div>

        {/* Sections */}
        {sections.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="mb-1.5 px-2.5 text-xs font-bold text-gray-900 tracking-wide">
              {section.title}
            </h3>
            <div className="space-y-0.5">
              {section.children.map((item: any) => {
                const isActive = item.title === 'Instance Types';
                
                return (
                <div key={item.title}>
                  {item.expandable ? (
                    <>
                      <button
                        onClick={() => toggleExpand(item.title)}
                        className={`flex w-full items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[13px] transition-colors ${
                          isActive ? 'bg-sage-active font-semibold text-gray-900' : 'font-medium text-gray-600 hover:bg-black/5 hover:text-gray-900'
                        }`}
                      >
                        <NavIcon icon={item.icon} className={`size-4 flex-none ${isActive ? 'text-olive-500' : 'text-gray-400'}`} />
                        <span className="flex-1 text-left">{item.title}</span>
                        <svg
                          className={`size-3 flex-none text-gray-400 transition-transform ${expandedItems[item.title] ? 'rotate-90' : ''}`}
                          fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </button>
                      {expandedItems[item.title] && item.children && (
                        <div className="space-y-0.5 pl-4 mt-0.5">
                          {item.children.map((child: any) => (
                            <a
                              key={child.title}
                              href={child.href}
                              className={`flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[13px] transition-colors ${
                                child.active
                                  ? 'bg-sage-active font-semibold text-gray-900'
                                  : 'font-medium text-gray-600 hover:bg-black/5 hover:text-gray-900'
                              }`}
                            >
                              <NavIcon icon={child.icon} className={`size-4 flex-none ${child.active ? 'text-olive-500' : 'text-gray-400'}`} />
                              {child.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className={`flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[13px] transition-colors ${
                        isActive ? 'bg-sage-active font-semibold text-gray-900' : 'font-medium text-gray-600 hover:bg-black/5 hover:text-gray-900'
                      }`}
                    >
                      <NavIcon icon={item.icon} className={`size-4 flex-none ${isActive ? 'text-olive-500' : 'text-gray-400'}`} />
                      {item.title}
                    </a>
                  )}
                </div>
              )})}
            </div>
          </div>
        ))}
      </div>
    </nav>
  )
}
