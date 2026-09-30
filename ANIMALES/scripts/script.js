/* =========================================================
   CARRUSEL DE ANIMALES
========================================================= */

const contenedorAnimales = document.querySelector(".carrusel-contenido");
const cartasAnimales = Array.from(document.querySelectorAll(".carta"));

const anchoCarta = 280;
const espacio = 30;
const paso = anchoCarta + espacio;

let posicionesAnimales = [];
let velocidadAnimales = 140;

let ultimoTiempoAnimales = performance.now();
let carruselAnimalesActivo = true;

let cartaAnimalSeleccionada = null;
let animacionAnimalBloqueada = false;

/* =========================================================
   INFORMACIÓN DE LOS ANIMALES
========================================================= */

const informacionAnimales = {
  pato: {
    nombre: "Cris",
    texto:
      "Una persona curiosa y perseverante, adaptable e independiente. Aunque parezca tranquila siempre estoy pensando, aprendiendo y buscando la manera de conseguir lo que quiero. Además, el pato tiene un toque de espontáneo y gracioso que también me representa.",
  },

  ardilla: {
    nombre: "Malena",
    texto:
      "Una persona adaptable, curiosa e independiente, que disfruta aprendiendo y enfrentándose a nuevos retos. Es observadora y valiente, pero también sensible y capaz de recuperarse ante las dificultades. Valora su libertad, aunque sin dejar de lado la cercanía con los demás.",
  },

  lobo: {
    nombre: "Alvaro C",
    texto:
      "Una persona fiel, leal e independiente, que valora mucho la confianza y el trabajo en equipo. Aunque puede ser reservada, tiene unos principios muy marcados y procura respetar tanto a los demás como al grupo al que pertenece.",
  },

  panda: {
    nombre: "Aitor",
    texto:
      "Una persona tranquila, pacífica y relajada, que no necesita estar constantemente luchando para conseguir las cosas. Puede tener un lado torpe y divertido que le aporta naturalidad, mientras que su forma de ser transmite serenidad y confianza.",
  },

  aguila: {
    nombre: "Alvaro",
    texto:
      "Una persona libre, determinada e independiente, con una visión clara de lo que quiere conseguir. Cuando se marca un objetivo, no suele rendirse fácilmente y busca seguir avanzando y superándose.",
  },

  castor: {
    nombre: "Juanjo",
    texto:
      "Una persona trabajadora, constante y organizada, que prefiere hacer las cosas con paciencia y siguiendo su propio método. Es independiente y sabe desenvolverse por sí misma, pero también valora la colaboración y el trabajo en equipo cuando es necesario.",
  },

  boqueron: {
    nombre: "Pablo",
    texto:
      "Una persona independiente, trabajadora y tranquila, que sabe adaptarse a diferentes situaciones sin perder su propia personalidad. Aunque forma parte de un grupo, mantiene su esencia y valora mucho la cooperación, la lealtad y el compañerismo.",
  },

  pantera: {
    nombre: "Ale",
    texto:
      "Una persona reservada, independiente y observadora, que no necesita estar rodeada de mucha gente para sentirse bien. Es selectiva con las personas, pero muy leal y protectora cuando crea un vínculo. Aunque al principio puede parecer seria o distante, cuando coge confianza muestra un lado más divertido y cercano.",
  },

  anaconda: {
    nombre: "Ramón",
    texto:
      "Una persona adaptable, observadora y eficiente, que sabe pasar desapercibida cuando es necesario y actuar en el momento adecuado. No necesita llamar la atención para demostrar lo que vale: prefiere que su trabajo hable por ella.",
  },

  camaleon: {
    nombre: "Helena",
    texto:
      "Una persona adaptable, observadora y empática, capaz de integrarse fácilmente en distintos ambientes y grupos. Prefiere observar, entender cómo funcionan las cosas y después actuar de la mejor manera.",
  },

  gato: {
    nombre: "Lola",
    texto:
      "Una persona curiosa, activa e independiente, que necesita estímulos y disfruta descubriendo cosas nuevas. Tiene un carácter espontáneo y decidido, pero también transmite ternura, sensibilidad y cuidado hacia los demás.",
  },

  cebra: {
    nombre: "Kassandra",
    texto:
      "Una persona única y auténtica, que valora tener su propia personalidad pero también entiende la importancia de trabajar en equipo. Le gusta colaborar, apoyar a los demás y mantener un ambiente de respeto y compañerismo.",
  },

  lince: {
    nombre: "Mariela",
    texto:
      "Una persona observadora, cautelosa y reservada, que prefiere analizar las situaciones antes de actuar. Es perfeccionista e intuitiva, se fija en los pequeños detalles y confía bastante en su propio criterio.",
  },
};

/* =========================================================
   DESCRIPCIÓN DE ANIMALES
========================================================= */

const descripcionAnimal = document.querySelector(".descripcion-animal");

const tituloAnimal = descripcionAnimal.querySelector("h3");
const textoAnimal = descripcionAnimal.querySelector("p");

/* =========================================================
   POSICIONES INICIALES ANIMALES
========================================================= */

cartasAnimales.forEach(function (carta, indice) {
  const posicionInicial = indice * paso;

  posicionesAnimales.push(posicionInicial);

  carta.style.left = posicionInicial + "px";
});

/* =========================================================
   MOVIMIENTO ANIMALES
========================================================= */

function moverCarruselAnimales(tiempoActual) {
  const deltaTiempo = (tiempoActual - ultimoTiempoAnimales) / 1000;

  ultimoTiempoAnimales = tiempoActual;

  if (carruselAnimalesActivo) {
    cartasAnimales.forEach(function (carta, indice) {
      posicionesAnimales[indice] -= velocidadAnimales * deltaTiempo;

      if (posicionesAnimales[indice] < -paso) {
        const posicionMasLejana = Math.max(...posicionesAnimales);

        posicionesAnimales[indice] = posicionMasLejana + paso;
      }

      carta.style.left = posicionesAnimales[indice] + "px";
    });
  }

  requestAnimationFrame(moverCarruselAnimales);
}

requestAnimationFrame(moverCarruselAnimales);

/* =========================================================
   CLIC ANIMALES
========================================================= */

cartasAnimales.forEach(function (carta) {
  carta.addEventListener("click", function () {
    if (animacionAnimalBloqueada) {
      return;
    }

    /* ---------------------------------------------
           CERRAR CARTA
        --------------------------------------------- */

    if (cartaAnimalSeleccionada === carta) {
      animacionAnimalBloqueada = true;

      carruselAnimalesActivo = false;

      carta.classList.remove("girada");

      setTimeout(function () {
        carta.classList.remove("seleccionada");

        descripcionAnimal.classList.remove("visible");

        document.body.classList.remove("carta-abierta");

        cartaAnimalSeleccionada = null;

        requestAnimationFrame(function () {
          ultimoTiempoAnimales = performance.now();

          carruselAnimalesActivo = true;

          animacionAnimalBloqueada = false;
        });
      }, 800);

      return;
    }

    /* ---------------------------------------------
           SI YA HAY UNA ABIERTA
        --------------------------------------------- */

    if (cartaAnimalSeleccionada !== null) {
      return;
    }

    animacionAnimalBloqueada = true;

    cartaAnimalSeleccionada = carta;

    carruselAnimalesActivo = false;

    /* ---------------------------------------------
           BUSCAR INFORMACIÓN
        --------------------------------------------- */

    const claseAnimal = Array.from(carta.classList).find(function (clase) {
      return informacionAnimales[clase];
    });

    if (claseAnimal) {
      const color = getComputedStyle(carta).getPropertyValue("--color-animal");

      document.body.style.setProperty("--color-seleccionado", color);

      tituloAnimal.textContent = informacionAnimales[claseAnimal].nombre;

      textoAnimal.textContent = informacionAnimales[claseAnimal].texto;

      descripcionAnimal.classList.add("visible");
    }

    document.body.classList.add("carta-abierta");

    /* ---------------------------------------------
           CENTRAR CARTA
        --------------------------------------------- */

    const posicionCentro = window.innerWidth / 2 - anchoCarta / 2;

    const indice = cartasAnimales.indexOf(carta);

    const diferencia = posicionesAnimales[indice] - posicionCentro;

    cartasAnimales.forEach(function (otraCarta, i) {
      posicionesAnimales[i] -= diferencia;

      otraCarta.style.transition = "left 0.45s ease";

      otraCarta.style.left = posicionesAnimales[i] + "px";
    });

    /* ---------------------------------------------
           CARTA POR ENCIMA
        --------------------------------------------- */

    carta.classList.add("seleccionada");

    /* ---------------------------------------------
           GIRAR
        --------------------------------------------- */

    setTimeout(function () {
      carta.classList.add("girada");

      animacionAnimalBloqueada = false;
    }, 500);
  });
});

/* =========================================================
   CARRUSEL DE COLORES
========================================================= */

const contenedorColores = document.querySelector(".carrusel-colores-contenido");

const cartasColores = Array.from(document.querySelectorAll(".carta-color"));

let posicionesColores = [];

let velocidadColores = 140;

let ultimoTiempoColores = performance.now();

let carruselColoresActivo = true;

let cartaColorSeleccionada = null;

let animacionColorBloqueada = false;

/* =========================================================
   INFORMACIÓN DE LOS COLORES
========================================================= */

const informacionColores = {
  rojo: {
    nombre: "Rojo",
    persona: "Cebra",
    color: "#D62828",
    texto: "El rojo representa energía, pasión, fuerza y determinación.",
  },

  azul: {
    nombre: "Azul",
    persona: "Boquerón",
    color: "#3B82C4",
    texto:
      "El azul representa calma, confianza, estabilidad y sentido de pertenencia.",
  },

  verde: {
    nombre: "Verde",
    persona: "Ardilla voladora",
    color: "#7BC47F",
    texto:
      "El verde representa crecimiento, equilibrio, naturalidad y adaptación.",
  },

  amarillo: {
    nombre: "Amarillo",
    persona: "—",
    color: "#F1C40F",
    texto:
      "El amarillo transmite alegría, optimismo, creatividad, curiosidad y espontaneidad.",
  },

  naranja: {
    nombre: "Naranja",
    persona: "Águila",
    color: "#F28C28",
    texto: "El naranja transmite energía, entusiasmo, creatividad y cercanía.",
  },

  morado: {
    nombre: "Morado",
    persona: "Pato",
    color: "#6A0DAD",
    texto:
      "El morado representa creatividad, imaginación, originalidad, intuición e individualidad.",
  },

  rosa: {
    nombre: "Rosa",
    persona: "Gato rosa",
    color: "#F4A6C1",
    texto:
      "El rosa representa sensibilidad, cercanía, ternura, empatía y cuidado.",
  },

  blanco: {
    nombre: "Blanco",
    persona: "Camaleón blanco",
    color: "#F5F5F0",
    texto:
      "El blanco representa claridad, sencillez, tranquilidad, orden y equilibrio.",
  },

  negro: {
    nombre: "Negro",
    persona: "Pantera negra",
    color: "#222222",
    texto:
      "El negro representa independencia, seguridad, carácter, elegancia y misterio.",
  },
  burdeos: {
    nombre: "Burdeos",
    persona: "—",
    color: "#800020",
    texto:
      "El burdeos transmite elegancia, intensidad, seguridad, madurez y determinación.",
  },

  "azul-marino": {
    nombre: "Azul marino",
    persona: "—",
    color: "#0B1F3A",
    texto:
      "El azul marino representa confianza, estabilidad, profundidad, seriedad y responsabilidad.",
  },

  turquesa: {
    nombre: "Turquesa",
    persona: "—",
    color: "#20B2AA",
    texto:
      "El turquesa combina calma y energía, transmitiendo creatividad, originalidad, espontaneidad y adaptación.",
  },

  terracota: {
    nombre: "Terracota",
    persona: "—",
    color: "#C96F4A",
    texto:
      "El terracota transmite calidez, naturalidad, autenticidad, cercanía y seguridad.",
  },
};

/* =========================================================
   DESCRIPCIÓN DE COLORES
========================================================= */

const descripcionColor = document.querySelector(".descripcion-color");

const tituloColor = descripcionColor.querySelector("h3");

const textoColor = descripcionColor.querySelector("p");

/* =========================================================
   POSICIONES INICIALES COLORES
========================================================= */

cartasColores.forEach(function (carta, indice) {
  const posicionInicial = indice * paso;

  posicionesColores.push(posicionInicial);

  carta.style.left = posicionInicial + "px";
});

/* =========================================================
   MOVIMIENTO COLORES
========================================================= */

function moverCarruselColores(tiempoActual) {
  const deltaTiempo = (tiempoActual - ultimoTiempoColores) / 1000;

  ultimoTiempoColores = tiempoActual;

  if (carruselColoresActivo) {
    cartasColores.forEach(function (carta, indice) {
      posicionesColores[indice] -= velocidadColores * deltaTiempo;

      if (posicionesColores[indice] < -paso) {
        const posicionMasLejana = Math.max(...posicionesColores);

        posicionesColores[indice] = posicionMasLejana + paso;
      }

      carta.style.left = posicionesColores[indice] + "px";
    });
  }

  requestAnimationFrame(moverCarruselColores);
}

requestAnimationFrame(moverCarruselColores);

/* =========================================================
   CLIC COLORES
========================================================= */

cartasColores.forEach(function (carta) {
  carta.addEventListener("click", function () {
    if (animacionColorBloqueada) {
      return;
    }

    /* ---------------------------------------------
           CERRAR COLOR
        --------------------------------------------- */

    if (cartaColorSeleccionada === carta) {
      animacionColorBloqueada = true;

      carruselColoresActivo = false;

      carta.classList.remove("girada");

      setTimeout(function () {
        carta.classList.remove("seleccionada");

        descripcionColor.classList.remove("visible");

        cartaColorSeleccionada = null;

        requestAnimationFrame(function () {
          ultimoTiempoColores = performance.now();

          carruselColoresActivo = true;

          animacionColorBloqueada = false;
        });
      }, 800);

      return;
    }

    /* ---------------------------------------------
           SI YA HAY UN COLOR ABIERTO
        --------------------------------------------- */

    if (cartaColorSeleccionada !== null) {
      return;
    }

    animacionColorBloqueada = true;

    cartaColorSeleccionada = carta;

    carruselColoresActivo = false;

    /* ---------------------------------------------
           BUSCAR COLOR
        --------------------------------------------- */

    const claseColor = Array.from(carta.classList).find(function (clase) {
      return informacionColores[clase];
    });

    if (claseColor) {
      const informacion = informacionColores[claseColor];

      tituloColor.textContent = informacion.nombre;

      textoColor.textContent = informacion.texto;

      descripcionColor.style.setProperty(
        "--color-color-seleccionado",
        informacion.color,
      );

      descripcionColor.classList.add("visible");
    }

    /* ---------------------------------------------
           CENTRAR CARTA
        --------------------------------------------- */

    const posicionCentro = window.innerWidth / 2 - anchoCarta / 2;

    const indice = cartasColores.indexOf(carta);

    const diferencia = posicionesColores[indice] - posicionCentro;

    cartasColores.forEach(function (otraCarta, i) {
      posicionesColores[i] -= diferencia;

      otraCarta.style.transition = "left 0.45s ease";

      otraCarta.style.left = posicionesColores[i] + "px";
    });

    /* ---------------------------------------------
           POR ENCIMA
        --------------------------------------------- */

    carta.classList.add("seleccionada");

    /* ---------------------------------------------
           GIRAR
        --------------------------------------------- */

    setTimeout(function () {
      carta.classList.add("girada");

      animacionColorBloqueada = false;
    }, 500);
  });
});
