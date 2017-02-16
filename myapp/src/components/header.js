import React, { Component } from 'react';
import '../styles/myComponent.css';



class MyComponent extends Component {
  render() {
    const name = this.props.name;
    return (
          <div className="heading">{name}</div>
    );
  }
}

export default MyComponent;
