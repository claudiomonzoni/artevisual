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

//mapa

class Mapa {
  constructor() {
    this.mapa = this.inicializarMapa();
    this.markers = new L.LayerGroup();
  }

  inicializarMapa() {
    // Inicializar y obtener la propiedad del mapa
    const map = L.map("mapa").setView([17.64083, -101.549114], 16);
    const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; " + enlaceMapa + " Contributors",
      maxZoom: 20
    }).addTo(map);

    return map;
  }

  obtenerDatos() {
    const pines = {
      resultados: [
        {
          latitude: "17.64083",
          longitude: "-101.549114",
          titulo: "Arte Visual Ixtapa Zihuatanejo",
          calle:
            "Calle Pelicanos Edificio F5, Col. Dario Galeana Zihuatanejo, Gro México."
        }
      ]
    };

    this.mostrarPines(pines.resultados);
  }

  mostrarPines(datos) {
    // limpio marker para mostrar otra busqueda
    this.markers.clearLayers();
    console.log(datos);
    datos.forEach(dato => {
      //destructurig para obtener las prop del obj
      const { latitude, longitude, titulo, calle } = dato;

      // crear un globo de info
      const globo = L.popup().setContent(`
      <h3>${titulo} </h3>
      <p> Calle: ${calle}</p>
      `);
      //agregar el pin por obj
      // corchete porque es array
      const marker = new L.marker([
        parseFloat(latitude),
        parseFloat(longitude)
      ]).bindPopup(globo);
      //agregamos cada pin al layer del constructor
      this.markers.addLayer(marker);
    });
    this.markers.addTo(this.mapa);
  }
}

const mapa = new Mapa();
document.addEventListener("DOMContentLoaded", () => {
  mapa.obtenerDatos();
});
