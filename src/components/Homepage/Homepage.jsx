import React from "react";
import Banner from "./Banner";
import Footer from "../sharePage/Footer";
import CategoryTabs from "./CategoryTabs";
import Services from "./Services";
import Brands from "./Brands/Brands";
import Faq from "./Faq";


const Homepage = () => {
  return (
    <div>
      <Banner />
      <CategoryTabs />
      <Services />
      <Brands />
      <Faq />
      <Footer />
    </div>
  );
};

export default Homepage;
