import React from 'react';

// this import uses path mapping under the hood and utilizes Stencil's React bindings
import { MyComponent } from 'ui-components-react';

export const App = () => {

  return (
    <>
      <h1>Welcome to React with full Stencil component integration!</h1>,
      <MyComponent first="a Web Component / Custom Element"
                   middle={[
                     'with complex prop passing and easy event binding',
                     'for React'
                   ]}
                   last="thanks to Stencil"
                   onNameClicked={e => alert(e.detail)}/>
    </>
  );
};

export default App;
