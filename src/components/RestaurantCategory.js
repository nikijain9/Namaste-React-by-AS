const RestaurantCategory = ({data}) => {
    console.log(data);
    
    return (
        <div>
            <div className="categories w-1/2 mx-auto my-4 shadow-lg bg-gray-100 p-2 flex justify-between">
                <span className="font-bold">{data.title} ({data?.itemCards?.length || data?.categories?.length})</span>
                <span>⬇️</span>
            </div>
        </div>
    )
}

export default RestaurantCategory;