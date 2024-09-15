"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Image from 'next/image'
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
      {loading && 
          <div className="flex justify-center items-center"><Image src="/assets/Banner_Image/loading.gif" alt="loading" width="400" height="400"></Image></div>
      }

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full gap-4 min-h-[200px]">
        {categoryProducts?.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
