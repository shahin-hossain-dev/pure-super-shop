"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const EditItem = ({ params }) => {
  const router = useRouter();
  const { id } = params;

  const [product, setProduct] = useState({
    productName: "",
    categoryName: "",
    discountPrice: "",
    price: "",
    subCategory: "",
    imageUrl: "",
    description: "",
  });

  const {
    productName,
    categoryName,
    discountPrice,
    price,
    subCategory,
    imageUrl,
    description,
  } = product;

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/edititem/api/${id}`)
      .then((res) => {
        setProduct(res?.data?.product);
      })
      .catch((error) => {
        return NextResponse.json({ error });
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      productName: e.target.productName.value,
      categoryName: e.target.categoryName.value,
      discountPrice: e.target.discountPrice.value,
      price: e.target.price.value,
      subCategory: e.target.subCategory.value,
      imageUrl: e.target.imageUrl.value,
      description: e.target.description.value,
    };

    axios
      .put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/edititem/api/${id}`,
        data
      )
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            title: "Updated!",
            text: "Your product has been updated successfully.",
            icon: "success",
          });
          router.push("/dashboard/product-management");
          e.target.reset();
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error?.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="w-full">
      <h1 className="text-center text-2xl font-bold">Edit Product</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-full mx-auto p-4 bg-white shadow-md rounded-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Product Name */}
          <div className="flex flex-col">
            <label
              htmlFor="productName"
              className="mb-2 text-gray-700 font-semibold"
            >
              Product Name
            </label>
            <input
              type="text"
              required
              id="productName"
              name="productName"
              defaultValue={productName}
              placeholder="Enter product name"
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Category Selector */}
          <div className="flex flex-col">
            <label
              htmlFor="categorySelector"
              className="mb-2 text-gray-700 font-semibold"
            >
              Category
            </label>
            <select
              name="categoryName"
              required
              id="categorySelector"
              defaultValue={categoryName}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option disabled value="">
                Select your category
              </option>
              <option value="personal-care">Personal Care</option>
              <option value="toy-sports">Toy & Sports</option>
              <option value="home-kitchen">Home & Kitchen</option>
              <option value="food">Food</option>
              <option value="baby-care">Baby Care</option>
            </select>
          </div>

          {/* Subcategory */}
          <div className="flex flex-col">
            <label
              htmlFor="subCategory"
              className="mb-2 text-gray-700 font-semibold"
            >
              Subcategory
            </label>
            <input
              type="text"
              required
              name="subCategory"
              id="subCategory"
              defaultValue={subCategory}
              placeholder="Enter subcategory"
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col">
            <label htmlFor="price" className="mb-2 text-gray-700 font-semibold">
              Price
            </label>
            <input
              type="number"
              required
              id="price"
              name="price"
              defaultValue={price}
              placeholder="Enter price"
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Discount Price */}
          <div className="flex flex-col">
            <label
              htmlFor="discountPrice"
              className="mb-2 text-gray-700 font-semibold"
            >
              Discount Price
            </label>
            <input
              name="discountPrice"
              type="number"
              required
              id="discountPrice"
              defaultValue={discountPrice}
              placeholder="Enter discount price"
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Image URL */}
          <div className="flex flex-col">
            <label
              htmlFor="imageUrl"
              className="mb-2 text-gray-700 font-semibold"
            >
              Image URL
            </label>
            <input
              type="url"
              name="imageUrl"
              required
              id="imageUrl"
              defaultValue={imageUrl}
              placeholder="Enter image URL"
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Description */}

          <div className="flex flex-col md:col-span-2">
            <label htmlFor="description" className="mb-2 text-gray-700 font-semibold">

              Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              defaultValue={description}
              placeholder="Enter Description"
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center md:col-span-2">
            <button
              type="submit"
              className="mt-4 bg-[#84b93e] text-white py-2 px-10 rounded-md transition-colors duration-200"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditItem;
