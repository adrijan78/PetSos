import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Home/>
        <Footer/>
      </div>
    );
  }
}

export default App;