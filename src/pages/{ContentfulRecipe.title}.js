import React from "react";
import { graphql } from "gatsby";

export default function RecipeTemplate(props) {
  console.log(props);

  return (
    <div>
      <h2>{props.params.title}</h2>
    </div>
  );
}

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      description {
        description
      }
      servings
      prepTime
      content {
        ingredients
        instructions
        tags
        tools
      }
    }
  }
`;
