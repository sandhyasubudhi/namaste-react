
import { useEffect, useState } from "react";
import { listOfRestaurant } from "../../utils/restData";
import RestaurantCard from '../common-component/RestaurantCard'

const Body = () => {
  const [restList, setRestList] = useState([])
  const [restData, setRestData] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(async () => {
    const restaurantData = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await restaurantData.json()
    //Optional Chaining
    setRestList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setRestData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }, [])

  return restData?.length === 0 ? <div>Loading...</div> : (
    <div className="body">
      <div className="search-container" style={{ padding: "10px" }}>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => {
          const filteredData = restList.filter((data) => data?.info?.name?.toLowerCase()?.includes(search?.toLowerCase()))
          setRestData(filteredData)
        }}>Search</button>
      </div>
      <div
        className="restaurant-container"
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {restData.map((rest) => (<RestaurantCard key={rest?.info?.id} restData={rest?.info} />))}
      </div>
    </div>
  );
};

export default Body;
