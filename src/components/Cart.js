import { useDispatch, useSelector } from "react-redux";
import CartItemCard from "./CartIemCard";
import { useContext } from "react";
import BillContext from "../utils/BillContext";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{

    const items = useSelector((store)=>store.cart.items);

    //const store = useSelector((store)=>store)
    //const items = store.cart.items;
    //it reduces the performance of the application,why re rendering the component whenever there is change in the store
   
    const {billInfo,setBill} = useContext(BillContext);
    const dispatch = useDispatch();
    
    const handleClearCart = ()=>{
       dispatch(clearCart());
    }
    if(items.length==0){
        return (
          <div className="mx-auto my-10 p-2 w-6/12 bg-gray-200 h-40 text-center rounded-xl ">
              <h1 className="font-bold text-3xl m-2 p-2">Cart is Empty</h1>
              <h2 className="font-semibold text-2xl m-2 p-2">Go and shop to fill your tummy</h2>
          </div>
        )
       }
    return (
        <div className="mx-auto my-6 p-4 rounded-md text-center w-6/12 bg-gray-200 border-2 border-black border-solid"> 
            <h1 className="font-bold text-2xl">Cart</h1>
            <CartItemCard items={items}/>
            <div className="flex m-2 p-2 justify-between bg-gray-400 rounded-lg">
                <h1 className="text-xl font-bold">Total Bill : ₹ {billInfo}</h1>
                <button className="bg-green-400 text-white px-2 rounded-2xl hover:bg-green-300">Proceed to checkout</button>
            </div>
            <div>
                <button className="m-2 p-2 bg-black text-white font-semibold rounded-lg hover:bg-slate-500"
                 onClick={handleClearCart}
                >Clear Cart</button>
            </div>
        </div>
    )
}

export default Cart;