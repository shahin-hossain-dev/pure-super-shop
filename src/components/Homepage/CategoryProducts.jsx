import { products } from "@/lib/products";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const CategoryProducts = ({ title }) => {
  const categoryProducts = products.filter(
    (product) => product.categoryName === title
  );

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
