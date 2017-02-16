import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/header.js';
import NameForm from './components/nameForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header name="Header"/>
          <NameForm></NameForm>
      </div>
    );
  }
}

export default App;
