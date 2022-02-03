import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header";
import GamePage from "./pages/GamePage/GamePage";
import Home from "./pages/Home/Home";
import OrderPage from "./pages/OrderPage/OrderPage";
import { store } from "./redux";

const Routes = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/app/:title" element={<GamePage />}/>
          <Route path="/order" element={<OrderPage />}/>
        </Switch>
      </Router>
    </Provider>
  );
};

export default Routes;
