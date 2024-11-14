import Categories from '../../component/categories/categories';
import { Outlet } from 'react-router-dom';


const Home = () => {

  return (
     <div>
       <Categories />
       <Outlet />
     </div>
  );
}

export default Home;
