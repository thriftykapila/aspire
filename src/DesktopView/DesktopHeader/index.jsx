import styles from "./desktopHeader.module.css";
import addButton from "../../assets/box.svg";
import Logo from "../../assets/Logo.svg";
import box from "../../assets/box1.svg";
import CardContainer from "../CardContainer";
const Header = () => {
  return (
    <div className={`p-4 mt-4 ${styles["header-container"]}`}>
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="mb-3 w-100">Available Balance</div>
        {/* <img src={Logo} alt={"logo"} /> */}
      </div>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <div className="d-flex align-items-center justify-content-between">
          <div className="col-2 dollar-symbol">S$</div>
          <div className="col-7 dollar-value">3,000</div>
          <div className={`col-2 ${styles["new-card-btn1"]}`}>
            <img src={box} alt="box" />
            New Card
          </div>
        </div>

        {/* <div className="d-flex">
          <img src={addButton} alt={"icon for adding new card"} />
          <div className="new-card-btn">New Card</div>
        </div> */}
      </div>
      <div className="d-flex mt-4 mb-2 gap-3">
        <div className="fw-bold active-nav">My debit Cards</div>
        <div className="opacity-50">All Company Cards</div>
      </div>
      <CardContainer />
    </div>
  );
};

export default Header;
