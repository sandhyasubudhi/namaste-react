import StarsIcon from "@mui/icons-material/Stars";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const RestaurantCard = (props) => {
  const { name, rating, time, cuisines, address } = props?.restData;
  return (
    <div className="rest-card">
      <img
        src="https://www.thespruceeats.com/thmb/SalyKjzBU-K1Bv-FTFWnbd6ckjY=/2121x1414/filters:fill(auto,1)/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg"
        className="rest-img"
      />
      <div className="rest-content">
        <h1 className="rest-name">{name}</h1>
        <h2 className="rest-rating-time">
          <StarsIcon
            style={{ fontSize: 25, marginRight: "2px", color: "green" }}
          />
          {rating}
          <FiberManualRecordIcon style={{ fontSize: 10, margin: "0px 5px" }} />
          {time}
        </h2>
        <p className="rest-cuisine">{cuisines}</p>
        <p className="rest-address">{address}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
