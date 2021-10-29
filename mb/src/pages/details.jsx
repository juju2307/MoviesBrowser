import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../css/details.css';
import VideoDetails from '../components/videodetails';
import TitleDetails from '../components/TitleDetails';
import ReleaseDateGender from '../components/ReleaseDateGender';
import Synopsis from '../components/Synopsis';
import RelatedMovie from '../components/RelatedMovie';

export default function Details() {

        const {id} = useParams();
        const API_DETAILS = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=95ef57a6064864cfbc9afc899cc5119f&language=en-US'
        const API_RELATED = 'https://api.themoviedb.org/3/movie/' + id + '/similar?api_key=95ef57a6064864cfbc9afc899cc5119f&language=en-US'
        const [movie, setMovie] = useState([])
       // const [video, setVideo] = useState([])
        const [moviesRelated, setMoviesRelated] = useState([])

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
   
        const fetchMovieRelated = async () => {

            try {
                const response = await fetch(
                    API_RELATED
                );
                
                const dataMovieRelated = await response.json();
                setMoviesRelated(dataMovieRelated.results)
                   
            }catch(err) {

                console.error(err)
            }
        }
        useEffect(() => {
            fetchMovieRelated()
        }, [])
    

    if(movie.length !== 0)  {
      
        return(

             <div className="moviesdetails">
             
                 <VideoDetails movie={movie}/>
                 <TitleDetails movie={movie}/>
                 <ReleaseDateGender movie={movie}/>
                 <Synopsis movie={movie}/>
                 <RelatedMovie moviesRelated={moviesRelated}/>
                 
             </div>
         )
    } else {
        return (
            <h2>Loading...</h2>
        )
    }
}