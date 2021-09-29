const path = require("path");

module.exports = function (context, options) {
  return {
    name: "docusaurus-plugin-image-zoom",

    getClientModules() {
      return [
        path.resolve(__dirname, "./zoom")
      ]
    }
  };
};
