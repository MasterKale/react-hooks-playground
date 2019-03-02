import React from 'react';

import { AppClass, AppClassHOC } from './AppClass';
import { AppFunc, AppFunc2 } from './AppFunc';

const App = () => (
  <React.Fragment>
    <AppClass />
    <AppClassHOC />
    <AppFunc />
    <AppFunc2 />
  </React.Fragment>
);

export default App;
