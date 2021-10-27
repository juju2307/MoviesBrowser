import React from 'react';
import {IconContext} from 'react-icons';
import {IoTime} from 'react-icons/io5';
import {AiFillStar} from 'react-icons/ai';


export default function TitleDetails({movie}) {
    
    return (
        <div className="title">
        <div className="movietitledetail">
            <p className="titleh1">{movie.title}</p>
            <p className="fourk">4K</p>

        </div>
        <div className="details">
            <div className='timedetails'>
                <IconContext.Provider value={{className: "timeicon", display: 'flex', size:'24px'}}><IoTime/></IconContext.Provider>
                <p className="minutes">{movie.runtime} minutes</p>
            </div>
            <div className="votedetails">
                <IconContext.Provider value={{className: "star", display: 'flex', size: '24px'}}><AiFillStar/></IconContext.Provider>
                <p className="voteaverage">{movie.vote_average} (IMDb)</p>
            </div>
        </div>
        </div>
    )
}