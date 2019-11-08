import React from 'react';
import '../App.css'


const RestaurantBanner = (props) => {
        return(
            <div className="restaurantBanner">
                {/* <img src={props.image} alt="wok icon" /> */}
                <h1 className="restaurantHeading">{props.name}</h1>
            </div>

        )

}

export default RestaurantBanner;