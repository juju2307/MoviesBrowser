import React from 'react';
import Title from '../components/Title';
import Trending from '../components/Trending';
import CarouselTrending from '../components/Carouseltrending';
import Navigation from '../components/Navigation';
import {useState, useEffect} from 'react';
import '../css/home.css';



export default function Home(){

    const [trending, setTrending] = useState([]);
    const fetchTrending = async ( ) => {
       try {
             const response = await fetch(
             'https://api.themoviedb.org/3/trending/movie/day?api_key=95ef57a6064864cfbc9afc899cc5119f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1-2&with_watch_monetization_types=flatrate'
             );
             const datatrending= await response.json();
  
             setTrending(datatrending);
  
      } catch(err) {
                console.error(err);
             }
    }
  
    useEffect(() => {
        fetchTrending();
        
    }, []);

  
    
return (
        <div className="home">
             <Title/>,
             <Trending trending={trending }/>,
             <h2 className="titletrending">Trending</h2>
             <CarouselTrending trending={trending}/>
             <Navigation/>
             
        </div>
    )
 }
