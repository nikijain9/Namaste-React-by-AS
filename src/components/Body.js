import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6010921&lng=73.7641245&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // if(listOfRestaurants.length === 0) {
    //     return <Shimmer />
    // }
    
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
            <button
            onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.5
                    );
                    setListOfRestaurants(filteredList);
                }}
            >
            Top Rated Restaurants
            </button>
            </div>

            <div className="resContainer">
                {
                    listOfRestaurants.map((restaurant) => {
                        return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    })
                }
            </div>
        </div>
    )
}
export default Body;
