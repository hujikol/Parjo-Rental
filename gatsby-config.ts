import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Rental Motor Jogja`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-postcss",  "gatsby-plugin-sitemap",  "gatsby-transformer-sharp",
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/assets/favicon.png"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-mdx", "gatsby-plugin-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": `${__dirname}/src/assets/images`
    },
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": `${__dirname}/src/pages/`
    },
  }, "gatsby-transformer-yaml", {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: "records",
      path: `${__dirname}/src/data/`
    },
  },]
};

export default config;
