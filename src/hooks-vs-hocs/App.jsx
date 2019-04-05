import React from 'react';

import Card from '../_veneer/card';

import { AppClassHOC } from './AppClass';
import { AppFunc, AppFunc2 } from './AppFunc';

const App = () => (
  <React.Fragment>
    <h2>HOC and Class Component (AppClass)</h2>
    <Card>
      <AppClassHOC />
    </Card>
    <h2>Hook and Function Component (AppFunc)</h2>
    <Card>
      <AppFunc />
    </Card>
    <h2>Hook Reuse (AppFunc2)</h2>
    <Card>
      <AppFunc2 />
    </Card>
  </React.Fragment>
);

export default App;
