import styles from "./index.module.css";
import cardDetailIcon from "../../assets/Group 11889-1.svg";
import upArrow from "../../assets/down-arrow-1.svg";
import fileStorage from "../../assets/file-storage.svg";
import Card from "../Card";
import flights from "../../assets/flights.svg";
import megaphone from "../../assets/megaphone.svg";

const RecentTransaction = () => {
  return (
    <div className={`p-4 ${styles["recent-container"]}`}>
      <div className="p-4 mb-4 d-flex justify-content-between inner-card">
        <div className="d-flex gap-2">
          <img height={24} src={cardDetailIcon} alt={"card details icon"} />
          <div className="card-details-text">Recent Transactions</div>
        </div>
        <img height={24} src={upArrow} alt={"chevron icon"} />
      </div>
      <Card
        iconBgColor={"#009DFF1A"}
        refundText={"Refund on debit card"}
        icon={fileStorage}
        priceTextColor="#01D167"
      />
      <Card
        iconBgColor={"#00D6B51A"}
        refundText={"Charged to debit card"}
        icon={flights}
      />
      <Card
        iconBgColor={"#F251951A"}
        refundText={"Charged to debit card"}
        icon={megaphone}
      />
      <Card
        iconBgColor={"#009DFF1A"}
        refundText={"Charged to debit card"}
        icon={fileStorage}
      />
      <div className="view-all-text">View All Card Transactions</div>
    </div>
  );
};

export default RecentTransaction;
