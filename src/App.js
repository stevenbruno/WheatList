import React, {Component} from 'react';
import MainContainer from './mainContainer'
import {fakeData, addToWaitlist, getFullWaitlist, cancelReservation, nextParty, howLongIsMyWait} from './DatabaseCalls'

class App extends Component{


  constructor(){
    super();

  }
  render(){
  //fakeData();
  //addToWaitlist({guestPhoneNumber: 2222222, partySize: 1}, "BrightWok")
  //You need to await the response from getFullWaitlist
  //getFullWaitlist("Bombay Wraps")
  //cancelReservation(2, "BrightWok")
  //nextParty(1, "BrightWok")
  //Returns how long your wait is!
  //howLongIsMyWait(2222222, "BrightWok")
    return (
      <div className="App">
        <MainContainer />
      </div>
    );

  }
}

export default App;
