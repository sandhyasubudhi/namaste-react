
import { useState } from "react";
import { restaurantData } from "../../utils/restData";
import RestaurantCard from '../common-component/RestaurantCard'

const Body = () => {
  const [restData, setRestData] = useState(restaurantData);

  return (
    <div className="body">
      <div className="search-container" style={{ padding: "10px" }}>
        Search
      </div>
      <div
        className="restaurant-container"
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {restData.map((rest)=>(<RestaurantCard key={rest?.id} restData={rest}/>))}
      </div>
    </div>
  );
};

export default Body;
