"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Category = () => {
  const [dropDown, setDropdown] = useState("");

  const handleDropdown = (category) => {
    if (category === "food") {
      setDropdown("food");
    } else if (category === "household") {
      setDropdown("household");
    } else if (category === "toySports") {
      setDropdown("toySports");
    } else if (category === "personalCare") {
      setDropdown("personalCare");
    } else if (category === "babyCare") {
      setDropdown("babyCare");
    }
  };
  return (
    <section>
      <div></div>
    </section>
  );
};

export default Category;
