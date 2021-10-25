import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import Navigation from '../components/Navigation';
import MoviesGenderList from '../components/MoviesGenderList';
import { Link } from 'react-router-dom';
import {IconContext} from "react-icons"
import {BiSearch} from 'react-icons/bi';
import '../css/discover.css';



export default function Discover() {
    
    
     const [moviesGender, setMoviesGender] = useState([]);
     const [gender,setGender] = useState([]);
     const [genderID,setGenderID] = useState(28);
     const URL_BASE = 'https://api.themoviedb.org/3/discover/movie?';
     const API_KEY = 'api_key=95ef57a6064864cfbc9afc899cc5119f';
     const page =1;
     const API_PARAM = `&language=en-US&sort_by=popularity.desc&page=${page}&with_genres=`;

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
    //    setMoviesGender([]);
        fetchMoviesGender();
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    },[genderID]);

    

    function Research() {
        return (
            <div className="search">
                <input className="inputsearch" type="text" placeholder="MoviesBrowser"/>
                     <IconContext.Provider value={{size: '3vh',  display: 'flex', position: 'absolute', color:'white', width: '24px', height: '24px'}}>
                         <BiSearch />
                     </IconContext.Provider>
            </div>
        );
    }
    function NavGender(){

        function ChangeGender(e){
            // e.preventDefault();
            setGenderID(e.target.id)
            console.log(e.target.id);
        }

        return(
            <div className="gender">

                {gender.map((genre => { 

                    return(

                         <div className="listgender" key={genre.id}>
                              <Link className="genderli" id={genre.id} onClick= {(e) => ChangeGender(e)} >{genre.name}</Link>
                         </div>

                    )
                }))
                }
           </div>
          
        )

    }
    
//   console.log(moviesGender);
    if(moviesGender.length !== 0) {

        return(
            <div className="discover">
                 <Title/>
                 <Research/>
                 <NavGender/>
                 <MoviesGenderList moviesGender={moviesGender}/>
                 <Navigation/>
                  
            </div> 
        )
    } else {
        return(
            <h2>Loading</h2>
        )
    }

};