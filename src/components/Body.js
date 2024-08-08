import restaurants from "../utils/mockData";
import ResCard from "./ResCard";


const Body = ()=>{
    return (
        <div className="body">
           <div className="search">
           Search
           </div>
           <div className="res-container">
            {restaurants.map((restaurant,index)=>{
                // no key << index as key << unique id as key
                return <ResCard key={restaurant.info.id} resData={restaurant}/>
            })}
           </div>
        </div>
    )
}

export default Body;