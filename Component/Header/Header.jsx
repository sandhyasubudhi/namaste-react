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

export default Header;
