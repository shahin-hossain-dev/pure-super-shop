import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Footer from "../sharePage/Footer";
import CategoryTabs from "./CategoryTabs";
import Brands from "./Brands/Brands";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <CategoryTabs />
      <Brands/>
      
    </div>
  );
};

export default Homepage;
