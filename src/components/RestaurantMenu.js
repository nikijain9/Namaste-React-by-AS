import React from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const data = resInfo?.cards[2]?.card?.card?.info;
    const resItem = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    
    // Somehow the below destructuring method doesn't seem to work
    // const {name, city, cuisines, costForTwoMessage, avgRatingString} = resInfo?.cards[2]?.card?.card?.info;    

    return resInfo === null ? (
        < Shimmer />
    ) :
    (
        <div>
            <h1>{data.name}</h1>
            <h3>{data.city}</h3>
            <h3>{data.cuisines}</h3>
            <h3>{data.costForTwoMessage}</h3>
            <h3>{data.avgRatingString}</h3>
            <h2>Menu</h2>
            <ul>
                {resItem.map(item => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {"Rs. "}
                        {item.card.info.price/100 || item.card.info.defaultPrice/100 }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;