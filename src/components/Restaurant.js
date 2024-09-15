import ItemCard from "./ItemCard";


const Restaurant = ({item,showItems,button,setShowIndex,dummy})=>{
   
    const {title,itemCards}=item.card.card;

     handleClick = ()=>{
      
      setShowIndex();
    }
  
    return (
        <>
               <div className="h-auto border-2 border-solid m-6 rounded-lg">
                     <div className="border border-solid flex justify-between p-5 cursor-pointer bg-gray-200 hover:bg-gray-300" onClick={handleClick}>
                       <div className="font-bold text-lg" key={title}>{title} ({itemCards.length})</div>
                       <div className="text-lg">{button}</div>
                     </div>
                    {showItems && <ItemCard dummy={dummy}  items={itemCards}/>}
                   
                   </div>
        </>
    )
}

export default Restaurant;