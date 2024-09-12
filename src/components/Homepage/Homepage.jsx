import Banner from "./Banner";
import BigSell from "./BigSell";
import Brands from "./Brands/Brands";
import CategoryTabs from "./CategoryTabs";
import Faq from "./Faq";
import Newsletter from "./Newsletter";
import Services from "./Services";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <CategoryTabs />
      <Services />
      <Brands />
      <BigSell></BigSell>
      <Faq />
      <Newsletter />
    </div>
  );
};

export default Homepage;
