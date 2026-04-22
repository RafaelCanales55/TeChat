// ================= MENSAJES =================
const Mensaj1 = `
<div class="menu-grid">
<p><b>Tenemos esto en el menú:</b></p><br>
<p><b>1.-</b> Buzón de Género</p>
<p><b>2.-</b> Correo</p>
<p><b>3.-</b> Calendario</p>
<p><b>4.-</b> Vinculación</p>
<p><b>5.-</b> Bolsa de trabajo</p>
<p><b>6.-</b> Alumnos</p>
<p><b>7.-</b> Docentes</p>
<p><b>8.-</b> Instituto</p>
<p><b>9.-</b> Departamentos</p>
<p><b>10.-</b> Admisión</p>
<p><b>11.-</b> Oferta Educativa</p>
<p><b>12.-</b> PRODEP</p>
</div>
`;

const Mensaj2 = `
<div class="menu-grid">
<p><b>22.-</b> Arquitectura</p>
<p><b>23.-</b> Ingeniería Mecatrónica</p>
<p><b>24.-</b> Ingeniería Electrónica</p>
<p><b>25.-</b> Ingeniería en Sistemas Automotrices</p>
<p><b>26.-</b> Ingeniería en Sistemas Computacionales</p>
<p><b>27.-</b> Ingeniería Ferroviaria</p>
<p><b>28.-</b> Administración</p>
<p><b>29.-</b> Contador Público</p>
</div>
`;

const Mensaj5 = `
13.- Seguro de accidentes<br>
14.- Becas<br>
15.- Titulación
`;

const Mensaj6 = `
16.- Convocatoria<br>
17.- Investigación Educativa<br>
18.- Tutorías
`;

const Mensaj7 = `
19.- Subdirección Académica<br>
20.- Subdirección Administrativa<br>
21.- Subdirección de Planeación y Vinculación
`;

// ================= FUNCIONES =================
function abrir_url(url) {
    window.open(url, "_blank");
}

// Sanitizar entrada (ANTI XSS)
function limpiarTexto(texto) {
    const div = document.createElement("div");
    div.textContent = texto;
    return div.innerHTML;
}

// ================= RESPUESTAS PRINCIPALES =================
const respuestas = {
    "1": () => "<b>TeChat:</b> Aquí está el buzón de género: <a href='https://tlahuac.tecnm.mx/' target='_blank'>Enlace</a>",
    "2": () => "<b>TeChat:</b> Abriendo correo: <a href='https://mail.google.com/' target='_blank'>Gmail</a>",
    "3": () => {
        abrir_url("PDFS/Calendario 2026.pdf");
        return "<b>TeChat:</b> Aquí tienes el calendario <a href='PDFS/Calendario 2026.pdf' target='_blank'>Calendario</a>";
    },
    "4": () => {
        abrir_url("./revista/index2.html");
        return "<b>TeChat:</b> Abriendo revista de vinculación <a href='./revista/index2.html' target='_blank'>Revista de vinculación</a>";
    },
    "5": () => {
        abrir_url("https://tlahuac.tecnm.mx/BolsaTrabajo/OCC");
        return "<b>TeChat:</b> Bolsa de trabajo: <a href='https://tlahuac.tecnm.mx/BolsaTrabajo/OCC' target='_blank'>Ver bolsa de trabajo</a>"},
    "6": () => "<b>TeChat:</b><br>" + Mensaj5,
    "7": () => "<b>TeChat:</b><br>" + Mensaj6,
    "8": () => {
        abrir_url("./revista/index.html");
        return "<b>TeChat:</b> Información del instituto <a href='./revista/index.html' target='_blank'>Revista de Instituto</a>";
    },
    "9": () => "<b>TeChat:</b><br>" + Mensaj7,
    "10": () => {
        abrir_url("https://tlahuac.tecnm.mx/Admision/Admision");
        return "<b>TeChat:</b> Información de admisión";
    },
    "11": () => "<b>TeChat:</b><br>" + Mensaj2,
    "12": () => {
        abrir_url("https://tlahuac.tecnm.mx/DesarrolloAcademico/Dirposgrado");
        return "<b>TeChat:</b> PRODEP";
    }
};

// ================= SUBMENÚS =================
const subRespuestas = {
    "13": () => {
        abrir_url("PDFS/SEGUROS.pdf"); 
        return "<b>TeChat:</b> Seguro de accidentes: <a href='PDFS/SEGUROS.pdf' target='_blank'>Ver Seguros</a>"; 
    },
    "14": () => { 
        abrir_url("PDFS/BECAS.pdf"); 
        return "<b>TeChat:</b> Becas: <a href='PDFS/BECAS.pdf' target='_blank'>Mostrar Becas</a>"; 
    },
    "15": () => {
        abrir_url("https://tlahuac.tecnm.mx/Departamentos/Titulacion"); 
        return "<b>TeChat:</b> Titulación: <a href='https://tlahuac.tecnm.mx/Departamentos/Titulacion' target='_blank'>Mostrar apartado de Titulación</a>"; 
    },

    "16": () => { 
        abrir_url("./revista/inddoc.html"); 
        return "<b>TeChat:</b> Convocatoria <a href='./revista/inddoc.html' target='_blank'>Mostrar revista de convocatorias</a>"; 
    },
    "17": () => { 
        abrir_url("https://tlahuac.tecnm.mx/Docentes/Investigacion"); 
        return "Investigación <a href='https://tlahuac.tecnm.mx/Docentes/Investigacion' target='_blank'>Ver apartado investigación</a>";
    },
    "18": () => { 
        abrir_url("https://tlahuac.tecnm.mx/Docentes/Tutoria"); 
        return "Tutorías <a href='https://tlahuac.tecnm.mx/Docentes/Tutoria' target='_blank'>Ver apartado de tutorias</a>";
    },

    "19": () => { 
        abrir_url("https://tlahuac.tecnm.mx/Departamentos/Subdireccion_Academica"); 
        return "Subdirección Académica <a href='https://tlahuac.tecnm.mx/Departamentos/Subdireccion_Academica' target='_blank'>Ver apartado de subdireccion academica</a>"; 
    },
    "20": () => { 
        abrir_url("https://tlahuac.tecnm.mx/Departamentos/Subdireccion_Administrativa"); 
        return "Subdirección Administrativa <a href='https://tlahuac.tecnm.mx/Departamentos/Subdireccion_Administrativa' target='_blank'>Ver apartado de subdireccion academica</a>"; 
    },
    "21": () => { 
        abrir_url("https://tlahuac.tecnm.mx/Departamentos/Subdireccion_de_Planeacion_y_Vinculacion"); 
        return "Planeación <a href='https://tlahuac.tecnm.mx/Departamentos/Subdireccion_de_Planeacion_y_Vinculacion' target='_blank'>Ver apartado de planeación</a>"; 
    },

    "22": () => { 
        abrir_url("./revista/indArq.html"); 
        return "Arquitectura"; 
    },
    "23": () => { 
        abrir_url("./revista/indMec.html"); 
        return "Mecatrónica"; 
    },
    "24": () => { 
        abrir_url("./revista/indiElec.html"); 
        return "Electrónica"; 
    },
    "25": () => { 
        abrir_url("./revista/indiAu.html"); 
        return "Automotrices"; 
    },
    "26": () => { 
        abrir_url("./revista/indSisCom.html"); 
        return "Sistemas Computacionales"; },
    "27": () => { 
        abrir_url("./revista/indiFerr.html"); 
        return "Ferroviaria"; 
    },
    "28": () => { 
        abrir_url("./revista/indiAdmin.html"); 
        return "Administración"; 
    },
    "29": () => { 
        abrir_url("./revista/indiConta.html"); 
        return "Contador"; 
    }
};

// ================= PALABRAS CLAVE =================
const palabrasClave = {
    "hola": () => "¡Hola! 😊",
    "menu": () => Mensaj1,
    "contacto": () => "Teléfono: 7312-5614 | 5841-0560",
    "salir": () => { abrir_url("https://tlahuac.tecnm.mx/"); return "Hasta luego"; },
    "sapei": () => { abrir_url("https://sapei.tlahuac.tecnm.mx/"); return "Abriendo SAPEI"; }
};

// ================= FUNCIÓN PRINCIPAL =================
function procesarEntrada() {

    let input = document.getElementById("userInput").value.trim();

    // 🔐 SEGURIDAD
    if (input.length > 100) {
        alert("Máximo 100 caracteres");
        return;
    }

    if (!/^[a-zA-Z0-9áéíóúñÁÉÍÓÚÑ\s.-]+$/.test(input)) {
        alert("Solo letras y números");
        return;
    }

    input = limpiarTexto(input).toLowerCase();

    let chatBox = document.getElementById("chat");

    if (input === "") return;

    let respuesta = "";

    // 🔹 PRIORIDAD: NÚMEROS
    if (respuestas[input]) {
        respuesta = respuestas[input]();
    } else if (subRespuestas[input]) {
        respuesta = subRespuestas[input]();
    } else {
        // 🔹 PALABRAS CLAVE
        for (let key in palabrasClave) {
            if (input.includes(key)) {
                respuesta = palabrasClave[key]();
                break;
            }
        }
    }

    if (respuesta === "") {
        respuesta = "<b>TeChat:</b> No entiendo esa opción";
    }

    // Mostrar en chat
    chatBox.innerHTML += `<p><b>Tú:</b> ${input}</p>`;
    chatBox.innerHTML += `<p>${respuesta}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    document.getElementById("userInput").value = "";
}

// ENTER
function handleKeyPress(event) {
    if (event.key === "Enter") {
        procesarEntrada();
    }
}