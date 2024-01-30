import CardCarousel from "../components/carousel";
import Header from "./MobileHeader";

import "./mobileView.css";
import Footer from "./Footer";
import ScrollView from "./ScrollView";

export const MobileView = () => (
  <div className="mobileContainer">
    <Header />
    <div className="card-carousel">
      <CardCarousel />
    </div>
    <ScrollView />
    <Footer />
  </div>
);
