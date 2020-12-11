export default {
  github: 'https://github.com/sarthaktexas/notes',
  titleSuffix: ' by Sarthak Mohanty',
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
      <link rel="stylesheet" href="/style.css" />
      <script async defer data-website-id="712096f7-8fd9-41ae-8664-f06200c28350" src="https://analytics.sarthakmohanty.me/umami.js"></script>
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: true,
  footerText: <>&copy; Sarthak Mohanty {new Date().getFullYear()}. Licensed under Apache 2.0.</>
}
