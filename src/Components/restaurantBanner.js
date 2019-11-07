import React from 'react';
import '../App.css'


const RestaurantBanner = (props) => {
        return(
            <div>
                <div className="restaurantBanner">
                    <img src={props.image}></img>
                </div>
                <h1 className="restaurantHeading">{props.name}</h1>
            </div>

        )

}

export default RestaurantBanner;