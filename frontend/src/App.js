import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
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
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
