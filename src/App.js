import React, { Component } from 'react';
import Homepage from './componenets/Homepage';
import Camera from './componenets/Camera';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Camera />
        <div className="App-intro">
          <Homepage 
            title="JASON H. TANG"
            description="Landscape photographer based in Los Angeles, CA. Now in Winston-Salem, NC."
          />
        </div>
      </div>
    );
  }
}

export default App;
