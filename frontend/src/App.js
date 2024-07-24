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
import PageNotFound from './pages/404';
import OrderSuccessPage from './pages/OrderSuccessPage';
import UserOrdersPage from './pages/UserOrdersPage';
import UserProfilePage from './pages/UserProfilePage';
import { fetchLoggedInUserAsync } from './features/user/userSlice';
import Logout from './features/auth/components/Logout';
import ForgotPasswordPage from './pages/ForgotPasswordPage';


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
    },
    {
      path:"/order-success/:id",
      element:(
        <OrderSuccessPage/>
      )
    },
    {
      path:'/orders',
      element:(
        <UserOrdersPage/>
      )
    },
    {
      path:'/profile',
      element:(
        <UserProfilePage/>
      )
    },
    {
      path:'/logout',
      element:(
        <Logout/>
      )
    },
    {
      path:'/forgot-password',
      element:(
        <ForgotPasswordPage/>
      )
    },
    {
      path:"*",
      element:(
        <PageNotFound/>
      )
    }
  ])

  const dispatch=useDispatch()
  const user = useSelector(selectLoggedInUser)

  useEffect(()=>{
 if(user){
  dispatch(fetchItemsByUserIdAsync(user.id))
  dispatch(fetchLoggedInUserAsync(user.id))
 }
  },[dispatch,user])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
