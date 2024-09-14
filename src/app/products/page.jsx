"use client";
import ProductCard from "@/components/ProductCard/ProductCard";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("asc"); // "asc" or "desc"
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const ITEMS_PER_PAGE = 12;

  // Fetch products based on current filters
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/products/api/get-all?page=${currentPage}&search=${searchQuery}&category=${category}&sort=${sort}`
        );
        const data = res.data; // Axios already returns data directly
        //console.log(data);
        setProducts(data.products);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [currentPage, searchQuery, category, sort]);

  // Handle the search form submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.search.value);
  };

  return (
    <div className="mt-24">
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
          <marquee>Welcome to our exclusive product collection!</marquee>
        </p>
      </div>

      {/* <div className="flex justify-center items-center mb-8 space-x-4">
        <div className="w-10 h-10 bg-blue-500 rounded-full animate-bounce delay-300"></div>
        <p className="text-xl font-semibold text-gray-800 animate-pulse">
          Special Discounts Available!
        </p>
        <div className="w-10 h-10 bg-blue-500 rounded-full animate-bounce delay-300"></div>
      </div> */}

      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        {/* Search Form */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center justify-center gap-5"
        >
          <input
            name="search"
            className="py-3 px-5 border border-cyan-300 outline-none"
            type="text"
            placeholder="Search by Product Name"
          />
          <button
            type="submit"
            className="btn rounded bg-cyan-500 border-none text-white text-2xl hover:bg-cyan-800 p-2"
          >
            <GrSearch />
          </button>
        </form>

        {/* Filter by Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="py-3 px-5 border border-cyan-300 outline-none"
        >
          <option value="">All Categories</option>
          <option value="baby-care">Baby Care</option>
          <option value="personal-care">Personal Care</option>
          <option value="toy-sports">Toy Sports</option>
          <option value="food">Food</option>
          <option value="home-kitchen">Home Kitchen</option>

          {/* Add more categories as needed */}
        </select>

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="py-3 px-5 border border-cyan-300 outline-none"
        >
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`py-2 px-4 border ${
              currentPage === index + 1 ? "bg-cyan-500 text-white" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Page;
