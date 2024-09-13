"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@/components/ProductCard/Card";
import Image from "next/image";
import ProductCard from "@/components/ProductCard/ProductCard";

const page = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/products/api/get-all`
        );
        const allProducts = response.data;

        // Pagination setup
        setTotalPages(Math.ceil(allProducts.length / itemsPerPage));
        const paginatedProducts = allProducts.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        );
        setProducts(paginatedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [currentPage]);

  // Function to handle page changes
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container mx-auto p-6 mt-12">
      {/* Banner */}
      <div className="mb-8">
        <Image
          src="https://i.ibb.co.com/JrJQJq7/banner2.png"
          alt="Cool Banner"
          width={1200}
          height={400}
          className="w-full rounded-lg shadow-md"
          priority // This ensures the image is loaded quickly
        />
      </div>

      <div className="bg-yellow-300 text-center p-4 mb-8 rounded-lg shadow-md">
        <p className="text-xl font-semibold text-gray-800">
          Welcome to our exclusive product collection!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          // <Card key={product._id} product={product}></Card>
          <ProductCard key={product.productName} {...product}></ProductCard>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg mx-2 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg mx-2 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default page;