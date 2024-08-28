
import {useParams} from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemCard from "./ItemCard";
import { useState } from "react";
import Restaurant from "./Restaurant";


const RestaurantInfo = () => {
    
    const {resId} = useParams();
    const [resInfo,resMenu] = useRestaurantMenu(resId);
    const [showItems,setShowItems] = useState(true);

    const handleClick = ()=>{
        setShowItems(false);
    }
    
    
 
    if(resMenu===undefined || resInfo===undefined || resMenu.length===0){
        return <Shimmer/>
    }

    const {name,costForTwoMessage,cuisines}=resInfo;
    console.log(resMenu);

    const categories = resMenu.filter((c)=>{
        return c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    });
    console.log(categories);
    
    return (
        <div className="text-center m-4 p-4 ">
            <h1 className="font-bold text-xl p-2">{name}</h1>
            <h2 className="font-semibold text-lg p-2">{cuisines?.join(", ")}</h2>
            <h3 className="font-semibold p-2">{costForTwoMessage}</h3>
            <div className="mx-auto w-7/12  ">
                {categories.map((item)=>  (
                   <Restaurant item={item}/>
                ) )}
                
            </div>
        </div>
    )
}
//if u want to center a div,use margin auto provided with the width 
export default RestaurantInfo;