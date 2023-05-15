import { Link, Route, Routes } from "react-router-dom";
import MovieList from "./movies/MovieList";
import NewMovie from "./movies/NewMovie";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";


function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_main" aria-controls="navbar_main" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar_main">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Peliculas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">Nueva Pelicula</Link>
            </li>
          </ul>

          <form className="form-inline">
            <Link className="btn btn-outline-info my-2 my-sm-0" type="submit">Iniciar Sesión</Link>
          </form>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/create" element={<NewMovie />} />
      </Routes>
    </>
  );
}

export default App;
