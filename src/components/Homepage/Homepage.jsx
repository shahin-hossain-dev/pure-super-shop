import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Footer from "../sharePage/Footer";
import CategoryTabs from "./CategoryTabs";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <CategoryTabs />
      {/* <Category /> */}
      <Footer />
    </div>
  );
};

export default Homepage;
