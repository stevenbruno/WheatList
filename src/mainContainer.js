import React, {Component} from 'react';
import RestaurantBanner from './Components/restaurantBanner'
import WaitlistForm from './Components/waitlistForm'
import CancelReservation from './Components/cancelReservation'

class MainContainer extends Component{

    constructor(){
        super();

        this.state={
            name: "",
            imgSrc:"",
            submittedForm: false
        }
 
    }

    setFormSubmission=(submission)=>{
        if(!this.state.submittedForm){
            this.setState({
                submittedForm: true
            })
        }
    }

    render(){
        return(
            <div>
                <RestaurantBanner
                name="BrightWok" 
                image="https://d253b1eioa5z7b.cloudfront.net/venue_images/medium_3049ae72-2cef-4ba3-b3eb-9f439e27cf3a.jpg"
                />
               {this.state.submittedForm ?  <CancelReservation name="BrightWok"/>: <WaitlistForm setFormSubmission={this.setFormSubmission} name="BrightWok"/>}
            </div>

        )}

}

export default MainContainer
