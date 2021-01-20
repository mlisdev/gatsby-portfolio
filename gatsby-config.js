require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: "http://stephrinehart.com",
    title: "Stephanie Rinehart - Librarian & Web Developer",
    description:
      "I'm Stephanie, a librarian and web developer.",
    image: "/images/steph.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@heyrinehart",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-VY6NEPF2TP",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
