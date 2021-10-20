
import '../css/discover.css';

export default function GenderList({gender}){

 
    /*function ChangeGender(){

     }
    

    function Gender(){

        return(

            //<Carousel  itemsToShow={2} showArrows={false} pagination={false} className="carouselgender" >
            
           gender.map((genre) => {
                return (
                    <div className="listgender" key ={genre.id} >
                        
                        <p id= { genre.id}
                           //onClick = {(e) => ChangeGender(e)} 
                          >{genre.name}</p>
                    </div>
                )
            })
            
       // </Carousel>
        )
    }*/
     const GenderName = gender.map(genre =>
            <li className="genderli" key={genre.id}>{genre.name}</li>
        )

    return(

            <div className="gender">
                <ul className="listgender">{GenderName}</ul>
            </div> 

  
    )
}