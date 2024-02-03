import styles from "./desktopHeader.module.css";
import box from "../../assets/box1.svg";
import CardContainer from "../CardContainer";
import { Modal, Button } from "react-bootstrap";
import {
  generateRandom12DigitNumber,
  generateRandomMMYY,
} from "../../utils/utils";
import { useDispatch } from "react-redux";
import { addCard } from "../../features/account/accountSlice";
import { useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");

  const handleNewCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setUserName("");
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSaveCard = () => {
    let cardData = {
      cardDisplayName: userName,
      cardNumber: generateRandom12DigitNumber(),
      cardExpiry: generateRandomMMYY(),
      cardCvv: "123",
      freeze: false,
    };
    dispatch(addCard(cardData));
    handleCloseModal();
  };
  return (
    <div className={`p-4 mt-4 ${styles["header-container"]}`}>
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="mb-3">Available Balance</div>
      </div>
      <div className="d-flex justify-content-between align-items-center w-75">
        <div className="d-flex align-items-center justify-content-center">
          <div className=" dollar-symbol">S$</div>
          <div className="dollar-value">3,000</div>
        </div>
        <div className={`me-3 ${styles["new-card-btn1"]}`}>
          <img
            src={box}
            alt={"icon for adding new card"}
            onClick={handleNewCardClick}
          />
          <span onClick={handleNewCardClick}>New Card</span>
        </div>
      </div>
      <div className="d-flex mt-4 mb-2 gap-3">
        <div className="fw-bold active-nav">My debit Cards</div>
        <div className="opacity-50">All Company Cards</div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enter Card Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="form-control"
            placeholder="Card Name"
            value={userName}
            onChange={handleUserNameChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveCard}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <CardContainer />
    </div>
  );
};

export default Header;
