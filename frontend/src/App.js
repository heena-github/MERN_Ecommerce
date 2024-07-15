import { useEffect } from 'react';
import './App.css';
import Protected from './features/auth/components/Protected';

import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import SignupPage from './pages/SignupPage';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/authSlice';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:(
        <Protected>
      <Home/>
      </Protected>
      )
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
      element:(
        <Protected>
      <CartPage/>
      </Protected>
    )
    },
    {
      path:"/checkout",
      element:(
        <Protected>
      <Checkout/>
      </Protected>
      )
    },
    {
      path:"/product-details/:id",
      element:(
        <Protected>
      <ProductDetailsPage/>
      </Protected>
      )
    }
  ])

  const dispatch=useDispatch()
  const user = useSelector(selectLoggedInUser)

  useEffect(()=>{
 if(user){
  dispatch(fetchItemsByUserIdAsync(user.id))
 }
  },[dispatch,user])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
