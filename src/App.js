import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import { useDispatch } from "react-redux";
import { getProductsFromDB } from "./Redux/actions/actionProducts/actionProducts";
import { getFromLocalStorage } from "./Redux/actions/actionUsers/usersAsyncAction";
import Cart from "./Pages/CartPage/Cart";
function App() {
  // Get User Information From Local Storage on mount
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsFromDB());
    dispatch(getFromLocalStorage());
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
