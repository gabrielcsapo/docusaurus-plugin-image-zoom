---
sidebar_position: 1
---

# Getting started

Let's discover how to install and configure `docusaurus-plugin-image-zoom`

## Installation

```shell
npm install docusaurus-plugin-image-zoom --save
```

## Configuration

```js title=docusaurus.config.js
{
  plugins: [require.resolve('docusaurus-plugin-image-zoom')];
}
```

### Options

Set the zoomSelector (optional, defaults to '.markdown img') in `docusaurus.config.js`, like this:

```js
  themeConfig: {
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      }
    }
  },
```

## Enjoy!

If all has been set up you should be able to click the image below and have the zoom effect applied!

![Docusaurus Plushie](../blog/2021-08-26-welcome/docusaurus-plushie-banner.jpeg)
