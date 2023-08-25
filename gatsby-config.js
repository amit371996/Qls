module.exports = {
  siteMetadata: {
    // siteUrl: `https://www.qlspace.com.au/graphql`,
    siteUrl: `https://development.qlspace.com.au/graphql`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900`,
          `Nova Square`,
          `Roboto Condensed:,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900`,
          `Nova Square`,
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
          // Specify the URL of the WordPress source
          url: `https://www.qlspace.com.au/graphql`,
          protocol: `https`,
          // Indicates if a site is hosted on WordPress.com
          hostingWPCOM: false,
          // Specify which URL structures to fetch
          includedRoutes: [
            '**/posts',
            '**/tags',
            '**/categories'
          ]
      }
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      icon: 'src/image/ficon-04.png',
    }
  },
  ],
}
