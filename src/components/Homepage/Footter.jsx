import "./../Styles/footer.css";
import { CiLocationOn } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { FaRegCopyright } from "react-icons/fa";
function Footter() {
  return (
    <footer className="total-footer">
      <div className="App-description">
        <h3>Lasom</h3>
        <p>
          A jewelry ecommerce platform offering a wide range of products, aims
          to enhance its user experience to increase customer satisfaction and
          drive business growth.
        </p>
      </div>
      <div className="App-company">
        <h3>Company</h3>
        <ul>
          <li>About Us</li>
          <li>Our Story</li>
          <li>Blog</li>
          <li>Journal</li>
        </ul>
      </div>

      <div className="Help-center">
        <h3>Help</h3>
        <ul>
          <li>Customer support</li>
          <li>Delivery details</li>
          <li>Terms and condition</li>
          <li>Privacy policy</li>
        </ul>
      </div>

      <div className="contact-info">
        <h3>Contact</h3>
        <ul>
          <li>
            <CiLocationOn />
            Lagos, Nigeria
          </li>
          <li>
            <LuPhone />
            +2348123456789
          </li>
          <li>
            <CiMail />
            lasom@xyz.com
          </li>
        </ul>
      </div>

      <footer>
        <hr />
        Copyright
        <FaRegCopyright /> 2024 lasom.com. All rights reserved
      </footer>
    </footer>
  );
}

export default Footter;
