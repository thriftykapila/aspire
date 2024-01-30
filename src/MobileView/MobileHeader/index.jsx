import "./header.css";
import addButton from "../../assets/box.svg";
import Logo from "../../assets/Logo.svg";
const Header = () => {
  return (
    <div className="p-4 header-container">
      <div className="d-flex justify-content-between align-items-center">
        <div className="mb-3">Account Balance</div>
        <img src={Logo} alt={"logo"} />
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div className=" dollar-symbol">S$</div>
          <div className="dollar-value">3,000</div>
        </div>
        <div className="d-flex">
          <img src={addButton} alt={"icon for adding new card"} />
          <div className="new-card-btn">New Card</div>
        </div>
      </div>
      <div className="d-flex mt-4 mb-2 gap-3">
        <div className="fw-bold active-nav">My Debit Cards</div>
        <div className="opacity-50">All Company Cards</div>
      </div>
    </div>
  );
};

export default Header;
