import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
    return (
        <div className="res-card m-[10px] w-[200px] p-[5px] bg-[#f0f0f0] hover:border hover:border-black hover:border-solid hover:cursor-pointer h-full">
            <img className="card-img w-full h-[170px]" src={ CDN_URL + cloudinaryImageId}/>
            <h3 className="text-lg font-bold">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;