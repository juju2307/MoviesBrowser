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
           'https://api.themoviedb.org/3/trending/movie/day?api_key=95ef57a6064864cfbc9afc899cc5119f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate'
           );
           const trending= await datatrending.json();

           setTrending(trending);
           console.log(trending);

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
                      <Route exact path="/"><Home trending={trending}/></Route>
                      <Route path="/discover"><Discover/></Route>
                      <Route path="/details"><Details/></Route>

                  </Switch>
              </div>
          </Router>  
        )
};

