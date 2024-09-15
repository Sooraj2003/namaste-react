import { useDispatch, useSelector } from "react-redux";
import { RES_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemCard = ({items,dummy}) => {

    
    //prop drilling - passing on the data from the parent components to its deeper child components
    const dispatch = useDispatch();
    const handleAddItem = (item)=>{
      dispatch(addItem(item));
    }

    const cartItems = useSelector((store)=>store.cart.items);
    
    
  
  
   
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
                 
                    <button className="z-1 absolute top-36 right-1/4 bg-green-400 text-white font-semibold mx-2 px-6 my-1 py-1 rounded-lg hover:bg-green-600" onClick={()=>handleAddItem(item)}>Add</button>
                     <img className="w-full h-40 object-cover rounded-lg" src={RES_URL+imageId}/>
                  </div>
                </div> 
            )
           })} 
        </>
    )
}

export default ItemCard;

//whenever u want to pass arguuments in a callback function,wrap  it inside the arrow function.