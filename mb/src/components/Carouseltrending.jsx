import Carousel from 'react-elastic-carousel';
import {AiFillStar} from 'react-icons/ai';


export default function CarouselTrending(props) {

    let dataMovie = parseInt(Math.floor(Math.random() * 20));
    let stockMoviesTrending = { ...props.trending.results };

    function TrendingCarousel() {

        return(

            <div className="carouseltrending">
                 <Carousel itemsToShow={1} itemPadding={[10,100]}   pagination={false} className="trendingmoove">
                     { Object.entries(stockMoviesTrending).map((key, value) => {
                        return (
                            <a className="linkmovies" href="/Details">
                                <div className="moviecard">
                                    <img src={stockMoviesTrending[dataMovie] && "https://image.tmdb.org/t/p/w300" + key[1].poster_path} alt="title" className="imgtrending"/>
                               
                                    <div className="scoremovie">
                                        <p className="imdb">IMDb</p>
                                        <div className="group">
                                             <p className="staricon"><AiFillStar/></p>
                                             <p className="score">{key[1].vote_average}</p>
                                        </div>
                                    </div>
                                    <div className="titlemovie">{key[1].title}</div>
                                </div>
                             </a>   
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