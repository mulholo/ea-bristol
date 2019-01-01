module.exports = {
  siteMetadata: {
    title: 'Effective Alturism Bristol',
    language: 'en',
    url: 'https://eabristol.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-mdx',
    'gatsby-plugin-favicon',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
};
