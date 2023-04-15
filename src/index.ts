import path from 'path';
import { Plugin } from '@docusaurus/types';

module.exports = function (): Plugin {
  return {
    name: 'docusaurus-plugin-image-zoom',

    getClientModules() {
      return [path.resolve(__dirname, './zoom')];
    },
  };
};
