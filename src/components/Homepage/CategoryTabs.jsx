"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../../styles/styles.css";
import CategoryProducts from "./CategoryProducts";

const CategoryTabs = () => {
  const food = ["food"];
  return (
    <div className="">
      <Tabs>
        <TabList>
          <div className="flex flex-wrap gap-5 md:gap-2 ">
            <Tab>Personal Care</Tab>
            <Tab>Food</Tab>
            <Tab>Home & Kitchen</Tab>
            <Tab>Toy & Sports</Tab>
            <Tab>Baby Care</Tab>
          </div>
        </TabList>
        <TabPanel>
          <CategoryProducts title="personal-care" />
        </TabPanel>
        {/* Food */}
        <TabPanel>
          <CategoryProducts title="food" />
        </TabPanel>
        {/* On-Site Job */}
        <TabPanel>
          <CategoryProducts title="home-kitchen" />
        </TabPanel>
        <TabPanel>
          <CategoryProducts title="toy-sports" />
        </TabPanel>
        <TabPanel>
          <CategoryProducts title="baby-care" />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CategoryTabs;
