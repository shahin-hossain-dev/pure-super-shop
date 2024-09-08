"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
const Category = () => {
  const [categoryShow, setCategoryShow] = useState(false);
  const pathName = usePathname();

  return (
    <section>
      <button
        onClick={() => setCategoryShow(!categoryShow)}
        className="lg:hidden absolute mb-5 text-2xl border border-[#84b93e] rounded-sm text-[#84b93e] p-2"
      >
        <FaBarsStaggered />
      </button>
      <div
        className={`px-5 border border-r-[#84b93e] inline-block min-h-screen mt-10 lg:mt-0 bg-white ${
          categoryShow
            ? "translate-x-0 duration-200"
            : "-translate-x-full lg:translate-x-0 duration-200"
        }`}
      >
        <h2 className="mb-6 text-xl text-[#84b93e] font-medium">
          Shop with Category
        </h2>
        <ul className="text-[14px] space-y-2">
          {/* food */}
          <li className="space-y-2">
            <div>
              <Link
                className={`${
                  pathName === "/food" && "text-[#84b93e] font-bold"
                }`}
                href={"/food"}
              >
                <div className="flex justify-between items-center ">
                  <span>Food</span>
                  <span>
                    {
                      <IoIosArrowForward
                        className={`${
                          pathName?.split("/")?.includes("food")
                            ? "rotate-90 duration-150"
                            : "rotate-0 duration-150"
                        } `}
                      />
                    }
                  </span>
                </div>
              </Link>
            </div>
            <ul
              className={`ms-4 space-y-2  ${
                pathName?.split("/")?.includes("food") ? "block" : "hidden"
              }`}
            >
              <li>
                <Link
                  className={`${
                    pathName === "/food/fruit-vegetable" &&
                    "text-[#84b93e] font-bold"
                  }`}
                  href={"/food/fruit-vegetable"}
                >
                  Fruit & Vegetable
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathName === "/food/meat-fish" && "text-[#84b93e] font-bold"
                  }`}
                  href={"/food/meat-fish"}
                >
                  Meat & Fish
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathName === "/food/dairy" && "text-[#84b93e] font-bold"
                  }`}
                  href={"/food/dairy"}
                >
                  Dairy
                </Link>
              </li>
            </ul>
          </li>
          {/* kitchen & home */}
          <li className="space-y-2">
            <div>
              <Link
                className={`${
                  pathName === "/home-kitchen" && "text-[#84b93e] font-bold"
                }`}
                href={"/home-kitchen"}
              >
                <div className="flex justify-between items-center ">
                  <span>Home & Kitchen</span>
                  <span>
                    {
                      <IoIosArrowForward
                        className={`${
                          pathName?.split("/")?.includes("home-kitchen")
                            ? "rotate-90 duration-150"
                            : "rotate-0 duration-150"
                        } `}
                      />
                    }
                  </span>
                </div>
              </Link>
            </div>
            <ul
              className={`ms-4 space-y-2  ${
                pathName?.split("/")?.includes("home-kitchen")
                  ? "block"
                  : "hidden"
              }`}
            >
              <li>
                <Link
                  className={`${
                    pathName === "/home-kitchen/household" &&
                    "text-[#84b93e] font-bold"
                  }`}
                  href={"/home-kitchen/household"}
                >
                  Household
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathName === "/home-kitchen/kitchen" &&
                    "text-[#84b93e] font-bold"
                  }`}
                  href={"/home-kitchen/kitchen"}
                >
                  Kitchen
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathName === "/home-kitchen/cleaning-items" &&
                    "text-[#84b93e] font-bold"
                  }`}
                  href={"/home-kitchen/cleaning-items"}
                >
                  Cleaning Items
                </Link>
              </li>
            </ul>
          </li>
          {/*  Toy & Sports */}
          <li className="space-y-2">
            <div>
              <Link
                className={`${
                  pathName === "/toy-sports" && "text-[#84b93e] font-bold"
                }`}
                href={"/toy-sports"}
              >
                <div className="flex justify-between items-center ">
                  <span>Toy & Sports</span>
                  <span>
                    {
                      <IoIosArrowForward
                        className={`${
                          pathName?.split("/")?.includes("toy-sports")
                            ? "rotate-90 duration-150"
                            : "rotate-0 duration-150"
                        } `}
                      />
                    }
                  </span>
                </div>
              </Link>
            </div>
            <ul
              className={`ms-4 space-y-2  ${
                pathName?.split("/")?.includes("toy-sports")
                  ? "block"
                  : "hidden"
              }`}
            >
              <li>
                <Link
                  className={`${
                    pathName === "/toy-sports/toy" && "text-[#84b93e] font-bold"
                  }`}
                  href={"/toy-sports/toy"}
                >
                  Toy
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathName === "/toy-sports/sports" &&
                    "text-[#84b93e] font-bold"
                  }`}
                  href={"/toy-sports/sports"}
                >
                  Sports
                </Link>
              </li>
            </ul>
          </li>
          {/*  Personal Care*/}
          <li className="space-y-2">
            <div>
              <Link
                className={`${
                  pathName === "/personal-care" && "text-[#84b93e] font-bold"
                }`}
                href={"/personal-care"}
              >
                <div className="flex justify-between items-center ">
                  <span>Personal Care</span>
                  <span>
                    {
                      <IoIosArrowForward
                        className={`${
                          pathName?.split("/")?.includes("personal-care")
                            ? "rotate-90 duration-150"
                            : "rotate-0 duration-150"
                        } `}
                      />
                    }
                  </span>
                </div>
              </Link>
            </div>
            <ul
              className={`ms-4 space-y-2  ${
                pathName?.split("/")?.includes("personal-care")
                  ? "block"
                  : "hidden"
              }`}
            >
              <li>
                <Link
                  className={`${
                    pathName === "/personal-care/women" &&
                    "text-[#84b93e] font-bold"
                  }`}
                  href={"/personal-care/women"}
                >
                  Women&apos;s Care
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathName === "/personal-care/men" &&
                    "text-[#84b93e] font-bold"
                  }`}
                  href={"/personal-care/men"}
                >
                  Men&apos;s Care
                </Link>
              </li>
            </ul>
          </li>
          {/* Baby Care */}
          <li className="space-y-2">
            <div>
              <Link
                className={`${
                  pathName === "/baby-care" && "text-[#84b93e] font-bold"
                }`}
                href={"/baby-care"}
              >
                <div className="flex justify-between items-center ">
                  <span>Baby Care</span>
                  <span>
                    {
                      <IoIosArrowForward
                        className={`${
                          pathName?.split("/")?.includes("baby-care")
                            ? "rotate-90 duration-150"
                            : "rotate-0 duration-150"
                        } `}
                      />
                    }
                  </span>
                </div>
              </Link>
            </div>
            <ul
              className={`ms-4 space-y-2  ${
                pathName?.split("/")?.includes("baby-care") ? "block" : "hidden"
              }`}
            >
              <li>
                <Link
                  className={`${
                    pathName === "/baby-care/baby-food" &&
                    "text-[#84b93e] font-bold"
                  }`}
                  href={"/baby-care/baby-food"}
                >
                  Baby Food
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathName === "/baby-care/accessories" &&
                    "text-[#84b93e] font-bold"
                  }`}
                  href={"/baby-care/baby-accessories"}
                >
                  Baby Accessories
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Category;
