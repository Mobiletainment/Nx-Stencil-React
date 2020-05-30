import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'ui-components',
  taskQueue: 'async',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'ui-components',
      proxiesFile: '../../generated/ui-components-react/src/components.ts'
    }),
    {
      type: 'dist',
      esmLoaderPath: './loader'
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
