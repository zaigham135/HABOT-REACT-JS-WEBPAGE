import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Navbarmenu from './components/menu/Navbarmenu';
import FrontPage from './components/FrontPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <ScrollToTop />
        <Navbarmenu />
        <Switch> 
          <Route exact path="/" component={FrontPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
