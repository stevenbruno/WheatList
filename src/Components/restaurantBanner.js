import React from 'react';
import '../App.css'


const RestaurantBanner = (props) => {
        return(
            <div>
                <div class="restaurantBanner">
                    <img src={props.image}></img>
                </div>
                <h1 class="restaurantHeading">{props.name}</h1>
            </div>

        )

}

export default RestaurantBanner;