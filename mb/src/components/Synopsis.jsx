import React, {useEffect, useState} from 'react';


export default function Synopsis({movie}) {

    const [readmore, setReadmore] = useState(false)

    return (
        <div className="synopsis">
        <p className="titlesynopsis">Synopsis</p>
        <div className="overview">{Overview()}</div>
    </div>
    )

    function ReadMore (overview) {
       
        if(overview.length > 200) {
           return(
               <button className="buttonreadmore" onClick={() => setReadmore(! readmore)}>{readmore ? 'Show less' :'Readmore...'}</button>
           )
       } else{
           return;
       }
   }
   function Overview() {
       const overview = movie.overview;
       return (
           <p className="synopsisreadmore">{readmore ? overview : `${overview.substring(0,200)}`} {ReadMore(overview)}</p>
       )
   }
}