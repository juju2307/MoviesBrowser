import React from 'react';
import {BsFillPlayCircleFill} from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import { NavLink } from 'react-router-dom';



export default function Trending({trending}) {

    let dataMovie = parseInt(Math.floor(Math.random() * 20));
    let stockMoviesTrending = { ...trending.results};

    function RandomTrending() {
        
     if(trending.length !== 0) {
       
       
         return (
             <div className="affiche" >
            
             <img className="imagetrending" src={"https://image.tmdb.org/t/p/w300" + stockMoviesTrending[dataMovie].backdrop_path} alt={stockMoviesTrending[dataMovie].title}/>
             
            <NavLink to={"/details/" + stockMoviesTrending[dataMovie].id}>
                 <a href="/details" className="linkspotlight">

                        <div className="play">
                            <IconContext.Provider value={{className:"iconplay", display:"flex",size:"28px"}}><BsFillPlayCircleFill/></IconContext.Provider>
                        </div>
                         <div className="textspotlight">
                             <p className="moviespotlight">Movie Spotlight</p>
                             <p className="titlemoviespotlight">{stockMoviesTrending[dataMovie].title}</p>
                         </div>
                 </a>
              </NavLink>   
             </div>
         )
            } else {
                return(
                    <h2>Loading</h2>
                )
            }
        }
      
        
        return(
            <div className="trending">
                {RandomTrending()}
            </div>  
        )
}