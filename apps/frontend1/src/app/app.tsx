import React from 'react';

import './app.scss';

import { ReactComponent as Logo } from './logo.svg';

export const App = () => {

  return (
    <div className="app">
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to frontend1!</h1>
      </header>
      <main>
      </main>
    </div>
  );
};

export default App;
