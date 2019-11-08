import React, {Component, Fragment} from 'react';
import RestaurantBanner from './Components/restaurantBanner'
import WaitlistForm from './Components/waitlistForm'
import CancelReservation from './Components/cancelReservation'
import { getFullWaitlist, howLongIsMyWait } from './DatabaseCalls';

class MainContainer extends Component{

    constructor(){
        super();

        this.state={
            restaurantName: "",
            submittedForm: false,
            guestPhoneNumber: '',
            guestName: "",
            waitlistPosition:'',
            waitTime: ''
        }
 
    }

    setUserAttributes= async(user)=>{

        const position =await getFullWaitlist('BrightWok')
        const waitTime = await howLongIsMyWait(user.guestPhoneNumber, 'BrightWok')

        this.setState({
            guestName: user.guestName,
            guestPhoneNumber: user.guestPhoneNumber,
            partySize: user.partySize,
            waitlistPosition: position.length,
            waitTime: waitTime
        })
    }


    componentDidMount= async()=>{

       const lengthOfWaitlist = await getFullWaitlist('BrightWok')

       const waitTime = lengthOfWaitlist.length * 5

        this.setState({
            waitTime: waitTime
        })

    }
 
    setFormSubmission=(submission)=>{
        if(!this.state.submittedForm){
            this.setState({
                submittedForm: true
            })
        }
        else{
            this.setState({
                submittedForm:false
            })
        }
    }

    render(){
        return(
            <Fragment>
                <RestaurantBanner
                name="BrightWok" 
                image="https://d253b1eioa5z7b.cloudfront.net/venue_images/medium_3049ae72-2cef-4ba3-b3eb-9f439e27cf3a.jpg"
                />
               {this.state.submittedForm ?  
                    <CancelReservation guestPhoneNumber={this.state.guestPhoneNumber}
                                    waitlistPosition={this.state.waitlistPosition} 
                                    setFormSubmission={this.setFormSubmission}
                                    waitTime={this.state.waitTime}  
                                    name="BrightWok"/> : 
                
                    <WaitlistForm setUserAttributes={this.setUserAttributes}
                        setFormSubmission={this.setFormSubmission} 
                        name="BrightWok"/>}

                {this.state.submittedForm ? <Fragment /> :
                                <div><br/><br/><p>The wait time at Brightwok is currently {this.state.waitTime} minutes </p></div>
                                }
            </Fragment> 

        )}

}

export default MainContainer
