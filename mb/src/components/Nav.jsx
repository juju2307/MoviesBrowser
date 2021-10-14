import React from 'react';
import {Link} from 'react-router-dom';
import { FaHome } from "react-icons/fa"; 
import { IoSearchCircle } from "react-icons/io5";
import {FaUser} from "react-icons/fa";


export default function Nav() {
    return(
       <div className="navigation">

            <nav>
                 <ul className="icones">
                     <li>
                         <Link className="img" to="/"><FaHome/></Link>
                     </li>
                     <li className="img">
                         <Link className="img" to="/details"><IoSearchCircle/></Link>
                     </li>
                     <li className="img">
                         <Link className="img" to="/discover"><FaUser/></Link>
                     </li>
                 </ul>
            </nav>
             
       </div>
    )
};