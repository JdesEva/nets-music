import React, { Component } from 'react';
import './App.css';
import Header from './model/header'
import HeaderWrapper from './model/headerWrapper'
import Main from './model/content/main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <HeaderWrapper></HeaderWrapper>
        <Main></Main>
      </div>
    );
  }
}

export default App;
