/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Las Uvas`,
    description: `Specializing In Mexican Wine Tastings`,
    author: `@gatsbyjs`,
    siteUrl: 'http://lasuvasmexico.com'
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    //'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Las Uvas',
        short_name: 'Las Uvas',
        start_url: '/',
        background_color: '#900561',
        theme_color: '#900561',
        display: 'standalone',
        icon: 'src/images/las_uvas_logo.png',
      },  // gatsby-plugin-manifest enables the web app manifest required for PWA. Will need to update with a proper icon image and colors for las uvas
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "lasuvasmexico.com", //"localhost:8888/lasuvas_cms",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        acfOptionPageIds: [],
        auth: {
          htaccess_user: process.env.HTACCESS_USER,
          htaccess_pass: process.env.HTACCESS_PASSWORD,
        },
        verboseOutput: false,
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: "lasuvasmexico.com", //"localhost:8888/lasuvas_cms"
          replacementUrl: "lasuvasmexico.com", //"localhost:8888/lasuvas_cms",
        },
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "**/Home",
          "**/mission",
          "**/tasting",
          "**/faq",
          "**/testimonials",
        ],
        excludedRoutes: [],
        normalizer: function({ entities}) {
          return entities
        },
      },
    },
    'gatsby-plugin-sitemap',
    // this plugin automatically generates a sitemap for your site. 
    
    // this (optional) plugin enables Progressive Web App + Offline functionality. The plugin creates a service worker for us by leveraging Google’s Workbox 
    // library. We get automatic file caching, enabling pages to be available offline after the user’s first visit.
    //To learn more, visit https://gatsby.dev/offline
    'gatsby-plugin-offline',
    
  
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poiret One`,
            variants: [`400`],
          },
        ],
      },
    }
  ]
}
