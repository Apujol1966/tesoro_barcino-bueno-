// candado.js
// Este script NO debe contener const CLAVE_ACTUAL = "BARCINO";
// porque CLAVE_ACTUAL ya se carga desde ../config.js en cada página HTML.
// Así nos aseguramos de que siempre usa la misma clave.

// --- LÓGICA DE SEGURIDAD Y REDIRECCIÓN INICIAL (Al entrar al juego) ---
// La variable CLAVE_ACTUAL se asume que ya está definida por <script src="../config.js"></script>
const claveGuardada = localStorage.getItem('clave_guardada');
const idiomaPreferido = localStorage.getItem('idioma_preferido'); // Este valor puede ser 'es', 'ca', 'en'

if (claveGuardada !== CLAVE_ACTUAL) { // Si la clave no es la correcta...
    let urlRedireccionLogin = "../login_es.html"; // Por defecto, login español
    
    if (idiomaPreferido) { // Si hay un idioma preferido guardado, lo usamos para el login
        if (idiomaPreferido === 'ca') {
            urlRedireccionLogin = "../login_ca.html";
        } else if (idiomaPreferido === 'en') {
            urlRedireccionLogin = "../login_en.html";
        }
        // Si es 'es', se queda login_es.html (que ya está por defecto)
    } else { // Si no hay idioma preferido guardado (ej. primera vez), intentamos detectar el del navegador
        let idiomaNavegador = navigator.language || navigator.userLanguage;
        if (idiomaNavegador.startsWith('ca')) {
            urlRedireccionLogin = "../login_ca.html";
        } else if (idiomaNavegador.startsWith('en')) {
            urlRedireccionLogin = "../login_en.html";
        }
    }
    window.location.href = urlRedireccionLogin;
}

// --- FUNCIONES GLOBALES PARA EL JUEGO (Disponibles en todas las páginas) ---

// Guarda la URL completa de la página actual, incluyendo el sufijo de idioma si lo tiene
// Ejemplo: saveProgress("tesoro/p1-navegacion_ca.html")
function saveProgress(stopUrlCompleta) {
    localStorage.setItem('progresoJuego', stopUrlCompleta);
}

// Función para avanzar a la siguiente página, guardando el progreso y el idioma
// Se le pasa la "base" del nombre del archivo, sin el sufijo de idioma ni la extensión.
// Ejemplo: avanzarA("p1-enigma")
function avanzarA(siguientePaginaBase) {
    const idiomaGuardado = localStorage.getItem('idioma_preferido') || 'es'; // 'es' como fallback
    
    let urlDestino;
    if (idiomaGuardado === 'es') {
        urlDestino = `${siguientePaginaBase}.html`; // Para español, no añade _es
    } else {
        urlDestino = `${siguientePaginaBase}_${idiomaGuardado}.html`; // Añade _ca o _en
    }
    
    saveProgress(urlDestino); // Guardamos la URL COMPLETA Y CORRECTA en localStorage
    window.location.href = urlDestino; // Redirigimos
}

// --- LÓGICA DEL MASTER (Para el botón de ayuda directa) ---
// Estas funciones se definen aquí para que siempre estén disponibles.
// Los MODALES HTML y los BOTONES que los abren deben estar en cada página.
function openMasterModal() { 
    const masterModal = document.getElementById('master-modal');
    if (masterModal) {
        masterModal.style.display = 'flex'; 
    }
}
function closeMasterModal() { 
    const masterModal = document.getElementById('master-modal');
    if (masterModal) {
        masterModal.style.display = 'none'; 
    }
}

// --- NOTA IMPORTANTE PARA LAS PÁGINAS HTML ---
// En cada HTML del juego (dentro de /tesoro/), DEBES:
// 1. Incluir el script de config.js: <script src="../config.js"></script>
// 2. Incluir el script del candado: <script src="candado.js"></script>
// 3. Modificar los onclick de los botones de avance para usar avanzarA():
//    Ejemplo: <button onclick="avanzarA('p1-enigma')">...</button>
// 4. Asegurarte de que el MODAL HTML de "Contacta con el Master" esté presente en cada HTML.