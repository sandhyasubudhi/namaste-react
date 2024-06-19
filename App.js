import React from "react";
import ReactDOM from "react-dom/client";
import StarsIcon from "@mui/icons-material/Stars";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://th.bing.com/th/id/OIG4.LXD7mYRamHcfPZZJ8QkO?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn" />
        {/* <div>Yummy Bites</div> */}
      </div>
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <img src="https://www.iconpacks.net/icons/2/free-shopping-cart-icon-1985-thumb.png" />
          </li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="rest-card">
      <img
        src="https://www.thespruceeats.com/thmb/SalyKjzBU-K1Bv-FTFWnbd6ckjY=/2121x1414/filters:fill(auto,1)/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg"
        className="rest-img"
      />
      <div className="rest-content">
        <h1 className="rest-name">Hotel Paradise</h1>
        <h2 className="rest-rating-time">
          <StarsIcon
            style={{ fontSize: 25, marginRight: "2px", color: "green" }}
          />
          4.5
          <FiberManualRecordIcon style={{ fontSize: 10, margin: "0px 5px" }} />
          30-35 mins
        </h2>
        <p className="rest-cuisine">Chinese, South Indian, North Indian</p>
        <p className="rest-address">Gachibowli, Hyderabad</p>
      </div>
    </div>
  );
};

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

const Footer = () => {
  return <div></div>;
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
