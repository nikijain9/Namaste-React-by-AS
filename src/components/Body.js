import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"

const Body = () => {
    return (
        <div className="body">
            <div className="filter">
            Search
            </div>

            <div className="resContainer">
                {
                    resList.map((restaurant) => {
                        return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    })
                }
            </div>
        </div>
    )
}
export default Body;