import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';


function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
           <Route path="/">
              <Home />
           </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
