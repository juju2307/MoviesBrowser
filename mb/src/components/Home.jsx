import React from 'react';
import Title from './Title';
import {BsFillPlayCircleFill} from 'react-icons/bs';
import Carousel from 'react-elastic-carousel';



export default function Home(props){
    let dataMovie = parseInt(Math.floor(Math.random() * 20));
    let stockMovies = { ...props.trending.results };

    function RandomTrending() {
        
     if(props.trending.length !== 0) {
       

         return (
             <div className="affiche" 
             style=
             {{
                 backgroundImage: `url('${"https://image.tmdb.org/t/p/w300" + stockMovies[dataMovie].poster_path}')`
             }}>
            
            <a href="/Details" className="linkspotlight">
              
                    <div className="play">
                        <span><BsFillPlayCircleFill/></span>
                    </div>
                     <div className="textspotlight">
                         <p className="moviespotlight">Movie Spotlight</p>
                         <h3 className="titlemoviespotlight">{stockMovies[dataMovie].title}</h3>
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

    function TrendingCarousel() {

        return(

            <div className="carouseltrending">
                 <Carousel itemsToShow={2} itemPadding={[10,100]} pagination={false} className="trendingmoove">
                     { Object.entries(stockMovies).map((key, value) => {
                        return (
                            <a href="/Details">
                                <div className="moviecard">
                                    <img src={stockMovies[dataMovie] && "https://image.tmdb.org/t/p/w300" + key[1].poster_path} alt="title" className="imgtrending"/>
                                </div>
                             </a>   
                        )
                    })} 
                </Carousel> 
            </div>
        )
    }
    
return (
        <div className="home">
             <Title/>,
             {RandomTrending()}
             <h2 className="titletrending">Trending</h2>
             {TrendingCarousel()}
             <div className="carouseltrending"></div>

        </div>
    )
 }
