import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import Navigation from '../components/Navigation';
import GenderList from '../components/GenderList';
import {FiSearch} from 'react-icons/fi';
import '../css/discover.css';

//import { NavLink } from 'react-router-dom';




export default function Discover() {
    
     //const [movies, setMovies] = useState([]);
     const [moviesGender, setMoviesGender] = useState([]);
     const [gender,setGender] = useState(28);
     const URL_BASE = 'https://api.themoviedb.org/3/discover/movie?';
     const API_KEY = 'api_key=95ef57a6064864cfbc9afc899cc5119f';
     const API_PARAM = '&language=en-US&sort_by=popularity.desc';
    //const page ='&page=1';

     
     //const [page, setPage] = useState(1);
    
     const fetchGender = async ()=> {

        try {
            const response = await fetch(
                'https://api.themoviedb.org/3/genre/movie/list?api_key=95ef57a6064864cfbc9afc899cc5119f&language=en-US'
                );
            const dataGender = await response.json();
            setGender(dataGender.genres);
         
        } catch(err) {
            console.error(err);
        }
    }
    useEffect(() => {
        fetchGender();
    },[])
 

    const fetchMoviesGender = async () => {
      try {
          const response = await fetch(URL_BASE + API_KEY + API_PARAM + gender);
          const dataMoviesGender = await response.json();
          setMoviesGender(dataMoviesGender.results);
   
      } catch(err) {
          console.error(err);
      }
  }
  useEffect(() => {
     setMoviesGender([]);
      fetchMoviesGender();
      // eslint-disable-next-line react-hooks/exhaustive-deps 
  },[gender]);
 

 

    //let stockMoviesGender= {...moviesGender.genres};
    

    function Research() {
        return (
            <div className="search">
                <p className="iconloupe"><FiSearch/></p>
                <input className="inputsearch" type="text" placeholder="MoviesBrowser"></input>
            </div>
        );
    }

   /* function changeGender(e) {
       e.preventDefault();
       setMoviesGender(e.target.id);
       console.log('setMoviesGender:', gender)
    }*/

   
  
    /*function MoviesList() {
        
     if(movies.length !== 0) {
        return (
        <div className="moviesall">
    
           {movies.map((movie) => {
               
               return (
            <nav className="movieslist">
                <NavLink to={`/details/${ movie.id }`} id={movie.id}>
                    <div className="imageslist">
                        <img src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} alt={"https://image.tmdb.org/t/p/w300" + movie.title}/>
                    </div>
                    <div className="alltitlemovies">
                        <p className="alltitle">
                            {movie.title}
                        </p>
                        <p className="datediscover">
                            {movie.release_date}
                        </p>
                    </div>
                </NavLink> 
            </nav>
               )
             })
            }
        
         </div>  
        )
    } else {
        return (
            <h3>Loading</h3>
        )
    }
}*/

    
    if(moviesGender.length !== 0) {
        return(
            <div className="discover">
                 <Title/>
                 <Research/>
                 <GenderList gender={gender}/>
                 <Navigation/>
                  
            </div> 
        )
    } else {
        return(
            <h2>Loading</h2>
        )
    }

};