import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredResList, setFilteredResList] = useState([]);
    const [searchText, setSearchText] = useState("");
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6010921&lng=73.7641245&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);
        const finalResList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(finalResList);
        setFilteredResList(finalResList);
    }
    
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                    type="text"
                    className="search-box" 
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    />
                    <button
                    className="search-btn"
                    onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setFilteredResList(filteredRestaurants);
                    }}
                    >
                        Search
                    </button>
                </div>
                <button
                className="res-btn"
                onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.3
                        );
                        setFilteredResList(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>

            <div className="resContainer">
                {
                    filteredResList.map((restaurant) => {
                        return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    })
                }
            </div>
        </div>
    )
}
export default Body;
