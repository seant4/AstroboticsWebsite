module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'astrobotics',
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@components': 'src/components',
          '@layouts': 'src/layouts',
          '@pages': 'src/pages',
          '@templates': 'src/templates',
        }
      },
    },
  ],
};
