import "./index.css";
import Logo from "../../assets/Logo-1.svg";
import Pay from "../../assets/pay.svg";
import Payments from "../../assets/Payments.svg";
import Credit from "../../assets/Credit.svg";
import Account from "../../assets/Account.svg";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="nav-link">
        <img src={Logo} alt={"Home"} />
        <div className="inactive-text">Home</div>
      </div>
      <div className="nav-link">
        <img src={Pay} alt={"Pay"} />
        <div className="active-text">Cards</div>
      </div>
      <div className="nav-link">
        <img src={Payments} alt={"Payments"} />
        <div className="inactive-text">Payment</div>
      </div>
      <div className="nav-link">
        <img src={Credit} alt={"Credit"} />
        <div className="inactive-text">Credit</div>
      </div>
      <div className="nav-link">
        <img src={Account} alt={"Account"} />
        <div className="inactive-text">Profile</div>
      </div>
    </div>
  );
};

export default Footer;
