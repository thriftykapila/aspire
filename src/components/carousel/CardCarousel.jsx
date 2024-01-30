import React, { useEffect, useState } from "react";
import styles from "./carousel.module.css";
import Logo from "../../assets/Logo-2.svg";
import Visa from "../../assets/VisaLogo.svg";
import Eye from "../../assets/remove_red_eye-24px.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const dummyData = [
  {
    cardDisplayName: "Monkey Man",
    cardNumber: "1234567899876543",
    cardExpiry: "12/24",
    cardCvv: "123",
    freeze: false,
  },
  {
    cardDisplayName: "Praveen Man",
    cardNumber: "1234567899876543",
    cardExpiry: "12/24",
    cardCvv: "123",
    freeze: false,
  },
  {
    cardDisplayName: "Beer Man",
    cardNumber: "1234567899876543",
    cardExpiry: "12/24",
    cardCvv: "123",
    freeze: false,
  },
  {
    cardDisplayName: "Lion Man",
    cardNumber: "1234567899876543",
    cardExpiry: "12/24",
    cardCvv: "123",
    freeze: false,
  },
];

const CardCarousel = () => {
  useEffect(() => {
    localStorage.setItem(
      "dummyData",
      JSON.stringify({ dummyData, currentSlide: 0 })
    );
  }, []);

  const handleSelect = (currentSlide) => {
    localStorage.setItem(
      "dummyData",
      JSON.stringify({ dummyData, currentSlide: currentSlide })
    );
  };

  const CardRender = (displayName, cardNumber, expiryDate) => {
    const [showCardNumber, setShowCardNumber] = useState(false);
    const newObj = JSON.parse(localStorage.getItem("dummyData"));
    const checkFreeze = newObj?.dummyData[newObj?.currentSlide]?.freeze;
    console.log(checkFreeze);

    const handleOnClickShowNumber = () => {
      setShowCardNumber((prevState) => !prevState);
    };
    const last4Digit = cardNumber.slice(12, 16);
    return (
      <div className={styles["container"]}>
        <div className={styles["card-number-container"]}>
          {!checkFreeze && (
            <div
              className={styles["show-card-number"]}
              onClick={handleOnClickShowNumber}
            >
              <span>
                <img
                  src={Eye}
                  alt="red eye"
                  className={styles["red-eye"]}
                ></img>
              </span>
              <span>
                {showCardNumber ? `Hide card number` : `Show card number`}
              </span>
            </div>
          )}
        </div>
        <div
          className={`${styles["carousel-card"]} ${
            checkFreeze ? styles["card-freeze"] : ""
          }`}
        >
          <div className={styles["carousel-logo"]}>
            <img src={Logo} className={styles["logo-size"]} alt="aspire"></img>
          </div>
          <div className={styles["card-detail"]}>
            <p className={styles["card-member-name"]}>{displayName}</p>
            <p className={styles["card-number"]}>
              {showCardNumber ? cardNumber : `.... .... .... ${last4Digit}`}
            </p>
            <div className={styles["card-other-detail"]}>
              <p>Thru: {expiryDate} </p>
              <p>
                CVV: <span className={styles["card-cvv"]}></span> ***
              </p>
            </div>
          </div>
          <div className={styles["carousel-logo-visa"]}>
            <img src={Visa} className={styles["logo-size"]} alt="visa"></img>
          </div>
        </div>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: handleSelect,
  };

  return (
    <div className="d-flex justify-content">
      <Slider {...settings} className={styles["carousel-container"]}>
        {dummyData.map((card) => {
          return CardRender(
            card.cardDisplayName,
            card.cardNumber,
            card.cardExpiry
          );
        })}
      </Slider>
    </div>
  );
};
export default CardCarousel;
