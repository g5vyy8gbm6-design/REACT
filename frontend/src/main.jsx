// ============================================================
// main.jsx
// Pertenece a: Clase 01 - Entorno y Bootstrap (imports de Bootstrap)
//   Se amplia en Clase 03 (AuthProvider) y Clase 04 (BrowserRouter)
// ------------------------------------------------------------
// Es el PRIMER archivo que se ejecuta en el navegador. Aqui se
// "monta" React dentro del <div id="root"></div> que existe en
// index.html, y se configuran los proveedores globales que toda
// la app va a necesitar: el enrutador (rutas) y el contexto de
// autenticacion (saber quien inicio sesion).
// ============================================================

// StrictMode ayuda a detectar errores comunes en desarrollo (no afecta produccion)
import { StrictMode } from 'react';
// createRoot es la funcion moderna de React 18+ para montar la app en el DOM
import { createRoot } from 'react-dom/client';
// BrowserRouter habilita el manejo de rutas basado en la URL del navegador
import { BrowserRouter } from 'react-router-dom';

// Estilos de Bootstrap (clases como "btn", "container", "table"...)
import 'bootstrap/dist/css/bootstrap.min.css';
// Iconos de Bootstrap (clases como "bi bi-trash")
import 'bootstrap-icons/font/bootstrap-icons.css';
// JavaScript de Bootstrap: necesario para que funcionen los modales,
// dropdowns y el menu colapsable en pantallas pequeñas.
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Estilos propios del proyecto (se cargan despues de Bootstrap
// para poder sobreescribir detalles puntuales si hace falta)
import './index.css';

// Componente raiz con todas las rutas de la app (ver App.jsx)
import App from './App.jsx';
// Proveedor del contexto de sesion (ver context/AuthContext.jsx)
import { AuthProvider } from './context/AuthContext.jsx';

// Busca el <div id="root"> de index.html y "engancha" React ahi dentro
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter habilita la navegacion por URL (react-router-dom) */}
    <BrowserRouter>
      {/* AuthProvider comparte con toda la app quien es el usuario logueado */}
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);