module.exports = {
  pathPrefix: "/my-portfolio",
  siteMetadata: {
    title: 'Divyangi Mahajan',
    author: 'Divyangi Mahajan',
    description: 'Portfolio for Divyangi Mahajan'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/circle_initial.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass'
  ],
}
