import React from "react";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import {BsChevronLeft} from 'react-icons/bs';
import {BsPlayCircle} from 'react-icons/bs';


export default function VideoDetails({movie}) {


     return (
        <div className="video">
        <img className="imgdetails" src={ "https://image.tmdb.org/t/p/w300" + movie.backdrop_path} alt={movie.title}/>
        <NavLink to="/">
            <IconContext.Provider value={{className: "returnicon", display: "flex", size: "36px"}}><BsChevronLeft/></IconContext.Provider>
        </NavLink> 
    console.log(movie.video)
        <NavLink to={"/videoplay"+ movie.video + movie.id}>
            <IconContext.Provider value={{className: "playicon",display: "flex" , size: "64px"}} ><BsPlayCircle/></IconContext.Provider>
        </NavLink>
       
      </div>
     )
}
   