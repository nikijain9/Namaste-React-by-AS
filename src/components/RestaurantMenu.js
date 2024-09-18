import React from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const data = resInfo?.cards[2]?.card?.card?.info;
    const resItem = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (category) => {
                const desiredTypes = [
                    "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
                ]
                return desiredTypes.includes(category?.card?.card?.["@type"]);
        }
    )
    console.log("catogories", categories);

    // Somehow the below destructuring method doesn't seem to work
    // const {name, city, cuisines, costForTwoMessage, avgRatingString} = resInfo?.cards[2]?.card?.card?.info;    

    return resInfo === null ? (
        < Shimmer />
    ) :
    (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{data.name}</h1>
            <p className="font-bold text-lg">{data.cuisines.join(", ")} - {data.costForTwoMessage}</p>
            {categories.map((category) => (
                    <RestaurantCategory data={category.card.card}/>
                )
            )}
        </div>
    )
}

export default RestaurantMenu;