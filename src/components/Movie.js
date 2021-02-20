import {useContext} from "react" ;
import {MovieContext} from "../contexts/MovieContext";

const Movie = ({movie}) => {

    const { handleDelete } = useContext(MovieContext)
    return ( 
    
    <div >
        <div >
          <h2 >{movie.title}</h2>
          <p>Director: {movie.director}</p>
          <p>Release Year: {movie.releaseYear}</p>
          <p>Genre: {movie.genre}</p>
          <p onClick={() => handleDelete(movie)}>🗑️</p>
        </div>
      </div> 
      
      );
}
 
export default Movie;