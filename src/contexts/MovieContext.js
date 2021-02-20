import { createContext, useState } from "react";

export const MoviContext = createContext()

const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      title: "Harry potter and a Prisoner of Azkaban",
      director: "Alfonso Cuaron",
      releaseYear: 2004,
      genre: "fantasy"
    },
    {
      title: "IT",
      director: "Andres Muchietti",
      releaseYear: 2017,
      genre: "Horror"
    },
    {
      title: "Home Alone",
      director: "Chris Columbus",
      releaseYear: 1990,
      genre: "Comedy"
    },
    {
      title: "Bad Boys",
      director: "Michael Bay",
      releaseYear: 1995,
      genre: "Action"
    },
  ]) 
  
  const handleSubmit = (e, movie, history) => {
    e.preventDefault()
    setMovies([movie, ...movies])
    history.push('/')
  }

  const handleDelete = (movie) => {
    setMovies(movies.filter(m => m !== movie))
  }

  const values = {
    movies,
    handleSubmit,
    handleDelete
  }

  return (
    <MoviContext.Provider value={values}>
      {props.children}
    </MoviContext.Provider>
  )
}

export default MovieProvider;