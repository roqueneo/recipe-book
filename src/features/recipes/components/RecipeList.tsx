import { useGetRecipesQuery } from "../api/recipesApi";
import { RecipeCard } from "./RecipeCard";

export function RecipeList() {
  const { data: recipes, isLoading, error } = useGetRecipesQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <p className="text-gray-500 text-lg">Cargando recetas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-12">
        <p className="text-red-500 text-lg">
          Error al cargar las recetas. Verifica que el servidor esté corriendo.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes?.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
