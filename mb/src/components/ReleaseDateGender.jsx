import React from 'react';


export default function ReleaseDateGender({movie}) {
    return (
         
        <div className="containerdetails">
        <div className="releasedate">
            <div className="datetitledetails">
                <p classeName="datedetails">Release Date</p>
            </div>
            <div className="date">
                <p className="datemonth">{Month()}</p>
                <p className="dateday">{movie.release_date.substring(8,10)}</p>
                <p className="dateyear">{movie.release_date.substring(0,4)}</p>
            </div>
        </div>
        <div className="gendertitledetails">
            <p className="genderdetails">Genre</p>
            <div className="genderplus">
                {movie.genres.map((genre) => {
                    return (
                        <p className="gendermap" key={genre.id}>{genre.name}</p>
                    );
                })
                }
            </div>
        </div>
    </div>
    )

    function Month() {
        const date = movie.release_date.substring(5,7);
        switch (date) {

            case '01':
                return 'January';
                //break;
            case '02' :
                return 'February';
               // break;
            case '03' :
                return 'March'
               // break;
            case '04' :
                return 'April'
               // break;
            case '05' :
                return 'May'
               // break;
            case '06' :
                return 'June';
               // break;
            case '07' :
                return 'July';
               // break;
            case '08' :
                return 'August';
               // break;
            case '09' :
                return 'September';
                //break;
            case '10' :
                return 'October';
                //break;
            case '11' :
                return 'November';
               //break;
            case '12' :
                return 'December';
               // break;
            default:
                return 'Error date';
             
        } 
     }
}