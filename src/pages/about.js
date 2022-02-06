import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function About() {
  return (
    <Layout>
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
      </main>
    </Layout>
  );
}
