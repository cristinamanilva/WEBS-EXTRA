/* =========================================================
   TEST "¿QUÉ ANIMAL SOY?"
   - Cada respuesta suma puntos a varios animales.
   - Al final gana el animal con más puntos.
========================================================= */

(function () {
  /* -----------------------------------------------------
       ANIMALES (imagen, color y descripción del resultado)
    ----------------------------------------------------- */

  const animales = {
    pato: {
      nombre: "Pato",
      img: "img/pato.jpg",
      color: "#6a0dad",
      texto:
        "Curioso y perseverante, adaptable e independiente. Aunque parezca tranquilo siempre está pensando, aprendiendo y buscando la manera de conseguir lo que quiere. Además, tiene un toque de espontáneo y gracioso.",
    },

    ardilla: {
      nombre: "Ardilla voladora",
      img: "img/ardilla-voladora.jpg",
      color: "#d98b4a",
      texto:
        "Adaptable, curiosa e independiente, disfruta aprendiendo y enfrentándose a nuevos retos. Es observadora y valiente, pero también sensible y capaz de recuperarse ante las dificultades. Valora su libertad sin dejar de lado la cercanía con los demás.",
    },

    lobo: {
      nombre: "Lobo",
      img: "img/lobo.jpg",
      color: "#718096",
      texto:
        "Fiel, leal e independiente, valora mucho la confianza y el trabajo en equipo. Aunque puede ser reservado, tiene unos principios muy marcados y respeta tanto a los demás como al grupo al que pertenece.",
    },

    panda: {
      nombre: "Panda",
      img: "img/panda.jpg",
      color: "#9ae6b4",
      texto:
        "Tranquilo, pacífico y relajado, no necesita estar luchando constantemente para conseguir las cosas. Puede tener un lado torpe y divertido que le aporta naturalidad, y su forma de ser transmite serenidad y confianza.",
    },

    aguila: {
      nombre: "Águila",
      img: "img/aguila.jpg",
      color: "#d6a84f",
      texto:
        "Libre, determinada e independiente, con una visión clara de lo que quiere conseguir. Cuando se marca un objetivo no suele rendirse y busca seguir avanzando y superándose.",
    },

    castor: {
      nombre: "Castor",
      img: "img/castor.jpg",
      color: "#a56b46",
      texto:
        "Trabajador, constante y organizado, prefiere hacer las cosas con paciencia y siguiendo su propio método. Es independiente, pero también valora la colaboración y el trabajo en equipo cuando es necesario.",
    },

    boqueron: {
      nombre: "Boquerón",
      img: "img/boqueron.jpg",
      color: "#4fa3c7",
      texto:
        "Independiente, trabajador y tranquilo, sabe adaptarse a diferentes situaciones sin perder su personalidad. Aunque forma parte de un grupo, mantiene su esencia y valora la cooperación, la lealtad y el compañerismo.",
    },

    pantera: {
      nombre: "Pantera negra",
      img: "img/pantera-negra.jpg",
      color: "#7b61a8",
      texto:
        "Reservada, independiente y observadora, no necesita mucha gente a su alrededor para sentirse bien. Es selectiva, pero muy leal y protectora cuando crea un vínculo. Con confianza muestra un lado más divertido y cercano.",
    },

    anaconda: {
      nombre: "Anaconda ciega",
      img: "img/anaconda-ciega.jpg",
      color: "#5c8d5a",
      texto:
        "Adaptable, observadora y eficiente, sabe pasar desapercibida cuando es necesario y actuar en el momento adecuado. No necesita llamar la atención para demostrar lo que vale: prefiere que su trabajo hable por ella.",
    },

    camaleon: {
      nombre: "Camaleón blanco",
      img: "img/camaleon.jpg",
      color: "#c9c9bd",
      texto:
        "Adaptable, observador y empático, capaz de integrarse fácilmente en distintos ambientes y grupos. Prefiere observar, entender cómo funcionan las cosas y después actuar de la mejor manera.",
    },

    gato: {
      nombre: "Gato rosa",
      img: "img/gato.jpg",
      color: "#f4a6c1",
      texto:
        "Curioso, activo e independiente, necesita estímulos y disfruta descubriendo cosas nuevas. Tiene un carácter espontáneo y decidido, pero también transmite ternura, sensibilidad y cuidado hacia los demás.",
    },

    cebra: {
      nombre: "Cebra",
      img: "img/cebra.jpg",
      color: "#d62828",
      texto:
        "Única y auténtica, valora tener su propia personalidad pero entiende la importancia de trabajar en equipo. Le gusta colaborar, apoyar a los demás y mantener un ambiente de respeto y compañerismo.",
    },

    lince: {
      nombre: "Lince",
      img: "img/lince.jpg",
      color: "#b79ad8",
      texto:
        "Observador, cauteloso y reservado, prefiere analizar las situaciones antes de actuar. Es perfeccionista e intuitivo, se fija en los pequeños detalles y confía bastante en su propio criterio.",
    },
  };

  /* -----------------------------------------------------
       COLORES (hex, descripción y rasgos)
    ----------------------------------------------------- */

  const colores = {
    rojo: {
      nombre: "Rojo",
      hex: "#D62828",
      texto: "El rojo representa energía, pasión, fuerza y determinación.",
      rasgos: ["Energía", "Pasión", "Determinación", "Fuerza", "Confianza"],
    },

    azul: {
      nombre: "Azul",
      hex: "#3B82C4",
      texto:
        "El azul representa calma, confianza, estabilidad y sentido de pertenencia.",
      rasgos: [
        "Tranquilidad",
        "Serenidad",
        "Confianza",
        "Estabilidad",
        "Reflexión",
      ],
    },

    verde: {
      nombre: "Verde",
      hex: "#7BC47F",
      texto:
        "El verde representa crecimiento, equilibrio, naturalidad y adaptación.",
      rasgos: [
        "Equilibrio",
        "Adaptabilidad",
        "Armonía",
        "Crecimiento",
        "Naturalidad",
      ],
    },

    amarillo: {
      nombre: "Amarillo",
      hex: "#F1C40F",
      texto:
        "El amarillo transmite alegría, optimismo, creatividad, curiosidad y espontaneidad.",
      rasgos: [
        "Alegría",
        "Optimismo",
        "Creatividad",
        "Curiosidad",
        "Espontaneidad",
      ],
    },

    naranja: {
      nombre: "Naranja",
      hex: "#F28C28",
      texto:
        "El naranja transmite energía, entusiasmo, creatividad y cercanía.",
      rasgos: [
        "Sociabilidad",
        "Entusiasmo",
        "Creatividad",
        "Vitalidad",
        "Espontaneidad",
      ],
    },

    morado: {
      nombre: "Morado",
      hex: "#6A0DAD",
      texto:
        "El morado representa creatividad, imaginación, originalidad, intuición e individualidad.",
      rasgos: [
        "Creatividad",
        "Imaginación",
        "Originalidad",
        "Intuición",
        "Individualidad",
      ],
    },

    rosa: {
      nombre: "Rosa",
      hex: "#F4A6C1",
      texto:
        "El rosa representa sensibilidad, cercanía, ternura, empatía y cuidado.",
      rasgos: ["Sensibilidad", "Cercanía", "Ternura", "Empatía", "Cuidado"],
    },

    blanco: {
      nombre: "Blanco",
      hex: "#F5F5F0",
      texto:
        "El blanco representa claridad, sencillez, tranquilidad, orden y equilibrio.",
      rasgos: ["Claridad", "Sencillez", "Tranquilidad", "Orden", "Equilibrio"],
    },

    negro: {
      nombre: "Negro",
      hex: "#222222",
      texto:
        "El negro representa independencia, seguridad, carácter, elegancia y misterio.",
      rasgos: [
        "Independencia",
        "Seguridad",
        "Carácter",
        "Elegancia",
        "Misterio",
      ],
    },

    burdeos: {
      nombre: "Burdeos",
      hex: "#800020",
      texto:
        "El burdeos transmite elegancia, intensidad, seguridad, madurez y determinación.",
      rasgos: [
        "Elegancia",
        "Intensidad",
        "Seguridad",
        "Madurez",
        "Determinación",
      ],
    },

    "azul-marino": {
      nombre: "Azul marino",
      hex: "#0B1F3A",
      texto:
        "El azul marino representa confianza, estabilidad, profundidad, seriedad y responsabilidad.",
      rasgos: [
        "Confianza",
        "Estabilidad",
        "Profundidad",
        "Seriedad",
        "Responsabilidad",
      ],
    },

    turquesa: {
      nombre: "Turquesa",
      hex: "#20B2AA",
      texto:
        "El turquesa combina calma y energía, transmitiendo creatividad, originalidad, espontaneidad y adaptación.",
      rasgos: [
        "Creatividad",
        "Originalidad",
        "Calma",
        "Espontaneidad",
        "Adaptabilidad",
      ],
    },

    terracota: {
      nombre: "Terracota",
      hex: "#C96F4A",
      texto:
        "El terracota transmite calidez, naturalidad, autenticidad, cercanía y seguridad.",
      rasgos: [
        "Calidez",
        "Naturalidad",
        "Autenticidad",
        "Cercanía",
        "Seguridad",
      ],
    },
  };

  /* -----------------------------------------------------
       PREGUNTAS
       "p" = puntos que suma cada respuesta a cada animal
       "c" = puntos que suma cada respuesta a cada color
    ----------------------------------------------------- */

  const preguntas = [
    {
      texto: "Tienes un sábado libre. ¿Qué haces?",
      opciones: [
        {
          t: "Salgo a descubrir un sitio nuevo",
          p: { gato: 2, ardilla: 2, pato: 1 },
          c: { amarillo: 2, verde: 1, turquesa: 1 },
        },
        {
          t: "Me quedo en casa, sin prisas",
          p: { panda: 2, lince: 1, anaconda: 1 },
          c: { blanco: 2, azul: 1 },
        },
        {
          t: "Avanzo con un proyecto que tengo pendiente",
          p: { aguila: 2, castor: 2, lince: 1 },
          c: { rojo: 2, blanco: 1, "azul-marino": 1 },
        },
        {
          t: "Quedo con mi gente",
          p: { cebra: 2, lobo: 2, boqueron: 1 },
          c: { naranja: 2, rosa: 1, terracota: 1 },
        },
      ],
    },

    {
      texto: "Llegas a un grupo nuevo. ¿Cómo eres al principio?",
      opciones: [
        {
          t: "Observo y hablo poco hasta coger confianza",
          p: { pantera: 2, lince: 2, camaleon: 1 },
          c: { negro: 2, azul: 1 },
        },
        {
          t: "Me adapto enseguida y me integro",
          p: { camaleon: 2, boqueron: 2, anaconda: 1 },
          c: { verde: 2, blanco: 1 },
        },
        {
          t: "Tomo la iniciativa y empiezo a hablar",
          p: { gato: 2, aguila: 2, ardilla: 1 },
          c: { rojo: 2, naranja: 1, burdeos: 1 },
        },
        {
          t: "Hago reír a todo el mundo",
          p: { panda: 2, pato: 2, cebra: 1 },
          c: { amarillo: 2, naranja: 1 },
        },
      ],
    },

    {
      texto: "Te surge un problema difícil. ¿Qué haces?",
      opciones: [
        {
          t: "Lo analizo con calma antes de actuar",
          p: { lince: 2, anaconda: 2, camaleon: 1 },
          c: { azul: 2, blanco: 1, "azul-marino": 1 },
        },
        {
          t: "Insisto hasta conseguir resolverlo",
          p: { aguila: 2, pato: 2, castor: 1 },
          c: { rojo: 2, negro: 1 },
        },
        {
          t: "Pido ayuda y lo resolvemos en equipo",
          p: { lobo: 2, cebra: 2, boqueron: 1 },
          c: { rosa: 2, verde: 1, terracota: 1 },
        },
        {
          t: "Improviso y aprendo sobre la marcha",
          p: { ardilla: 2, gato: 2, panda: 1 },
          c: { morado: 2, amarillo: 1, turquesa: 1 },
        },
      ],
    },

    {
      texto: "¿Qué es lo que más valoras?",
      opciones: [
        {
          t: "La libertad para hacer las cosas a mi manera",
          p: { aguila: 2, ardilla: 2, pantera: 1 },
          c: { negro: 2, morado: 1 },
        },
        {
          t: "La lealtad de las personas importantes",
          p: { lobo: 2, pantera: 2, boqueron: 1 },
          c: { rosa: 2, rojo: 1, burdeos: 1 },
        },
        {
          t: "La tranquilidad y el buen ambiente",
          p: { panda: 2, boqueron: 1, camaleon: 1 },
          c: { azul: 2, blanco: 1 },
        },
        {
          t: "Ser auténtico y diferente",
          p: { cebra: 2, pato: 2, gato: 1 },
          c: { morado: 2, negro: 1, turquesa: 1 },
        },
      ],
    },

    {
      texto: "En un trabajo en grupo, ¿cuál es tu papel?",
      opciones: [
        {
          t: "Organizo y planifico los pasos",
          p: { castor: 2, lince: 2, aguila: 1 },
          c: { blanco: 2, azul: 1, "azul-marino": 1 },
        },
        {
          t: "Hago mi parte por mi cuenta, y bien hecha",
          p: { anaconda: 2, pantera: 2, boqueron: 1 },
          c: { negro: 2, rojo: 1 },
        },
        {
          t: "Cuido de que todos estemos a gusto",
          p: { cebra: 2, camaleon: 2, lobo: 1 },
          c: { rosa: 2, verde: 1, terracota: 1 },
        },
        {
          t: "Aporto ideas creativas y diferentes",
          p: { pato: 2, gato: 2, ardilla: 1 },
          c: { morado: 2, amarillo: 1 },
        },
      ],
    },

    {
      texto: "¿Cuál dirías que es tu mayor punto fuerte?",
      opciones: [
        {
          t: "La paciencia",
          p: { castor: 2, boqueron: 2, panda: 1 },
          c: { azul: 2, verde: 1, "azul-marino": 1 },
        },
        {
          t: "La empatía",
          p: { camaleon: 2, cebra: 2, panda: 1 },
          c: { rosa: 2, blanco: 1 },
        },
        {
          t: "La determinación",
          p: { aguila: 2, pato: 2, lobo: 1 },
          c: { rojo: 2, naranja: 1, burdeos: 1 },
        },
        {
          t: "La intuición y la discreción",
          p: { lince: 2, anaconda: 2, pantera: 1 },
          c: { morado: 2, negro: 1 },
        },
      ],
    },

    {
      texto: "¿Cómo te describirían tus amigos?",
      opciones: [
        {
          t: "Reservado, pero muy leal",
          p: { pantera: 2, lobo: 2, lince: 1 },
          c: { negro: 2, rosa: 1 },
        },
        {
          t: "Tranquilo y sereno",
          p: { panda: 2, boqueron: 2, anaconda: 1 },
          c: { azul: 2, blanco: 1 },
        },
        {
          t: "Curioso y muy activo",
          p: { gato: 2, ardilla: 2, pato: 1 },
          c: { amarillo: 2, naranja: 1 },
        },
        {
          t: "Único, no me parezco a nadie",
          p: { cebra: 2, pato: 2, camaleon: 1 },
          c: { morado: 2, rojo: 1, turquesa: 1 },
        },
      ],
    },

    {
      texto: "¿Cuál sería tu lugar ideal?",
      opciones: [
        {
          t: "Un bosque, entre árboles y ríos",
          p: { ardilla: 2, castor: 2, lobo: 1 },
          c: { verde: 2, blanco: 1, terracota: 1 },
        },
        {
          t: "Una montaña con vistas enormes",
          p: { aguila: 2, pantera: 2, lince: 1 },
          c: { rojo: 2, azul: 1, burdeos: 1 },
        },
        {
          t: "Un rincón discreto junto al agua",
          p: { anaconda: 2, boqueron: 2, camaleon: 1 },
          c: { azul: 2, verde: 1 },
        },
        {
          t: "Una ciudad llena de vida",
          p: { cebra: 2, gato: 2, pato: 1 },
          c: { naranja: 2, amarillo: 1 },
        },
      ],
    },

    {
      texto: "¿Qué color o prenda te representa más al vestir?",
      opciones: [
        {
          t: "Un tono burdeos, elegante y con carácter",
          p: { pantera: 2, lobo: 1 },
          c: { burdeos: 2, negro: 1 },
        },
        {
          t: "Un azul marino serio y de fiar",
          p: { castor: 2, boqueron: 1 },
          c: { "azul-marino": 2, azul: 1 },
        },
        {
          t: "Un turquesa vivo y diferente",
          p: { ardilla: 2, gato: 1 },
          c: { turquesa: 2, morado: 1 },
        },
        {
          t: "Un terracota cálido y natural",
          p: { cebra: 2, panda: 1 },
          c: { terracota: 2, naranja: 1 },
        },
      ],
    },

    {
      texto: "Si tuvieras que decorar tu casa, ¿qué estilo elegirías?",
      opciones: [
        {
          t: "Clásico y con mucha personalidad",
          p: { pantera: 2, aguila: 1 },
          c: { burdeos: 2, morado: 1 },
        },
        {
          t: "Minimalista y muy ordenado",
          p: { lince: 2, castor: 1 },
          c: { "azul-marino": 2, blanco: 1 },
        },
        {
          t: "Bohemio, lleno de detalles creativos",
          p: { pato: 2, gato: 1 },
          c: { turquesa: 2, amarillo: 1 },
        },
        {
          t: "Acogedor, cálido y natural",
          p: { boqueron: 2, panda: 1 },
          c: { terracota: 2, verde: 1 },
        },
      ],
    },

    {
      texto: "¿Qué tipo de viaje prefieres?",
      opciones: [
        {
          t: "Una ciudad con historia y encanto",
          p: { pantera: 2, cebra: 1 },
          c: { burdeos: 2, negro: 1 },
        },
        {
          t: "Un destino tranquilo y bien organizado",
          p: { castor: 2, lince: 1 },
          c: { "azul-marino": 2, azul: 1 },
        },
        {
          t: "Un sitio exótico y lleno de color",
          p: { ardilla: 2, gato: 1 },
          c: { turquesa: 2, morado: 1 },
        },
        {
          t: "Un lugar natural, cálido y sin prisas",
          p: { panda: 2, boqueron: 1 },
          c: { terracota: 2, naranja: 1 },
        },
      ],
    },

    {
      texto: "Si fueras un accesorio, ¿cuál serías?",
      opciones: [
        {
          t: "Una joya con historia, elegante",
          p: { pantera: 2, aguila: 1 },
          c: { burdeos: 2, rojo: 1 },
        },
        {
          t: "Un reloj clásico, fiable y puntual",
          p: { castor: 2, boqueron: 1 },
          c: { "azul-marino": 2, blanco: 1 },
        },
        {
          t: "Una pieza artesanal, original y llamativa",
          p: { pato: 2, ardilla: 1 },
          c: { turquesa: 2, amarillo: 1 },
        },
        {
          t: "Algo hecho a mano, natural y cercano",
          p: { cebra: 2, lobo: 1 },
          c: { terracota: 2, verde: 1 },
        },
      ],
    },
  ];

  /* -----------------------------------------------------
       PUNTOS MÁXIMOS POSIBLES POR ANIMAL (para el % final)
    ----------------------------------------------------- */

  const maximos = {};

  Object.keys(animales).forEach(function (clave) {
    maximos[clave] = 0;
  });

  preguntas.forEach(function (pregunta) {
    Object.keys(animales).forEach(function (clave) {
      const mejor = Math.max.apply(
        null,
        pregunta.opciones.map(function (opcion) {
          return opcion.p[clave] || 0;
        }),
      );

      maximos[clave] += mejor;
    });
  });

  /* Lo mismo para los colores */

  const maximosColor = {};

  Object.keys(colores).forEach(function (clave) {
    maximosColor[clave] = 0;
  });

  preguntas.forEach(function (pregunta) {
    Object.keys(colores).forEach(function (clave) {
      const mejor = Math.max.apply(
        null,
        pregunta.opciones.map(function (opcion) {
          return opcion.c[clave] || 0;
        }),
      );

      maximosColor[clave] += mejor;
    });
  });

  /* -----------------------------------------------------
       CREAR EL MODAL
    ----------------------------------------------------- */

  const fondo = document.createElement("div");
  fondo.className = "test-fondo";
  fondo.setAttribute("role", "dialog");
  fondo.setAttribute("aria-modal", "true");
  fondo.setAttribute("aria-label", "Test: ¿qué animal soy?");

  fondo.innerHTML =
    '<div class="test-panel">' +
    '<button type="button" class="test-cerrar" aria-label="Cerrar test">✕</button>' +
    '<div class="test-contenido"></div>' +
    "</div>";

  document.body.appendChild(fondo);

  const panel = fondo.querySelector(".test-panel");
  const contenido = fondo.querySelector(".test-contenido");
  const botonCerrar = fondo.querySelector(".test-cerrar");

  /* -----------------------------------------------------
       ESTADO
    ----------------------------------------------------- */

  let preguntaActual = 0;
  let respuestas = []; // índice de la opción elegida en cada pregunta
  let bloqueado = false;

  /* -----------------------------------------------------
       MOSTRAR UNA PREGUNTA
    ----------------------------------------------------- */

  function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];
    const total = preguntas.length;

    bloqueado = false;
    panel.style.setProperty("--color-test", "#8e44ad");

    contenido.innerHTML =
      '<p class="test-progreso-texto">Pregunta ' +
      (preguntaActual + 1) +
      " de " +
      total +
      "</p>" +
      '<div class="test-progreso"><div class="test-progreso-barra"></div></div>' +
      '<h3 class="test-pregunta"></h3>' +
      '<div class="test-opciones"></div>' +
      '<button type="button" class="test-atras">← Pregunta anterior</button>';

    contenido.querySelector(".test-pregunta").textContent = pregunta.texto;

    const contenedorOpciones = contenido.querySelector(".test-opciones");

    pregunta.opciones.forEach(function (opcion, indice) {
      const boton = document.createElement("button");
      boton.type = "button";
      boton.className = "test-opcion";
      boton.textContent = opcion.t;

      boton.addEventListener("click", function () {
        elegirOpcion(indice, boton, contenedorOpciones);
      });

      contenedorOpciones.appendChild(boton);
    });

    const botonAtras = contenido.querySelector(".test-atras");
    botonAtras.hidden = preguntaActual === 0;

    botonAtras.addEventListener("click", function () {
      preguntaActual--;
      respuestas.pop();
      mostrarPregunta();
    });

    // La barra de progreso se anima desde la pregunta anterior
    const barra = contenido.querySelector(".test-progreso-barra");

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        barra.style.width = (preguntaActual / total) * 100 + "%";
      });
    });
  }

  /* -----------------------------------------------------
       ELEGIR RESPUESTA
    ----------------------------------------------------- */

  function elegirOpcion(indice, boton, contenedorOpciones) {
    if (bloqueado) {
      return;
    }

    bloqueado = true;

    contenedorOpciones.classList.add("bloqueado");
    boton.classList.add("elegida");

    respuestas.push(indice);

    setTimeout(function () {
      preguntaActual++;

      if (preguntaActual < preguntas.length) {
        mostrarPregunta();
      } else {
        mostrarResultado();
      }
    }, 350);
  }

  /* -----------------------------------------------------
       CALCULAR Y MOSTRAR RESULTADO
    ----------------------------------------------------- */

  function calcularPuntuaciones() {
    const puntos = {};

    Object.keys(animales).forEach(function (clave) {
      puntos[clave] = 0;
    });

    respuestas.forEach(function (indiceOpcion, indicePregunta) {
      const suma = preguntas[indicePregunta].opciones[indiceOpcion].p;

      Object.keys(suma).forEach(function (clave) {
        puntos[clave] += suma[clave];
      });
    });

    // Ordenar de mayor a menor; los empates se deciden al azar
    return Object.keys(puntos)
      .map(function (clave) {
        return { clave: clave, puntos: puntos[clave], azar: Math.random() };
      })
      .sort(function (a, b) {
        return b.puntos - a.puntos || b.azar - a.azar;
      });
  }

  function calcularColor() {
    const puntos = {};

    Object.keys(colores).forEach(function (clave) {
      puntos[clave] = 0;
    });

    respuestas.forEach(function (indiceOpcion, indicePregunta) {
      const suma = preguntas[indicePregunta].opciones[indiceOpcion].c;

      Object.keys(suma).forEach(function (clave) {
        puntos[clave] += suma[clave];
      });
    });

    // Se compara el porcentaje sobre el máximo de cada color,
    // para que ningún color tenga ventaja por salir en más respuestas.
    // Los empates se deciden al azar.
    return Object.keys(puntos)
      .map(function (clave) {
        return {
          clave: clave,
          porcentaje: puntos[clave] / maximosColor[clave],
          azar: Math.random(),
        };
      })
      .sort(function (a, b) {
        return b.porcentaje - a.porcentaje || b.azar - a.azar;
      })[0];
  }

  function mostrarResultado() {
    const ranking = calcularPuntuaciones();
    const ganador = animales[ranking[0].clave];

    const resultadoColor = calcularColor();
    const colorGanador = colores[resultadoColor.clave];
    const porcentajeColor = Math.round(resultadoColor.porcentaje * 100);

    panel.style.setProperty("--color-test", ganador.color);

    contenido.innerHTML =
      '<div class="test-resultado">' +
      '<p class="test-eres">¡Tu animal es…</p>' +
      "<h3></h3>" +
      '<img alt="">' +
      '<p class="test-texto"></p>' +
      '<div class="test-color">' +
      '<p class="test-eres">Y tu color es…</p>' +
      '<div class="test-color-fila">' +
      '<div class="test-color-muestra"></div>' +
      '<div class="test-color-info">' +
      "<h4></h4>" +
      '<p class="test-color-texto"></p>' +
      "</div>" +
      "</div>" +
      '<ul class="test-color-rasgos"></ul>' +
      "</div>" +
      '<div class="test-afinidad">' +
      "<p>Tu afinidad con otros animales</p>" +
      "</div>" +
      '<div class="test-acciones">' +
      '<button type="button" class="test-btn test-btn-principal" data-accion="repetir">Repetir el test</button>' +
      '<button type="button" class="test-btn test-btn-secundario" data-accion="cerrar">Cerrar</button>' +
      "</div>" +
      "</div>";

    contenido.querySelector("h3").textContent = ganador.nombre;

    const imagen = contenido.querySelector("img");
    imagen.src = ganador.img;
    imagen.alt = ganador.nombre;

    contenido.querySelector(".test-texto").textContent = ganador.texto;

    // Color ganador
    const bloqueColor = contenido.querySelector(".test-color");

    bloqueColor.style.setProperty("--color-resultado", colorGanador.hex);

    bloqueColor.querySelector("h4").textContent =
      colorGanador.nombre + " · " + porcentajeColor + "%";

    bloqueColor.querySelector(".test-color-texto").textContent =
      colorGanador.texto;

    const listaRasgos = bloqueColor.querySelector(".test-color-rasgos");

    colorGanador.rasgos.forEach(function (rasgo) {
      const elemento = document.createElement("li");
      elemento.textContent = rasgo;

      listaRasgos.appendChild(elemento);
    });

    // Top 3 con barras de afinidad
    const bloqueAfinidad = contenido.querySelector(".test-afinidad");

    ranking.slice(0, 3).forEach(function (fila) {
      const animal = animales[fila.clave];
      const porcentaje = Math.round((fila.puntos / maximos[fila.clave]) * 100);

      const elemento = document.createElement("div");
      elemento.className = "afinidad-fila";
      elemento.style.setProperty("--color-fila", animal.color);

      elemento.innerHTML =
        '<span class="afinidad-nombre"></span>' +
        '<div class="afinidad-pista"><div class="afinidad-relleno"></div></div>' +
        '<span class="afinidad-porcentaje">' +
        porcentaje +
        "%</span>";

      elemento.querySelector(".afinidad-nombre").textContent = animal.nombre;

      bloqueAfinidad.appendChild(elemento);

      const relleno = elemento.querySelector(".afinidad-relleno");

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          relleno.style.width = porcentaje + "%";
        });
      });
    });

    contenido
      .querySelector('[data-accion="repetir"]')
      .addEventListener("click", empezar);
    contenido
      .querySelector('[data-accion="cerrar"]')
      .addEventListener("click", cerrar);
  }

  /* -----------------------------------------------------
       ABRIR / CERRAR / REINICIAR
    ----------------------------------------------------- */

  function empezar() {
    preguntaActual = 0;
    respuestas = [];
    mostrarPregunta();
  }

  function abrir() {
    empezar();
    fondo.classList.add("visible");
    document.body.classList.add("test-abierto");
    botonCerrar.focus();
  }

  function cerrar() {
    fondo.classList.remove("visible");
    document.body.classList.remove("test-abierto");
  }

  // TODOS los botones con la clase .btn-abrir-test abren el mismo test:
  // el de la cabecera, el de la descripción del animal y el de la descripción del color.
  document.querySelectorAll(".btn-abrir-test").forEach(function (boton) {
    boton.addEventListener("click", abrir);
  });

  botonCerrar.addEventListener("click", cerrar);

  fondo.addEventListener("click", function (evento) {
    if (evento.target === fondo) {
      cerrar();
    }
  });

  document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape" && fondo.classList.contains("visible")) {
      cerrar();
    }
  });
})();