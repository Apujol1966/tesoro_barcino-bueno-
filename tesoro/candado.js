// candado.js

// --- 1. LÓGICA DE SEGURIDAD Y REDIRECCIÓN ---
const claveGuardada = localStorage.getItem('clave_guardada');
const idiomaPreferido = localStorage.getItem('idioma_preferido');

if (claveGuardada !== CLAVE_ACTUAL) {
    let urlRedireccionLogin = "../login_es.html";

    if (idiomaPreferido) {
        if (idiomaPreferido === 'ca') {
            urlRedireccionLogin = "../login_ca.html";
        } else if (idiomaPreferido === 'en') {
            urlRedireccionLogin = "../login_en.html";
        }
    } else {
        let idiomaNavegador = navigator.language || navigator.userLanguage;
        if (idiomaNavegador.startsWith('ca')) {
            urlRedireccionLogin = "../login_ca.html";
        } else if (idiomaNavegador.startsWith('en')) {
            urlRedireccionLogin = "../login_en.html";
        }
    }
    window.location.href = urlRedireccionLogin;
}

// --- 2. FUNCIONES DE PROGRESO Y NAVEGACIÓN ---

function saveProgress(stopUrlCompleta) {
    localStorage.setItem('progresoJuego', stopUrlCompleta);
}

// ESTA GUARDA EL PROGRESO (Para usar durante el juego)
function avanzarA(siguientePaginaBase) {
    const idiomaGuardado = localStorage.getItem('idioma_preferido') || 'es';
    let urlDestino = (idiomaGuardado === 'es') ? `${siguientePaginaBase}.html` : `${siguientePaginaBase}_${idiomaGuardado}.html`;
    saveProgress(urlDestino); 
    window.location.href = urlDestino; 
}

// NUEVA: ESTA SOLO NAVEGA, NO SOBRESCRIBE TU PARTIDA (Para usar en menús e instrucciones)
function navegarA(siguientePaginaBase) {
    const idiomaGuardado = localStorage.getItem('idioma_preferido') || 'es';
    let urlDestino = (idiomaGuardado === 'es') ? `${siguientePaginaBase}.html` : `${siguientePaginaBase}_${idiomaGuardado}.html`;
    window.location.href = urlDestino; 
}

// --- 3. LÓGICA DEL MODAL DEL MASTER ---
function openMasterModal() { 
    const masterModal = document.getElementById('master-modal');
    if (masterModal) { masterModal.style.display = 'flex'; }
}
function closeMasterModal() { 
    const masterModal = document.getElementById('master-modal');
    if (masterModal) { masterModal.style.display = 'none'; }
}