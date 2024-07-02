import './App.css';

import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import SignupPage from './pages/SignupPage';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:(<Home/>)
    },
    {
      path:"/signup",
      element:(<SignupPage/>)
    },
    {
      path:"/login",
      element:(<LoginPage/>)
    },
    {
      path:"/cart",
      element:(<CartPage/>)
    },
    {
      path:"/checkout",
      element:(<Checkout/>)
    },
    {
      path:"/product-details",
      element:(<ProductDetailsPage/>)
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
