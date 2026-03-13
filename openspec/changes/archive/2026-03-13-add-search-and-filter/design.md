## Context

El listado de recetas ya funciona con RTK Query (`getRecipes` endpoint) mostrando todas las recetas en un grid responsive. Ahora se necesita agregar búsqueda por texto y filtrado por categoría. El mock server ya expone `GET /categories` con 4 categorías (Desayuno, Plato Fuerte, Postre, Snack).

## Goals / Non-Goals

**Goals:**
- Filtrado client-side por nombre/descripción y categoría
- Categorías cargadas desde la API via RTK Query
- Ambos filtros combinados (AND)
- Contador de resultados y estado vacío

**Non-Goals:**
- Filtrado server-side (el dataset es pequeño, client-side es suficiente)
- Debounce en la búsqueda (con 10 recetas no hay beneficio de performance)
- Persistencia de filtros en URL o estado global
- Filtros adicionales (dificultad, tiempo de preparación)

## Decisions

### 1. Filtrado client-side con estado local (useState)

Usar `useState` para `searchTerm` y `selectedCategory` dentro de `RecipeList`. Filtrar el array de recetas con `useMemo` derivado del data de RTK Query.

**Razón**: Con un dataset pequeño, no hay necesidad de ir al server. El estado local es suficiente ya que los filtros solo afectan este componente.

**Alternativa descartada**: Query params de JSON Server (`?q=` y `?category=`) — agrega latencia de red innecesaria y complejidad en el cache de RTK Query.

### 2. Agregar `getCategories` al API slice existente

Extender `recipesApi` con un nuevo endpoint `getCategories` en lugar de crear un API slice separado. Ambos endpoints comparten el mismo `baseUrl`.

**Razón**: RTK Query permite múltiples endpoints en un solo `createApi`. Un API slice por endpoint sería sobreingeniería.

### 3. Componente `RecipeFilters` separado

Crear un componente `RecipeFilters` que reciba los valores y callbacks de filtro como props. `RecipeList` mantiene el estado y orquesta el filtrado.

**Razón**: Separación de responsabilidades — `RecipeFilters` es UI pura, `RecipeList` maneja la lógica.

### 4. Input de texto + select nativo para categoría

Usar un `<input type="text">` para búsqueda y un `<select>` nativo para categorías. Sin librerías de UI adicionales.

**Razón**: Consistente con el stack actual (Tailwind sin librería de componentes). Suficiente para la funcionalidad requerida.

## Risks / Trade-offs

- **Filtrado client-side no escala** → Aceptable para workshop. Si el dataset crece significativamente, migrar a filtrado server-side.
- **Select nativo tiene limitaciones de estilo** → Suficiente para el scope actual. Se puede reemplazar con un componente custom después.
