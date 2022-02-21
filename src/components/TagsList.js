import React from "react";
import setupRecipes from "../utils/setupTags";
import { graphql, Link } from "gatsby";

export default function TagsList({ recipes = [] }) {
  const newTags = setupRecipes(recipes);

  return (
    <div className="tag-container">
      <h4>Recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => (
          <Link to={`/${tag[0]}`} key={index}>
            {tag[0]} ({tag[1]})
          </Link>
        ))}
      </div>
    </div>
  );
}
