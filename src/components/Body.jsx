import { useState,useEffect } from "react";
import { RestaurentCard } from "./RestaurantCard";
import { restaurants } from "../../utils/resdetails";
import { Shimmer } from "./Shimmer";
import { CDN_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

 

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
 const fetchedData=await fetch(CDN_URL);
   const jsond=await fetchedData.json()
   setFilteredList(jsond?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 }

if(filterList.length===0){
  return <Shimmer/>
}
console.log('filterList',filterList)
     return (
      <div className='body'>
      <div className='filter'>
        <button className="filter-button"
         onClick={filter}
        >Filter</button>
      </div>
      <div className='rest-container'>
        {filterList.map((restaurant) => {
          console.log(restaurant.info.id)
  return <Link key={restaurant.info.id} to={"/restaurantmenu/"+restaurant.info.id}><RestaurentCard  details={restaurant} /></Link>;
         })}
      </div>
      </div>
     )

   };
   //https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
   //sample comments