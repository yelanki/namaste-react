 export const RestaurentCard=(details)=>{
    const det=details.details.info;
    const name=det.name;
    const cuisines=det.cuisines;
    const area=det.areaName;
    const imgId=det.cloudinaryImageId;
    return(
      <div className='res-card'>
       <img className='rest-logo' alt='food-card' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+imgId}/>
       <h3>{name}</h3>
       <h3>{area}</h3>
       <h3>{cuisines.join(', ')}</h3>
      </div>
    )
   }