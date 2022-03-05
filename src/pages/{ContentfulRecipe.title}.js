import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs";
import Layout from "../components/Layout";

export default function RecipeTemplate({ data }) {
  const {
    title,
    cookTime,
    content,
    description: { description },
    servings,
    prepTime,
    image,
  } = data.contentfulRecipe;

  const { ingredeints, instructions, tags, tools } = content;
  const pathToImage = getImage(image);

  return (
    <Layout>
      <main className="page">
        <div className="recipe-page">{/* hero */}</div>
        <section className="recipe-hero">
          <GatsbyImage image={pathToImage} alt={title} class="about-img" />
          <article className="recipe-info">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="recipe-icons">
              <article>
                <BsClock />
                <h5>prep time</h5>
                <p>{prepTime} min.</p>
              </article>
              <article>
                <BsPeople />
                <h5>servings</h5>
                <p>{servings}.</p>
              </article>
            </div>
            <p className="recipe-tags">
              Tags :{" "}
              {tags.map((tag, index) => (
                <Link to={`/${tag}`} key={index}>
                  {tag}
                </Link>
              ))}
            </p>
          </article>
        </section>
        {/* rest of the content */}
        <section className="recipe-content"></section>
      </main>
    </Layout>
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
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`;
