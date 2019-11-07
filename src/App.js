import React, {Component} from 'react';
import MainContainer from './mainContainer'
import {fakeData, addToWaitList, getFullWaitlist} from './DatabaseCalls'

class App extends Component{
  //fakeData();
  //addToWaitList({person: 1}, "Bombay Wraps")
  //You need to await the response from getFullWaitlist
  //getFullWaitlist("Bombay Wraps")

  constructor(){
    super();

  }
  render(){
    return (
      <div className="App">
        <MainContainer />
      </div>
    );

  }
}

export default App;
