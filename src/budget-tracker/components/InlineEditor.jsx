import React, { useState } from 'react';

import './styles.css';
import useFocusInputOnRender from '../hooks/useFocusInputOnRender';

const InlineEditor = (props) => {
  const {
    value,
    name,
    type = 'text',
    onChange,
    formatDisplay = value => value,
  } = props;

  const [editing, setEditing] = useState(false);
  const [newVal, setNewVal] = useState(value);

  // Put focus on the input when it's visible
  const ref = useFocusInputOnRender();
  const onChangeValue = event => setNewVal(event.target.value);

  const onDone = () => {
    setEditing(false);
    onChange(newVal);
  };

  let ui;
  if (editing) {
    ui = (
      <form className="valueEdit" onSubmit={onSubmit}>
        <input
          ref={ref}
          type={type}
          id={name}
          name={name}
          value={newVal}
          onChange={onChangeValue}
        />
        <button type="button" onClick={onClickDone}>Done</button>
      </form>
    );
  } else {
    const formatted = formatDisplay(value);
    ui = <span className="valueDisplay" onClick={() => {setEditing(true)}}>{formatted}</span>;
  }

  return ui;
};

export default InlineEditor;
