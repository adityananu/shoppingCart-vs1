import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "./data";
import { useState } from "react";

function filterData(searchText,restaurants,e)
    {
      e.preventDefault();
        const filterData = restaurants.filter((restaurant) => restaurant.data.name.toLowerCase().includes(searchText));
        return filterData;
    }
 export default function Body()
 {
  const [restaurants,setRestaurant]=useState(restaurantList);
  const [searchText,setSearchText]=useState();
  console.log(searchText)
    return (
        <>
        <form onSubmit={filterData}>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="search" value={searchText} onChange={(e) => setSearchText(e.target.value) }/>
            <button className="search-btn" onClick={(e) => {const data = filterData(searchText,restaurants,e); setRestaurant(data);}}>search</button>
        </div>
      <div className="restaurantList">
        {restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
      </form>
      </>
    ); 
  };


    