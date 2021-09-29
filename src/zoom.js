import siteConfig from "@generated/docusaurus.config";
import mediumZoom from "medium-zoom";

const { themeConfig } = siteConfig;

function getBackgroundColor(zoom) {
  const isDarkMode = document.querySelector('html[data-theme="dark"]');

  return isDarkMode ? (zoom.background?.dark || 'rgb(50, 50, 50)') : (zoom.background?.light || 'rgb(255, 255, 255)');
}

export default (function () {
  if (typeof window === "undefined") {
    return null;
  }

  let zoomObject;

  const { zoom } = themeConfig;
  const { selector = ".markdown img", config = {} } = zoom || {};

  config.background = getBackgroundColor(zoom);

  var observer = new MutationObserver(function(mutations) {
    if(!zoomObject) return;

    zoomObject.update({ background: getBackgroundColor(zoom) })
  });

  observer.observe(document.querySelector('html'), { 
    attributes: true, 
    attributeFilter: ['data-theme']
  });

  setTimeout(() => {
    zoomObject = mediumZoom(selector, config);
  }, 1000);

  return {
    onRouteUpdate() {
      setTimeout(() => {
        zoomObject = mediumZoom(selector, config);
      }, 1000);
    },
  };
})();
