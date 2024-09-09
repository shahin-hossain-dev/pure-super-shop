import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Footer from "../sharePage/Footer";
import CategoryTabs from "./CategoryTabs";
import Services from "./Services";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <CategoryTabs />
      {/* <Category /> */}
      <Services />
      <Footer />
    </div>
  );
};

export default Homepage;
