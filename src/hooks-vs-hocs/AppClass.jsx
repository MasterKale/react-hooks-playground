import React from 'react';

import withClickPos from './hocs/withClickPos';

class AppClass extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      foo: 'bar'
    };

    this.updateFoo = this.updateFoo.bind(this);
  }

  updateFoo () {
    this.setState({ foo: (Math.random() * 100).toFixed(2) });
  }

  render () {
    const {
      foo
    } = this.state;
    const {
      clickPos
    } = this.props;
    const {
      x,
      y
    } = clickPos;

    return (
      <React.Fragment>
        <h3>{foo} (x: {x}, y: {y})</h3>
        <p>
          <button onClick={this.updateFoo}>Update</button>
        </p>
      </React.Fragment>
    );
  }
}

export const AppClassHOC = withClickPos(AppClass);
