import React, {Component, Fragment} from 'react';
import RestaurantBanner from './Components/restaurantBanner'
import WaitlistForm from './Components/waitlistForm'
import CancelReservation from './Components/cancelReservation'

class MainContainer extends Component{

    constructor(){
        super();

        this.state={
            restaurantName: "",
            submittedForm: false,
            guestPhoneNumber: '',
            guestName: "",
            waitListPosition:''
        }
 
    }

    setUserAttributes=(user)=>{
        this.setState({
            guestName: user.guestName,
            guestPhoneNumber: user.guestPhoneNumber,
            partySize: user.partySize
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
                    <CancelReservation setFormSubmission={this.setFormSubmission}  name="BrightWok"/> : 
                
                    <WaitlistForm setUserAttributes={this.setUserAttributes}
                        setFormSubmission={this.setFormSubmission} 
                        name="BrightWok"/>}

            </Fragment> 

        )}

}

export default MainContainer
