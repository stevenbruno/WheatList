import React, {Component} from 'react';
import MainContainer from './mainContainer'
import {fakeData, addToWaitlist, getFullWaitlist} from './DatabaseCalls'

class App extends Component{


  constructor(){
    super();

  }
  render(){
  //fakeData();
  //addToWaitlist({person: 1}, "BrightWok")
  //You need to await the response from getFullWaitlist
  //getFullWaitlist("Bombay Wraps")
    return (
      <div className="App">
        <MainContainer />
      </div>
    );

  }
}

export default App;
