import Popup from "reactjs-popup";
import React, { useState } from "react";

export default function Contact() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSendClick = () => {
    // You can perform any additional actions here if needed

    // Show the popup after clicking the button
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="formContainer">
        <div className="mb-4">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="form-control" />
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" className="form-control" />
        </div>
        <div className="mb-4">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" rows="4"></textarea>
        </div>
        <Popup open={isPopupOpen} closeOnDocumentClick onClose={closePopup}>
          <div className="popup-content">
            <p>Thank you for contacting us! We will get back to you shortly.</p>
            <button onClick={closePopup} className="popup-send-button">
              Close
            </button>
          </div>
        </Popup>
        <div className="popup-content">
          <button
            onClick={handleSendClick}
            className="popup-send-button mb-4"
            block>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
