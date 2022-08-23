import "./styles.css";
import NavBar from "./Components/NavBar/NavBar";
import MainContent from "./Components/MainContent/MainContent";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

export default function App() {
  const [searchMovie, setSearchMovie] = useState([]);
  const API_URL = "https://www.omdbapi.com/?apikey=8d267aea&";

  const FetchMovie = async (title) => {
    const response = await fetch(`${API_URL}s=${title}`);
    const data = await response.json();

    console.log(data);
    setSearchMovie(data.Search);
  };

  useEffect(() => {
    FetchMovie("Avengers");
  }, []);
  return (
    <div className="App">
      <NavBar FetchMovie={FetchMovie} />

      <Switch>
        <Route path="/" exact>
          <MainContent searchMovie={searchMovie} />
        </Route>
        <Route path="/movies/:id">
          <MovieDetails />
        </Route>
      </Switch>
    </div>
  );
}
