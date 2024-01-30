import Reac, { useEffect, useState } from "react";
import "./index.css";
import FreezeCard from "../../assets/Freeze card.svg";
import setSpent from "../../assets/Set spend limit.svg";
import GPay from "../../assets/GPay.svg";
import Replace from "../../assets/Replace card.svg";
import Cancel from "../../assets/Deactivate card.svg";

const ActionTray = ({ borderRadiusAll }) => {
  const newObj = JSON.parse(localStorage.getItem("dummyData"));

  const [isFreezeCard, setIsFreezeCard] = useState(
    newObj?.dummyData[newObj.currentSlide].freeze
  );

  useEffect(() => {
    console.log(newObj);
    setIsFreezeCard(newObj?.dummyData[newObj.currentSlide].freeze);
  }, [JSON.parse(localStorage.getItem("currentSlide"))]);

  const handleFreezeCard = () => {
    newObj.dummyData[newObj.currentSlide].freeze =
      !newObj?.dummyData[newObj.currentSlide].freeze;
    console.log(newObj);
    localStorage.setItem("dummyData", JSON.stringify(newObj));

    setIsFreezeCard(newObj?.dummyData[newObj.currentSlide].freeze);
  };

  return (
    <div
      className={`action-tray ${
        borderRadiusAll === 4 ? "border-radius-all" : ""
      }`}
    >
      <div className="nav-link">
        <img src={FreezeCard} alt={"Freeze Card"} />
        <div className="active-text" onClick={handleFreezeCard}>
          {isFreezeCard ? `Unfreeze Card` : `Freeze Card`}
        </div>
      </div>
      <div className="nav-link">
        <img src={setSpent} alt={"Set Spent Limit"} />
        <div className="active-text">Set spend limit</div>
      </div>
      <div className="nav-link">
        <img src={GPay} alt={"Add to GPay"} />
        <div className="active-text">Add to GPay</div>
      </div>
      <div className="nav-link">
        <img src={Replace} alt={"Replace Card"} />
        <div className="active-text">Replace Card</div>
      </div>
      <div className="nav-link">
        <img src={Cancel} alt={"Cancel Card"} />
        <div className="active-text">Cancel Card</div>
      </div>
    </div>
  );
};

export default ActionTray;
