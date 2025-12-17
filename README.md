# Novena de Aguinaldos Web App

Una aplicación web moderna y colaborativa para rezar la tradicional Novena de Aguinaldos. Construida con React y diseñada para ofrecer una experiencia premium y sincrónica para familias y amigos.

![Novena Screenshot](public/holly-family.png)

## ✨ Características Principales

*   **Experiencia Visual Premium**: Diseño responsivo con modo oscuro, modo alto contraste, efectos de nieve (`SnowEffect`) y confeti para celebrar.
*   **Modo Grupal en Tiempo Real**: Sincroniza la oración con amigos y familiares a través de Internet.
    *   **Anfitrión**: Crea una sala y controla el avance de la novena.
    *   **Invitados**: Se unen con un código o enlace y su pantalla sigue automáticamente al anfitrión.
    *   **Sincronización Total**: Sincroniza la navegación entre páginas, el carrusel de los Gozos y la selección del día en las Consideraciones.
*   **Contenido Completo**: Incluye todas las oraciones tradicionales:
    *   Oración para Todos los Días
    *   Consideraciones (Selección automática del día según la fecha)
    *   Oración a la Virgen
    *   Oración a San José
    *   Gozos (Carrusel interactivo con explicación)
    *   Oración al Niño Jesús
    *   Villancicos
*   **Instalable**: Optimizado como SPA (Single Page Application) para cargar instantáneamente.

## 🛠️ Tecnologías

Este proyecto moderniza una aplicación legacy utilizando un stack actual:

-   **Frontend**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
-   **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
-   **Enrutamiento**: [React Router v6](https://reactrouter.com/)
-   **Backend / Sincronización**: [Firebase Realtime Database](https://firebase.google.com/)
-   **Hosting**: Firebase Hosting
-   **Iconos**: [Lucide React](https://lucide.dev/)

## 🚀 Instalación y Uso Local

1.  **Clonar el repositorio** (o descargar los archivos):
    ```bash
    git clone <tu-repositorio>
    cd novena
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Ejecutar en desarrollo**:
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.

4.  **Construir para producción**:
    ```bash
    npm run build
    ```
    Los archivos optimizados se generarán en la carpeta `dist`.

## ☁️ Despliegue en Firebase

El proyecto está configurado para desplegarse fácilmente en Firebase Hosting.

1.  Asegúrate de tener la **Firebase CLI** instalada e iniciada sesión:
    ```bash
    npm install -g firebase-tools
    firebase login
    ```

2.  Desplegar:
    ```bash
    npm run build
    firebase deploy
    ```

**Nota**: El archivo `firebase.json` ya está configurado para servir la carpeta `dist` y redirigir todas las rutas a `index.html` (necesario para React Router).

## 📱 Modo Grupal (Cómo funciona)

1.  Haga clic en **"Modo Grupal"** en la pantalla de inicio.
2.  **Anfitrión**: Presione "Iniciar como Anfitrión". Recibirá un código de 6 dígitos.
3.  **Compartir**: Use el botón "Invitar" para copiar el enlace directo (ej: `.../lobby?code=123456`).
4.  **Invitados**: Al abrir el enlace o ingresar el código, se unirán a la sesión.
5.  ¡Listo! Cualquier cambio que haga el anfitrión (cambiar de página, pasar un Gozo, cambiar el día) se reflejará instantáneamente en todos los dispositivos conectados.

---

**Créditos:**
Hecho con amor por la familia **Tapasco Zuñiga**.
