import React, { useState, useEffect } from 'react';

/**
 * Automatically focus on an element if it's visible in the DOM
 *
 * @returns {function}
 */
const useFocusInputOnRender = () => {
  const [domNode, setRef] = useState(null);

  // If the element is visible, its `ref` prop will set `domNode` to a real value
  useEffect(() => {
    if (domNode) {
      domNode.focus();
    }
  }, [domNode]);

  // Set this as the value of a Component's `ref` prop
  return setRef;
};

export default useFocusInputOnRender;
