import React from 'react';

import AccountProvider from './contexts/AccountProvider';
import Tracker from './Tracker';

const App = () => (
  <AccountProvider>
    <h1>Budget Tracker</h1>
    <Tracker />
  </AccountProvider>
);

export default App;
