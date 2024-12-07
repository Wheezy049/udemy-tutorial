import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import {
//   createUserDocumentFromAuth,
//   getCurrentUser,
//   onAuthStateChangedListener,
// } from "./utils/firebase/firebase";

import Header from "./component/header/Header";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Authentication from "./pages/authentication/Authentication";
import Shop from "./pages/shop/Shop";
import Checkout from "./pages/checkout/Checkout";
import { checkUserSession } from "./store/user/userAction";
import ConfirmationPage from "./pages/confirmation/confirmationPage";

const App = () => {
  const dispatch = useDispatch();

  // onAuthstatechangedlister
  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChangedListener((user) => {
  //      if(user){
  //          createUserDocumentFromAuth(user)
  //      }
  //      dispatch(setCurrentUser(user))
  //     })

  //     return unsubscribe
  //  }, [])

  // calling promise from firebase
  useEffect(() => {
    dispatch(checkUserSession());
    //  getCurrentUser().then((user) => console.log(user));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Route>
    </Routes>
  );
};

export default App;
