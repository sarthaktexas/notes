export default {
  github: 'https://github.com/sarthaktexas/notes',
  titleSuffix: ' – Notes',
  logo: (
    <>
      <span className="mr-2 font-extrabold text-xl align-top hidden md:inline">Notes</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        by Sarthak Mohanty
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Notes by Sarthak Mohanty" />
      <meta name="og:description" content="Notes by Sarthak Mohanty" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@sarthaktexas" />
      <meta name="og:title" content="Notes" />
      <meta name="apple-mobile-web-app-title" content="Notes by Sarthak Mohanty" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: true,
  footerText: <>Apache 2.0 {new Date().getFullYear()} © Sarthak Mohanty.</>
}
