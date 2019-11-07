import React, {Component, Fragment} from 'react';
import RestaurantBanner from './Components/restaurantBanner'
import WaitlistForm from './Components/waitlistForm'

class MainContainer extends Component{

    constructor(){
        super();

        this.state={
            name: "",
            imgSrc:"",
        }
 
    }

    //get information to pass down on componentDidMount

    render(){
        return(
            <Fragment>
                <RestaurantBanner
                name="Girl and the Goat" 
                image="https://d253b1eioa5z7b.cloudfront.net/venue_images/medium_3049ae72-2cef-4ba3-b3eb-9f439e27cf3a.jpg"
                />
                
                <WaitlistForm />
            </Fragment>

        )}

}

export default MainContainer
