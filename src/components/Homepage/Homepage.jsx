import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Footer from "../sharePage/Footer";
import CategoryTabs from "./CategoryTabs";
import Services from "./Services";
import Brands from "./Brands/Brands";


const Homepage = () => {
  return (
    <div>
      <Banner />
      <CategoryTabs />
      <Services />
      <Brands/>
      <Footer />
    </div>
  );
};

export default Homepage;
