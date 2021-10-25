import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import {HiPlay} from 'react-icons/hi';
import {GrPrevious} from 'react-icons/gr';
import {IoTime} from 'react-icons/io';
import {AiFillStar} from 'react-icons/ai';
import { useParams } from 'react-router';


export default function Details() {

        const {id} = useParams();
        const API_URL = 'https://api.themoviedb.org/3/movie/${id}';
        const API_KEY = '?api_key=95ef57a6064864cfbc9afc899cc5119f';
        const API_PARAM = '&language=en-US&page=1';
    

        const [movieId, setMovieId] = useState(id)
        const [movie, setMovie] = useState([])
        const [moviesRelated, setMoviesRelated] = useState([])

        const fetchMovie = async () => {

            try {
                const response = await fetch(
                    API_URL + API_KEY + API_PARAM
                );
                const dataMovie = await response.json();
                setMovieId(dataMovie)
                console.log(dataMovie)
            }catch(err) {
                console.error(err)
            }
        }
        useEffect(() => {
            fetchMovie()
        }, [])

    return(
        <h1>Details</h1>
    )
}