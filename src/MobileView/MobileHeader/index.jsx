import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./header.css";
import addButton from "../../assets/box.svg";
import Logo from "../../assets/Logo.svg";
import {
  generateRandom12DigitNumber,
  generateRandomMMYY,
} from "../../utils/utils";
import { useDispatch } from "react-redux";
import { addCard } from "../../features/account/accountSlice";

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
    <div className="p-4 header-container">
      <div className="d-flex justify-content-between align-items-center">
        <div className="mb-3">Account Balance</div>
        <img src={Logo} alt={"logo"} />
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div className=" dollar-symbol">S$</div>
          <div className="dollar-value">3,000</div>
        </div>
        <div className="d-flex">
          <img
            src={addButton}
            alt={"icon for adding new card"}
            onClick={handleNewCardClick}
          />
          <div className="new-card-btn" onClick={handleNewCardClick}>
            New Card
          </div>
        </div>
      </div>
      <div className="d-flex mt-4 mb-2 gap-3">
        <div className="fw-bold active-nav">My Debit Cards</div>
        <div className="opacity-50">All Company Cards</div>
      </div>

      {/* Modal for User Name Input */}
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
    </div>
  );
};

export default Header;
