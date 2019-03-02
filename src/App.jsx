import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar'
    };
  }

  render() {
    const {
      foo,
    } = this.state;

    return (
      <h2>{foo}</h2>
    );
  }
}
