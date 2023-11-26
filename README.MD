# Detalle Técnico de la Tarea S6T1

## Eduardo Flores | T32311172

## Descripción

Desarrollar una aplicación móvil utilizando React Native y Expo que consuma datos de la PokeAPI pública. La aplicación debe tener al menos dos pantallas (maestro-detalle). Además, debe permitir al usuario buscar dentro del listado de Pokémon bajo algún criterio de búsqueda, y mostrar la imagen y detalles del Pokémon seleccionado en la pantalla de detalle.

## Componentes Principales

### `HomeScreen.jsx`

- **Descripción**: Componente para la pantalla principal que muestra la lista de Pokémon.
- **Funcionalidad**:
  - Descarga la lista de Pokémon desde la PokeAPI.
  - Permite al usuario buscar Pokémon por nombre.
  - Filtra la lista de Pokémon en función del término de búsqueda.
  - Navega a la pantalla de detalle al hacer clic en un Pokémon de la lista.

### `DetailScreen.jsx`

- **Descripción**: Componente para la pantalla de detalle que muestra la información detallada de un Pokémon seleccionado.
- **Funcionalidad**:
  - Descarga los detalles del Pokémon seleccionado desde la PokeAPI.
  - Muestra imagen, nombre, altura, peso del Pokémon.

## Dependencias

- **React Native**: Biblioteca para construir aplicaciones móviles nativas utilizando React.
- **Expo**: Plataforma para construir aplicaciones React Native rápidamente.
- **Axios**: Cliente HTTP para realizar solicitudes a la PokeAPI.

## Instalación

1. Instalar dependencias: `npm install`
2. Iniciar la aplicación: `npm start`
