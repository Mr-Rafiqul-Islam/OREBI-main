import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import RootLayout from "./components/layout/RootLayout";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Journal from "./pages/Journal";
import Login from "./pages/Login";
import UserPopup from "./components/layout/UserPopup";
import SignUp from "./pages/SignUp";
import My_Acoount from "./pages/My_Acoount";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/journal' element={<Journal/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/user' element={<UserPopup/>}/>
        <Route path='/my-account' element={<My_Acoount/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
    </Route>
  )
);

function App() {
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
