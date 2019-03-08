import React from 'react';

function withClickPos (WrappedComponent) {
  return class extends React.PureComponent {
    constructor (props) {
      super(props);

      this.state = {
        x: 0,
        y: 0
      };

      this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler (event) {
      this.setState({ x: event.x, y: event.y });
    }

    componentDidMount () {
      window.addEventListener('click', this.clickHandler);
    }

    componentWillUnmount () {
      window.removeEventListener('click', this.clickHandler);
    }

    render () {
      const {
        x,
        y
      } = this.state;

      return <WrappedComponent clickPos={{ x, y }} {...this.props} />;
    }
  };
}

export default withClickPos;
