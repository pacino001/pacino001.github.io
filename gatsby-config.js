module.exports = {
  siteMetadata: {
    title: `Pacino Jiang's Blog`,
    name: `Pacino Jiang`,
    siteUrl: `https://novela.narative.co`,
    description: `Pacino Jiang's Blog`,
    hero: {
      heading: `Work Hard，Play Hard`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/pacino001`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/narative/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pacino's Blog`,
        short_name: `Pacino's Blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
