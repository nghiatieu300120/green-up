import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import NavMenu from "./components/NavMenu";
import Home from "./pages/Home";
import DrinkStory from "./pages/DrinkStory";
import GreenUpStory from "./pages/GreenUpStory";
import FarmGreenUp from "./pages/FarmGreenUp";
import SystemStore from './pages/SystemStore'

function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/ve-green-up">
            <GreenUpStory/>
          </Route>
          <Route path="/cau-chuyen-thuc-uong">
            <DrinkStory/>
          </Route>
          <Route path="/trang-trai-green-up">
            <FarmGreenUp/>
          </Route>
          <Route path="/he-thong-cua-hang">
            <SystemStore/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
