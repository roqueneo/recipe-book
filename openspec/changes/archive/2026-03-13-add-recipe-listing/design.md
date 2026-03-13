## Context

Recipe Book es una app React + TypeScript con Vite, RTK Query y Tailwind CSS v4. Actualmente solo muestra un título estático. El store de Redux está configurado pero vacío. El mock server (JSON Server) expone `GET /recipes` con 10 recetas que incluyen: id, name, description, ingredients, steps, category, difficulty, prepTime e imageUrl.

## Goals / Non-Goals

**Goals:**
- Mostrar todas las recetas en un grid responsive de cards
- Usar RTK Query para data fetching con caching automático
- Mostrar estados de loading y error apropiados
- Cada card muestra: imagen, nombre, categoría, dificultad y tiempo de preparación

**Non-Goals:**
- Filtrado o búsqueda de recetas (será un cambio futuro)
- Vista de detalle de receta individual
- Paginación (10 recetas no lo requieren)
- SSR o prefetching

## Decisions

### 1. Estructura de archivos: feature-based en `src/features/recipes/`

Seguir la arquitectura definida del proyecto con dominio por feature. Todos los archivos relacionados con recetas viven juntos.

```
src/features/recipes/
  api/recipesApi.ts       — RTK Query API slice
  components/RecipeCard.tsx
  components/RecipeList.tsx
  types.ts                — interfaz Recipe
```

**Alternativa descartada**: Poner el API slice en `src/store/` — rompe la organización por dominio.

### 2. RTK Query con `createApi` para data fetching

Usar `createApi` de RTK Query con un solo endpoint `getRecipes`. El baseUrl apunta a `http://localhost:3001`.

**Razón**: Es el patrón establecido del proyecto y provee caching, estados de loading/error, y refetching automático sin boilerplate.

### 3. Grid responsive con Tailwind CSS v4

Usar CSS Grid con clases de Tailwind: 1 columna en mobile, 2 en tablet, 3 en desktop. Las cards usan utilidades de Tailwind directamente (sin archivo CSS separado).

### 4. Tipo Recipe definido localmente

Definir la interfaz `Recipe` en `types.ts` dentro del feature, derivada de la estructura del mock server.

## Risks / Trade-offs

- **baseUrl hardcoded a localhost:3001** → Aceptable para workshop. En producción se usaría variable de entorno.
- **Sin manejo de empty state** → Con 10 recetas en el mock, no es un caso real. Se puede agregar después si se añade filtrado.
