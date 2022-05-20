/*QUIZ*/
class Quiz {
  constructor(question, choices, answer) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
  }
}
const containerQuiz = [
  {
    question:
      "¿En cual de los siguientes países se pueden encontrar los gauchos?",
    choices: ["1.Argelia", "2.Mexico", "3.Argentina", "4.Nueva Zelanda"],
    answer: 3,
  },
  {
    question:
      "¿En que ciudad estadounidense se basa el mapa del GTA: Vice City?",
    choices: ["1.New york", "2.Miami", "3.Las vegas", "4.Los Angeles"],
    answer: 2,
  },
  {
    question: "¿Por donde absorben agua los arboles?",
    choices: ["1.Hojas", "2.Raíces", "3.Tronco", "4.Ramas"],
    answer: 2,
  },
  {
    question: "¿Que jugador gano el balón de oro en el año 2010?",
    choices: [
      "1.Lionel Messi",
      "2.Cristiano Ronaldo",
      "3.Yaya Toure",
      "4.Pogba",
    ],
    answer: 1,
  },
  {
    question: "¿Cuantos dedos tiene Bart Simpson?",
    choices: ["3", "5", "6", "4"],
    answer: 4,
  },
];

/*ADIVINANZAS*/

const containerAdivinados = [
  {
    question:
      "No muerde ni ladra, pero tiene dientes y la casa guarda. ¿Qué es?",
    answer: "LLAVE",
  },
  {
    question:
      "Pobrecito, pobrecito, todo el día sin parar y no sale de su sitio.",
    answer: "RELOJ",
  },
];

let puntuación = 0;
iniciarSesión();
function iniciarSesión() {
  let user = prompt("INGRESE UN CORREO PARA CREAR UN USUARIO");
  let password = prompt("INGRESE UNA CONTRASEÑA");
  let verifyUser = prompt("INGRESE SU CORREO");
  let verifyPassword = prompt("INGRESE LA CONTRASEÑA");
  if (verifyUser === user && verifyPassword === password) {
    alert("SESIÓN INICIADA CORRECTAMENTE");
    mostrarMenu();
  } else {
    alert("NO SE HA PODIDO INICIAR SESIÓN PORQUE USTED COMETIÓ ALGÚN ERROR");
  }
}
mostrarMenu();
function mostrarMenu() {
  let opción = 0;

  while (opción !== 4) {
    opción = Number(
      prompt(
        `seleccione alguna opción:
                              1.Comenzar con el quiz
                              2.Agregar pregunta
                              3.Comenzar Adivinanzas
                              4.Fin
                              Tu puntuación hasta el momento es de ` +
          puntuación +
          ` puntos`
      )
    );
    switch (opción) {
      case 1: {
        comenzarQuiz();
        break;
      }
      case 2: {
        agregarPregunta();
        break;
      }
      case 3: {
        comenzarAdivinanzas();
        break;
      }
      case 4: {
        break;
      }
      default: {
        alert("Opción invalida");
      }
    }
  }
}
/*------------------FUNCIONES DEL QUIZ--------------------*/ function comenzarQuiz() {
  for (i = 0; i < containerQuiz.length; i++) {
    let answerSelect = Number(
      prompt(containerQuiz[i].question + " " + containerQuiz[i].choices)
    );
    if (answerSelect !== containerQuiz[i].answer) {
      alert(
        "Respuesta incorrecta. La respuesta correcta era " +
          containerQuiz[i].answer
      );
      puntuación += 0;
    } else {
      alert("Respuesta correcta.");
      puntuación += 1;
    }
  }
}
function agregarPregunta() {
  let question = prompt("Ingresa una pregunta");
  let choices = [];
  for (let i = 1; i <= 4; i++) {
    let posibleRespuesta = prompt(
      "Ingresa la posible respuesta N°" +
        i +
        " de esta forma(numero-punto-posible respuesta)"
    );
    choices[i] = posibleRespuesta;
  }
  let answer = Number(
    prompt(
      "ingrese el numero de orden puesto anteriormente de la respuesta correcta"
    )
  );
  let pregunta = new Quiz(question, choices, answer);

  containerQuiz.push(pregunta);
}
/*---------------FUNCIONES DE LAS ADIVINANZAS------------*/ function comenzarAdivinanzas() {
  for (i = 0; i < containerAdivinados.length; i++) {
    let answerSelect = prompt(
      containerAdivinados[i].question +
        ". la respuesta contiene " +
        countCharacters() +
        " letras"
    );
    answerSelect = answerSelect.toUpperCase();
    if (answerSelect !== containerAdivinados[i].answer) {
      alert("Respuesta incorrecta.");
      puntuación += 0;
    } else {
      alert("Respuesta correcta.");
      puntuación++;
    }
  }
}
function countCharacters() {
  let myString = containerAdivinados[i].answer;
  return myString.length;
}
