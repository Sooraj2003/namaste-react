import { useState,useEffect } from "react";
import {MENU_API} from "./constants"
const useRestaurantMenu = (resId)=>{
    const [resInfo,setResInfo] = useState({});
    const [resMenu,setResMenu] = useState([]);
    useEffect(()=>{
        fetchInfo();
        
      },[]);
       
      const fetchInfo = async ()=>{
        const data = await fetch(MENU_API+resId);
        const jsonData = await data.json();
    
        setResInfo(jsonData?.data?.cards?.[2]?.card?.card?.info);
        setResMenu(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        
        
        }
      
        
    return [resInfo,resMenu]
}

export default useRestaurantMenu;