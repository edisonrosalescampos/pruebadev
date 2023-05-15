import { useEffect, useRef, useState } from "react";
import axios from "axios";

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const refInputSearch      = useRef();

  const categories_array    = [
    "Acción", "Aventura", "Catástrofe", "Ciencia Ficción", "Comedia", "Documentales", "Drama", "Fantasía", "Musicales", "Suspenso", "Terror"
  ];

  useEffect(() => {
    axios(`http://localhost:3000/api/movies?title=${search}`).then(({data}) => setMovies(data)).catch(error => console.log(error));

    console.log(movies)
  }, [search]); 

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleSearch = () => {
    setSearch(refInputSearch.current.value);
  }

  return (
    <div className="container py-4">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col-sm-6 offset-sm-3">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Ingrese un valor..." ref={refInputSearch}/>
              <div className="input-group-append">
                <button className="btn btn-secondary" type="submit" id="button-addon2" onClick={handleSearch}>Buscar</button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <br />

      <h3 className="text-center">LISTADO DE PELICULAS</h3>

      <br />

      <div className="row">
        {
          movies.map(movie => {
            return (
              <div className="col-sm-3 mb-3" key={movie.id}>
                <div className="card bg-dark text-white h-100">
                  <div className="card-body">
                    <h5 className="card-title">{movie.title.toUpperCase()}</h5>
                    <p className="card-subtitle text-muted">
                      <span className="badge bg-success">{categories_array[ movie.category ] || ""}</span>
                    </p>

                    <br />

                    <p className="card-text text-truncate mb-2">{movie.description}</p>

                    <button type="submit" className="btn btn-outline-info btn-flat btn-sm">Ver Detalle</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>      
  );
}

export default MoviesList;