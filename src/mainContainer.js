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

        const position =await getFullWaitlist('Au Cheval')
        const waitTime = await howLongIsMyWait(user.guestPhoneNumber, 'Au Cheval')

        this.setState({
            guestName: user.guestName,
            guestPhoneNumber: user.guestPhoneNumber,
            partySize: user.partySize,
            waitlistPosition: position.length,
            waitTime: waitTime
        })
    }


    componentDidMount= async()=>{

       const lengthOfWaitlist = await getFullWaitlist('Au Cheval')

       const waitTime = lengthOfWaitlist.length * 3

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
                name="Au Cheval" 
                image="/public/noun_Wok_661432.png"
                />
                
                {this.state.submittedForm ? <Fragment /> :
                    <div className="waitTimeInfo">
                    <p>Current wait time: {this.state.waitTime} minutes</p>
                    </div>
                }
               {this.state.submittedForm ?  
                    <CancelReservation guestPhoneNumber={this.state.guestPhoneNumber}
                                    waitlistPosition={this.state.waitlistPosition} 
                                    setFormSubmission={this.setFormSubmission}
                                    waitTime={this.state.waitTime}  
                                    name="Au Cheval"/> : 
                
                    <WaitlistForm setUserAttributes={this.setUserAttributes}
                        setFormSubmission={this.setFormSubmission} 
                        name="Au Cheval" />
                }

            </Fragment> 

        )}

}

export default MainContainer
