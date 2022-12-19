import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";
import { fetchData, sendCartData } from "./store/cart-actions";

let isfirstrender = true;
function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  useEffect(() => {
    if (isfirstrender) {
      isfirstrender = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
