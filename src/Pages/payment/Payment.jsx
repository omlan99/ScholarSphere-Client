import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_paypass_key);

const Payment = () => {
  const { charge } = useParams();
  // console.log(charge);
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm charge={charge}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
