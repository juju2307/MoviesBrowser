import React from 'react';
import {Link} from 'react-router-dom';
import {AiFillHome} from "react-icons/ai"; 
import { IoSearchCircle } from "react-icons/io5";
import {FaUser} from "react-icons/fa";
import '../css/nav.css'


export default function Navigation() {
    return(
       <div className="navigation">

            <nav>
                 <ul className="icones">
                     <li>
                         <Link to="/"><AiFillHome className="img"/></Link>
                     </li>
                     <li>
                         <Link to="/discover"><IoSearchCircle className="img"/></Link>
                     </li>
                     <li>
                         <Link to="/user"><FaUser className="img"/></Link>
                     </li>
                 </ul>
            </nav>
             
       </div>
    )
};