import {RES_URL} from "../utils/constants";

const ResCard = (props)=>{
    const {resData}=props;
    const {name,cuisines,costForTwo,avgRating,slaString,cloudinaryImageId}=resData.info;
    return (
        <div className="res-card">
           <div className="res-logo">
              <img className="res-image" alt="res-image" src={RES_URL+cloudinaryImageId}/>
           </div>
           <div className="res-info">
              <h2>{name}</h2>
              <h3>{cuisines.slice(0,7).join(", ")}</h3>
              <h3>{slaString}</h3>
              <h3>{costForTwo}</h3>
              <h3>{avgRating}</h3>
           </div>
        </div>
    )
}

export default ResCard;