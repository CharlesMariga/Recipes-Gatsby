import React from "react";
import RecipesList from "./RecipesList";
import TagsList from "./TagsList";

export default function AllRecipes() {
  return (
    <div>
      <h4>All recipes</h4>
      <TagsList />
      <RecipesList />
    </div>
  );
}
