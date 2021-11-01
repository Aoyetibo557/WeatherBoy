import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import NotFound from './components/NotFound';
import Sidebar from './components/Sidebar';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="app">
      <Router>
        <Switch>

          {/* default route */}
          

          {/* Route one */}
          <Route exact path="/" component="">
              <Header isOpen={isOpen} toggle={toggle} />
              <Sidebar isOpen={isOpen} toggle ={toggle} />
              <Home />
          </Route>

          <Route exact={true} path="/details/:cityname" component="">
            <Header isOpen={isOpen} toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle ={toggle} />
            <Details />
          </Route>

          <Route component={NotFound}/>
        </Switch> 
      </Router>     
    </div>
  );
}

export default App;
