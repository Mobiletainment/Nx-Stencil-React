import { Config } from '@stencil/core';

import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'ui-components',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],

  plugins: [sass()],
};
