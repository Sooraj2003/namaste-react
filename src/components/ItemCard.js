import { RES_URL } from "../utils/constants";

const ItemCard = ({items}) => {
  console.log(items);
   
    return (
        <>
           {items.map((item)=>{
            const {name,price,description,imageId,defaultPrice} = item.card.info;
                  return (
                <div className=" p-4 flex justify-between border-b-2">
                  <div className="text-left w-9/12 ">
                    
                    <h1 className="font-bold py-1">{name}</h1>
                    <h2 className="font-semibold py-1">₹ {price/100||defaultPrice/100}</h2>
                    <p className="text-slate-500">{description}</p>
                  </div>
                  <div className="relative w-3/12 h-48 px-2 mx-2 mt-1">
                    <button className="z-1 absolute top-36 right-1/4 bg-green-400 text-white font-semibold mx-2 px-6 my-1 py-1 rounded-lg hover:bg-green-600">Add</button>
                     <img className="w-full h-40 object-cover rounded-lg" src={RES_URL+imageId}/>
                  </div>
                </div> 
                 )
           })} 
        </>
    )
}

export default ItemCard;