import {RES_URL} from "../utils/constants";

const ResCard = (props)=>{
    const {resData}=props;
    const {name,cuisines,costForTwo,avgRating,slaString,cloudinaryImageId}=resData.info;
    return (
        <div className="m-8 p-4 w-56 bg-gray-200 h-80 hover:bg-gray-300 rounded-xl ">
           <div className="">
              <img className="w-52 h-24 rounded-lg" alt="res-image" src={RES_URL+cloudinaryImageId}/>
           </div>
           <div className="p-2 ">
            <div>
              <h2 className="font-bold">{name}</h2>
              <h3 className="text-slate-500">{cuisines.slice(0,5).join(", ")}</h3>
              </div>
              {/* <h3>{slaString}</h3> */}
              <div>
              <h3 className="font-semibold">{costForTwo}</h3>
              <h3 className="text-red-500">{avgRating}</h3>
              </div>
           </div>
        </div>
    )
}

export const withPromoted = (ResCard)=>{
  return (props)=>{
   console.log({...props});
   
   return (
      <div className="relative">
      <label className="absolute bg-green-200 text-slate-900 font-semibold rounded-md p-2 left-8">Open</label>
      {/* this is equivalent to resData={resData}  */}
      <ResCard {...props}/>
      </div>
   )
  }
}

export default ResCard;