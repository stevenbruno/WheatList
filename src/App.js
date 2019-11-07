import React, {Component} from 'react';
import MainContainer from './mainContainer'
import {fakeData, addToWaitlist, getFullWaitlist, cancelReservation} from './DatabaseCalls'

class App extends Component{


  constructor(){
    super();

  }
  render(){
  //fakeData();
  //addToWaitlist({guestPhoneNumber: 2}, "BrightWok")
  //You need to await the response from getFullWaitlist
  //getFullWaitlist("Bombay Wraps")
  cancelReservation(2, "BrightWok")
    return (
      <div className="App">
        <MainContainer />
      </div>
    );

  }
}

export default App;
