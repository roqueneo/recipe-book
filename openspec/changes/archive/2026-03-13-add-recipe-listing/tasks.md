## 1. Types and API Layer

- [x] 1.1 Create `src/features/recipes/types.ts` with the `Recipe` interface matching the mock server schema
- [x] 1.2 Create `src/features/recipes/api/recipesApi.ts` with RTK Query `createApi` and `getRecipes` endpoint
- [x] 1.3 Update `src/store/store.ts` to add the recipes API reducer and middleware

## 2. UI Components

- [x] 2.1 Create `src/features/recipes/components/RecipeCard.tsx` displaying image, name, category, difficulty, and prep time
- [x] 2.2 Create `src/features/recipes/components/RecipeList.tsx` with responsive grid, loading state, and error state

## 3. Page Integration

- [x] 3.1 Update `src/App.tsx` to render `RecipeList` as the main content
