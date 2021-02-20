import { useContext } from "react";
import { MoviContext } from "../contexts/MovieContext";
import Movie from "../Movie";

const MovieList = () => {
  const { movies } = useContext(MoviContext)

  return (
    <div>
       {movies.map((movie, i) => (
        <Movie key={i} movie={movie} />
      ))}
    </div>
  )
}

export default MovieList;