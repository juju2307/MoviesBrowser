import React from 'react';
import {BsFillPlayCircleFill} from 'react-icons/bs';



export default function Trending({trending}) {

    let dataMovie = parseInt(Math.floor(Math.random() * 20));
    let stockMoviesTrending = { ...trending.results};

    function RandomTrending() {
        
     if(trending.length !== 0) {
       

         return (
             <div className="affiche" 
             style=
             {{
                 backgroundImage: `url('${"https://image.tmdb.org/t/p/w300" + stockMoviesTrending[dataMovie].poster_path}')`
             }}>
            
             <a href="/Details" className="linkspotlight">
              
                    <div className="play">
                        <span><BsFillPlayCircleFill/></span>
                    </div>
                     <div className="textspotlight">
                         <p className="moviespotlight">Movie Spotlight</p>
                         <h3 className="titlemoviespotlight">{stockMoviesTrending[dataMovie].title}</h3>
                     </div>
             </a>
                 
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