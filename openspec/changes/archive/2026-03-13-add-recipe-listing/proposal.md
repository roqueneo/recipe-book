## Why

La aplicación Recipe Book actualmente muestra solo un título estático. Se necesita la página principal con el listado de recetas para que los usuarios puedan explorar las recetas disponibles. Esta es la funcionalidad core de la aplicación.

## What Changes

- Crear un API slice de RTK Query para consumir `GET /recipes` desde el mock server
- Integrar el API slice en el Redux store existente
- Crear componente `RecipeCard` que muestre imagen, nombre, categoría, dificultad y tiempo de preparación
- Crear componente `RecipeList` que renderice el grid de cards con estados de loading y error
- Actualizar `App.tsx` para mostrar el listado como página principal

## Capabilities

### New Capabilities
- `recipe-listing`: Listado principal de recetas en formato grid de cards con data fetching via RTK Query

### Modified Capabilities

## Impact

- `src/store/store.ts`: Agregar el API reducer y middleware de RTK Query
- Nuevos archivos en `src/features/recipes/`: API slice, componentes RecipeCard y RecipeList
- `src/App.tsx`: Integrar el listado como contenido principal
- Dependencia en runtime: mock server corriendo en `http://localhost:3001`
