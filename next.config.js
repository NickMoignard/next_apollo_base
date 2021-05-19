const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  [withImages, {}],
  [optimizedImages, { optimizeImagesInDev: true }],
]);