import StarsIcon from "@mui/icons-material/Stars";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

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

  export default RestaurantCard;