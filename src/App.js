import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import { Routes, Route} from "react-router-dom";
import SignIn from "./pages/signIn/SignIn";

const App = () => {

  const Shop = () =>{
    return(
      <div className="">I am a shop</div>
    )
  }


  return (
     <Routes>
      <Route path="/" element={ <Header /> } >
        <Route index element={ <Home /> } />
        <Route path="shop" element={ <Shop /> } />
        <Route path="sign-in" element={ <SignIn /> } />
      </Route>
     </Routes>
  );
}

export default App;
