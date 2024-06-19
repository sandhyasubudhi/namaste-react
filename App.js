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
    <div
      style={{
        width: "300px",
        padding: "10px",
        boxSizing:'border-box'
      }}
    >
      <img
        src="https://www.thespruceeats.com/thmb/SalyKjzBU-K1Bv-FTFWnbd6ckjY=/2121x1414/filters:fill(auto,1)/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg"
        style={{ width: "300px", maxWidth: "100%", height: "auto", borderRadius: "20px"}}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          margin: "0",
          padding: "0",
        }}
      >
        <h1
          className="no-margin-padding"
          style={{ margin: "1rem 0rem 0.5rem 0rem" }}
        >
          Hotel Paradise
        </h1>
        <h2
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0px",
            margin: "0px 0px 10px 0px",
          }}
        >
          <StarsIcon
            style={{ fontSize: 25, marginRight: "2px", color: "green" }}
          />
          4.5
          <FiberManualRecordIcon style={{ fontSize: 15, margin: "0px 5px" }} />
          30-35 mins
        </h2>
        <p
          className="no-margin-padding"
          style={{
            marginBottom: "5px",
            fontSize: "1.25rem",
            color: "#676a6d",
          }}
        >
          Chinese, South Indian, North Indian
        </p>
        <p
          className="no-margin-padding"
          style={{
            marginBottom: "5px",
            fontSize: "1.25rem",
            color: "#676a6d",
          }}
        >
          Gachibowli, Hyderabad
        </p>
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
      <div className="restaurant-container" style={{ display: 'flex',flexDirection:'row',flexWrap: 'wrap' }}>
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
