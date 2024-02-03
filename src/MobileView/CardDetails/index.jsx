import "./index.css";
import cardDetailIcon from "../../assets/Group 11889.svg";
import downArrow from "../../assets/down-arrow.svg";
const CardDetails = () => {
  return (
    <div className="p-4 w-100 " style={{ background: "white" }}>
      <div className="p-4 d-flex justify-content-between inner-card">
        <div className="d-flex gap-2">
          <img height={24} src={cardDetailIcon} alt={"card details icon"} />
          <div className="card-details-text">Card Details</div>
        </div>
        <img height={24} src={downArrow} alt={"chevron icon"} />
      </div>
    </div>
  );
};

export default CardDetails;
