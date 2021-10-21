import React from 'react';
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Discover from './pages/discover.jsx';
import Details from './pages/details.jsx';
import User from './components/User.jsx';


export default function App() {
      
      return(
          <Router>
              <div>
                 

                  <Switch>
                      <Route exact path="/"><Home/></Route>
                      <Route path="/discover"><Discover/></Route>
                      <Route path="/details"><Details/></Route>
                      <Route path="/user"><User/></Route>

                  </Switch>
              </div>
          </Router>  
        )
};

