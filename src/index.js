import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './app/components/layout';

ReactDOM.render(
  <div>
    <Layout />
  </div>,
  document.getElementById('app')
);

module.hot.accept();