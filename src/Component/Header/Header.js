import React from "react";
import './Header.css'
import logo from "../../images/323925907_878557583291529_2106023674976744226_n-removebg-preview.png";

const Header = () => {
   return (
      <nav className="header">
         <img src={logo} alt="" />
         <div>
            <a href="/shop">Shop</a>
            <a href="/orders">Orders</a>
            <a href="Inventory">Inventory</a>
            <a href="About">About</a>
         </div>
      </nav>
   );
};

export default Header;
