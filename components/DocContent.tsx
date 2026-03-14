import InlineCode from './InlineCode'
import CodeBlock from './CodeBlock'
import DocLink from './DocLink'

export default function DocContent() {
  return (
    <article className="min-w-0 flex-1 py-8">
      <div className="mx-auto max-w-[43.5rem] px-6 lg:px-0">
        {/* Title */}
        <h1 className="max-w-[43.5rem] text-pretty text-2xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-3xl">
          Linking to Account Portal pages
        </h1>

        {/* Content */}
        <div className="typography mt-8">
          {/* Redirect URL */}
          <h2 id="redirect-url">
            <a href="#redirect-url">Redirect URL</a>
          </h2>
          <p>
            If a user accesses an Account Portal page <em>directly</em>, the{' '}
            <InlineCode>redirect_url</InlineCode> query param will not be present, so the user cannot
            be redirected back to your application once they are finished with their Account Portal
            flow. To prevent this, it is recommend that you always specify the redirect in the link
            when sharing it.
          </p>
          <p>
            You can use the following format for your direct links:
          </p>
          <CodeBlock>
            {'https://accounts.<your-domain.com>/<account-portal-page>?redirect_url=<your-redirect-url>'}
          </CodeBlock>
          <p>
            <strong>Example</strong>
          </p>
          <CodeBlock>
            {'https://accounts.myapp.com/sign-in?redirect_url=https://myapp.com/dashboard'}
          </CodeBlock>
          <p>
            The domain is <InlineCode>myapp.com</InlineCode>, the user is being linked to the sign-in
            Account Portal page at <InlineCode>http://accounts.myapp.com/sign-in</InlineCode> and they
            will be redirected to <InlineCode>https://myapp.com/dashboard</InlineCode> after they are
            signed in.
          </p>

          {/* Fallback redirects */}
          <h2 id="fallback-redirects">
            <a href="#fallback-redirects">Fallback redirects</a>
          </h2>
          <p>
            In the case that a user <em>does</em> visit an Account Portal page directly without the
            query param, you can set up fallback redirects to ensure that the user is redirected back
            to your application after they are finished with their Account Portal flow.
          </p>

          {/* Sign-in and sign-up */}
          <h3 id="sign-in-and-sign-up">
            <a href="#sign-in-and-sign-up">Sign-in and sign-up</a>
          </h3>
          <p>
            Set the appropriate{' '}
            <DocLink href="https://clerk.com/docs/guides/development/clerk-environment-variables#api-and-sdk-configuration">
              environment variables
            </DocLink>{' '}
            to configure the fallback redirects for sign-in and sign-up.
          </p>

          {/* Sign out */}
          <h3 id="sign-out">
            <a href="#sign-out">Sign out</a>
          </h3>
          <p>
            Set the post-sign-out redirect by passing the{' '}
            <InlineCode>afterSignOutUrl</InlineCode> prop to the{' '}
            <InlineCode>{'<ClerkProvider>'}</InlineCode> component. See the{' '}
            <DocLink href="https://clerk.com/docs/reference/components/clerk-provider">
              reference doc
            </DocLink>{' '}
            for more information.
          </p>

          {/* Organization redirects */}
          <h3 id="organization-redirects">
            <a href="#organization-redirects">Organization redirects</a>
          </h3>
          <p>
            Both the <InlineCode>{'<OrganizationProfile />'}</InlineCode> and{' '}
            <InlineCode>{'<OrganizationSwitcher />'}</InlineCode> components accept an{' '}
            <InlineCode>afterLeaveOrganizationUrl</InlineCode> prop for setting the redirect after
            leaving an organization.
          </p>
          <p>
            The <InlineCode>{'<OrganizationSwitcher />'}</InlineCode> component accepts an{' '}
            <InlineCode>afterSelectOrganizationUrl</InlineCode> prop for setting the redirect after
            selecting an organization, and an{' '}
            <InlineCode>afterCreateOrganizationUrl</InlineCode> prop for setting the redirect after
            creating an organization.
          </p>

          {/* Prefill sign in and sign up fields */}
          <h2 id="prefill-sign-in-and-sign-up-fields">
            <a href="#prefill-sign-in-and-sign-up-fields">Prefill sign in and sign up fields</a>
          </h2>
          <p>
            In the case of direct links, the values to be used for prefilling the fields for sign-in
            or sign-up can be specified via the following query parameters:
          </p>
          <ul>
            <li><InlineCode>email_address</InlineCode></li>
            <li><InlineCode>phone_number</InlineCode></li>
            <li><InlineCode>username</InlineCode></li>
            <li><InlineCode>first_name</InlineCode></li>
            <li><InlineCode>last_name</InlineCode></li>
          </ul>
          <p>
            For example, visiting{' '}
            <InlineCode>https://accounts.example.com/sign-in?username=nick</InlineCode> will result in
            the username field being prefilled with the value <InlineCode>nick</InlineCode>.
          </p>
        </div>

        {/* Feedback Widget */}
        <div className="mt-20">
          <FeedbackWidget />
        </div>

        {/* Last updated + Edit on GitHub */}
        <div className="mt-12 flex flex-col justify-between gap-4 md:flex-row md:items-center md:gap-2 lg:mt-16">
          <p className="pl-2 text-xs/4 text-gray-600 dark:text-gray-400 md:pl-0">
            Last updated on{' '}
            <time dateTime="2026-03-10T20:55:33.000Z">Mar 10, 2026</time>
          </p>
          <div className="flex flex-row gap-4">
            <a
              href="https://github.com/clerk/clerk-docs/edit/main/docs/guides/account-portal/direct-links.mdx"
              className="flex items-center gap-1.5 text-xs/4 text-gray-600 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Edit on GitHub
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

function FeedbackWidget() {
  return (
    <div>
      <span className="mt-1.5 block text-[0.875rem]/5 font-medium text-gray-950 dark:text-white">
        What did you think of this content?
      </span>
      <div className="mt-3 flex flex-wrap gap-2">
        <label className="group/radio flex cursor-pointer gap-x-3 whitespace-nowrap rounded-lg px-2 py-1.5 text-xs/4 text-gray-800 transition-colors hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-900">
          <input type="radio" name="feedback" value="helpful" className="sr-only" />
          <svg className="size-5 flex-none text-gray-400 transition-colors group-hover/radio:text-gray-800 dark:text-gray-500 dark:group-hover/radio:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V3a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904M14.25 9h2.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
          </svg>
          <span className="mt-0.5">It was helpful</span>
        </label>
        <label className="group/radio flex cursor-pointer gap-x-3 whitespace-nowrap rounded-lg px-2 py-1.5 text-xs/4 text-gray-800 transition-colors hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-900">
          <input type="radio" name="feedback" value="not-helpful" className="sr-only" />
          <svg className="size-5 flex-none text-gray-400 transition-colors group-hover/radio:text-gray-800 dark:text-gray-500 dark:group-hover/radio:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715A12.137 12.137 0 0 1 2.25 12c0-2.848.992-5.464 2.649-7.521C5.287 3.997 5.886 3.75 6.504 3.75h4.369a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7M7.498 15.25c-.483 0-.964-.078-1.423-.23" />
          </svg>
          <span className="mt-0.5">It was not helpful</span>
        </label>
        <label className="group/radio flex cursor-pointer gap-x-3 whitespace-nowrap rounded-lg px-2 py-1.5 text-xs/4 text-gray-800 transition-colors hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-900">
          <input type="radio" name="feedback" value="has-feedback" className="sr-only" />
          <svg className="size-5 flex-none text-gray-400 transition-colors group-hover/radio:text-gray-800 dark:text-gray-500 dark:group-hover/radio:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
          </svg>
          <span className="mt-0.5">I have feedback</span>
        </label>
      </div>
    </div>
  )
}
