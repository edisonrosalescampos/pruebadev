const express = require("express");
const cors    = require("cors");

const app   = express();
const port  = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/movies", require("./server/routes/movie.routes"));

app.get('/', (req, res) => {
  res.json({message: "Hello World"});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);

  /*sequelize.sync({force: true}).then(() => {
    console.log("Conexión establecida exitosamente");
  }).catch(error => {
		console.log("Error al conectarse a la BD");
    console.log(error)
	});*/
});