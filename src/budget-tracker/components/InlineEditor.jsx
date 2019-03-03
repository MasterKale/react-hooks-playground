import React, { useState } from 'react';

import './styles.css';

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

  const onChangeValue = event => setNewVal(event.target.value);

  const onDone = () => {
    setEditing(false);
    onChange(newVal);
  };

  let ui;
  if (editing) {
    ui = (
      <form className="valueEdit">
        <input type={type} id={name} name={name} value={newVal} onChange={onChangeValue} />
        <button type="button" onClick={onDone}>Done</button>
      </form>
    );
  } else {
    const formatted = formatDisplay(value);
    ui = <span className="valueDisplay" onClick={() => {setEditing(true)}}>{formatted}</span>;
  }

  return ui;
};

export default InlineEditor;
