import React from 'react';
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Home from './components/Home.jsx';
import Discover from './components/discover.jsx';
import Details from './components/details.jsx';
import Nav from "./components/Nav.jsx";




export default function App() {
        
  const [trending, setTrending] = useState([]);
  const fetchMovies = async ( ) => {
     try {
           const datatrending = await fetch(
           'https://api.themoviedb.org/3/movie/popular?api_key=95ef57a6064864cfbc9afc899cc5119f&page=1'
           );
           const data = await datatrending.json();
           setTrending(data);
           console.log(data);
           } catch(err) {
              console.error(err);
            
           }
  }

  useEffect(() => {
      fetchMovies();
      
  }, []);


  
      return(
        
          <Router>
              <div>
                 
                  <Nav/>
                  <Switch>
                      <Route exact path="/" component={Home}/>
                      <Route path="/discover" component={Discover}/>
                      <Route path="/details" component={Details}/>

                  </Switch>
              </div>
          </Router>  
        )
};

