import React from 'react';

import withClickPos from './hocs/withClickPos';

export class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      x: 0,
      y: 0,
    };

    this.updateFoo = this.updateFoo.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.clickHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.clickHandler);
  }

  updateFoo() {
    this.setState({ foo: Math.random() * 100 });
  }

  clickHandler(event) {
    this.setState({ x: event.x, y: event.y });
  }

  render() {
    const {
      foo,
      x,
      y,
    } = this.state;

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

class AppClass2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
    };

    this.updateFoo = this.updateFoo.bind(this);
  }

  updateFoo() {
    this.setState({ foo: Math.random() * 100 });
  }

  render() {
    const {
      foo,
    } = this.state;
    const {
      clickPos,
    } = this.props;
    const {
      x,
      y,
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

export const AppClassHOC = withClickPos(AppClass2);
