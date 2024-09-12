"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const CategoryProducts = ({ title }) => {
  // const categoryProducts = products.filter(
  //   (product) => product.categoryName === title
  // );
  const [loading, setLoading] = useState(false);
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    const getCategoryProduct = async () => {
      const products = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/products/api/get-category/${title}`
      );
      const data = await products.json();
      setCategoryProducts(data);
      setLoading(false);
    };
    getCategoryProduct();
  }, [title]);

  return (
    <div>
      {loading && (
        <h2 className="text-xl text-center text-[#333333]">Loading...</h2>
      )}

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full gap-4 min-h-[200px]">
        {categoryProducts?.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
