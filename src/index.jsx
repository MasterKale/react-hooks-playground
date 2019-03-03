import React from 'react';
import ReactDOM from 'react-dom';

import App1 from './hooks-vs-hocs/App';
import App2 from './budget-tracker/App';

const Index = () => (
  <React.Fragment>
    <h1>Hooks vs HOCs</h1>
    <App1 />
    <hr/>
    <h1>Budget Tracker</h1>
    <App2 />
    <hr/>
  </React.Fragment>
);

ReactDOM.render(
  <Index />,
  document.getElementById('app'),
);
