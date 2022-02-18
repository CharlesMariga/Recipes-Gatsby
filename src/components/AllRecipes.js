import React from "react";
import RecipesList from "./RecipesList";
import TagsList from "./TagsList";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allContentfulRecipe(sort: { order: ASC, fields: title }) {
      nodes {
        cookTime
        id
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
        title
        prepTime
        content {
          tags
        }
      }
    }
  }
`;

export default function AllRecipes() {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(query);

  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  );
}
