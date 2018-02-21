import React, { Component } from 'react';
import './Content.css';

// I need this somewhere in here..
// https://www.youtube.com/watch?v=7QLSRMoKKS0

class Content extends Component {
  render() {
    return (
        <main className="App-content">
            {this.props.children}
        </main>
    );
  }
}

export default Content;
