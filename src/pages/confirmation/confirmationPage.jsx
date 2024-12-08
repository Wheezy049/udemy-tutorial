import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../store/cart/cartAction';

// Styled components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  text-align: center; /* Center text horizontally */
`;

const BackButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px; /* Add some space between the message and button */

  &:hover {
    background-color: #45a049;
  }
`;

const ConfirmationPage = () => {
  const location = useLocation();
  const paymentStatus = location.state?.paymentStatus;
  const amount = location.state?.amount;
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  const handleBackToHome = () => {
    navigate('/'); // Navigate back to the home page
  };

  const clearCartAfterSuccess = () => {
    if (paymentStatus === 'succeeded') {
      dispatch(clearCart()); // Dispatch the action to clear the cart
    }
  };

  // Call the clearCart function when the component is rendered
  useEffect(() => {
    clearCartAfterSuccess();
  }, [paymentStatus, dispatch]);

  return (
    <PageContainer>
      <h1>Payment Confirmation</h1>
      {paymentStatus === 'succeeded' ? (
        <>
          <p>Thank you for your payment!</p>
          <p>Amount: ${amount / 100}</p>
          <BackButton onClick={handleBackToHome}>Back to Home</BackButton>
        </>
      ) : (
        <p>There was an issue with your payment. Please try again.</p>
      )}
    </PageContainer>
  );
};

export default ConfirmationPage;
