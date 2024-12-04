import React from "react";
import { BaseButton, ButtonSpinner, GoogleSignInButton, InvertedButton } from "./button.style";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    // <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>{children}</button>
    <CustomButton disabled={isLoading} {...otherProps}>{isLoading ? <ButtonSpinner /> : children}</CustomButton>
  );
};

export default Button;
