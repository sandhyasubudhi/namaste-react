import StarsIcon from "@mui/icons-material/Stars";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const RestaurantCard = (props) => {
  const { name, avgRating, cloudinaryImageId, time, cuisines, areaName } = props?.restData;
  return (
    <div className="rest-card">
      
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        className="rest-img"
      />
      <div className="rest-content">
        <h1 className="rest-name">{name}</h1>
        <h2 className="rest-rating-time">
          <StarsIcon
            style={{ fontSize: 25, marginRight: "2px", color: "green" }}
          />
          {avgRating}
          <FiberManualRecordIcon style={{ fontSize: 10, margin: "0px 5px" }} />
          {time}
        </h2>
        <p className="rest-cuisine">{cuisines}</p>
        <p className="rest-address">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
