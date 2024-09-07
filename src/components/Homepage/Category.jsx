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
      <div className="px-5 bg-slate-400 inline-block min-h-screen">
        <h2 className="mb-6">Shop with Category</h2>
        <ul className="text-[14px] space-y-2">
          {/* food */}
          <li className="space-y-2">
            <div className="flex justify-between items-center ">
              <span>
                <Link href={"/food"}>Food</Link>
              </span>
              <span onClick={() => handleDropdown("food")}>
                {
                  <IoIosArrowForward
                    className={`${
                      dropDown === "food"
                        ? "rotate-90 duration-150 "
                        : "rotate-0 duration-150"
                    } `}
                  />
                }
              </span>
            </div>
            <ul
              className={`ms-4 space-y-2 ${
                dropDown === "food" ? "block" : "hidden"
              }`}
            >
              <li>
                <Link href={"/food/fruit-vegetable"}>Fruit & Vegetable</Link>
              </li>
              <li>
                <Link href={"/food/meat-fish"}>Meat & Fish</Link>
              </li>
              <li>
                <Link href={"/food/dairy"}>Dairy</Link>
              </li>
            </ul>
          </li>
          {/* kitchen & home */}
          <li className="space-y-2">
            <div className="flex justify-between items-center ">
              <span>
                <Link href={"/home-kitchen"}>Home & Kitchen</Link>
              </span>
              <span onClick={() => handleDropdown("household")}>
                {
                  <IoIosArrowForward
                    className={`${
                      dropDown === "household"
                        ? "rotate-90 duration-150 "
                        : "rotate-0 duration-150"
                    } `}
                  />
                }
              </span>
            </div>
            <ul
              className={`ms-4 space-y-2 ${
                dropDown === "household" ? "block" : "hidden"
              }`}
            >
              <li>
                <Link href={"/home-kitchen/fruit-vegetable"}>Kitchen</Link>
              </li>
              <li>
                <Link href={"/home-kitchen/meat-fish"}>Household</Link>
              </li>
              <li>
                <Link href={"/home-kitchen/dairy"}>cleaning Items</Link>
              </li>
            </ul>
          </li>
          {/* Toy & Sports */}
          <li className="space-y-2">
            <div className="flex justify-between items-center ">
              <span>
                <Link href={"/toy-sports"}>Toy & Sports</Link>
              </span>
              <span onClick={() => handleDropdown("toySports")}>
                {
                  <IoIosArrowForward
                    className={`${
                      dropDown === "toySports"
                        ? "rotate-90 duration-150 "
                        : "rotate-0 duration-150"
                    } `}
                  />
                }
              </span>
            </div>
            <ul
              className={`ms-4 space-y-2 ${
                dropDown === "toySports" ? "block" : "hidden"
              }`}
            >
              <li>
                <Link href={"/toy-sports/toy"}>Toy</Link>
              </li>
              <li>
                <Link href={"/toy-sports/sports"}>Sports</Link>
              </li>
            </ul>
          </li>
          {/* Personal Care */}
          <li className="space-y-2">
            <div className="flex justify-between items-center ">
              <span>
                <Link href={"/personal-care"}>Personal Care</Link>
              </span>
              <span onClick={() => handleDropdown("personalCare")}>
                {
                  <IoIosArrowForward
                    className={`${
                      dropDown === "personalCare"
                        ? "rotate-90 duration-150 "
                        : "rotate-0 duration-150"
                    } `}
                  />
                }
              </span>
            </div>
            <ul
              className={`ms-4 space-y-2 ${
                dropDown === "personalCare" ? "block" : "hidden"
              }`}
            >
              <li>
                <Link href={"/personal-care/women"}>Women&apos;s Care</Link>
              </li>
              <li>
                <Link href={"/personal-care/men"}>men&apos;s Care</Link>
              </li>
            </ul>
          </li>
          {/* Baby Care */}
          <li className="space-y-2">
            <div className="flex justify-between items-center ">
              <span>
                <Link href={"/baby-care"}>Baby Care</Link>
              </span>
              <span onClick={() => handleDropdown("babyCare")}>
                {
                  <IoIosArrowForward
                    className={`${
                      dropDown === "babyCare"
                        ? "rotate-90 duration-150 "
                        : "rotate-0 duration-150"
                    } `}
                  />
                }
              </span>
            </div>
            <ul
              className={`ms-4 space-y-2 ${
                dropDown === "babyCare" ? "block" : "hidden"
              }`}
            >
              <li>
                <Link href={"/baby-care/food"}>Baby Food</Link>
              </li>
              <li>
                <Link href={"/baby-care/accessories"}>Baby Accessories</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Category;
