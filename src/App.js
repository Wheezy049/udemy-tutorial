import Header from "./component/header/Header";
import Home from "./pages/home/Home";
import { Routes, Route} from "react-router-dom";
import Authentication from "./pages/authentication/Authentication";
import Shop from "./pages/shop/Shop";
import Checkout from "./pages/checkout/Checkout";

const App = () => {


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
