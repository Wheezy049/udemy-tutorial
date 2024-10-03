import Header from "./component/header/Header";
import Home from "./pages/home/Home";
import { Routes, Route} from "react-router-dom";
import Authentication from "./pages/authentication/Authentication";

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
        <Route path="auth" element={ <Authentication /> } />
      </Route>
     </Routes>
  );
}

export default App;
