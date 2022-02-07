import React from "react";
import AllRecipes from "../components/AllRecipes";
import Layout from "../components/Layout";

export default function Recipes() {
  return (
    <Layout>
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  );
}
