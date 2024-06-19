import RestaurantCard from '../common-component/RestaurantCard'

const Body = () => {
  return (
    <div className="body">
      <div className="search-container" style={{ padding: "10px" }}>
        Search
      </div>
      <div
        className="restaurant-container"
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

export default Body;
