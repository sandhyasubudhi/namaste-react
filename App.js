import React from "react";
import ReactDOM from "react-dom/client";

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
    <div
      style={{
        backgroundColor: "lightgray",
        width: "fit-content",
        padding: "10px",
      }}
    >
      <img
        src="https://www.thespruceeats.com/thmb/SalyKjzBU-K1Bv-FTFWnbd6ckjY=/2121x1414/filters:fill(auto,1)/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg"
        style={{ width: "200px" }}
      />
      <p>Hotel Paradise</p>
      <div style={{display:'flex', justifyContent:'flex-start'}}>
        <p style={{ padding: '10px'}}>*4.5</p>
        <p style={{padding: '10px'}}>30-35 mins</p>
      </div>
      <h3>Chinese, South Indian, North Indian</h3>
      <h3>Gachibowli, Hyderabad</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-container" style={{ padding: "10px" }}>
        Search
      </div>
      <div className="restaurant-container">
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
