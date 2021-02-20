import {useContext} from "react" ;
import {MovieContext} from "../contexts/MovieContext";

const Movie = (props) => {

    const { handleDelete } = useContext(MovieContext)
    return ( 
    
    <div >
        <div >
          <h2 >{props.movie.title}</h2>
          <p>Director: {props.movie.director}</p>
          <p>Release Year: {props.movie.releaseYear}</p>
          <p>Genre: {props.movie.genre}</p>
          <p onClick={() => handleDelete(props.movie)}>🗑️</p>
        </div>
      </div> 
      
      );
}
 
export default Movie;