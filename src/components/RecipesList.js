import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function RecipesList({ recipes = [] }) {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => (
        <Link key={recipe.id} to={`/${recipe.title}`} className="recipe">
          <GatsbyImage
            image={getImage(recipe.image)}
            className="recipe-img"
            alt={recipe.title}
          />
          <h5>{recipe.title}</h5>
          <p>
            Prep: {recipe.prepTime} min | Cook: {recipe.cookTime} min
          </p>
        </Link>
      ))}
    </div>
  );
}
