import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {  createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase';

import Header from "./component/header/Header";
import Home from "./pages/home/Home";
import { Routes, Route} from "react-router-dom";
import Authentication from "./pages/authentication/Authentication";
import Shop from "./pages/shop/Shop";
import Checkout from "./pages/checkout/Checkout";
import { setCurrentUser } from './store/user/userAction';

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
     if(user){
         createUserDocumentFromAuth(user)
     }
     dispatch(setCurrentUser(user))
    })

    return unsubscribe
 }, [])


  return (
     <Routes>
      <Route path="/" element={ <Header /> } >
        <Route index element={ <Home /> } />
        <Route path="shop/*" element={ <Shop /> } />
        <Route path="auth" element={ <Authentication /> } />
        <Route path="/checkout" element={ <Checkout />} />
      </Route>
     </Routes>
  );
}

export default App;
