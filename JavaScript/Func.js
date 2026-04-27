// ================= MENSAJES =================
const Mensaj1 = `
<div class="menu-grid">
<p><b>Tenemos esto en el menú:</b></p><br>
<p><b>1.-</b> Correo</p>
<p><b>2.-</b> Calendario</p>
<p><b>3.-</b> Vinculación</p>
<p><b>4.-</b> Bolsa de trabajo</p>
<p><b>5.-</b> Alumnos</p>
<p><b>6.-</b> Docentes</p>
<p><b>7.-</b> Instituto</p>
<p><b>8.-</b> Departamentos</p>
<p><b>9.-</b> Admisión</p>
<p><b>10.-</b> Oferta Educativa</p>
<p><b>11.-</b> PRODEP</p>
</div>
`;

const Mensaj2 = `
<div class="menu-grid">
<p><b>21.-</b> Arquitectura</p>
<p><b>22.-</b> Ingeniería Mecatrónica</p>
<p><b>23.-</b> Ingeniería Electrónica</p>
<p><b>24.-</b> Ingeniería en Sistemas Automotrices</p>
<p><b>25.-</b> Ingeniería en Sistemas Computacionales</p>
<p><b>26.-</b> Ingeniería Ferroviaria</p>
<p><b>27.-</b> Administración</p>
<p><b>28.-</b> Contador Público</p>
</div>
`;

const Mensaj5 = `
12.- Seguro de accidentes<br>
13.- Becas<br>
14.- Titulación
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

//Quita acentos
function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function crearCorreo(nombre, correo) {
    return `
    <div style="
        background: #f5f5f5;
        padding: 10px;
        border-radius: 10px;
    ">
        <div style="font-weight: bold;">${nombre}</div>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=${correo}" target="_blank">
            ${correo}
        </a>
    </div>
    `;
}

// ================= RESPUESTAS PRINCIPALES =================
const respuestas = {
    "1": () => {
        return `
    <b>TeChat:</b><br><br>

    <div style="
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    ">

        ${crearCorreo("Dirección", "direccion@tlahuac.tecnm.mx")}
        ${crearCorreo("Sindicato", "sindicato@tlahuac.tecnm.mx")}
        ${crearCorreo("Subdirección Académica", "sub.academica@tlahuac.tecnm.mx")}
        ${crearCorreo("Ciencias Básicas", "c.basicas@tlahuac.tecnm.mx")}
        ${crearCorreo("Ciencias de la Tierra", "ciencias.tierra@tlahuac.tecnm.mx")}
        ${crearCorreo("Eléctrica y Electrónica", "electronica@tlahuac.tecnm.mx")}
        ${crearCorreo("Sistemas y Computación", "sis.com@tlahuac.tecnm.mx")}
        ${crearCorreo("Económico-Administrativas", "eco.admin@tlahuac.tecnm.mx")}

    </div>
    `;
    },
    "2": () => {
        abrir_url("PDFS/Calendario 2026.pdf");
        return "<b>TeChat:</b> Aquí tienes el calendario <a href='PDFS/Calendario 2026.pdf' target='_blank'>Calendario</a>";
    },
    "3": () => {
        abrir_url("./revista/index2.html");
        return "<b>TeChat:</b> Abriendo revista de vinculación <a href='./revista/index2.html' target='_blank'>Revista de vinculación</a>";
    },
    "4": () => {
        abrir_url("https://tlahuac.tecnm.mx/BolsaTrabajo/OCC");
        return "<b>TeChat:</b> Bolsa de trabajo: <a href='https://tlahuac.tecnm.mx/BolsaTrabajo/OCC' target='_blank'>Ver bolsa de trabajo</a>"
    },
    "5": () => "<b>TeChat:</b><br>" + Mensaj5,
    "6": () => "<b>TeChat:</b><br>" + Mensaj6,
    "7": () => {
        abrir_url("./revista/index.html");
        return "<b>TeChat:</b> Información del instituto <a href='./revista/index.html' target='_blank'>Revista de Instituto</a>";
    },
    "8": () => "<b>TeChat:</b><br>" + Mensaj7,
    "9": () => {
        abrir_url("https://tlahuac.tecnm.mx/Admision/Admision");
        return "<b>TeChat:</b> Información de admisión";
    },
    "10": () => "<b>TeChat:</b><br>" + Mensaj2,
    "11": () => {
        abrir_url("https://tlahuac.tecnm.mx/DesarrolloAcademico/Dirposgrado");
        return "<b>TeChat:</b> PRODEP";
    }
};

// ================= SUBMENÚS =================
const subRespuestas = {
    "12": () => {
        abrir_url("PDFS/SEGUROS.pdf");
        return "<b>TeChat:</b> Seguro de accidentes: <a href='PDFS/SEGUROS.pdf' target='_blank'>Ver Seguros</a>";
    },
    "13": () => {
        abrir_url("PDFS/BECAS.pdf");
        return "<b>TeChat:</b> Becas: <a href='PDFS/BECAS.pdf' target='_blank'>Mostrar Becas</a>";
    },
    "14": () => {
        abrir_url("https://tlahuac.tecnm.mx/Departamentos/Titulacion");
        return "<b>TeChat:</b> Titulación: <a href='https://tlahuac.tecnm.mx/Departamentos/Titulacion' target='_blank'>Mostrar apartado de Titulación</a>";
    },

    "15": () => {
        abrir_url("./revista/inddoc.html");
        return "<b>TeChat:</b> Convocatoria <a href='./revista/inddoc.html' target='_blank'>Mostrar revista de convocatorias</a>";
    },
    "16": () => {
        abrir_url("https://tlahuac.tecnm.mx/Docentes/Investigacion");
        return "Investigación <a href='https://tlahuac.tecnm.mx/Docentes/Investigacion' target='_blank'>Ver apartado investigación</a>";
    },
    "17": () => {
        abrir_url("https://tlahuac.tecnm.mx/Docentes/Tutoria");
        return "Tutorías <a href='https://tlahuac.tecnm.mx/Docentes/Tutoria' target='_blank'>Ver apartado de tutorias</a>";
    },

    "18": () => {
        abrir_url("https://tlahuac.tecnm.mx/Departamentos/Subdireccion_Academica");
        return "Subdirección Académica <a href='https://tlahuac.tecnm.mx/Departamentos/Subdireccion_Academica' target='_blank'>Ver apartado de subdireccion academica</a>";
    },
    "19": () => {
        abrir_url("https://tlahuac.tecnm.mx/Departamentos/Subdireccion_Administrativa");
        return "Subdirección Administrativa <a href='https://tlahuac.tecnm.mx/Departamentos/Subdireccion_Administrativa' target='_blank'>Ver apartado de subdireccion academica</a>";
    },
    "20": () => {
        abrir_url("https://tlahuac.tecnm.mx/Departamentos/Subdireccion_de_Planeacion_y_Vinculacion");
        return "Planeación <a href='https://tlahuac.tecnm.mx/Departamentos/Subdireccion_de_Planeacion_y_Vinculacion' target='_blank'>Ver apartado de planeación</a>";
    },

    "21": () => {
        abrir_url("./revista/indArq.html");
        return "Arquitectura";
    },
    "22": () => {
        abrir_url("./revista/indMec.html");
        return "Mecatrónica";
    },
    "23": () => {
        abrir_url("./revista/indiElec.html");
        return "Electrónica";
    },
    "24": () => {
        abrir_url("./revista/indiAu.html");
        return "Automotrices";
    },
    "25": () => {
        abrir_url("./revista/indSisCom.html");
        return "Sistemas Computacionales";
    },
    "26": () => {
        abrir_url("./revista/indiFerr.html");
        return "Ferroviaria";
    },
    "27": () => {
        abrir_url("./revista/indiAdmin.html");
        return "Administración";
    },
    "28": () => {
        abrir_url("./revista/indiConta.html");
        return "Contador";
    }
};

// ================= PALABRAS CLAVE =================
const palabrasClave = {
    "hola": () => "¡Hola! 😊",
    "menu": () => Mensaj1,
    "contacto": () => "Teléfono: 7312-5614 | 5841-0560",
    "calendario": () => respuestas["2"](),
    "vinculacion": () => respuestas["3"](),
    "correo de direccion": () => `
        <b>TeChat:</b><br><br>
        ${crearCorreo("Dirección", "direccion@tlahuac.tecnm.mx")}
    `,
    "correo": () => respuestas["1"](),
    "": () => "",
    "": () => "",
    "": () => "",
    "": () => "",
    "": () => "",
    "": () => "",
    "": () => "",
    "": () => "",
    "": () => "",
    "": () => "",
    "": () => "",
    "": () => "",
    "": () => "",
    "": () => "",
    "": () => "",
    "": () => "",
    "": () => "",
    "": () => "",
    "": () => "",
    "": () => "",
    "": () => "",
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

    input = normalizarTexto(limpiarTexto(input));

    let chatBox = document.getElementById("chat");

    if (input === "") return;

    let respuesta = "";

    // ================= 🧠 DETECCIÓN INTELIGENTE DE CORREOS =================
    const departamentos = {
        "subdireccion academica": "sub.academica@tlahuac.tecnm.mx",
        "ciencias basicas": "c.basicas@tlahuac.tecnm.mx",
        "ciencias de la tierra": "ciencias.tierra@tlahuac.tecnm.mx",
        "economico administrativas": "eco.admin@tlahuac.tecnm.mx",
        "sistemas": "sis.com@tlahuac.tecnm.mx",
        "electronica": "electronica@tlahuac.tecnm.mx",
        "direccion": "direccion@tlahuac.tecnm.mx",
        "sindicato": "sindicato@tlahuac.tecnm.mx"
    };

    // Detecta frases como:
    // "correo direccion", "correo de direccion", "correo electronico de direccion"
    if (input.includes("correo")) {
        for (let depto in departamentos) {
            if (input.includes(depto)) {
                respuesta = `
                <b>TeChat:</b><br><br>
                ${crearCorreo(
                    depto.charAt(0).toUpperCase() + depto.slice(1),
                    departamentos[depto]
                )}
                `;
                break;
            }
        }
    }

    // ================= 🔢 PRIORIDAD: NÚMEROS =================
    if (respuesta === "") {
        if (respuestas[input]) {
            respuesta = respuestas[input]();
        } else if (subRespuestas[input]) {
            respuesta = subRespuestas[input]();
        }
    }

    // ================= 🔑 PALABRAS CLAVE =================
    if (respuesta === "") {
        for (let key in palabrasClave) {
            if (input.includes(key)) {
                respuesta = palabrasClave[key]();
                break;
            }
        }
    }

    // ================= ❌ DEFAULT =================
    if (respuesta === "") {
        respuesta = "<b>TeChat:</b> No entiendo esa opción";
    }

    // ================= 💬 MOSTRAR =================
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

//Burbujas
let contenedor;

function crearBurbuja(){

    const div = document.createElement("div");
    div.classList.add("burbujas");
    div.style.left = `${Math.random()*100}%`;
    const size = Math.random() * 15 + 10; 
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.animationName = "moverArriba";
    div.style.animationDuration = `${Math.random() * 3 + 2}s`;

    contenedor.appendChild(div);

    div.addEventListener("animationend", () => {
        div.remove();
    });
}

window.addEventListener("DOMContentLoaded", () => {

    contenedor = document.getElementById("burbujas-container");

    setInterval(crearBurbuja, 300);

});
