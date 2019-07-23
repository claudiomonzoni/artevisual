// variables para abrir el menu de cel
const menuCel = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu");

//funciones
let abrirMenu = function() {
  menuCel.classList.toggle("is-active");
  menu.classList.toggle("menuAbierto");
};

// eventos
menuCel.addEventListener("click", abrirMenu);
