import React from "react";
import Banner from "./Banner";
import Footer from "../sharePage/Footer";
import CategoryTabs from "./CategoryTabs";
import Services from "./Services";
import Brands from "./Brands/Brands";
import Faq from "./Faq";
import Newsletter from "./Newsletter";


const Homepage = () => {
  return (
    <div>
      <Banner />
      <CategoryTabs />
    
      <Services />
      <Brands />
      <Faq />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Homepage;
