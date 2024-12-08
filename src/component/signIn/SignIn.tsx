import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import {
//   createUserDocumentFromAuth,
//   signInWithGooglePopup,
//   signInAuthUserWithEmailAndPassword,
// } from "../../utils/firebase/firebase";
import FormInput from "../formInput/FormInput";
import "./signIn.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/userAction";
import { AuthError, AuthErrorCodes } from "firebase/auth";
// import { UserContext } from '../../context/context';

const defaultFormField = {
  email: "",
  password: "",
};

const SignIn = () => {
  // const { setCurrentUser } = useContext(UserContext)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    // context
    //  await signInWithGooglePopup()
    //  await createUserDocumentFromAuth(user)

    // redux saga
    dispatch(googleSignInStart());
    navigate("/");
  };

  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;

  const resetFormField = () => {
    setFormFields(defaultFormField);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // context
      //  await signInAuthUserWithEmailAndPassword(email, password)
      // redux saga
      dispatch(emailSignInStart(email, password));
      resetFormField();
      navigate("/");
    } catch (error) {
      // error.code === "auth/invalid-credential"
      if ((error as AuthError).code === AuthErrorCodes.INVALID_APP_CREDENTIAL) {
        alert("Invalid Emaill or Password");
      } else {
        console.log(error);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account yet?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />
        <div className="buttons-container">
          <Button type="submit">Sign IN</Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
