import { useEffect, useState,useContext } from "react";
import ResCard, { withPromoted } from "./ResCard";
import Shimmer from "./Shimmer"
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = ()=>{
    // state powerful variable
       
      const [listOfRestaurants,setListOfRestaurants]=useState([]);
      const [value,setValue] = useState("");
      const [listOfSearchedRestaurants,setListOfSearchedRestaurants]=useState([]);

      const onlineStatus = useOnlineStatus();

      useEffect(()=>{
        fetchData();
      },[]);

      const {userInfo,setUserName} = useContext(UserContext);

      const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8996676&lng=77.4826837&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
           
            
            const restaurants = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            
            if (restaurants) {
                setListOfRestaurants(restaurants);
                setListOfSearchedRestaurants(restaurants);
            } else {
                console.error("Unexpected API response structure");
            }
        } catch (error) {
            console.error("Failed to fetch data", error);
        }
    };
       
       
     if(onlineStatus===false){
      return <h1>hey Sweety ,your offline</h1>
     }
     const ResCardPromoted = withPromoted(ResCard);
    return listOfRestaurants.length===0 ? <Shimmer/> : (
        <div className="p-4">
           <div className="flex my-4">
            <div>
            <input data-testid="searchInput" className="px-1 ml-1 border border-black border-solid rounded-md" type="text" placeholder="search for restaurants" value={value} onChange={(e)=>setValue(e.target.value)}></input>
             <button className="px-2 bg-green-100 mx-4 rounded-lg font-semibold hover:bg-green-300" onClick={()=>{
              const filterdRestaurants = listOfRestaurants.filter((resObj)=> resObj.info.name.toLowerCase().includes(value.toLowerCase()));
              setListOfSearchedRestaurants(filterdRestaurants);
             }}>Search</button>
            </div>
             <div>
             <button className="px-2 rounded-lg font-semibold bg-gray-100 hover:bg-gray-300" onClick={()=>{
                const filterdRestaurants=listOfRestaurants.filter((resObj)=>{
                    return resObj.info.avgRating>=4.3;
                });
                setListOfSearchedRestaurants(filterdRestaurants);
                
                
              }}>Top Rated Restaurants</button>
              
             </div>
             <div className="mx-2">
                <input type="text" className="border border-black" value={userInfo} onChange={(e)=>setUserName(e.target.value)}/>
              </div>
            
           </div>
           <div className="flex flex-wrap">
            {listOfSearchedRestaurants.map((restaurant)=>{
                // no key << index as key << unique id as key
                return <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}>
                  {restaurant.info.isOpen?<ResCardPromoted resData={restaurant}/>:<ResCard  resData={restaurant}/>}
                       
                  </Link>
            })}
           </div>
        </div>
    )
}

export default Body;

// higher order components 
 // takes a component as a input ,enhances it and returns a new component