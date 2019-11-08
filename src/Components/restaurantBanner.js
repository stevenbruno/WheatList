import React from 'react';
import '../App.css'


const RestaurantBanner = (props) => {
        return(
            <div className="restaurantBanner">
                <h1 className="restaurantHeading">{props.name}</h1>
            </div>

        )

}

export default RestaurantBanner;