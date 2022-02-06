import React from "react";

export default function Footer() {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>Simply Recipes</span> built with{" "}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </p>
    </footer>
  );
}
