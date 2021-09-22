# docusaurus-plugin-image-zoom

## Install and Configure

- npm install docusaurus-plugin-image-zoom

- Add as a plugin to `docusaurus.config.js`, like this:

```js
  plugins: [
    require.resolve('docusaurus-plugin-image-zoom')
  ],
```

- Set the zoomSelector (optional, defaults to '.markdown img') in `docusaurus.config.js`, like this:

```js
  themeConfig: {
    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      }
    }
  },
```
