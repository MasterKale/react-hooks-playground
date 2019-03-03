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

  // Flip over to the edit view when the formatted value is displayed
  const onClickDisplay = () => {
    setEditing(true);
  };

  const onChangeValue = event => setNewVal(event.target.value);

  // Send the new value up to the parent
  const onClickDone = () => {
    setEditing(false);
    onChange(newVal);
  };

  // Prevent the form from submitting. Catches Enter button too
  const onSubmit = event => {
    event.preventDefault();
    onClickDone();
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
    ui = <span className="valueDisplay" onClick={onClickDisplay}>{formatted}</span>;
  }

  return ui;
};

export default InlineEditor;
