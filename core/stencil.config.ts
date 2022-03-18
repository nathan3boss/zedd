// Dependencies
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';

const excludeComponents = [];

export const config: Config = {
  namespace: 'core',
  plugins: [
    sass({
      injectGlobalPaths: ['src/scss/mixins.scss'],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    reactOutputTarget({
      componentCorePackage: '@zedd/core',
      proxiesFile: '../packages/react/src/components.ts',
      loaderDir: '/loader',
      includeDefineCustomElements: true,
      includePolyfills: true,
      excludeComponents,
    }),
  ],
};
