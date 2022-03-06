import React from "react";
import setupTags from "../utils/setupTags";
import { Link } from "gatsby";
import slugify from "slugify";

export default function TagsList({ recipes = [] }) {
  const newTags = setupTags(recipes);

  return (
    <div className="tag-container">
      <h4>Recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => (
          <Link to={`/tags/${slugify(tag[0], { lower: true })}`} key={index}>
            {tag[0]} ({tag[1]})
          </Link>
        ))}
      </div>
    </div>
  );
}
