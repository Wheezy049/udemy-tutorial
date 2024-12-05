import { loadStripe } from "@stripe/stripe-js";

// Replace with your actual Stripe publishable key
export const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
