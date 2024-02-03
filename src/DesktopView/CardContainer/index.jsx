import ActionTray from "../../MobileView/ActionTray";
import CardDetails from "../../MobileView/CardDetails";
import RecentTransaction from "../../MobileView/RecentTransaction";
import CardCarousel from "../../components/carousel/CardCarousel";
import styles from "./index.css";

const CardContainer = () => {
  return (
    <div className={`${styles["card-shell"]}`}>
      <div className={`${styles["card-inner"]}`}>
        <CardCarousel />

        <ActionTray isDesktopView={true} />
      </div>
      <div className={`${styles["card-group"]}`}>
        <CardDetails />
        <RecentTransaction />
      </div>
    </div>
  );
};

export default CardContainer;
