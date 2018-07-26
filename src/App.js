import React, { Component } from 'react';
import Homepage from './componenets/Homepage';
import Camera from './componenets/Camera';
import MainPage from './componenets/mainpage/MainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPage />
      </div>
    );
  }
}

export default App;
