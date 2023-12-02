import React from "react";
import "./Dashboard.css";
import Dashboardheader from "./Dashboardheader";
const Payment = () => {
  return (
    <>
      <Dashboardheader />
      <div className="payment">
        <h1>Payment Method</h1>
        <p>Select your payment method and proceed with the withdrawls.</p>
        <div className="payment-btn">
          <button>Paystack</button>
          <button>Bank Transfer</button>
        </div>
      </div>
    </>
  );
};

export default Payment;
