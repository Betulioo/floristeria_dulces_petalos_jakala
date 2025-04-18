# Floristería Dulces Pétalos - Guía de Inicio

## Descripción del Proyecto

Floristería Dulces Pétalos es una aplicación web para una tienda de flores que permite a los usuarios explorar productos, ver detalles y realizar búsquedas. Está construida con React, TypeScript y un sistema de diseño personalizado.

### Tecnologías Utilizadas

- **Frontend**: React 19, TypeScript, VITE, SCSS(con sistema modular), React Router DOM, Context API

### Requisitos

- Node.js
- npm o yarn

### Instalación

1. Clona el repositorio:

   ```bash
   git clone [URL-del-repositorio]
    ```

2. Navega al directorio del proyecto:

   ```bash
   cd floristeria_dulces_petalos
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

   o

   ```bash
   yarn install
   ```

4. Configura el archivo .env en la raiz del proyecto:

   ```bash
    VITE_API_URL=https://dulces-petalos.jakala.es/
    ```

5. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   o

   ```bash
   yarn dev
   ```

6. Abre tu navegador y visita `http://localhost:5173` para ver la aplicación en acción.

## Estructura del Proyecto

```plaintext
  floristeria_dulces_petalos/
  ├── src/
  │   ├── assets/          # Imágenes, iconos y logos
  │   ├── components/      # Componentes reutilizables
  │   ├── context/         # Context API para estado global
  │   ├── services/        # Servicios para consumir APIs
  │   ├── styles/          # Sistema de diseño y estilos globales
  │   ├── views/           # Páginas de la aplicación
  │   ├── App.tsx          # Componente principal
  │   └── main.tsx         # Punto de entrada
  ├── public/              # Archivos estáticos públicos
  ├── .env                 # Variables de entorno
  ├── package.json         # Dependencias y scripts
  ├── tsconfig.json        # Configuración de TypeScript
  ├── vite.config.ts       # Configuración de Vite
  └── STYLEREADME.MD       # Documentación del sistema de diseño
```

### Características Principales

- **Listado de Productos**: Visualización en grid de los productos disponibles
- **Busqueda**: Búsqueda de productos por nombre y nombre binomial
- **Detalles del Producto**: Información detallada de cada producto
- **Diseño Responsivo**: Adaptación a diferentes tamaños de pantalla

### Sistema de Diseño

El sistema de diseño está basado en un enfoque modular utilizando SCSS. Cada componente tiene su propio archivo de estilos, lo que facilita la mantenibilidad y escalabilidad del código.

utiliza un sistema de diseño personalizado con tokens para:

- Colores: Paletas primary, secondary, accent, neutral, etc.
- Tipografía: Fuentes Nunito y DM Sans con diferentes pesos
- Espaciado: Sistema de espaciado consistente
- Bordes y Sombras: Estilos predefinidos

Para más detalles sobre el sistema de diseño, consulta el archivo STYLEREADME.MD.

### Flujo de Trabajo con API

El proyecto consume datos de una API REST:

1. Los productos se cargan al iniciar la aplicación mediante fetchProducts()
2. La información detallada se obtiene con fetchProductById(id)
3. Todos los productos se almacenan en el contexto global para su uso en la aplicación
