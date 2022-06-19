import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `William Xu`,
    siteUrl: `https://www.williamxu.io`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
  {
    resolve: 'gatsby-plugin-google-gtag',
    options: {
      trackingIds: [
        "G-524PW1HYFY"
      ]
    },
  }, 
  "gatsby-plugin-fontawesome-css",
  "gatsby-plugin-postcss", 
  "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};

export default config;
