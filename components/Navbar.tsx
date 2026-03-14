export default function Navbar() {
  return (
    <header className="fixed left-1 right-[calc(theme(spacing.1))] top-1 z-[100] flex h-16 rounded-t-xl border-b border-gray-100 bg-white px-5 dark:border-gray-900 dark:bg-gray-950 lg:left-0 lg:border-b-0 lg:bg-transparent lg:px-0 dark:lg:bg-transparent">
      {/* Mobile hamburger */}
      <div className="flex items-center lg:hidden">
        <button className="relative" aria-label="Open navigation">
          <div className="absolute -inset-3" />
          <svg className="size-5 stroke-gray-950 dark:stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        </button>
      </div>

      {/* Logo area */}
      <a
        href="#"
        className="relative isolate ml-4 mt-[0.05rem] flex flex-none items-center justify-center gap-x-3 rounded-tl-xl bg-white dark:bg-gray-950 lg:ml-[0.3rem] lg:w-[17.69rem] lg:border-r lg:border-gray-100 lg:pl-1 lg:dark:border-gray-900"
      >
        {/* Clerk wordmark SVG */}
        <svg viewBox="0 0 62 18" fill="none" aria-hidden="true" className="h-[1.125rem] text-gray-950 dark:text-white">
          <ellipse cx="8.99999" cy="9" rx="2.81249" ry="2.8125" className="fill-current" />
          <path d="M14.0674 15.6591C14.3067 15.8984 14.2827 16.2945 14.0015 16.4829C12.571 17.4411 10.8504 17.9999 8.9993 17.9999C7.14818 17.9999 5.42758 17.4411 3.99704 16.4829C3.71589 16.2945 3.69186 15.8984 3.93115 15.6591L5.98648 13.6037C6.17225 13.418 6.46042 13.3886 6.69424 13.5084C7.3856 13.8626 8.16911 14.062 8.99978 14.062C9.83045 14.062 10.614 13.8626 11.3053 13.5084L11.3068 13.5076C11.5404 13.3882 11.828 13.4176 12.0136 13.603L14.0674 15.6591Z" className="fill-current" />
          <path d="M14.0674 2.34161C14.3067 2.10232 14.2827 1.70618 14.0015 1.51781C12.571 0.559587 10.8504 0.000732422 8.9993 0.000732422C7.14818 0.000732422 5.42758 0.559587 3.99704 1.51781C3.71589 1.70618 3.69186 2.10232 3.93115 2.34161L5.98648 4.39694C6.17225 4.58271 6.46042 4.61213 6.69424 4.49229C7.3856 4.13811 8.16911 3.93873 8.99978 3.93873C9.83045 3.93873 10.614 4.13811 11.3053 4.49229L11.3068 4.49307C11.5404 4.61248 11.828 4.58306 12.0136 4.3977L14.0674 2.34161Z" className="fill-current" />
          <path d="M24.5564 13.5286C23.4564 13.5286 22.5164 13.2586 21.7364 12.7186C20.9564 12.1786 20.3964 11.4386 20.0564 10.4986L21.7964 9.55859C22.0164 10.1786 22.3664 10.6686 22.8464 11.0286C23.3264 11.3886 23.8964 11.5686 24.5564 11.5686C25.2364 11.5686 25.7864 11.3886 26.2064 11.0286C26.6264 10.6586 26.8364 10.1986 26.8364 9.64859V8.24859C26.4764 8.75859 26.0064 9.14859 25.4264 9.41859C24.8464 9.68859 24.2164 9.82859 23.5364 9.82859C22.7164 9.82859 21.9664 9.62859 21.2864 9.22859C20.6064 8.81859 20.0664 8.25859 19.6664 7.54859C19.2664 6.83859 19.0664 6.04859 19.0664 5.17859C19.0664 4.30859 19.2664 3.52859 19.6664 2.83859C20.0664 2.13859 20.6064 1.58859 21.2864 1.18859C21.9664 0.778594 22.7164 0.578594 23.5364 0.578594C24.2164 0.578594 24.8464 0.718594 25.4264 0.988594C26.0064 1.25859 26.4764 1.64859 26.8364 2.15859V0.758594H28.8564V9.64859C28.8564 10.4386 28.6564 11.1386 28.2564 11.7486C27.8564 12.3586 27.3064 12.8286 26.6064 13.1586C25.9164 13.4986 25.1364 13.5286 24.5564 13.5286ZM23.8764 7.87859C24.3564 7.87859 24.7964 7.77859 25.1964 7.57859C25.5964 7.36859 25.9164 7.07859 26.1564 6.70859C26.4064 6.32859 26.5264 5.89859 26.5264 5.40859V4.94859C26.5264 4.45859 26.4064 4.02859 26.1564 3.65859C25.9164 3.28859 25.5964 2.99859 25.1964 2.78859C24.7964 2.57859 24.3564 2.47859 23.8764 2.47859C23.3764 2.47859 22.9264 2.58859 22.5264 2.80859C22.1364 3.02859 21.8264 3.32859 21.5964 3.70859C21.3664 4.07859 21.2464 4.50859 21.2464 4.99859V5.35859C21.2464 5.84859 21.3664 6.28859 21.5964 6.66859C21.8264 7.04859 22.1364 7.34859 22.5264 7.56859C22.9264 7.77859 23.3764 7.87859 23.8764 7.87859ZM33.1489 13.5286C32.1089 13.5286 31.4489 13.1186 31.1689 12.2986L31.0489 11.9186H30.6689V17.5986H28.6489V5.03859H30.6689V5.41859H31.0489L31.1689 5.03859C31.4489 4.21859 32.1089 3.80859 33.1489 3.80859H34.2889V5.80859H33.2889C32.6489 5.80859 32.1889 5.97859 31.9089 6.31859C31.6289 6.65859 31.4889 7.14859 31.4889 7.78859V9.54859C31.4889 10.1886 31.6289 10.6786 31.9089 11.0186C32.1889 11.3586 32.6489 11.5286 33.2889 11.5286H34.2889V13.5286H33.1489Z" className="fill-current" />
        </svg>

        {/* Docs badge */}
        <div className="mt-0.5 rounded-full bg-gray-50 px-2 py-1 text-[0.625rem]/3 font-medium text-gray-600 ring-1 ring-inset ring-gray-100 dark:bg-gray-900 dark:text-gray-400 dark:ring-gray-700">
          Docs
        </div>
      </a>

      {/* Right side */}
      <div className="ml-auto flex min-w-0 items-center gap-x-5 pl-6 md:flex-auto md:gap-x-4 lg:rounded-tr-xl lg:border-b lg:border-gray-100 lg:bg-white lg:px-6 lg:dark:border-gray-900 lg:dark:bg-gray-950">
        {/* Search */}
        <button className="flex gap-x-2 text-xs text-gray-400 outline-none md:w-64 md:rounded-md md:py-[calc(5/16*1rem)] md:pl-2 md:pr-1.5 md:shadow-[0_1px_5px_-4px_rgba(19,19,22,0.4),0_2px_5px_rgba(32,42,54,0.06)] md:ring-1 md:ring-gray-900/10 dark:md:bg-gray-900 dark:md:shadow-[0_-1px_rgba(255,255,255,0.06),0_4px_8px_rgba(0,0,0,0.05),0_1px_6px_-4px_#000] dark:md:ring-white/10">
          <svg className="size-5 flex-none dark:text-gray-500 dark:md:text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <span className="sr-only md:not-sr-only">Search documentation</span>
        </button>

        {/* Ask AI */}
        <button className="group relative isolate hidden items-center justify-center overflow-hidden whitespace-nowrap rounded-md bg-gray-900 px-3 py-[0.1875rem] text-sm font-medium text-white shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] ring-1 ring-gray-900 transition duration-300 md:inline-flex">
          <span>Ask AI</span>
        </button>

        {/* Sign Up */}
        <div className="ml-auto">
          <div className="flex whitespace-nowrap">
            <div className="hidden sm:contents">
              <a
                href="https://dashboard.clerk.com/sign-up"
                className="group relative isolate inline-flex items-center justify-center overflow-hidden text-left font-medium transition duration-300 rounded-md shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] text-sm h-[1.875rem] px-3 ring-1 bg-purple-500 text-white ring-purple-500"
              >
                Sign Up
                <svg className="ml-2 h-2.5 w-2.5 flex-none opacity-60 transition duration-300 group-hover:translate-x-6 group-hover:opacity-0" fill="none" viewBox="0 0 10 10">
                  <path d="M1 5h8M6 2l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg className="-ml-2.5 h-2.5 w-2.5 flex-none -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" fill="none" viewBox="0 0 10 10">
                  <path d="M1 5h8M6 2l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
