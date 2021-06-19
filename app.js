const express = require('express');

const app = express();

var data = {
  "Universidad": "UTPL",
  "Curso": "Procesos de Ingeniería de Software",
  "Alumno": "Franz David Burneo Monteros",
  "Período": "Abr/Ago 2021",
  "Lenguaje de programación preferido": "JavaScript",
  "Aspiración PostGraduación": "ASPIRACION"
}; 

app.get('/', (req, res) => {
  res.send(data);
});

app.listen(3000, () => {
    console.log(`My REST API running on port 3000!`);   
})
