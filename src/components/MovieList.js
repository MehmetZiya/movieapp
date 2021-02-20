import { useContext } from "react";
import { MoviContext } from "../contexts/MovieContext";

const MovieList = () => {
  const { movies } = useContext(MoviContext)

  return (
    <div>
      <h1>This is movie list component</h1>
    </div>
  )
}

export default MovieList;