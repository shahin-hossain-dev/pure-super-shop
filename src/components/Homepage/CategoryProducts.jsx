"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const CategoryProducts = ({ title }) => {
  // const categoryProducts = products.filter(
  //   (product) => product.categoryName === title
  // );
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const getCategoryProduct = async () => {
      const products = await fetch(
        `http://localhost:3000/products/api/get-category/${title}`
      );
      const data = await products.json();
      setCategoryProducts(data);
    };
    getCategoryProduct();
  }, [title]);

  if (!categoryProducts) {
    <div>Loading...</div>;
  }

  return (
    <div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full gap-4">
        {categoryProducts?.map((product) => (
          <ProductCard key={product.productName} {...product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
