import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Footer from "../sharePage/Footer";
import Faq from "./Faq";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Faq />
      <Footer />
    </div>
  );
};

export default Homepage;
