import CardAddButton from "./CartAddButton";
import { RES_URL } from "../utils/constants";
import { useContext ,useEffect} from "react";
import BillContext from "../utils/BillContext";


const CartItemCard = ({items,dummy}) => {

const {billInfo,setBill} = useContext(BillContext);


useEffect(() => {
  const totalBill = items.reduce((acc, item) => {
      const { price, defaultPrice } = item.card.info;
      return acc + (price || defaultPrice) / 100;
  }, 0);
  
  setBill(totalBill);
}, [items])
     if(items.length==0){
            return (
              <div>
                  <h1>Cart is Empty</h1>
                  <h2>Go shop</h2>
              </div>
            )
           }
    return (
      
      
        <>
        
           {items.map((item,index)=>{
          
            const {name,price,description,imageId,defaultPrice,id} = item.card.info;
           
         
            return (
                <div  key={id} className=" p-4 flex justify-between border-b-2">
                  <div className="text-left w-9/12 ">
                    
                    <h1 className="font-bold py-1">{name}</h1>
                    <h2 className="font-semibold py-1">₹ {price/100||defaultPrice/100}</h2>
                    <p className="text-slate-500">{description}</p>
                  </div>
                  <div className="relative w-3/12 h-48 px-2 mx-2 mt-1">
                 
                     <CardAddButton item={item} />
                     <img className="w-full h-40 object-cover rounded-lg" src={RES_URL+imageId}/>
                  </div>
                </div> 
            )
           })} 
        </>
    )
}

export default CartItemCard;

//whenever u want to pass arguuments in a callback function,wrap  it inside the arrow function.