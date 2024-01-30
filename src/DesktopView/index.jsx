import styles from "./desktop.module.css";
import Logo from "../assets/MainLogo.svg";
import home from "../assets/Logo-1.svg";
import Pay from "../assets/pay.svg";
import Payments from "../assets/Payments.svg";
import Credit from "../assets/Credit.svg";
import Account from "../assets/Account.svg";
import DesktopHeader from "./DesktopHeader";
export const DesktopView = () => (
  <div className="row w-100">
    <div className="col-3">
      <div className={`${styles["nav-container"]}`}>
        <img src={Logo} alt={"logo"} />
        <div className={`${styles["logo_subheading"]}`}>
          Trusted way of banking for 3,000+
          <br />
          SMEs and startups in Singapore
        </div>

        <div className="mt-5 d-flex flex-column gap-5">
          <div className="d-flex gap-3 my-2">
            <img src={home} alt={"home icon"} />
            <div className={`${styles["inactive-text"]}`}>Home</div>
          </div>
          <div className="d-flex gap-3 my-2">
            <img src={Pay} alt={"home icon"} />
            <div className={`${styles["active-text"]}`}>Cards</div>
          </div>
          <div className="d-flex gap-3 my-2">
            <img src={Payments} alt={"home icon"} />
            <div className={`${styles["inactive-text"]}`}>Payments</div>
          </div>
          <div className="d-flex gap-3 my-2">
            <img src={Credit} alt={"home icon"} />
            <div className={`${styles["inactive-text"]}`}>Credit</div>
          </div>
          <div className="d-flex gap-3 my-2">
            <img src={Account} alt={"home icon"} />
            <div className={`${styles["inactive-text"]}`}>Home</div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-9">
      <DesktopHeader />
    </div>
  </div>
);
