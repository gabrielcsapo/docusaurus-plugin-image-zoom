import siteConfig from "@generated/docusaurus.config";
import mediumZoom from "medium-zoom";

const { themeConfig } = siteConfig;

function getBackgroundColor(zoom) {
  const isDarkMode = document.querySelector('html[data-theme="dark"]');

  return isDarkMode ? (zoom.config?.background?.dark || 'rgb(50, 50, 50)') : (zoom.config?.background?.light || 'rgb(255, 255, 255)');
}

export default (function () {
  if (typeof window === "undefined") {
    return null;
  }

  let zoomObject;

  const { zoom } = themeConfig;
  const { selector = ".markdown img", config = {} } = zoom || {};

  const backgroundColor = getBackgroundColor(zoom)

  config.background = backgroundColor

  var observer = new MutationObserver(function(mutations) {
    if(!zoomObject) return;

    zoomObject.update({ background: backgroundColor })
  });

  observer.observe(document.querySelector('html'), { 
    attributes: true, 
    attributeFilter: ['data-theme']
  });

  setTimeout(() => {
    if(zoomObject)
      zoomObject.detach();
    zoomObject = mediumZoom(selector, config);
  }, 1000);

  return {
    onRouteUpdate() {
      setTimeout(() => {
        if(zoomObject)
          zoomObject.detach();
        zoomObject = mediumZoom(selector, config);
      }, 1000);
    },
  };
})();
