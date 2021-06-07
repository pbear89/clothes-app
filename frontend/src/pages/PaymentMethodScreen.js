import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../functions/cartFunctions";

export default function PaymentMethodScreen(props) {
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod))
    props.history.push('/placeorder');

  }

  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Payment Method</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              name="paymentMethod"
              id="paypal"
              value="PayPal"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="paypal">PayPal</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              name="paymentMethod"
              id="Stripe"
              value="Stripe"
              required              
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="stripe">Stripe</label>
          </div>
        </div>
        <div>
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
