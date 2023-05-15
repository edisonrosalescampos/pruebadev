import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewMovie() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title: "",
    category: "",
    description: ""
  });

  const categories_array = [
    "Acción", "Aventura", "Catástrofe", "Ciencia Ficción", "Comedia", "Documentales", "Drama", "Fantasía", "Musicales", "Suspenso", "Terror"
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    if (values.title.trim() === "")
    {
      alert("El campo Título es obligatorio");
    }
    else if (values.category.trim() === "") 
    {
      alert("El campo categoría es obligatorio");
    }
    else if (values.description.trim() === "") 
    {
      alert("El campo descripción es obligatorio");
    }
    else 
    {
      axios.post("http://localhost:3000/api/movies/create", values).then(res => navigate("/")).catch(error => console.log(error));
    }
  }

  const handleChange = (event) => {
    const { target: { name, value } } = event;

    const newValues = {
      ...values,
      [name]: value
    };

    setValues(newValues);
  }

  return (
    <div className="container py-4">
      <div className="row">
        <form onSubmit={handleSubmit}>
          <div className="card col-sm-6 offset-sm-3">
            <div className="card-header">
              <h6 className="mb-0">Nueva Pelicula</h6>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="title">Titulo Pelicula</label>
                <input type="text" className="form-control" id="title" name="title" placeholder="Ingrese..." onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="category">Categoría</label>
                <select className="form-control" id="category" name="category" onChange={handleChange}>
                  <option value="">Seleccione un valor...</option>
                  {categories_array.map((cat, i) => <option key={i} value={i}>{cat}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="description">Descripción</label>
                <textarea className="form-control" id="description" name="description" placeholder="Especifique aquí..." rows="4" onChange={handleChange}></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block">GUARDAR PELICULA</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewMovie;