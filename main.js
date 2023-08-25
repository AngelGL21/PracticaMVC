
var peliculas = [
  { titulo: "Superlópez", 
  director: "Director Superlópez", 
  año: 2018, 
  imagen: "https://pics.filmaffinity.com/Superlaopez-456694460-large.jpg", 
  trailer: "https://www.youtube.com/embed/FRNdK2zdVT4"},
  { titulo: "Pinocho", 
  director: "Guillermo del toro", 
  año: 2022, 
  imagen: "https://tolucalabellacd.com/wp-content/uploads/2022/11/podras-ver-pinocho-de-guillermo-del-toro-antes-que-todos.jpeg", 
  trailer: "https://www.youtube.com/embed/JxdIJYiMZ2Y" },
  { titulo: "Oppenheimer", 
  director: "Christopher Nolan", 
  año: 2014, 
  imagen: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg", 
  trailer: "https://www.youtube.com/embed/yLYbOe914ZU" }
];

function mainView(pelis) {
  var html = `<h1>Mis películas/series favoritas</h1>`;
  html += `<div class="peli-lista">`;
  for (var i = 0; i < pelis.length; i++) {
    html += `<div class="peli-tarjeta">
    <img src="${pelis[i].imagen}" alt="${pelis[i].titulo}" width="200">
    <h3>${pelis[i].titulo}</h3>
    <div class="button-row">
    <button onclick="verVideo(${i})">Ver</button>
    <button onclick="editDetalle(${i})">Editar</button>
    <button onclick="borrarPeli(${i})">Borrar</button>
    </div>
    </div>`;
  }
  html += `</div>`;
  html += `<div class="botones">
  <button onclick="nuevoView()">Añadir</button>
  <button onclick="restablecerView()">Reset</button>
  </div>`;
  
  return html;
}

function verVideo(index) {
  var movie = peliculas[index];
  document.getElementById("main").innerHTML = `
  <h3>${movie.titulo}</h3>
  <div class="video-responsive">
  <iframe src="${movie.trailer}" class="video" frameborder="0" 
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in- 
  picture" allowfullscreen></iframe>
  </div>
  <div class="boton-volver">
  <button onclick="resetView()">Volver</button>
  </div>`;
}

function editDetalle(index) {
  var movie = peliculas[index];
  document.getElementById("main").innerHTML = `
  <div class="editar">
  <h3>Editar detalles: </h3>
  Título: <input type="text" id="editTitulo" value="${movie.titulo}">
  Director: <input type="text" id="editDirector" value="${movie.director}">
  Año: <input type="text" id="editAño" value="${movie.año}">
  Miniautra URL: <input type="url" id="editimagen" value="${movie.imagen}">
  Treiler URL: <input type="url" id="editrailer" value="${movie.trailer}">
  <button onclick="guardarEdit(${index})">Guardar</button>
  <button onclick="resetView()">Cancelar</button>
  </div>`;
}

function guardarEdit(index) {
  peliculas[index].titulo = document.getElementById("editTitulo").value;
  peliculas[index].director = document.getElementById("editDirector").value;
  peliculas[index].año = document.getElementById("editAño").value;
  peliculas[index].imagen = document.getElementById("editimagen").value;
  peliculas[index].trailer = document.getElementById("editrailer").value;
  indexView();
}

function nuevoView() {
  document.getElementById("main").innerHTML =  `
  <div class="nuevop">
  <h3>Nueva película / serie</h3>
  Título: <input type="text" id="titulo">
  Director: <input type="text" id="director">
  Año: <input type="text" id="año">
  Miniatura URL: <input type="text" id="imagen">
  Trailer URL: <input type="text" id="trailer">
  <button onclick="añadirPeli()">Añadir</button>
  <button onclick="resetView()">Cancelar</button>
  </div>`;
          
}

function añadirPeli() {
  var titulo = document.getElementById("titulo").value;
  var director = document.getElementById("director").value;
  var año = document.getElementById("año").value;
  var imagen = document.getElementById("imagen").value;
  var trailer = document.getElementById("trailer").value;
  peliculas.push({ titulo: titulo, director: director, año: año, imagen: imagen, trailer: trailer});
  indexView();
}

function restablecerView() { location.reload();}

function borrarPeli(index) {
  peliculas.splice(index, 1);
  indexView();
}

function resetView() { indexView();}

function indexView() {
  document.getElementById("main").innerHTML = mainView(peliculas);
}

document.addEventListener('DOMContentLoaded', ev => indexView());