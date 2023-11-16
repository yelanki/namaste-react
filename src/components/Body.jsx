import { useState,useEffect } from "react";
import { RestaurentCard } from "./RestaurantCard";
import { restaurants } from "../../util.js/resdetails";

 

export const Body=()=>{
  const [filterList,setFilteredList]=useState([]);
  const filter=()=>{
       let filterd=[];
    restaurants.filter((res)=>{
        if(res.info.avgRating>4){
     filterd.push(res)
        }
    })
    setFilteredList(filterd);
 };
 useEffect(()=>{
   fetchData();
 },[]);

 const fetchData=async()=>{
 const fetchedData=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
   const jsond=await fetchedData.json()
   setFilteredList(jsond?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     console.log('d',jsond.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
 }

     return (
      <div className='body'>
      <div className='filter'>
        <button className="filter-button"
         onClick={filter}
        >Filter</button>
      </div>
      <div className='rest-container'>
        {filterList.map((restaurant) => {
          console.log(restaurant)
  return <RestaurentCard key={restaurant.id} details={restaurant} />;
         })}
      </div>
      </div>
     )

   };
   //https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
   //sample comments