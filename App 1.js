// Variables globales
let coloniasData = [];
let coloniasFiltradas = [];

// Elementos DOM
const searchInput = document.getElementById('searchInput');
const locationBtn = document.getElementById('locationBtn');
const resultsCount = document.getElementById('resultsCount');
const coloniasList = document.getElementById('coloniasList');
const coloniaModal = document.getElementById('coloniaModal');
const modalContent = document.getElementById('modalContent');
const mapBtn = document.getElementById('mapBtn');
const reportBtn = document.getElementById('reportBtn');

// DATOS DE COLONIAS (solo algunas para probar, agrega las demás)
const datosColonias = {
  "colonias": [
    {
      "id": 1,
      "nombre": "CENTRO",
      "asentamiento": "Zona Centro Histórico",
      "sector": "I",
      "horario_semanal": {
        "lunes": { "agua": true, "horario": "06:00 - 12:00" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": true, "horario": "06:00 - 12:00" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Lunes", "Jueves"],
      "horario_completo": "Lunes y Jueves de 06:00 a 12:00 hrs"
    },
    {
      "id": 2,
      "nombre": "LIBERTAD",
      "asentamiento": "Colonia Libertad",
      "sector": "I",
      "horario_semanal": {
        "lunes": { "agua": true, "horario": "07:00 - 13:00" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": true, "horario": "07:00 - 13:00" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Lunes", "Jueves"],
      "horario_completo": "Lunes y Jueves de 07:00 a 13:00 hrs"
    },
    {
      "id": 3,
      "nombre": "BURÓCRATAS",
      "asentamiento": "Burócratas",
      "sector": "I",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": true, "horario": "08:00 - 14:00" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": true, "horario": "08:00 - 14:00" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Martes", "Viernes"],
      "horario_completo": "Martes y Viernes de 08:00 a 14:00 hrs"
    },
    {
      "id": 4,
      "nombre": "VILLAS DE GUADALUPE",
      "asentamiento": "Villas de Guadalupe",
      "sector": "I",
      "horario_semanal": {
        "lunes": { "agua": true, "horario": "06:00 - 12:00" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": true, "horario": "06:00 - 12:00" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Lunes", "Jueves"],
      "horario_completo": "Lunes y Jueves de 06:00 a 12:00 hrs"
    },
    {
      "id": 5,
      "nombre": "HIDALGO",
      "asentamiento": "Hidalgo",
      "sector": "I",
      "horario_semanal": {
        "lunes": { "agua": true, "horario": "07:00 - 13:00" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": true, "horario": "07:00 - 13:00" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Lunes", "Jueves"],
      "horario_completo": "Lunes y Jueves de 07:00 a 13:00 hrs"
    

    },
    {
      "id": 6,
      "nombre": "GUADALUPE",
      "asentamiento": "Guadalupe",
      "sector": "I",
      "horario_semanal": {
        "lunes": { "agua": true, "horario": "06:00 - 12:00" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": true, "horario": "06:00 - 12:00" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Lunes", "Jueves"],
      "horario_completo": "Lunes y Jueves de 06:00 a 12:00 hrs"
    },
    {
      "id": 7,
      "nombre": "ARBOLEDAS",
      "asentamiento": "Arboledas",
      "sector": "I",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": true, "horario": "07:00 - 13:00" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": true, "horario": "07:00 - 13:00" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Martes", "Viernes"],
      "horario_completo": "Martes y Viernes de 07:00 a 13:00 hrs"
    },
    {
      "id": 8,
      "nombre": "REVOLUCIÓN VERDE",
      "asentamiento": "Revolución Verde",
      "sector": "I",
      "horario_semanal": {
        "lunes": { "agua": true, "horario": "07:00 - 13:00" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": true, "horario": "07:00 - 13:00" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Lunes", "Jueves"],
      "horario_completo": "Lunes y Jueves de 07:00 a 13:00 hrs"
    },
    {
      "id": 9,
      "nombre": "EMILIANO ZAPATA",
      "asentamiento": "Emiliano Zapata",
      "sector": "I",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": true, "horario": "08:00 - 14:00" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": true, "horario": "08:00 - 14:00" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Martes", "Viernes"],
      "horario_completo": "Martes y Viernes de 08:00 a 14:00 hrs"
    },
    {
      "id": 10,
      "nombre": "LÁZARO CÁRDENAS",
      "asentamiento": "Lázaro Cárdenas",
      "sector": "I",
      "horario_semanal": {
        "lunes": { "agua": true, "horario": "06:00 - 12:00" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": true, "horario": "06:00 - 12:00" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Lunes", "Jueves"],
      "horario_completo": "Lunes y Jueves de 06:00 a 12:00 hrs"
    },
    {
      "id": 11,
      "nombre": "TAMATÁN",
      "asentamiento": "Colonia Tamatán",
      "sector": "II",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": true, "horario": "04:00 - 10:00" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": true, "horario": "04:00 - 10:00" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Martes", "Viernes"],
      "horario_completo": "Martes y Viernes de 04:00 a 10:00 hrs"
    },
    {
      "id": 12,
      "nombre": "MORELOS",
      "asentamiento": "Colonia Morelos",
      "sector": "II",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": true, "horario": "05:00 - 11:00" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": true, "horario": "05:00 - 11:00" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Martes", "Viernes"],
      "horario_completo": "Martes y Viernes de 05:00 a 11:00 hrs"
    },
    {
      "id": 13,
      "nombre": "AMÉRICA",
      "asentamiento": "América",
      "sector": "II",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": true, "horario": "06:00 - 12:00" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": true, "horario": "06:00 - 12:00" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Miércoles", "Sábado"],
      "horario_completo": "Miércoles y Sábado de 06:00 a 12:00 hrs"
    },
    {
      "id": 14,
      "nombre": "VISTA HERMOSA",
      "asentamiento": "Vista Hermosa",
      "sector": "II",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": true, "horario": "06:00 - 12:00" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": true, "horario": "06:00 - 12:00" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Martes", "Viernes"],
      "horario_completo": "Martes y Viernes de 06:00 a 12:00 hrs"
    },
    {
      "id": 15,
      "nombre": "LINDAVISTA",
      "asentamiento": "Lindavista",
      "sector": "II",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": true, "horario": "07:00 - 13:00" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": true, "horario": "07:00 - 13:00" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Miércoles", "Sábado"],
      "horario_completo": "Miércoles y Sábado de 07:00 a 13:00 hrs"
    },
    {
      "id": 16,
      "nombre": "LOS NARANJOS",
      "asentamiento": "Los Naranjos",
      "sector": "II",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": true, "horario": "08:00 - 14:00" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": true, "horario": "08:00 - 14:00" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Miércoles", "Sábado"],
      "horario_completo": "Miércoles y Sábado de 08:00 a 14:00 hrs"
    },
    {
      "id": 17,
      "nombre": "LOS ÁLAMOS",
      "asentamiento": "Los Álamos",
      "sector": "II",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": true, "horario": "07:00 - 13:00" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": true, "horario": "07:00 - 13:00" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Martes", "Viernes"],
      "horario_completo": "Martes y Viernes de 07:00 a 13:00 hrs"
    },
    {
      "id": 18,
      "nombre": "LOS PINOS",
      "asentamiento": "Los Pinos",
      "sector": "II",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": true, "horario": "06:00 - 12:00" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": true, "horario": "06:00 - 12:00" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Miércoles", "Sábado"],
      "horario_completo": "Miércoles y Sábado de 06:00 a 12:00 hrs"
    },
    {
      "id": 19,
      "nombre": "LOS OLIVOS",
      "asentamiento": "Los Olivos",
      "sector": "II",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": true, "horario": "08:00 - 14:00" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": true, "horario": "08:00 - 14:00" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Martes", "Viernes"],
      "horario_completo": "Martes y Viernes de 08:00 a 14:00 hrs"
    },
    {
      "id": 20,
      "nombre": "LOS FRESNOS",
      "asentamiento": "Los Fresnos",
      "sector": "II",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": true, "horario": "07:00 - 13:00" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": true, "horario": "07:00 - 13:00" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Miércoles", "Sábado"],
      "horario_completo": "Miércoles y Sábado de 07:00 a 13:00 hrs"
    },
    {
      "id": 21,
      "nombre": "SIERRA MADRE",
      "asentamiento": "Sierra Madre",
      "sector": "III",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": true, "horario": "08:00 - 14:00" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": true, "horario": "08:00 - 14:00" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Miércoles", "Sábado"],
      "horario_completo": "Miércoles y Sábado de 08:00 a 14:00 hrs"
    },
    {
      "id": 22,
      "nombre": "FOVISSSTE",
      "asentamiento": "FOVISSSTE",
      "sector": "III",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": true, "horario": "07:00 - 13:00" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": true, "horario": "07:00 - 13:00" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Miércoles", "Sábado"],
      "horario_completo": "Miércoles y Sábado de 07:00 a 13:00 hrs"
    },
    {
      "id": 23,
      "nombre": "LOMA BONITA",
      "asentamiento": "Loma Bonita",
      "sector": "III",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": true, "horario": "07:00 - 13:00" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": true, "horario": "07:00 - 13:00" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Miércoles", "Sábado"],
      "horario_completo": "Miércoles y Sábado de 07:00 a 13:00 hrs"
    },
    {
      "id": 24,
      "nombre": "LAS BRISAS",
      "asentamiento": "Las Brisas",
      "sector": "III",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": true, "horario": "06:00 - 12:00" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": true, "horario": "06:00 - 12:00" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Miércoles", "Sábado"],
      "horario_completo": "Miércoles y Sábado de 06:00 a 12:00 hrs"
    },
    {
      "id": 25,
      "nombre": "LAS AMÉRICAS",
      "asentamiento": "Las Américas",
      "sector": "III",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": true, "horario": "07:00 - 13:00" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": true, "horario": "07:00 - 13:00" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Miércoles", "Sábado"],
      "horario_completo": "Miércoles y Sábado de 07:00 a 13:00 hrs"
    },
    {
      "id": 26,
      "nombre": "LAS GRANJAS",
      "asentamiento": "Las Granjas",
      "sector": "III",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": true, "horario": "06:00 - 12:00" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": true, "horario": "06:00 - 12:00" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Miércoles", "Sábado"],
      "horario_completo": "Miércoles y Sábado de 06:00 a 12:00 hrs"
    },
    {
      "id": 27,
      "nombre": "LAS LOMAS",
      "asentamiento": "Las Lomas",
      "sector": "III",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": true, "horario": "07:00 - 13:00" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": true, "horario": "07:00 - 13:00" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Miércoles", "Sábado"],
      "horario_completo": "Miércoles y Sábado de 07:00 a 13:00 hrs"
    },
    {
      "id": 28,
      "nombre": "LAS PALMAS",
      "asentamiento": "Las Palmas",
      "sector": "III",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": true, "horario": "06:00 - 12:00" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": true, "horario": "06:00 - 12:00" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Miércoles", "Sábado"],
      "horario_completo": "Miércoles y Sábado de 06:00 a 12:00 hrs"
    },
    {
      "id": 29,
      "nombre": "LOS ENCINOS",
      "asentamiento": "Los Encinos",
      "sector": "III",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": true, "horario": "08:00 - 14:00" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": true, "horario": "08:00 - 14:00" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Miércoles", "Sábado"],
      "horario_completo": "Miércoles y Sábado de 08:00 a 14:00 hrs"
    },
    {
      "id": 30,
      "nombre": "LOS LAURELES",
      "asentamiento": "Los Laureles",
      "sector": "III",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": true, "horario": "07:00 - 13:00" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": true, "horario": "07:00 - 13:00" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Miércoles", "Sábado"],
      "horario_completo": "Miércoles y Sábado de 07:00 a 13:00 hrs"
    },
    {
      "id": 31,
      "nombre": "VILLA JARDÍN",
      "asentamiento": "Villa Jardín",
      "sector": "IV",
      "horario_semanal": {
        "lunes": { "agua": true, "horario": "09:00 - 15:00" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": true, "horario": "09:00 - 15:00" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Lunes", "Jueves"],
      "horario_completo": "Lunes y Jueves de 09:00 a 15:00 hrs"
    },
    {
      "id": 32,
      "nombre": "TAMAULIPAS",
      "asentamiento": "Tamaulipas",
      "sector": "IV",
      "horario_semanal": {
        "lunes": { "agua": true, "horario": "04:00 - 10:00" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": true, "horario": "04:00 - 10:00" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Lunes", "Jueves"],
      "horario_completo": "Lunes y Jueves de 04:00 a 10:00 hrs"
    },
    {
      "id": 33,
      "nombre": "VILLA LAS TORRES",
      "asentamiento": "Villa las Torres",
      "sector": "IV",
      "horario_semanal": {
        "lunes": { "agua": true, "horario": "08:00 - 14:00" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": true, "horario": "08:00 - 14:00" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Lunes", "Jueves"],
      "horario_completo": "Lunes y Jueves de 08:00 a 14:00 hrs"
    },
    {
      "id": 34,
      "nombre": "SATÉLITE",
      "asentamiento": "Satélite",
      "sector": "IV",
      "horario_semanal": {
        "lunes": { "agua": true, "horario": "08:00 - 14:00" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": true, "horario": "08:00 - 14:00" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Lunes", "Jueves"],
      "horario_completo": "Lunes y Jueves de 08:00 a 14:00 hrs"
    },
    {
      "id": 35,
      "nombre": "VILLA DEL RÍO",
      "asentamiento": "Villa del Río",
      "sector": "IV",
      "horario_semanal": {
        "lunes": { "agua": true, "horario": "08:00 - 14:00" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": true, "horario": "08:00 - 14:00" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Lunes", "Jueves"],
      "horario_completo": "Lunes y Jueves de 08:00 a 14:00 hrs"
    },
    {
      "id": 36,
      "nombre": "VILLA DEL MAR",
      "asentamiento": "Villa del Mar",
      "sector": "IV",
      "horario_semanal": {
        "lunes": { "agua": true, "horario": "08:00 - 14:00" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": true, "horario": "08:00 - 14:00" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Lunes", "Jueves"],
      "horario_completo": "Lunes y Jueves de 08:00 a 14:00 hrs"
    },
    {
      "id": 37,
      "nombre": "VILLA DEL BOSQUE",
      "asentamiento": "Villa del Bosque",
      "sector": "IV",
      "horario_semanal": {
        "lunes": { "agua": true, "horario": "08:00 - 14:00" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": true, "horario": "08:00 - 14:00" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Lunes", "Jueves"],
      "horario_completo": "Lunes y Jueves de 08:00 a 14:00 hrs"
    },
    {
      "id": 38,
      "nombre": "VILLA DEL NORTE",
      "asentamiento": "Villa del Norte",
      "sector": "IV",
      "horario_semanal": {
        "lunes": { "agua": true, "horario": "08:00 - 14:00" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": true, "horario": "08:00 - 14:00" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Lunes", "Jueves"],
      "horario_completo": "Lunes y Jueves de 08:00 a 14:00 hrs"
    },
    {
      "id": 39,
      "nombre": "VILLA ORIENTE",
      "asentamiento": "Villa Oriente",
      "sector": "IV",
      "horario_semanal": {
        "lunes": { "agua": true, "horario": "09:00 - 15:00" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": true, "horario": "09:00 - 15:00" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Lunes", "Jueves"],
      "horario_completo": "Lunes y Jueves de 09:00 a 15:00 hrs"
    },
    {
      "id": 40,
      "nombre": "VILLA SOL",
      "asentamiento": "Villa Sol",
      "sector": "IV",
      "horario_semanal": {
        "lunes": { "agua": true, "horario": "08:00 - 14:00" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": true, "horario": "08:00 - 14:00" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Lunes", "Jueves"],
      "horario_completo": "Lunes y Jueves de 08:00 a 14:00 hrs"
    },
    {
      "id": 41,
      "nombre": "LOMAS DE SANTUARIO",
      "asentamiento": "Lomas de Santuario",
      "sector": "V",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": true, "horario": "06:00 - 12:00" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": true, "horario": "06:00 - 12:00" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Martes", "Viernes"],
      "horario_completo": "Martes y Viernes de 06:00 a 12:00 hrs"
    },
    {
      "id": 42,
      "nombre": "VILLA HERMOSA",
      "asentamiento": "Villa Hermosa",
      "sector": "V",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": true, "horario": "07:00 - 13:00" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": true, "horario": "07:00 - 13:00" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Martes", "Viernes"],
      "horario_completo": "Martes y Viernes de 07:00 a 13:00 hrs"
    },
    {
      "id": 43,
      "nombre": "JARDÍN",
      "asentamiento": "Jardín",
      "sector": "V",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": true, "horario": "06:00 - 12:00" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": true, "horario": "06:00 - 12:00" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Martes", "Viernes"],
      "horario_completo": "Martes y Viernes de 06:00 a 12:00 hrs"
    },
    {
      "id": 44,
      "nombre": "NUEVO SANTANDER",
      "asentamiento": "Nuevo Santander",
      "sector": "V",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": true, "horario": "07:00 - 13:00" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": true, "horario": "07:00 - 13:00" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Martes", "Viernes"],
      "horario_completo": "Martes y Viernes de 07:00 a 13:00 hrs"
    },
    {
      "id": 45,
      "nombre": "LOMAS DEL PEDREGAL",
      "asentamiento": "Lomas del Pedregal",
      "sector": "V",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": true, "horario": "07:00 - 13:00" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": true, "horario": "07:00 - 13:00" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Martes", "Viernes"],
      "horario_completo": "Martes y Viernes de 07:00 a 13:00 hrs"
    },
    {
      "id": 46,
      "nombre": "LOMAS DE LA SIERRA",
      "asentamiento": "Lomas de la Sierra",
      "sector": "V",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": true, "horario": "06:00 - 12:00" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": true, "horario": "06:00 - 12:00" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Martes", "Viernes"],
      "horario_completo": "Martes y Viernes de 06:00 a 12:00 hrs"
    },
    {
      "id": 47,
      "nombre": "LOMAS DEL SUR",
      "asentamiento": "Lomas del Sur",
      "sector": "V",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": true, "horario": "07:00 - 13:00" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": true, "horario": "07:00 - 13:00" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Martes", "Viernes"],
      "horario_completo": "Martes y Viernes de 07:00 a 13:00 hrs"
    },
    {
      "id": 48,
      "nombre": "LOMAS DEL MIRADOR",
      "asentamiento": "Lomas del Mirador",
      "sector": "V",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": true, "horario": "08:00 - 14:00" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": true, "horario": "08:00 - 14:00" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Martes", "Viernes"],
      "horario_completo": "Martes y Viernes de 08:00 a 14:00 hrs"
    },
    {
      "id": 49,
      "nombre": "LOMAS DEL VALLE",
      "asentamiento": "Lomas del Valle",
      "sector": "V",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": true, "horario": "06:00 - 12:00" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": true, "horario": "06:00 - 12:00" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Martes", "Viernes"],
      "horario_completo": "Martes y Viernes de 06:00 a 12:00 hrs"
    },
    {
      "id": 50,
      "nombre": "LOMAS DEL CAMPESTRE",
      "asentamiento": "Lomas del Campestre",
      "sector": "V",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": true, "horario": "07:00 - 13:00" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": true, "horario": "07:00 - 13:00" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Martes", "Viernes"],
      "horario_completo": "Martes y Viernes de 07:00 a 13:00 hrs"
    },
    {
      "id": 51,
      "nombre": "COLINAS DE SANTUARIO",
      "asentamiento": "Colinas de Santuario",
      "sector": "VI",
      "horario_semanal": {
        "lunes": { "agua": true, "horario": "05:00 - 11:00" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": false, "horario": "Sin servicio" },
        "jueves": { "agua": true, "horario": "05:00 - 11:00" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": false, "horario": "Sin servicio" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Lunes", "Jueves"],
      "horario_completo": "Lunes y Jueves de 05:00 a 11:00 hrs"
    },
    {
      "id": 52,
      "nombre": "LOMAS DE LA AURORA",
      "asentamiento": "Lomas de la Aurora",
      "sector": "VI",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": true, "horario": "08:00 - 14:00" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": true, "horario": "08:00 - 14:00" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Miércoles", "Sábado"],
      "horario_completo": "Miércoles y Sábado de 08:00 a 14:00 hrs"
    },
    {
      "id": 53,
      "nombre": "ALTAMIRA",
      "asentamiento": "Altamira",
      "sector": "VI",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": true, "horario": "09:00 - 15:00" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": true, "horario": "09:00 - 15:00" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Miércoles", "Sábado"],
      "horario_completo": "Miércoles y Sábado de 09:00 a 15:00 hrs"
    },
    {
      "id": 54,
      "nombre": "VILLA LAS FLORES",
      "asentamiento": "Villa las Flores",
      "sector": "VI",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": true, "horario": "09:00 - 15:00" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": true, "horario": "09:00 - 15:00" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Miércoles", "Sábado"],
      "horario_completo": "Miércoles y Sábado de 09:00 a 15:00 hrs"
    },
    {
      "id": 55,
      "nombre": "VILLA DEL SOL",
      "asentamiento": "Villa del Sol",
      "sector": "VI",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": true, "horario": "09:00 - 15:00" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": true, "horario": "09:00 - 15:00" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Miércoles", "Sábado"],
      "horario_completo": "Miércoles y Sábado de 09:00 a 15:00 hrs"
    },
    {
      "id": 56,
      "nombre": "VILLA DEL LAGO",
      "asentamiento": "Villa del Lago",
      "sector": "VI",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": true, "horario": "09:00 - 15:00" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": true, "horario": "09:00 - 15:00" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Miércoles", "Sábado"],
      "horario_completo": "Miércoles y Sábado de 09:00 a 15:00 hrs"
    },
    {
      "id": 57,
      "nombre": "VILLA DEL REAL",
      "asentamiento": "Villa del Real",
      "sector": "VI",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": true, "horario": "09:00 - 15:00" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": true, "horario": "09:00 - 15:00" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Miércoles", "Sábado"],
      "horario_completo": "Miércoles y Sábado de 09:00 a 15:00 hrs"
    },
    {
      "id": 58,
      "nombre": "VILLA DEL ESTE",
      "asentamiento": "Villa del Este",
      "sector": "VI",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": true, "horario": "09:00 - 15:00" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": true, "horario": "09:00 - 15:00" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Miércoles", "Sábado"],
      "horario_completo": "Miércoles y Sábado de 09:00 a 15:00 hrs"
    },
    {
      "id": 59,
      "nombre": "VILLA DEL PRADO",
      "asentamiento": "Villa del Prado",
      "sector": "VI",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": true, "horario": "08:00 - 14:00" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": true, "horario": "08:00 - 14:00" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Miércoles", "Sábado"],
      "horario_completo": "Miércoles y Sábado de 08:00 a 14:00 hrs"
    },
    {
      "id": 60,
      "nombre": "VILLA JARDÍN",
      "asentamiento": "Villa Jardín",
      "sector": "VI",
      "horario_semanal": {
        "lunes": { "agua": false, "horario": "Sin servicio" },
        "martes": { "agua": false, "horario": "Sin servicio" },
        "miercoles": { "agua": true, "horario": "08:00 - 14:00" },
        "jueves": { "agua": false, "horario": "Sin servicio" },
        "viernes": { "agua": false, "horario": "Sin servicio" },
        "sabado": { "agua": true, "horario": "08:00 - 14:00" },
        "domingo": { "agua": false, "horario": "Sin servicio" }
      },
      "dias_tandeo": ["Miércoles", "Sábado"],
      "horario_completo": "Miércoles y Sábado de 08:00 a 14:00 hrs"
    }
  ]

    

  
};

// ========== INICIALIZACIÓN ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Iniciando aplicación TANDEOS VICTORIA...');
    cargarDatos();
    inicializarEventos();
    agregarBotonesAdicionales();
});

function cargarDatos() {
    coloniasData = datosColonias.colonias;
    coloniasFiltradas = [...coloniasData];
    console.log(`✅ ${coloniasData.length} colonias cargadas correctamente`);
    actualizarInterfaz();
}

function inicializarEventos() {
    console.log('🔧 Inicializando eventos...');
    
    // Búsqueda
    if (searchInput) {
        searchInput.addEventListener('input', filtrarColonias);
    }
    
    // Filtros de sector
    const sectorFilters = document.querySelectorAll('.sector-filter');
    sectorFilters.forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.sector-filter').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filtrarColonias();
        });
    });
    
    // Ubicación
    const locationBtn = document.querySelector('.location-button');
    if (locationBtn) {
        locationBtn.addEventListener('click', getLocation);
    }
    
    // Botones principales
    const mapBtn = document.querySelector('.map-button');
    const reportBtn = document.querySelector('.report-button');
    
    if (mapBtn) {
        mapBtn.addEventListener('click', showMap);
    }
    if (reportBtn) {
        reportBtn.addEventListener('click', showReport);
    }
    
    // Cerrar modal
    const cerrarBtn = document.querySelector('.cerrar-modal');
    if (cerrarBtn) {
        cerrarBtn.addEventListener('click', cerrarModal);
    }
    
    console.log('🎯 Todos los eventos inicializados');
}

// ========== SISTEMA DE BÚSQUEDA Y FILTRADO ==========
function filtrarColonias() {
    const searchTerm = searchInput.value.toLowerCase();
    const sectorActivo = document.querySelector('.sector-filter.active');
    
    if (!sectorActivo) return;
    
    const sector = sectorActivo.dataset.sector;
    
    coloniasFiltradas = coloniasData.filter(colonia => {
        const coincideNombre = colonia.nombre.toLowerCase().includes(searchTerm);
        const coincideAsentamiento = colonia.asentamiento.toLowerCase().includes(searchTerm);
        const coincideSector = sector === 'all' || colonia.sector === sector;
        
        return (coincideNombre || coincideAsentamiento) && coincideSector;
    });
    
    actualizarInterfaz();
}

function actualizarInterfaz() {
    // Actualizar contador
    if (resultsCount) {
        resultsCount.textContent = coloniasFiltradas.length;
    }
    
    // Actualizar lista de colonias
    if (!coloniasList) return;
    
    if (coloniasFiltradas.length === 0) {
        coloniasList.innerHTML = '<div class="no-results">No se encontraron colonias que coincidan con tu búsqueda</div>';
        return;
    }
    
    const coloniasHTML = coloniasFiltradas.map(colonia => `
        <div class="colonia-item" onclick="mostrarDetalleColonia(${colonia.id})">
            <div class="colonia-name">${colonia.nombre}</div>
            <div class="colonia-asentamiento">${colonia.asentamiento}</div>
            <div class="colonia-schedule">${colonia.horario_completo}</div>
            <div class="colonia-sector">Sector ${colonia.sector}</div>
        </div>
    `).join('');
    
    coloniasList.innerHTML = coloniasHTML;
}

function mostrarDetalleColonia(id) {
    const colonia = coloniasData.find(c => c.id === id);
    if (!colonia) return;

    const diasSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
    const nombresDias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    
    const detalleHTML = `
        <div class="detalle-colonia">
            <div class="detalle-header">
                <h3>${colonia.nombre}</h3>
                <p class="asentamiento">${colonia.asentamiento}</p>
                <div class="sector-badge">Sector ${colonia.sector}</div>
            </div>
            
            <div class="calendario-semanal">
                <h4>📅 Calendario Semanal</h4>
                ${diasSemana.map((dia, index) => {
                    const infoDia = colonia.horario_semanal[dia];
                    return `
                        <div class="dia-calendario ${infoDia.agua ? 'con-agua' : 'sin-agua'}">
                            <span class="dia-nombre">${nombresDias[index]}</span>
                            <span class="dia-horario">${infoDia.horario}</span>
                        </div>
                    `;
                }).join('')}
            </div>
            
            <div class="info-adicional">
                <h4>📋 Información del Tandeo</h4>
                <p><strong>Días de servicio:</strong> ${colonia.dias_tandeo.join(', ')}</p>
                <p><strong>Horario completo:</strong> ${colonia.horario_completo}</p>
            </div>
            
            <button class="btn-cerrar" onclick="cerrarModal()">Cerrar</button>
        </div>
    `;
    
    if (modalContent) {
        modalContent.innerHTML = detalleHTML;
    }
    if (coloniaModal) {
        coloniaModal.style.display = 'flex';
    }
}

// ========== MAPA OPENSTREETMAP FUNCIONAL ==========
function showMap() {
    console.log('🗺️ Mostrando mapa OpenStreetMap...');
    
    const mapModal = document.getElementById('mapModal');
    const map = document.getElementById('map');
    
    if (!mapModal || !map) {
        alert('❌ Error al cargar el mapa');
        return;
    }

    const mapaHTML = `
        <div style="text-align: center; height: 100%; display: flex; flex-direction: column;">
            <div style="padding: 15px; border-bottom: 1px solid #eee; background: white;">
                <h3 style="color: #0097A7; margin: 0 0 10px 0;">🗺️ Mapa de Colonias COMAPA</h3>
                <p style="color: #666; margin: 0; font-size: 14px;">Sectores de distribución de agua en Ciudad Victoria</p>
            </div>

            <!-- Controles del mapa -->
            <div style="display: flex; gap: 8px; padding: 10px 15px; background: #f8f9fa; border-bottom: 1px solid #eee; flex-wrap: wrap;">
                <select id="filtroSectorMapa" onchange="filtrarSectorMapa()" style="
                    padding: 8px;
                    border-radius: 6px;
                    border: 1px solid #ddd;
                    font-size: 12px;
                    flex: 1;
                ">
                    <option value="all">Todos los sectores</option>
                    <option value="I">Sector I - Centro</option>
                    <option value="II">Sector II - Norte</option>
                    <option value="III">Sector III - Sur</option>
                    <option value="IV">Sector IV - Oriente</option>
                    <option value="V">Sector V - Poniente</option>
                    <option value="VI">Sector VI - Periferia</option>
                </select>
                
                <button onclick="mostrarTodosSectores()" style="
                    background: #0097A7; 
                    color: white; 
                    border: none; 
                    padding: 8px 12px; 
                    border-radius: 6px; 
                    cursor: pointer;
                    font-size: 12px;
                ">📍 Todos</button>
                
                <button onclick="togglePanel()" style="
                    background: #FF9800; 
                    color: white; 
                    border: none; 
                    padding: 8px 12px; 
                    border-radius: 6px; 
                    cursor: pointer;
                    font-size: 12px;
                ">📋 Info</button>
            </div>

            <!-- Mapa de OpenStreetMap -->
            <div style="flex: 1; position: relative;">
                <iframe 
                    id="osmMap"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-99.18%2C23.71%2C-99.11%2C23.76&layer=mapnik&marker=23.736%2C-99.146"
                    style="width: 100%; height: 100%; border: none;"
                    title="Mapa de Ciudad Victoria"
                ></iframe>
                
                <!-- Panel de información MEJORADO -->
                <div id="panelInfoMapa" style="
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: rgba(255,255,255,0.98);
                    padding: 15px;
                    border-radius: 8px;
                    border-left: 4px solid #0097A7;
                    max-width: 280px;
                    max-height: 70vh;
                    overflow-y: auto;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
                    transition: all 0.3s ease;
                    z-index: 1000;
                ">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 8px;">
                        <h4 style="margin: 0; color: #0097A7; font-size: 14px;">🏘️ Información de Sectores</h4>
                        <button onclick="togglePanel()" style="
                            background: none;
                            border: none;
                            font-size: 16px;
                            cursor: pointer;
                            padding: 2px 6px;
                            border-radius: 4px;
                            color: #666;
                        ">✕</button>
                    </div>
                    <div id="panelContent">
                        <div style="font-size: 12px; color: #666; text-align: left;">
                            <div style="margin-bottom: 8px; padding: 8px; background: #f8f9fa; border-radius: 6px;">
                                <strong>🔴 Sector I:</strong> Centro Histórico
                            </div>
                            <div style="margin-bottom: 8px; padding: 8px; background: #f8f9fa; border-radius: 6px;">
                                <strong>🟢 Sector II:</strong> Zona Norte
                            </div>
                            <div style="margin-bottom: 8px; padding: 8px; background: #f8f9fa; border-radius: 6px;">
                                <strong>🔵 Sector III:</strong> Zona Sur
                            </div>
                            <div style="margin-bottom: 8px; padding: 8px; background: #f8f9fa; border-radius: 6px;">
                                <strong>🟡 Sector IV:</strong> Zona Oriente
                            </div>
                            <div style="margin-bottom: 8px; padding: 8px; background: #f8f9fa; border-radius: 6px;">
                                <strong>🟣 Sector V:</strong> Zona Poniente
                            </div>
                            <div style="padding: 8px; background: #f8f9fa; border-radius: 6px;">
                                <strong>🟠 Sector VI:</strong> Periferia
                            </div>
                        </div>
                        <div style="margin-top: 10px; padding: 8px; background: #e3f2fd; border-radius: 6px; font-size: 11px; border-left: 3px solid #2196F3;">
                            💡 <strong>Selecciona un sector</strong> en el filtro superior para ver sus colonias específicas
                        </div>
                    </div>
                </div>

                <!-- Leyenda -->
                <div style="
                    position: absolute;
                    bottom: 10px;
                    left: 10px;
                    background: rgba(255,255,255,0.95);
                    padding: 10px;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                    max-width: 150px;
                ">
                    <h4 style="margin: 0 0 8px 0; color: #0097A7; font-size: 12px;">📍 Sectores</h4>
                    <div style="font-size: 10px;">
                        <div style="display: flex; align-items: center; margin: 3px 0;">
                            <div style="width: 12px; height: 12px; background: #FF6B6B; border-radius: 2px; margin-right: 5px;"></div>
                            <span>Sector I</span>
                        </div>
                        <div style="display: flex; align-items: center; margin: 3px 0;">
                            <div style="width: 12px; height: 12px; background: #4ECDC4; border-radius: 2px; margin-right: 5px;"></div>
                            <span>Sector II</span>
                        </div>
                        <div style="display: flex; align-items: center; margin: 3px 0;">
                            <div style="width: 12px; height: 12px; background: #45B7D1; border-radius: 2px; margin-right: 5px;"></div>
                            <span>Sector III</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Información general -->
            <div style="padding: 10px 15px; background: #f8f9fa; border-top: 1px solid #eee;">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
                    <div style="font-size: 12px; color: #666;">
                        <strong>📍 ${coloniasData.length} colonias</strong> • 
                        <span id="contadorSectores">6 sectores</span>
                    </div>
                    <div>
                        <button onclick="abrirMapaCompleto()" style="
                            background: #FF9800; 
                            color: white; 
                            border: none; 
                            padding: 6px 10px; 
                            border-radius: 6px; 
                            cursor: pointer;
                            font-size: 12px;
                            margin-right: 5px;
                        ">🗺️ Abrir mapa completo</button>
                        <button onclick="cerrarMapa()" style="
                            background: #F44336; 
                            color: white; 
                            border: none; 
                            padding: 6px 12px; 
                            border-radius: 6px; 
                            cursor: pointer;
                            font-size: 12px;
                        ">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    map.innerHTML = mapaHTML;
    mapModal.style.display = 'flex';
    
    // Inicializar el panel como visible
    window.panelVisible = true;
}

// Función para mostrar/ocultar el panel
function togglePanel() {
    const panel = document.getElementById('panelInfoMapa');
    if (panel) {
        if (window.panelVisible) {
            panel.style.transform = 'translateX(100%)';
            panel.style.opacity = '0';
        } else {
            panel.style.transform = 'translateX(0)';
            panel.style.opacity = '1';
        }
        window.panelVisible = !window.panelVisible;
    }

}

function filtrarSectorMapa() {
    const sector = document.getElementById('filtroSectorMapa').value;
    const contador = document.getElementById('contadorSectores');
    
    if (sector === 'all') {
        contador.textContent = '6 sectores';
        // Centrar mapa en Ciudad Victoria
        document.getElementById('osmMap').src = 'https://www.openstreetmap.org/export/embed.html?bbox=-99.18%2C23.71%2C-99.11%2C23.76&layer=mapnik&marker=23.736%2C-99.146';
    } else {
        contador.textContent = `Sector ${sector}`;
        
        // Coordenadas aproximadas por sector
        const coordenadasSectores = {
            'I': { lat: 23.736, lng: -99.146, zoom: 14 },   // Centro
            'II': { lat: 23.756, lng: -99.166, zoom: 14 },  // Norte
            'III': { lat: 23.716, lng: -99.126, zoom: 14 }, // Sur
            'IV': { lat: 23.746, lng: -99.116, zoom: 14 },  // Oriente
            'V': { lat: 23.726, lng: -99.166, zoom: 14 },   // Poniente
            'VI': { lat: 23.706, lng: -99.146, zoom: 14 }   // Periferia
        };
        
        const coord = coordenadasSectores[sector];
        const bbox = `${coord.lng-0.02}%2C${coord.lat-0.02}%2C${coord.lng+0.02}%2C${coord.lat+0.02}`;
        document.getElementById('osmMap').src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${coord.lat}%2C${coord.lng}`;
        
        // Mostrar información del sector
        const panel = document.getElementById('panelInfoMapa');
        const coloniasSector = coloniasData.filter(c => c.sector === sector);
        panel.innerHTML = `
            <h4 style="margin: 0 0 10px 0; color: #0097A7; font-size: 14px;">🏘️ Sector ${sector}</h4>
            <div style="font-size: 12px; color: #666;">
                <strong>Colonias: ${coloniasSector.length}</strong>
                <div style="max-height: 150px; overflow-y: auto; margin-top: 8px;">
                    ${coloniasSector.map(colonia => `
                        <div style="padding: 4px 0; border-bottom: 1px solid #f0f0f0;">
                            <strong>${colonia.nombre}</strong><br>
                            <small>${colonia.horario_completo}</small>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
}

function mostrarTodosSectores() {
    document.getElementById('filtroSectorMapa').value = 'all';
    filtrarSectorMapa();
}

function abrirMapaCompleto() {
    window.open('https://www.openstreetmap.org/?mlat=23.736&mlon=-99.146#map=13/23.736/-99.146', '_blank');
}

function cerrarMapa() {
    const mapModal = document.getElementById('mapModal');
    if (mapModal) {
        mapModal.style.display = 'none';
    }
}

// ========== DASHBOARD ==========
function mostrarDashboard() {
    console.log('📊 Mostrando dashboard');
    
    const estadisticas = {
        total: coloniasData.length,
        sectorI: coloniasData.filter(c => c.sector === 'I').length,
        sectorII: coloniasData.filter(c => c.sector === 'II').length,
        sectorIII: coloniasData.filter(c => c.sector === 'III').length,
        sectorIV: coloniasData.filter(c => c.sector === 'IV').length,
        sectorV: coloniasData.filter(c => c.sector === 'V').length,
        sectorVI: coloniasData.filter(c => c.sector === 'VI').length
    };

    const dashboardHTML = `
        <div class="dashboard">
            <div class="detalle-header">
                <h3>📊 Dashboard de Colonias</h3>
                <p>Estadísticas y distribución por sectores</p>
            </div>
            
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-number">${estadisticas.total}</div>
                    <div class="stat-label">Total Colonias</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${estadisticas.sectorI}</div>
                    <div class="stat-label">Sector I</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${estadisticas.sectorII}</div>
                    <div class="stat-label">Sector II</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${estadisticas.sectorIII}</div>
                    <div class="stat-label">Sector III</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${estadisticas.sectorIV}</div>
                    <div class="stat-label">Sector IV</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${estadisticas.sectorV}</div>
                    <div class="stat-label">Sector V</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${estadisticas.sectorVI}</div>
                    <div class="stat-label">Sector VI</div>
                </div>
            </div>
            
            <div class="stats-section">
                <h4>📈 Distribución por Sectores</h4>
                <div class="stats-bars">
                    ${Object.entries({
                        'Sector I': estadisticas.sectorI,
                        'Sector II': estadisticas.sectorII,
                        'Sector III': estadisticas.sectorIII,
                        'Sector IV': estadisticas.sectorIV,
                        'Sector V': estadisticas.sectorV,
                        'Sector VI': estadisticas.sectorVI
                    }).map(([sector, cantidad]) => `
                        <div class="stat-bar">
                            <div class="stat-bar-label">${sector}</div>
                            <div class="stat-bar-container">
                                <div class="stat-bar-fill" style="width: ${(cantidad / estadisticas.total) * 100}%"></div>
                            </div>
                            <div class="stat-bar-value">${cantidad}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <button class="btn-cerrar" onclick="cerrarModal()" style="margin-top: 20px;">Cerrar</button>
        </div>
    `;
    
    if (modalContent) {
        modalContent.innerHTML = dashboardHTML;
    }
    if (coloniaModal) {
        coloniaModal.style.display = 'flex';
    }
}

// ========== ALERTAS ==========
function mostrarAlertas() {
    console.log('🚨 Mostrando alertas');
    
    const alertas = [
        {
            id: 1,
            colonia: "CENTRO",
            tipo: "sin_agua",
            descripcion: "Corte de agua prolongado desde hace 12 horas",
            confirmaciones: 5,
            critica: true,
            fecha: new Date(Date.now() - 2 * 60 * 60 * 1000)
        },
        {
            id: 2,
            colonia: "LIBERTAD", 
            tipo: "fuga",
            descripcion: "Fuga grande en calle principal",
            confirmaciones: 2,
            critica: false,
            fecha: new Date(Date.now() - 30 * 60 * 1000)
        }
    ];

    const alertasHTML = `
        <div class="alertas-panel">
            <div class="detalle-header">
                <h3>🚨 Alertas Comunitarias</h3>
                <p>Reportes verificados por la comunidad</p>
            </div>
            
            <div class="alertas-list">
                ${alertas.length === 0 ? 
                    '<div class="no-alertas">No hay alertas activas en este momento</div>' :
                    alertas.map(alerta => `
                        <div class="alerta-item ${alerta.critica ? 'critica' : ''}">
                            <div class="alerta-header">
                                <span class="alerta-colonia">${alerta.colonia}</span>
                                <span class="alerta-confirmaciones">${alerta.confirmaciones} ✅</span>
                            </div>
                            <div class="alerta-tipo">${obtenerNombreTipo(alerta.tipo)}</div>
                            <div class="alerta-descripcion">${alerta.descripcion}</div>
                            <div class="alerta-footer">
                                <span class="alerta-tiempo">${formatearTiempo(alerta.fecha)}</span>
                                <button class="btn-confirmar" onclick="confirmarAlerta(${alerta.id})">
                                    ✅ Confirmar
                                </button>
                            </div>
                        </div>
                    `).join('')
                }
            </div>
            
            <div style="display: flex; gap: 10px; margin-top: 20px;">
                <button class="submit-button" onclick="showReport()" style="flex: 1;">
                    📋 Crear Nueva Alerta
                </button>
                <button class="btn-cerrar" onclick="cerrarModal()" style="flex: 1;">
                    Cerrar
                </button>
            </div>
        </div>
    `;
    
    if (modalContent) {
        modalContent.innerHTML = alertasHTML;
    }
    if (coloniaModal) {
        coloniaModal.style.display = 'flex';
    }
}

// ========== EMERGENCIAS ==========
function mostrarEmergencias() {
    console.log('🆘 Mostrando emergencias');
    
    const recursos = [
        {
            tipo: 'pipas',
            colonia: 'CENTRO',
            ubicacion: 'Plaza Principal',
            contacto: '834 123 4567',
            horario: '08:00 - 20:00',
            capacidad: '10,000 litros',
            disponible: true
        },
        {
            tipo: 'centro_acopio',
            colonia: 'LIBERTAD',
            ubicacion: 'Escuela Primaria Libertad',
            contacto: '834 234 5678',
            horario: '24/7',
            articulos: 'Garrafones, cubetas, botellas',
            disponible: true
        },
        {
            tipo: 'hospital',
            colonia: 'TAMATÁN',
            ubicacion: 'Hospital General',
            contacto: '834 345 6789',
            horario: '24/7',
            servicios: 'Atención médica por deshidratación',
            disponible: true
        }
    ];

    const protocolos = [
        {
            titulo: 'Corte Prolongado de Agua',
            pasos: [
                'Almacenar agua en recipientes limpios',
                'Racionar el consumo (4 litros por persona/día)',
                'Hervir el agua antes de consumir',
                'Reportar situación al 070'
            ]
        },
        {
            titulo: 'Inundación por Fuga',
            pasos: [
                'Alejarse de cables eléctricos caídos',
                'Cerrar llave de paso principal',
                'Reportar fuga inmediatamente',
                'Buscar terreno elevado si es necesario'
            ]
        }
    ];

    const emergenciasHTML = `
        <div class="emergencias-panel">
            <div class="detalle-header">
                <h3>🆘 Emergencias Hídricas</h3>
                <p>Recursos y protocolos de emergencia</p>
            </div>
            
            <div class="emergencia-section">
                <h4>📍 Recursos Disponibles</h4>
                <div class="recursos-list">
                    ${recursos.map(recurso => `
                        <div class="recurso-item ${recurso.disponible ? 'disponible' : 'no-disponible'}">
                            <div class="recurso-icon">${obtenerIconoRecurso(recurso.tipo)}</div>
                            <div class="recurso-info">
                                <div class="recurso-titulo">${obtenerNombreRecurso(recurso.tipo)}</div>
                                <div class="recurso-ubicacion">${recurso.colonia} - ${recurso.ubicacion}</div>
                                <div class="recurso-contacto">📞 ${recurso.contacto}</div>
                                ${recurso.horario ? `<div class="recurso-horario">🕒 ${recurso.horario}</div>` : ''}
                                ${recurso.capacidad ? `<div class="recurso-capacidad">💧 ${recurso.capacidad}</div>` : ''}
                            </div>
                            <div class="recurso-estado">
                                ${recurso.disponible ? '✅ Disponible' : '❌ No Disponible'}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="emergencia-section">
                <h4>📋 Protocolos de Emergencia</h4>
                <div class="protocolos-list">
                    ${protocolos.map(protocolo => `
                        <div class="protocolo-item">
                            <h5>${protocolo.titulo}</h5>
                            <ol class="protocolo-pasos">
                                ${protocolo.pasos.map(paso => `<li>${paso}</li>`).join('')}
                            </ol>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="emergencia-actions">
                <button class="bottom-button" onclick="llamarEmergencia()" style="flex: 1;">
                    📞 Llamar al 911
                </button>
                <button class="btn-cerrar" onclick="cerrarModal()" style="flex: 1;">
                    Cerrar
                </button>
            </div>
        </div>
    `;
    
    if (modalContent) {
        modalContent.innerHTML = emergenciasHTML;
    }
    if (coloniaModal) {
        coloniaModal.style.display = 'flex';
    }
}

// ========== FUNCIONES AUXILIARES ==========
function obtenerNombreTipo(tipo) {
    const nombres = {
        'sin_agua': '🚱 Sin Agua',
        'presion_baja': '💧 Presión Baja',
        'fuga': '🚰 Fuga',
        'agua_sucia': '💀 Agua Sucia',
        'otro': '❓ Otro'
    };
    return nombres[tipo] || tipo;
}

function formatearTiempo(fecha) {
    const ahora = new Date();
    const diffMs = ahora - fecha;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    
    if (diffMins < 60) {
        return `Hace ${diffMins} min`;
    } else if (diffHours < 24) {
        return `Hace ${diffHours} h`;
    } else {
        return fecha.toLocaleDateString();
    }
}

function obtenerIconoRecurso(tipo) {
    const iconos = {
        'pipas': '🚛',
        'centro_acopio': '🏢',
        'hospital': '🏥'
    };
    return iconos[tipo] || '📍';
}

function obtenerNombreRecurso(tipo) {
    const nombres = {
        'pipas': 'Pipa de Agua',
        'centro_acopio': 'Centro de Acopio',
        'hospital': 'Hospital'
    };
    return nombres[tipo] || tipo;
}

function confirmarAlerta(alertaId) {
    console.log(`✅ Confirmando alerta ${alertaId}`);
    alert(`✅ Has confirmado la alerta #${alertaId}. Gracias por ayudar a la comunidad.`);
}

function llamarEmergencia() {
    if (confirm('¿Deseas llamar al número de emergencias 070?')) {
        window.location.href = 'tel:070';
    }
}

// ========== BOTONES ADICIONALES ==========
function agregarBotonesAdicionales() {
    console.log('🔄 Agregando botones adicionales...');
    
    const botonesExistentes = document.querySelector('.bottom-buttons:nth-child(2)');
    if (botonesExistentes) {
        console.log('✅ Los botones adicionales ya existen');
        return;
    }
    
    const bottomButtons = document.querySelector('.bottom-buttons');
    if (!bottomButtons) {
        console.log('❌ No se encontró el contenedor de botones');
        return;
    }

    const nuevosBotonesHTML = `
        <div class="bottom-buttons" style="margin-top: 10px;">
            <button class="bottom-button" onclick="mostrarDashboard()" style="background: linear-gradient(135deg, #4CAF50, #45a049);">
                <span class="button-icon">📊</span>
                <span class="button-text">Dashboard</span>
            </button>
            <button class="bottom-button" onclick="mostrarAlertas()" style="background: linear-gradient(135deg, #FF5722, #E64A19);">
                <span class="button-icon">🚨</span>
                <span class="button-text">Alertas</span>
            </button>
            <button class="bottom-button" onclick="mostrarEmergencias()" style="background: linear-gradient(135deg, #F44336, #D32F2F);">
                <span class="button-icon">🆘</span>
                <span class="button-text">Emergencias</span>
            </button>
        </div>
    `;

    bottomButtons.insertAdjacentHTML('afterend', nuevosBotonesHTML);
    console.log('✅ Botones adicionales agregados correctamente');
}

// ========== FUNCIONES BÁSICAS ==========
function getLocation() {
    console.log('📍 Solicitando ubicación...');
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                console.log(`📍 Ubicación obtenida: ${lat}, ${lng}`);
                alert(`📍 Ubicación obtenida: ${lat.toFixed(4)}, ${lng.toFixed(4)}\n\nBuscando colonias cercanas...`);
            },
            function(error) {
                console.log('❌ Error obteniendo ubicación:', error);
                alert('❌ No se pudo obtener la ubicación. Asegúrate de permitir el acceso a la ubicación.');
            }
        );
    } else {
        alert('❌ Tu navegador no soporta geolocalización');
    }
}

function showReport() {
    console.log('📝 Mostrando formulario de reporte');
    
    const reportHTML = `
        <div class="report-form">
            <div class="detalle-header">
                <h3>⚠️ Reportar Problema</h3>
                <p>Reporta problemas con el suministro de agua</p>
            </div>
            
            <div class="form-group">
                <label>Tu nombre:</label>
                <input type="text" class="form-input" id="reportName" placeholder="Nombre completo">
            </div>
            
            <div class="form-group">
                <label>Colonia afectada:</label>
                <select class="form-select" id="reportColonia">
                    <option value="">Selecciona una colonia</option>
                    ${coloniasData.map(colonia => 
                        `<option value="${colonia.nombre}">${colonia.nombre}</option>`
                    ).join('')}
                </select>
            </div>
            
            <div class="form-group">
                <label>Tipo de problema:</label>
                <select class="form-select" id="reportTipo">
                    <option value="">Selecciona el tipo</option>
                    <option value="sin_agua">🚱 Sin suministro de agua</option>
                    <option value="presion_baja">💧 Presión muy baja</option>
                    <option value="fuga">🚰 Fuga de agua</option>
                    <option value="agua_sucia">💀 Agua sucia/turbia</option>
                    <option value="otro">❓ Otro problema</option>
                </select>
            </div>
            
            <div class="form-group">
                <label>Descripción del problema:</label>
                <textarea class="form-textarea" id="reportDescripcion" placeholder="Describe el problema en detalle..."></textarea>
            </div>
            
            <button class="submit-button" onclick="enviarReporte()">
                📤 Enviar Reporte
            </button>
        </div>
    `;
    
    if (modalContent) {
        modalContent.innerHTML = reportHTML;
    }
    if (coloniaModal) {
        coloniaModal.style.display = 'flex';
    }
}

function enviarReporte() {
    const nombre = document.getElementById('reportName').value;
    const colonia = document.getElementById('reportColonia').value;
    const tipo = document.getElementById('reportTipo').value;
    const descripcion = document.getElementById('reportDescripcion').value;
    
    if (!nombre || !colonia || !tipo || !descripcion) {
        alert('❌ Por favor completa todos los campos');
        return;
    }
    
    console.log('📤 Enviando reporte:', { nombre, colonia, tipo, descripcion });
    alert('✅ Reporte enviado correctamente. Gracias por tu reporte.');
    cerrarModal();
}

function cerrarModal() {
    if (coloniaModal) {
        coloniaModal.style.display = 'none';
    }
}

// Verificación final
console.log('🎉 TANDEOS VICTORIA - APLICACIÓN INICIALIZADA CORRECTAMENTE');

