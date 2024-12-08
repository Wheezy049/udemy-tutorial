import React from "react";
// import { getRedirectResult } from 'firebase/auth'
import SignUp from "../../component/signUp/SignUp";
import SignIn from "../../component/signIn/SignIn";
import "./authentication.scss";

const Authentication = () => {
  // useEffect(() => {
  //   const fetchRedirectResult = async () => {
  //     const response = await getRedirectResult(auth);
  //     console.log(response)
  //     if (response) {
  //       await createUserDocumentFromAuth(response.user);
  //     }
  //   };

  //   fetchRedirectResult();
  // }, []);

  return (
    <div className="authentication-container">
      {/* <h1>Sign In Page</h1> */}
      <SignIn />
      <SignUp />
      {/* <button onClick={logUserIn}>Sign in with Google Popup</button> */}
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
    </div>
  );
};

export default Authentication;
