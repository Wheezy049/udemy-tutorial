import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import {
//   createAuthUserWithEmailAndPassword,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase";
import FormInput from "../formInput/FormInput";
import "./signUp.scss";
import Button from "../button/Button";
import { signUpStart } from "../../store/user/userAction";
// import { UserContext } from '../../context/context';

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //  const { setCurrentUser } = useContext(UserContext)

  const resetFormField = () => {
    setFormFields(defaultFormField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }

    try {
      // context
      // const { user } = await createAuthUserWithEmailAndPassword(email, password);
      // await createUserDocumentFromAuth(user, { displayName })
      // redux saga
      dispatch(signUpStart(email, password, displayName));
      resetFormField();
      navigate("/auth");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already exist");
      } else if (error.code === "auth/weak-password") {
        alert("Password should be at least 6 characters");
      } else {
        console.log("user creation encounter an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account yet?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        {/* <FormInput 
            label="Display Name"
            inputOptions = {{
              type: 'text',
              name: 'displayName',
              onChange: handleChange,
              required: true,
              value: displayName
            }}
            /> */}
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
          required
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
