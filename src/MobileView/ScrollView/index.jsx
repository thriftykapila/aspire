import "./index.css";
import ActionTray from "../ActionTray";
import CardDetails from "../CardDetails";
import RecentTransaction from "../RecentTransaction";

const ScrollView = () => {
  return (
    <div className="scroll-container">
      <ActionTray />
      <CardDetails />
      <RecentTransaction />
    </div>
  );
};

export default ScrollView;
