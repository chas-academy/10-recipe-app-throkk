import React, { Component } from 'react';
import { Header, Content, Footer, Form } from './components';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Weather or Hot"/>
        <Content>
          <h4><a href="https://www.youtube.com/watch?v=7QLSRMoKKS0">Pretty much everywhere, it's gonna be hot!</a></h4>
        </Content>
      </div>
    );
  }
}

export default App;
