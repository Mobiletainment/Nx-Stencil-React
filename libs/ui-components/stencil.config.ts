import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'ui-components',
  taskQueue: 'async',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'ui-components',
      proxiesFile: '../generated/ui-components-react/src/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/libs/ui-components/dist',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      dir: '../../dist/libs/ui-components/www',
      serviceWorker: null, // disable service workers
    },
  ],

  plugins: [sass()],
};
