import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";

const contact = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              tenetur quasi praesentium illum distinctio repudiandae quibusdam
              libero!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              molestias dolorem ea expedita incidunt quasi praesentium animi.
              Odit.
            </p>
          </article>
          <article>
            <form
              action="https://formspree.io/f/xayvjlwg"
              className="form contac-form"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
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
  query MyQuery {
    allContentfulRecipe {
      nodes {
        cookTime
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        title
        prepTime
      }
      totalCount
    }
  }
`;

export default contact;
