import { APP_LOGO, CART_LOGO } from "../../utils/commonURLs";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={APP_LOGO} />
      </div>
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <img src={CART_LOGO} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
