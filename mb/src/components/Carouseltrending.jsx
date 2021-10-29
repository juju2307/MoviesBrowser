import Carousel from 'react-elastic-carousel';
import {AiFillStar} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';



export default function CarouselTrending(props) {

    let dataMovie = parseInt(Math.floor(Math.random() * 20));
    let stockMoviesTrending = { ...props.trending.results };

    function TrendingCarousel() {

        return(

            <div className="carouseltrending">
                 <Carousel itemsToShow={1} itemPadding={[10,100]}   pagination={false} className="trendingmoove">
                     { Object.entries(stockMoviesTrending).map((movie) => {
                        return (
                            <NavLink to={movie && "/details/" + movie[1].id}>
                                <a className="linkmovies" href="/details" key={movie[1].id}>
                                    <div className="moviecard">
                                        <img src={stockMoviesTrending[dataMovie] && "https://image.tmdb.org/t/p/w300" + movie[1].poster_path} alt="title" className="imgtrending"/>

                                        <div className="scoremovie">
                                            <p className="imdb">IMDb</p>
                                            <div className="group">
                                                 <p className= "staricon"><AiFillStar/></p>
                                                 <p className="score">{movie[1].vote_average}</p>
                                            </div>
                                        </div>
                                        <div className="titlemovie">{movie[1].title}</div>
                                    </div>
                                 </a>  
                             </NavLink> 
                        )
                    })}
                </Carousel> 
            </div>
        );    
    }

    return(
        <div className="trendingcarousel">
            {TrendingCarousel()}
        </div>

    )
}