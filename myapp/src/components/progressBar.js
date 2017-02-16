import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/progressBar.css';



class ProgressBar extends Component {

  componentDidMount(){
    var value = this.props.value;
    var circle = ReactDOM.findDOMNode(this.refs.bar);
    if (isNaN(value)) {
      value = 100;
    }
    else{
      var c = Math.PI*(90*2);
      if (value < 0) { value = 0;}
      if (value > 100) { value = 100;}
      var pct = ((value)/100)*c;
      circle.style.strokeDashoffset = -pct;
      var cont = ReactDOM.findDOMNode(this.refs.cont);
      cont.setAttribute('data-pct',value);
    }
  }
  render() {
    return (
      <div id="cont" ref="cont" data-pct='100'>
        <svg id="svg" ref="svg" width="199" height="199"  version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle r="90" cx="100" cy="100" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0"></circle>
        <circle id="bar" ref="bar" r="90" cx="100" cy="100" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0"></circle>
        </svg>
      </div>
    );
  }
}

export default ProgressBar;
