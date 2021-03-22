import App from 'App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';

loadableReady().then(
  () =>
    hydrate(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      document.getElementById('root')
    )
);

if (module.hot) {
  module.hot.accept();
}
