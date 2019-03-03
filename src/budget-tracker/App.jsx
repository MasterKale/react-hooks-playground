import React from 'react';

import AccountProvider from './contexts/AccountProvider';
import Tracker from './Tracker';

const App = () => (
  <AccountProvider>
    <Tracker />
  </AccountProvider>
);

export default App;
