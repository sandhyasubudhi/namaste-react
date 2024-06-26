import StarsIcon from "@mui/icons-material/Stars";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { REST_IMG_URL } from "../../utils/commonURLs";

const RestaurantCard = (props) => {
  const { name, avgRating,sla, cloudinaryImageId, time, cuisines, areaName } =
    props?.restData;
  return (
    <div className="rest-card">
      <img src={REST_IMG_URL + cloudinaryImageId} className="rest-img" />
      <div className="rest-content">
        <h1 className="rest-name">{name}</h1>
        <h2 className="rest-rating-time">
          <StarsIcon
            style={{ fontSize: 25, marginRight: "2px", color: "green" }}
          />
          {avgRating}
          <FiberManualRecordIcon style={{ fontSize: 10, margin: "0px 5px" }} />
          {sla?.slaString}
        </h2>
        <p className="rest-cuisine">{cuisines.join(", ")}</p>
        <p className="rest-address">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
