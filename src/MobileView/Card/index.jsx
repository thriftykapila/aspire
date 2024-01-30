import businessIcon from "../../assets/business-and-finance.svg";
import nextIcon from "../../assets/next.svg";
import "./index.css";

const Card = ({ icon, refundText, iconBgColor, priceTextColor = "black" }) => {
  return (
    <div className="d-flex gap-3 py-4">
      <div className="outer-icon" style={{ background: `${iconBgColor}` }}>
        <img src={icon} alt={"file storage"} />
      </div>
      <div className="card_container">
        <div className="d-flex justify-content-between">
          <div className="title">Hamleys</div>
          <div className="price-text d-flex gap-2">
            <div className="ml-auto" style={{ color: `${priceTextColor}` }}>
              + S$ 150
            </div>
            <img src={nextIcon} alt={"next"} />
          </div>
        </div>
        <div className="subTitle">20 May 2020</div>
        <div className="d-flex mt-2">
          <div className="outer-icon-sm">
            <img src={businessIcon} alt={"business icon"} />
          </div>
          <div className="refund-text">{refundText}</div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Card;
