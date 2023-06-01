# docusaurus-plugin-image-zoom

> Docusaurus plugin to utilize [`medium-zoom`](https://www.npmjs.com/package/medium-zoom) in your projects easily!

## Install

```shell
npm install docusaurus-plugin-image-zoom
```

## Usage

Update `docusaurus.config.js` to enable the plugin and include its default configuration:

```js
  const config = {
    // ...other config
    
    plugins: [
      'docusaurus-plugin-image-zoom', // can also just be 'image-zoom'
      // ...other plugins
    ],
    
    themeConfig: {
      // ...other themeConfig
      
      zoom: {
        selector: '.markdown > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      }
    },
  }
  
  module.exports = config;
```

## Configuration

This plugin allows you to configure the following options:

| Option        | Description                                                                                      | Default Value                                                                                         |
|---------------|--------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| `selector`    | (optional) The selector to use for the images to zoom.                                          | `.markdown img`                                                                                      |
| `background`  | (optional) The background color to use for the zoomed image.                                     | `{ light: 'rgb(255, 255, 255)', dark: 'rgb(50, 50, 50)' }`                                           |
| `config`      | (optional) The configuration object to pass to `medium-zoom`.                                   | `{}`                                                                                                 |

Example usage in `docusaurus.config.js`:

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
