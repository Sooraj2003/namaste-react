import { useContext, useState } from "react";
import BillContext from "../utils/BillContext";
const CardAddButton = ({item})=>{
    const [itemCount,setItemCount] = useState(1);
    const {billInfo,setBill} = useContext(BillContext);

    return (
        <div className="flex z-1 absolute top-36 right-[30px] bg-green-400 text-white font-semibold mx-2 px-6 my-1 py-1 rounded-lg hover:bg-green-600" >
                     <button className="p-1" onClick={()=>{
                        if(itemCount>0){
                            setItemCount(itemCount-1);
                        setBill(billInfo-((item.card.info.price||item.card.info.defaultPrice)/100))
                        }
                        
                     }}>-</button>
                     <button className="p-1">{itemCount}</button>
                     <button className="p-1" onClick={()=>{
                       
                           setItemCount(itemCount+1);
                        setBill(billInfo+((item.card.info.price||item.card.info.defaultPrice)/100))
                      
                        
                     }}>+</button>
                    </div>
    )
}

export default CardAddButton;