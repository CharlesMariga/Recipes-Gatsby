import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs";
import Layout from "../components/Layout";
import slugify from "slugify";
import Seo from "../components/SEO";

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

  const { ingredients, instructions, tags, tools } = content;
  const pathToImage = getImage(image);

  return (
    <Layout>
      <Seo title={title} description={description} />
      <main className="page">
        <div className="recipe-page">{/* hero */}</div>
        <section className="recipe-hero">
          <GatsbyImage image={pathToImage} alt={title} className="about-img" />
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
                <BsClockHistory />
                <h5>cook time</h5>
                <p>{cookTime} min.</p>
              </article>
              <article>
                <BsPeople />
                <h5>servings</h5>
                <p>{servings}</p>
              </article>
            </div>
            <p className="recipe-tags">
              Tags :{" "}
              {tags.map((tag, index) => (
                <Link to={`/tags/${slugify(tag, { lower: true })}`} key={index}>
                  {tag}
                </Link>
              ))}
            </p>
          </article>
        </section>
        {/* rest of the content */}
        <section className="recipe-content">
          <article>
            <h4>Instructions</h4>
            {instructions.map((item, index) => (
              <div key={index} className="single-instruction">
                <header>
                  <p>Step {index + 1}</p>
                  <div></div>
                </header>
                <p>{item}</p>
              </div>
            ))}
          </article>
          <article className="second-column">
            <div>
              <h4>ingredeints</h4>
              {ingredients.map((item, index) => (
                <p key={index} className="single-ingredient">
                  {item}
                </p>
              ))}
            </div>
            <div>
              <h4>tools</h4>
              {tools.map((item, index) => (
                <p key={index} className="single-tool">
                  {item}
                </p>
              ))}
            </div>
          </article>
        </section>
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
