// function Navbar() {
//   return (
//     <nav>
//       <h3>Lasom</h3>
//       <ul>
//         <li>Home</li>
//         <li>Category</li>
//         <li>Trending now</li>
//         <li>About Us</li>
//       </ul>
//       <div></div>
//     </nav>
//   );
// }

// export default Navbar;

// import {
//   FaSearch,
//   FaUserAlt,
//   FaShoppingCart,
//   FaUserCircle,
// } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./../Styles/navbar.css";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Lasom</h1>
      </div>
      <div className={`navbar-search ${isMenuOpen ? "open" : ""}`}>
        <ul className="navbar-list">
          <Link className="links" to="/">
            <li>Home</li>
          </Link>

          <li>Category</li>
          <li>Trending now</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="navbar-icons">
        <CgProfile className="icon" />
        <CiSearch className="icon" />
        <MdOutlineShoppingCart className="icon" />
        <button className="contact-button">Contact Us</button>
        <IoIosMenu className="menu-icon " onClick={toggleMenu} />
      </div>
    </nav>
  );
}

export default Navbar;
