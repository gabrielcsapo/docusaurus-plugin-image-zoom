import path from 'path';
import { Plugin } from '@docusaurus/types';
import validatePeerDependencies from 'validate-peer-dependencies';

validatePeerDependencies(__dirname);

export default function (): Plugin {
  return {
    name: 'docusaurus-plugin-image-zoom',

    getClientModules() {
      return [path.resolve(__dirname, './zoom')];
    },
  };
}
