import React from 'react';
import '../App.css'


const RestaurantBanner = (props) => {
        return(
            <div className="restaurantBanner">
                {/* <img className="restaurantImage" src={props.image}></img> */}
                <h1 className="restaurantHeading">{props.name}</h1>
            </div>

        )

}

export default RestaurantBanner;