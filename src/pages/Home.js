import React from "react";
import Banner from "../components/Banner.js";
import Products from "../components/Products.js";
import "./Home.css";

export default function Home() {
  return (
    <main>
      <Banner />
      <Products />
    </main>
  );
}
