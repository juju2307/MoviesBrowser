import React from 'react';

import { Link } from 'react-router-dom';

import Carousel from 'react-elastic-carousel';


export default function RelatedMovie({moviesRelated}) {

    
    if(moviesRelated.length !== 0) {

        return(

            <div className="relatedmovies">
                <p className="relatedtitle">Related Movies</p>
                <Carousel  itemsToShow={1} itemsPadding={[10,100]}  pagination={false} className="carousel">

                    {moviesRelated.map((movie) => {
                   console.log(moviesRelated)
                        return (
                            
                             <div className="moviesrelatedscroll" key={movie.id}>
                                <Link className="linkmoviesrelated" to={movie && "/details/" + movie.id} >
                                    <div className="imagemoviesrelated">
                                        <img src={"https://image.tmdb.org/t/p/w300" + movie.backdrop_path} alt={movie.title}/>
                                    </div>
                                </Link>
                                <div className='infosmovie'>
                                    <p className="moviesrelatedtitle">{movie.title}</p>
                                    <p className="moviesrelateddate">{movie.release_date.substring(0,4)}</p> 
                                </div>
                            </div>
                         )

                     })
                     }
                </Carousel>
            </div>
        )
    } else {
        return (
            <h2>Loading...</h2>
        )
    }
}
  
      //  function InfiniteScrollMovies (moviesRelated) {

         //   return (

      
            //)
       // }
   
