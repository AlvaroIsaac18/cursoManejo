const allQuestions = {
  1: [
    {
      q: "¿Cuál es la principal razón por la que los patines eléctricos se consideran peligrosos?",
      options: [
        "Son muy difíciles de encender",
        "La percepción de simplicidad reduce la precaución",
        "Tienen demasiada potencia de frenado",
        "Son muy ruidosos",
      ],
      correct: 1,
    },
    {
      q: "Según la normativa, ¿cada cuánto tiempo se recomienda evaluar formalmente la habilidad del operador?",
      options: [
        "Cada mes",
        "Cada 5 años",
        "Cada 3 años",
        "Solo una vez en la vida",
      ],
      correct: 2,
    },
    {
      q: "¿Cómo es el sistema de apoyo de un patín eléctrico estándar?",
      options: [
        "Cuatro ruedas en las esquinas",
        "Dos ruedas motrices frontales",
        "Sistema de 3 puntos (1 motriz, 2 de carga)",
        "Ocho ruedas industriales",
      ],
      correct: 2,
    },
    {
      q: "¿Dónde debe posicionarse el operador al mover la carretilla para evitar atrapamientos?",
      options: [
        "Directamente frente a las horquillas",
        "Caminar al lado del equipo",
        "Subirse a la carga",
        "Atrás del timón empujando con la espalda",
      ],
      correct: 1,
    },
    {
      q: "¿Qué sucede si el operador suelta la palanca de mando (sistema de seguridad automática)?",
      options: [
        "El equipo acelera al máximo",
        "La palanca cae al suelo y se rompe",
        "Regresa a posición vertical y activa los frenos",
        "Sigue moviéndose por inercia sin control",
      ],
      correct: 2,
    },
  ],
  2: [
    {
      q: "¿Cuándo se debe realizar la inspección pre-operativa?",
      options: [
        "Una vez al mes",
        "Cada mañana antes de empezar el turno",
        "Solo si el supervisor lo pide",
        "Al final de la semana",
      ],
      correct: 1,
    },
    {
      q: "Si detectas un ruido extraño o falla en los mandos, ¿qué debes hacer?",
      options: [
        "Intentar arreglarlo tú mismo",
        "Ignorarlo si la máquina aún se mueve",
        "Reportar inmediatamente al supervisor",
        "Esperar a que se rompa del todo",
      ],
      correct: 2,
    },
    {
      q: "¿Qué debe usar el operador al manipular directamente baterías o ácido?",
      options: [
        "Ropa deportiva cómoda",
        "Solo gafas de sol",
        "EPP adecuado (guantes, protección facial, etc.)",
        "No necesita protección especial",
      ],
      correct: 2,
    },
    {
      q: "En el procedimiento de carga, ¿cuándo se debe activar el sistema/cargador?",
      options: [
        "Antes de conectar la batería",
        "Después de conectar la batería firmemente",
        "A la mitad de la conexión",
        "No importa el orden",
      ],
      correct: 1,
    },
    {
      q: "¿Dónde debe estacionarse el equipo al finalizar la jornada?",
      options: [
        "Cerca de la salida de emergencia",
        "En el área designada, sin bloquear accesos",
        "En cualquier pasillo vacío",
        "Donde se acabe la batería",
      ],
      correct: 1,
    },
  ],
  3: [
    {
      q: "¿En qué posición del timón el motor recibe energía para desplazarse?",
      options: [
        "Totalmente vertical",
        "Totalmente abajo contra el suelo",
        "Posición media (ángulo de conducción)",
        "Cualquier posición",
      ],
      correct: 2,
    },
    {
      q: "¿Por qué los movimientos con carga deben ser lentos y pausados?",
      options: [
        "Para gastar menos batería",
        "Para que la inercia no desplace la carga",
        "Porque el motor no tiene potencia",
        "Para que los peatones nos vean",
      ],
      correct: 1,
    },
    {
      q: "¿Cuál es la regla de oro sobre la visibilidad al trasladar carga?",
      options: [
        "Empujar siempre la carga adelante",
        "Tirar de la carretilla (horquillas traseras)",
        "Cerrar los ojos en las curvas",
        "No mirar atrás nunca",
      ],
      correct: 1,
    },
    {
      q: "¿Qué función tiene el botón de inversión de marcha en la punta del mango?",
      options: [
        "Cambiar la música del equipo",
        "Invertir la dirección ante contacto con el cuerpo (anti-atrapamiento)",
        "Aumentar la velocidad al doble",
        "Apagar el equipo",
      ],
      correct: 1,
    },
    {
      q: "¿Quién tiene la prioridad absoluta de paso en la planta?",
      options: [
        "El operador con carga pesada",
        "El supervisor de área",
        "Los peatones",
        "Nadie, todos deben correr",
      ],
      correct: 2,
    },
  ],
  4: [
    {
      q: "¿Dónde se encuentra la información sobre la capacidad máxima de carga?",
      options: [
        "En el manual de usuario en la oficina",
        "En la placa de datos del vehículo",
        "Preguntando a otros compañeros",
        "No hay límite",
      ],
      correct: 1,
    },
    {
      q: "¿A qué altura deben elevarse las horquillas para un traslado seguro?",
      options: [
        "A 1 metro del suelo",
        "A ras de suelo tocando el piso",
        "Aproximadamente 10 cm (4 pulgadas)",
        "A la altura de la cintura",
      ],
      correct: 2,
    },
    {
      q: "¿Qué debe hacerse antes de entrar con el equipo en un remolque/camión?",
      options: [
        "Asegurar que las ruedas del camión estén bloqueadas",
        "Entrar a máxima velocidad",
        "Pitar 3 veces",
        "Nada, entrar directamente",
      ],
      correct: 0,
    },
    {
      q: "En una rampa, ¿hacia dónde debe mirar siempre la carga?",
      options: [
        "Hacia el lado de la subida",
        "Hacia el lado de la bajada (cuesta abajo)",
        "Hacia la derecha",
        "Depende del peso",
      ],
      correct: 1,
    },
    {
      q: "¿Qué se debe revisar en las tarimas (pallets) antes de levantarlas?",
      options: [
        "El color de la madera",
        "Que no tengan tablas rotas o clavos sueltos",
        "El precio de la mercancía",
        "Si están limpias",
      ],
      correct: 1,
    },
  ],
  5: [
    {
      q: "¿Cuál es el calzado obligatorio para un operador?",
      options: [
        "Tenis ligeros",
        "Botas de seguridad con protección",
        "Sandalias industriales",
        "Cualquier zapato",
      ],
      correct: 1,
    },
    {
      q: "¿Está permitido transportar personas sobre las horquillas?",
      options: [
        "Sí, si es una emergencia",
        "Solo si pesan poco",
        "No, está estrictamente prohibido",
        "Sí, si hay espacio",
      ],
      correct: 2,
    },
    {
      q: "¿Cuándo se debe usar la bocina o pito?",
      options: [
        "Para saludar a amigos",
        "En intersecciones y puntos ciegos",
        "Solo cuando hay un accidente",
        "Nunca",
      ],
      correct: 1,
    },
    {
      q: "¿Cuál es el mayor riesgo derivado de la rutina laboral?",
      options: [
        "El aburrimiento",
        "La falta de atención por exceso de confianza",
        "Aprender demasiado rápido",
        "Cansancio físico",
      ],
      correct: 1,
    },
    {
      q: "¿Qué debe conocer el operador antes de iniciar recargas de batería?",
      options: [
        "La ubicación de la cafetería",
        "La ubicación del extintor y salidas de emergencia",
        "El precio de la electricidad",
        "El horario de salida",
      ],
      correct: 1,
    },
  ],
};

let currentModule =
  new URLSearchParams(window.location.search).get("module") || "1";
let questions = allQuestions[currentModule] || allQuestions["1"];
let currentQuestionIndex = 0;
let score = 0;

const questionsContainer = document.getElementById("questions-container");
const progressBar = document.getElementById("progress-bar");
const resultCard = document.getElementById("result-card");
const scoreDisplay = document.getElementById("score-display");
const statusTag = document.getElementById("status-tag");
const resultText = document.getElementById("result-text");
const nextModuleBtn = document.getElementById("next-module-btn");

function initQuiz() {
  renderQuestion();
}

function renderQuestion() {
  const qData = questions[currentQuestionIndex];
  questionsContainer.innerHTML = `
        <div class="question-card active">
            <h4 class="fw-bold mb-4">${currentQuestionIndex + 1}. ${qData.q}</h4>
            <div class="d-grid gap-3">
                ${qData.options
                  .map(
                    (opt, i) => `
                    <div class="option-item" onclick="selectOption(${i})">
                        <span class="fw-bold me-2 text-warning">${String.fromCharCode(65 + i)}.</span> ${opt}
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
    `;
  updateProgress();
}

function updateProgress() {
  const progress = (currentQuestionIndex / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
}

window.selectOption = function (index) {
  if (index === questions[currentQuestionIndex].correct) {
    score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    showResults();
  }
};

function showResults() {
  questionsContainer.classList.add("d-none");
  progressBar.style.width = "100%";
  resultCard.classList.remove("d-none");
  scoreDisplay.innerText = `${score}/${questions.length}`;

  const passed = score === questions.length;

  if (passed) {
    statusTag.innerHTML = `<span class="badge bg-success px-4 py-2 fs-6">APROBADO (100%)</span>`;
    resultText.innerText =
      "¡Excelente! Has demostrado un dominio total de los conceptos de este módulo.";

    let nextMod = parseInt(currentModule) + 1;
    nextModuleBtn.classList.remove("d-none");
    if (nextMod <= 5) {
      nextModuleBtn.href = `module${nextMod}.html`;
      nextModuleBtn.innerText = "Siguiente Módulo";
    } else {
      nextModuleBtn.href = `index.html`;
      nextModuleBtn.innerText = "Finalizar y Volver";
    }
  } else {
    statusTag.innerHTML = `<span class="badge bg-danger px-4 py-2 fs-6">NO APROBADO</span>`;
    resultText.innerText = `Necesitas responder correctamente las 5 preguntas para pasar. Obtuviste ${score} aciertos.`;
  }
}

document.addEventListener("DOMContentLoaded", initQuiz);
