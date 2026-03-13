## Why

Con 10 recetas el listado es manejable, pero a medida que crezca el contenido los usuarios necesitan poder encontrar recetas rápidamente. Agregar búsqueda por texto y filtro por categoría es la forma más natural de navegar un catálogo de recetas.

## What Changes

- Agregar un campo de búsqueda que filtre recetas por nombre y descripción (case-insensitive)
- Agregar un dropdown de categorías poblado desde `GET /categories` via RTK Query
- Ambos filtros funcionan en combinación (AND)
- Mostrar contador de resultados ("X recetas encontradas")
- Mostrar estado vacío cuando no hay resultados que coincidan con los filtros

## Capabilities

### New Capabilities
- `recipe-search-filter`: Búsqueda por texto y filtrado por categoría del listado de recetas, incluyendo contador de resultados y estado vacío

### Modified Capabilities
- `recipe-listing`: Agregar soporte para estado vacío cuando los filtros no producen resultados

## Impact

- `src/features/recipes/api/recipesApi.ts`: Agregar endpoint `getCategories` para `GET /categories`
- `src/features/recipes/types.ts`: Agregar interfaz `Category`
- `src/features/recipes/components/`: Nuevos componentes de búsqueda y filtro
- `src/features/recipes/components/RecipeList.tsx`: Integrar filtros y estado vacío
