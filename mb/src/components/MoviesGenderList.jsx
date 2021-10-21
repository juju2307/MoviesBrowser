import { Link } from "react-router-dom"

export default function MoviesGenderList ({moviesGender}) {
      
        
     if(moviesGender.length !== 0) {

        return (

        <div className="moviesall">
    
           {moviesGender.map((movie) => {
             
               return (

            <div className="movieslist" key={movie.id}>
                <Link className="link" to={movie && "/details/" +  movie.id } id={movie.id}>
                    <div className="imageslist">
                        <img src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} alt={movie.title}/>
                    </div>
                    <div className="alltitlemovies">
                        <p className="alltitle">
                            {movie.title}<span>({movie.release_date.substring(0,4)})</span>
                        </p>
                    </div>
                </Link> 
            </div>
               )
             })
     }
        
         </div>  
        )
    } else {

        return (
            <h3>Loading</h3>
        )
    }

    
}