import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import Seo from "../components/SEO";

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <Seo title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              pariatur? Natus voluptates commodi a minima.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person pouring salt in bowl"
            className="about-img"
            placeholder="tracedSVG"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look At This Awesomesouce</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipe(filter: { featured: { eq: true } }) {
      nodes {
        cookTime
        id
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
        title
        prepTime
      }
      totalCount
    }
  }
`;

export default About;
