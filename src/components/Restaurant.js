import ItemCard from "./ItemCard";
import { useState } from "react";

const Restaurant = ({item})=>{
    const [showItems,setShowItems] = useState(true);
    const [button,setButton] = useState("🔼");

    const handleClick = ()=>{
        setShowItems(!showItems);
        if(button=="🔼"){
            setButton("🔽")
        }else{
            setButton("🔼")
        }
    }
    return (
        <>
               <div className="h-auto border-2 border-solid m-6 rounded-lg">
                     <div className="border border-solid flex justify-between p-5 cursor-pointer bg-gray-200 hover:bg-gray-300" onClick={handleClick}>
                       <div className="font-bold text-lg" key={item.card.card.title}>{item.card.card.title}</div>
                       <div className="text-lg">{button}</div>
                     </div>
                    {showItems && <ItemCard  items={item.card.card.itemCards}/>}
                   
                   </div>
        </>
    )
}

export default Restaurant;