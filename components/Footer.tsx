const footerSections = [
  {
    title: 'Product',
    links: [
      { label: 'Authentication', href: '#' },
      { label: 'B2B Authentication', href: '#' },
      { label: 'Billing', href: '#' },
    ],
  },
  {
    title: 'SDKs',
    links: [
      { label: 'React', href: '#' },
      { label: 'Next.js', href: '#' },
      { label: 'Expo', href: '#' },
      { label: 'View all', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'Glossary', href: '#' },
      { label: 'Feature requests', href: '#' },
      { label: 'Startups', href: '#' },
      { label: 'LLM Leaderboard', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Brand assets', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms and conditions', href: '#' },
      { label: 'Terms of engagement', href: '#' },
      { label: 'Privacy policy', href: '#' },
      { label: 'Data processing agreement', href: '#' },
      { label: 'Do not sell/share my info', href: '#' },
      { label: 'Cookie manager', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="pointer-events-auto mt-auto pb-24 xl:ml-[max(0px,calc((100%-64rem)/2))]">
      <div className="mx-auto max-w-[43.5rem] border-t border-gray-600/10 pt-16 dark:border-gray-900 xl:mx-0 xl:max-w-5xl">
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 text-sm/4 sm:grid-cols-3 xl:grid-cols-6">
          {/* Clerk logo column */}
          <div className="col-span-full xl:col-auto">
            <a href="#" className="block w-fit">
              <svg viewBox="0 0 62 18" fill="none" aria-hidden="true" className="h-[1.125rem] text-gray-950 dark:text-white">
                <ellipse cx="8.99999" cy="9" rx="2.81249" ry="2.8125" className="fill-current" />
                <path d="M14.0674 15.6591C14.3067 15.8984 14.2827 16.2945 14.0015 16.4829C12.571 17.4411 10.8504 17.9999 8.9993 17.9999C7.14818 17.9999 5.42758 17.4411 3.99704 16.4829C3.71589 16.2945 3.69186 15.8984 3.93115 15.6591L5.98648 13.6037C6.17225 13.418 6.46042 13.3886 6.69424 13.5084C7.3856 13.8626 8.16911 14.062 8.99978 14.062C9.83045 14.062 10.614 13.8626 11.3053 13.5084L11.3068 13.5076C11.5404 13.3882 11.828 13.4176 12.0136 13.603L14.0674 15.6591Z" className="fill-current" />
                <path d="M14.0674 2.34161C14.3067 2.10232 14.2827 1.70618 14.0015 1.51781C12.571 0.559587 10.8504 0.000732422 8.9993 0.000732422C7.14818 0.000732422 5.42758 0.559587 3.99704 1.51781C3.71589 1.70618 3.69186 2.10232 3.93115 2.34161L5.98648 4.39694C6.17225 4.58271 6.46042 4.61213 6.69424 4.49229C7.3856 4.13811 8.16911 3.93873 8.99978 3.93873C9.83045 3.93873 10.614 4.13811 11.3053 4.49229L11.3068 4.49307C11.5404 4.61248 11.828 4.58306 12.0136 4.3977L14.0674 2.34161Z" className="fill-current" />
                <path d="M24.5564 13.5286C23.4564 13.5286 22.5164 13.2586 21.7364 12.7186C20.9564 12.1786 20.3964 11.4386 20.0564 10.4986L21.7964 9.55859C22.0164 10.1786 22.3664 10.6686 22.8464 11.0286C23.3264 11.3886 23.8964 11.5686 24.5564 11.5686C25.2364 11.5686 25.7864 11.3886 26.2064 11.0286C26.6264 10.6586 26.8364 10.1986 26.8364 9.64859V8.24859C26.4764 8.75859 26.0064 9.14859 25.4264 9.41859C24.8464 9.68859 24.2164 9.82859 23.5364 9.82859C22.7164 9.82859 21.9664 9.62859 21.2864 9.22859C20.6064 8.81859 20.0664 8.25859 19.6664 7.54859C19.2664 6.83859 19.0664 6.04859 19.0664 5.17859C19.0664 4.30859 19.2664 3.52859 19.6664 2.83859C20.0664 2.13859 20.6064 1.58859 21.2864 1.18859C21.9664 0.778594 22.7164 0.578594 23.5364 0.578594C24.2164 0.578594 24.8464 0.718594 25.4264 0.988594C26.0064 1.25859 26.4764 1.64859 26.8364 2.15859V0.758594H28.8564V9.64859C28.8564 10.4386 28.6564 11.1386 28.2564 11.7486C27.8564 12.3586 27.3064 12.8286 26.6064 13.1586C25.9164 13.4986 25.1364 13.5286 24.5564 13.5286ZM23.8764 7.87859C24.3564 7.87859 24.7964 7.77859 25.1964 7.57859C25.5964 7.36859 25.9164 7.07859 26.1564 6.70859C26.4064 6.32859 26.5264 5.89859 26.5264 5.40859V4.94859C26.5264 4.45859 26.4064 4.02859 26.1564 3.65859C25.9164 3.28859 25.5964 2.99859 25.1964 2.78859C24.7964 2.57859 24.3564 2.47859 23.8764 2.47859C23.3764 2.47859 22.9264 2.58859 22.5264 2.80859C22.1364 3.02859 21.8264 3.32859 21.5964 3.70859C21.3664 4.07859 21.2464 4.50859 21.2464 4.99859V5.35859C21.2464 5.84859 21.3664 6.28859 21.5964 6.66859C21.8264 7.04859 22.1364 7.34859 22.5264 7.56859C22.9264 7.77859 23.3764 7.87859 23.8764 7.87859ZM33.1489 13.5286C32.1089 13.5286 31.4489 13.1186 31.1689 12.2986L31.0489 11.9186H30.6689V17.5986H28.6489V5.03859H30.6689V5.41859H31.0489L31.1689 5.03859C31.4489 4.21859 32.1089 3.80859 33.1489 3.80859H34.2889V5.80859H33.2889C32.6489 5.80859 32.1889 5.97859 31.9089 6.31859C31.6289 6.65859 31.4889 7.14859 31.4889 7.78859V9.54859C31.4889 10.1886 31.6289 10.6786 31.9089 11.0186C32.1889 11.3586 32.6489 11.5286 33.2889 11.5286H34.2889V13.5286H33.1489Z" className="fill-current" />
              </svg>
            </a>
          </div>

          {/* Section columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-book text-gray-400">
                {section.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-medium text-gray-950 transition-colors hover:text-gray-700 dark:text-white dark:hover:text-gray-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright + Theme Toggles */}
        <div className="mt-16 flex items-center justify-between border-t border-gray-600/10 pt-6 dark:border-gray-900">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; 2026 Clerk, Inc.
          </p>
          <div className="flex gap-x-1.5 rounded-full bg-gray-600/5 p-1 ring-1 ring-gray-600/5 ring-inset dark:bg-black/30 dark:ring-white/5" aria-label="Theme" role="toolbar">
            {/* Dark */}
            <button className="relative size-5 flex-none rounded-full outline-none transition-colors text-gray-400 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-300" aria-label="Dark">
              <span className="absolute inset-[calc(-3/16*1rem)]" />
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-5">
                <path fill="currentColor" fillOpacity=".15" fillRule="evenodd" clipRule="evenodd" d="M15.25 10.68a4.614 4.614 0 0 1-5.929-5.93 5.274 5.274 0 1 0 5.929 5.93Z" />
                <path fill="currentColor" d="m15.25 10.68.743.098a.75.75 0 0 0-1.003-.802l.26.703ZM9.321 4.75l.704.26a.75.75 0 0 0-.803-1.003l.1.743Zm5.669 5.226a3.855 3.855 0 0 1-1.34.238v1.5c.653 0 1.28-.117 1.86-.331l-.52-1.407Zm-1.34.238A3.864 3.864 0 0 1 9.786 6.35h-1.5a5.364 5.364 0 0 0 5.364 5.364v-1.5ZM9.786 6.35c0-.473.085-.923.239-1.34l-1.407-.52a5.354 5.354 0 0 0-.332 1.86h1.5ZM5.5 9.977a4.524 4.524 0 0 1 3.92-4.484l-.198-1.486A6.024 6.024 0 0 0 4 9.977h1.5Zm4.523 4.523A4.523 4.523 0 0 1 5.5 9.977H4A6.023 6.023 0 0 0 10.023 16v-1.5Zm4.484-3.92a4.524 4.524 0 0 1-4.484 3.92V16a6.024 6.024 0 0 0 5.97-5.222l-1.486-.198Z" />
              </svg>
            </button>
            {/* Light */}
            <button className="relative size-5 flex-none rounded-full outline-none transition-colors text-gray-400 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-300" aria-label="Light">
              <span className="absolute inset-[calc(-3/16*1rem)]" />
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-5">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 3v1.5M10 15.5V17M17 10h-1.5M4.5 10H3M14.95 14.95l-1.06-1.06M6.11 6.11L5.05 5.05M14.95 5.05l-1.06 1.06M6.11 13.89l-1.06 1.06" />
                <circle cx="10" cy="10" r="3.25" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            {/* System */}
            <button className="relative size-5 flex-none rounded-full outline-none transition-colors text-gray-400 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-300" aria-label="System">
              <span className="absolute inset-[calc(-3/16*1rem)]" />
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-5">
                <rect x="3" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7.5 17h5M10 14v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
