import ActionTray from "../../MobileView/ActionTray";
import CardDetails from "../../MobileView/CardDetails";
import RecentTransaction from "../../MobileView/RecentTransaction";
import CardCarousel from "../../components/carousel/CardCarousel";
import "./index.css";

const CardContainer = () => {
  return (
    <div className="row card-container-desktop">
      <div className="col-md-3 col-lg-6 col-sm-3">
        <CardCarousel />

        <ActionTray isDesktopView={true} />
      </div>
      <div className="col-6">
        <CardDetails />
        <RecentTransaction />
      </div>
    </div>
  );
};

export default CardContainer;
