import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { BUTTON_TYPE_CLASSES } from "../button/Button";
import { PaymentFormContainer, FormContainer, PaymentButton } from "./paymentForm.style";
import { useState } from "react";
import { useSelector } from 'react-redux';
import { selectCartTotal } from "../../store/cart/cartSelector";
import { selectCurrentUser } from "../../store/user/userSelector";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    try {
      // Call the server to create a payment intent
      const response = await fetch("http://localhost:4000/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: amount * 100 }), // Replace with your desired amount in cents
      });

      const { clientSecret } = await response.json();

      // Confirm payment with Stripe
      const cardElement = elements.getElement(CardElement);

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: currentUser ? currentUser.displayName : 'Guest'
          },
        },
      });

      setIsProcessing(false);

      if (paymentResult.error) {
        alert(paymentResult.error.message);
      } else {
        navigate('/confirmation', {
          state: {
            paymentStatus: 'succeeded',
            amount: amount * 100, // Amount in cents
          },
        });
      }
    } catch (error) {
      console.error(error);
      alert("There was an issue processing your payment.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement options={{
          hidePostalCode: true, // This will hide the ZIP code input
        }} />
        <PaymentButton buttonType={BUTTON_TYPE_CLASSES.inverted} isLoading={isProcessing}>
          {/* {isProcessing ? "Processing..." : "Pay Now"} */}
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
