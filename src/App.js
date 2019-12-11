import React, {Component} from 'react';
import MainContainer from './mainContainer'
import {fakeData, addToWaitlist, getFullWaitlist, cancelReservation, nextParty, howLongIsMyWait, allRestaurants} from './DatabaseCalls'

class App extends Component{


  constructor(){
    super();

  }
  render(){
  //fakeData();
  //addToWaitlist({guestPhoneNumber: 2222222, partySize: 1}, "Au Cheval")
  //You need to await the response from getFullWaitlist
  //getFullWaitlist("Bombay Wraps")
  //cancelReservation(2, "Au Cheval")
  //nextParty(1, "Au Cheval")
  //Returns how long your wait is!
  //howLongIsMyWait(2222222, "Au Cheval")
  //allRestaurants()

    console.log("twilio")
    console.log(process.env.TWILIO_TOKEN)
    return (
      <div className="App">
        <MainContainer />
      </div>
    );

  }
}

export default App;
