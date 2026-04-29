const tesoroData = {
    config: {
        titulo: "El Tesoro de Barcino",
        ayuda_progresiva: true, // Activa pistas tras 3 fallos
        intentos_para_pista: 3,
        mapa_global: "https://www.google.com/maps/d/u/0/viewer?mid=TU_MAPA_ID" // URL del mapa general
    },
    paradas: [
        {
            id: "p1",
            titulo: "El Manuscrito Cifrado",
            ubicacion_nombre: "Plaça Nova (Acueducto)",
            ubicacion_coords: "41.3841, 2.1753", 
            soluciones_validas: ["AUGUSTI TEMPLI"], // Verificado con A=1
            pistas: [
                "Mira la carta: B=II, A=I. Es un cifrado numérico simple.",
                "Sustituye los números romanos por letras: I=A, XXII=U...",
                "Solución directa: El nombre del templo en latín (dos palabras)."
            ],
            mensaje_error: "Ese no es el lugar sagrado que buscas. Revisa los números romanos."
        },
        {
            id: "p2",
            titulo: "La Viajera",
            ubicacion_nombre: "Templo de Augusto",
            ubicacion_coords: "41.3833, 2.1772",
            soluciones_validas: ["COLUMNA", "UNA COLUMNA", "COLUMNA VIAJERA"], // Verificado
            pistas: [
                "Es una adivinanza: ¿Qué parte del templo 'viajó' a la Plaça del Rei?",
                "Sostiene techos, pero aquí está sola.",
                "Solución directa: Es una COLUMNA."
            ],
            mensaje_error: "No es eso. Piensa en el elemento arquitectónico que falta aquí."
        },
        {
            id: "p3",
            titulo: "El Código de la Muralla",
            ubicacion_nombre: "Muralla (Carrer Santa Clara)",
            ubicacion_coords: "41.3830, 2.1780",
            soluciones_validas: ["PLAZA SANT MIQUEL", "PLAÇA SANT MIQUEL", "PLAZA SAN MIGUEL"], // Verificado (Pigpen)
            pistas: [
                "Usa los conteos para elegir el CÓDIGO II.",
                "El CÓDIGO II usa símbolos 'Pigpen'. Mira las líneas que rodean cada letra en la clave.",
                "El símbolo '┌°' es la 'P'. Traduce el resto y tendrás el nombre de una plaza."
            ],
            mensaje_error: "El código es incorrecto. Asegúrate de elegir la opción II y descifrar los símbolos."
        },
        {
            id: "p4",
            titulo: "El Cifrado del César",
            ubicacion_nombre: "Plaça Sant Miquel",
            ubicacion_coords: "41.3822, 2.1775",
            soluciones_validas: ["VIA SEPULCRAL ROMANA", "VIA SEPULCRAL"], // Verificado (César +6)
            pistas: [
                "La clave 'G -> A = 6ª' significa: Suma 6 posiciones a cada letra.",
                "P (+6 letras) = V. C (+6 letras) = I. U (+6 letras) = A.",
                "Solución directa: Es el nombre del lugar donde están las tumbas."
            ],
            mensaje_error: "Cifrado incorrecto. Recuerda: suma 6 posiciones en el abecedario (incluyendo la Ñ)."
        },
        {
            id: "p5",
            titulo: "El Símbolo de la Suerte",
            ubicacion_nombre: "Vía Sepulcral Romana",
            ubicacion_coords: "41.3838, 2.1735",
            soluciones_validas: ["TREBOL", "EL TREBOL", "UN TREBOL"], // Verificado
            pistas: [
                "Busca en las tumbas laterales.",
                "Es una planta asociada a la buena suerte.",
                "Tiene tres hojas (o cuatro si tienes mucha suerte)."
            ],
            mensaje_error: "Ese no es el símbolo de la familia Minicio."
        }
    ]
};