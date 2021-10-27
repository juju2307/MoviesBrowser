import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../css/details.css';
import VideoDetails from '../components/videodetails';
import TitleDetails from '../components/TitleDetails';
import ReleaseDateGender from '../components/ReleaseDateGender';
import Synopsis from '../components/Synopsis';

export default function Details() {

        const {id} = useParams();
        const API_DETAILS = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=95ef57a6064864cfbc9afc899cc5119f&language=en-US'
        const [movie, setMovie] = useState([])
       // const [video, setVideo] = useState([])
        //const [moviesRelated, setMoviesRelated] = useState([])

        const fetchMovie = async () => {

            try {
                const response = await fetch(
                    API_DETAILS
                );
                const dataMovie = await response.json();
                setMovie(dataMovie)
               
               
            }catch(err) {
                console.error(err)
            }
        }
        useEffect(() => {
            fetchMovie()
        }, [])
   
      
    

    if(movie.length !== 0)  {
      
        return(

             <div className="moviesdetails">
             
                 <VideoDetails movie={movie}/>
                 <TitleDetails movie={movie}/>
                 <ReleaseDateGender movie={movie}/>
                 <Synopsis movie={movie}/>

                 <div className="relatedmovies">

                 </div>
             </div>
         )
    } else {
        return (
            <h2>Loading...</h2>
        )
    }
}