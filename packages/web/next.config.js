const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

module.exports = withMDX({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  env: {
    API_URL: process.env.API_URL
  }
});
