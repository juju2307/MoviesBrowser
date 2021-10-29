import React from 'react';
import {Link} from 'react-router-dom';
import {AiFillHome} from "react-icons/ai"; 
import { IoSearchCircle } from "react-icons/io5";
import {FaUser} from "react-icons/fa";
import '../css/nav.css'
import { IconContext } from 'react-icons/lib';


export default function Navigation() {
    return(
       <div className="navigation">

            <nav>
                 <ul className="icones">
                     <li>
                         <Link to="/"><IconContext.Provider value={{className:"img"}}><AiFillHome /></IconContext.Provider></Link>
                     </li>
                     <li>
                         <Link to="/discover"><IconContext.Provider value={{className:"img"}}><IoSearchCircle/></IconContext.Provider></Link>
                     </li>
                     <li>
                         <Link to="/user"><IconContext.Provider value={{className:"img"}}><FaUser className="img"/></IconContext.Provider></Link>
                     </li>
                 </ul>
            </nav>
             
       </div>
    )
};