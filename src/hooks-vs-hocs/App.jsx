import React from 'react';

import { AppClass, AppClassHOC } from './AppClass';
import { AppFunc, AppFunc2 } from './AppFunc';

const App = () => (
  <React.Fragment>
    <h2>Class Components:</h2>
    <AppClass />
    <AppClassHOC />
    <h2>Function Components:</h2>
    <AppFunc />
    <AppFunc2 />
  </React.Fragment>
);

export default App;
