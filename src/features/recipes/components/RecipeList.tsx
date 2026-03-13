import { useMemo, useState } from "react";
import { useGetRecipesQuery, useGetCategoriesQuery } from "../api/recipesApi";
import { RecipeCard } from "./RecipeCard";
import { RecipeFilters } from "./RecipeFilters";

export function RecipeList() {
  const { data: recipes, isLoading, error } = useGetRecipesQuery();
  const { data: categories } = useGetCategoriesQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredRecipes = useMemo(() => {
    if (!recipes) return [];
    return recipes.filter((recipe) => {
      const search = searchTerm.toLowerCase();
      const matchesSearch =
        !search ||
        recipe.name.toLowerCase().includes(search) ||
        recipe.description.toLowerCase().includes(search);
      const matchesCategory =
        !selectedCategory || recipe.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [recipes, searchTerm, selectedCategory]);

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
    <div>
      <RecipeFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={categories}
      />
      <p className="text-sm text-gray-600 mb-4">
        {filteredRecipes.length === 1
          ? "1 receta encontrada"
          : `${filteredRecipes.length} recetas encontradas`}
      </p>
      {filteredRecipes.length === 0 ? (
        <div className="flex justify-center items-center py-12">
          <p className="text-gray-500 text-lg">
            No se encontraron recetas. Intenta ajustar los filtros.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}
