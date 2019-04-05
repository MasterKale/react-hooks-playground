import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import App1 from './hooks-vs-hocs/App';
import App2 from './budget-tracker/App';

const Index = () => (
  <React.Fragment>
    <div style={{ maxWidth: '700px', margin: 'auto' }}>
      <h1>HOCs vs Hooks</h1>
      <App1 />
      <hr />
      <h1>Budget Tracker</h1>
      <App2 />
      <hr />
    </div>
  </React.Fragment>
);

ReactDOM.render(
  <Index />,
  document.getElementById('app')
);
