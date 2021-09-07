import siteConfig from "@generated/docusaurus.config";
import mediumZoom from "medium-zoom";

const { themeConfig } = siteConfig;

export default (function () {
  if (typeof window === "undefined") {
    return null;
  }

  const { zoom } = themeConfig;
  const { selector = ".markdown img", config = {} } = zoom || {};

  setTimeout(() => {
    mediumZoom(selector, config);
  }, 1000);

  return {
    onRouteUpdate() {
      setTimeout(() => {
        mediumZoom(selector, config);
      }, 1000);
    },
  };
})();
