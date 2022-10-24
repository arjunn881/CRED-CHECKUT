import React, { useState } from "react";
import Style from "./checkout.module.css";

const checkout = () => {
  const [card, setCard] = useState({
    cardNumber: "",
    cardHolderName: "",
    expiryDate: "",
    dob: "",
    cvv: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCard({ ...card, [name]: value });
  };

  const cardDetails = (e) => {
    e.preventDefault();
    console.log(card);
  };

  return (
    <div className={Style.concon}>
      <div className={Style.con}>
        <h1>CREDIT CARD CHECKOUT</h1>
        <div className={Style.card}>
          <div className={Style.crcard}>
            <h4>CREDIT CARD</h4>
            <h3>VISA</h3>
            <h6>Card Holder Name</h6>
            <h5>1234 5678 **** ****</h5>
            <span>Exp - 11/30</span>
          </div>
        </div>
        <div className={Style.page}>
          <form>
            <div className={Style.input}>
              <label htmlFor="cardNumber">Credit Card Number</label>
              <input
                type="number"
                id="cardNumber"
                name="cardNumber"
                value={card.cardNumber}
                onChange={handleInput}
              />
            </div>

            <div className={Style.input}>
              <label htmlFor="cardHolderName">Card Holder Name</label>
              <input
                type="text"
                id="cardHolderName"
                name="cardHolderName"
                value={card.cardHolderName}
                onChange={handleInput}
              />
            </div>

            <div className={Style.input}>
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="month"
                id="expiryDate"
                name="expiryDate"
                value={card.expiryDate}
                onChange={handleInput}
              />
            </div>

            <div className={Style.input}>
              <label htmlFor="dob">DOB</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={card.dob}
                onChange={handleInput}
              />
            </div>
            <div className={Style.input}>
              <label htmlFor="number">CVV</label>
              <input
                type="password"
                id="cvv"
                name="cvv"
                value={card.cvv}
                onChange={handleInput}
              />
            </div>
            <div className={Style.btncon}>
              <button className={Style.btn} onClick={cardDetails}>
                PAY
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default checkout;
