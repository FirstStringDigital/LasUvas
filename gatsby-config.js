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
    //siteUrl: 'http://lasuvasmexico.com'
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    //'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'GatsbyJS',
        short_name: 'Gatsby',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/las_uvas_logo.png',
      },  // gatsby-plugin-manifest enables the web app manifest required for PWA. Will need to update with a proper icon image and colors for las uvas
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "localhost:8888/lasuvas_cms",  //"lasuvasmexico.com",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        acfOptionPageIds: [],
        /*auth: {
          htaccess_user: process.env.HTACCESS_USER,
          htaccess_pass: process.env.HTACCESS_PASSWORD,
        },*/
        verboseOutput: false,
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: "localhost:8888/lasuvas_cms",
          replacementUrl: "localhost:8888/lasuvas_cms",
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
        ],
        excludedRoutes: [],
        normalizer: function({ entities}) {
          return entities
        },
      },
    },
    'gatsby-plugin-sitemap',
    // this plugin automatically generates a sitemap for your site. 
    
    'gatsby-plugin-offline',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    //To learn more, visit https://gatsby.dev/offline
  
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
