import { RestaurentCard } from "./RestaurantCard";
import { restaurants } from "../../util.js/resdetails";

export const Body=()=>{
     return (
      <div className='body'>
      <div className='search'>Search</div>
      <div className='rest-container'>
        {restaurants.map((restaurant) => {
  return <RestaurentCard key={restaurant.id} details={restaurant} />;
         })}
      </div>
      </div>
     )

   };