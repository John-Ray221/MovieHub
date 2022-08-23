import { Link } from "react-router-dom";
import "./MainContent.css";
import "./MainContent_mobile.css";
import MovieCard from "../Movie/Movie";

const MainContent = ({ searchMovie }) => {
  console.log(searchMovie);
  return (
    <div className="mainContent">
      {searchMovie === undefined
        ? "NO MOVIES"
        : searchMovie.map((Movies) => (
            <Link to={`/movies/${Movies.imdbID}`}>
              <MovieCard Movies={Movies} />{" "}
            </Link>
          ))}
    </div>
  );
};

export default MainContent;
