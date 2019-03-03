import React, { useState } from 'react';

import useClickPos from './hooks/useClickPos';

export const AppFunc = () => {
  const [state, setState] = useState({ foo: 'bar' });
  const updateFoo = () => {
    setState({ foo: Math.random() * 100 });
  };

  const clickPos = useClickPos();

  const {
    foo,
  } = state;
  const {
    x,
    y,
  } = clickPos;

  return (
    <React.Fragment>
      <h3>{foo} (x: {x}, y: {y})</h3>
      <p>
        <button onClick={updateFoo}>Update</button>
      </p>
    </React.Fragment>
  );
};

export const AppFunc2 = () => {
  const clickPos = useClickPos();

  const {
    x,
    y,
  } = clickPos;

  return (
    <h3>User clicked at {x}, {y}</h3>
  );
};
