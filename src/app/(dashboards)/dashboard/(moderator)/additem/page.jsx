"use client"
import axios from 'axios';
import { useSession } from "next-auth/react";
const addItem = () => {

  const sessoin = useSession();
  const email = sessoin?.data?.user?.email
 
  const handleSubmit = (e) => {
    
    e.preventDefault();
    const productName = e.target.productName.value;
    const categoryName = e.target.categoryName.value;
    const discountPrice = e.target.discountPrice.value;
    const price = e.target.price.value;
    const subCategory = e.target.subCategory.value;
    const imageUrl = e.target.imageUrl.value;
    const description = e.target.description.value;
    

    const data = {productName , categoryName , price, discountPrice ,subCategory , imageUrl , description, createdBy: email}

    axios.post('http://localhost:3000/dashboard/additem/api', data)
    .then( (res) => {
      if(res.status === 200){
        alert(res.data.message);
        e.target.reset();;
      }
    })
    .catch( (error) => {
      console.log(error);
    });

    
  }
  return (
    <div className="w-full">
      <h1 className="text-center text-2xl font-bold">Add Product</h1>
      <form onSubmit={(e)=> handleSubmit(e)} className="w-full mx-auto p-4 bg-white shadow-md rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Product Name */}
          <div className="flex flex-col">
            <label htmlFor="productName" className="mb-2 text-gray-700 font-semibold">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              name='productName'
              placeholder="Enter product name"
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Category Name */}
          {/* Category Selector */}
          <div className="flex flex-col">
            <label htmlFor="categorySelector" className="mb-2 text-gray-700 font-semibold">
              Category
            </label>
            <select
            name="categoryName"
              id="categorySelector"
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option selected disabled value="personal-care">select your category</option>
              <option value="personal-care">Personal Care</option>
              <option value="toy-sports">Toy & Sports</option>
              <option value="home-kitchen">Home & Kitchen</option>
              <option value="food">Food</option>
              <option value="baby-care">Baby Care</option>
            </select>
          </div>
          

          {/* Subcategory */}
          <div className="flex flex-col">
            <label htmlFor="subCategory" className="mb-2 text-gray-700 font-semibold">
              Subcategory
            </label>
            <input
              type="text"
              name='subCategory'
              id="subCategory"
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
              id="price"
              name='price'
              placeholder="Enter price"
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Discount Price */}
          <div className="flex flex-col">
            <label htmlFor="discountPrice" className="mb-2 text-gray-700 font-semibold">
              Discount Price
            </label>
            <input
              name='discountPrice'
              type="number"
              id="discountPrice"
              placeholder="Enter discount price"
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Image URL */}
          <div className="flex flex-col">
            <label htmlFor="imageUrl" className="mb-2 text-gray-700 font-semibold">
              Image URL
            </label>
            <input
              type="url"
              name='imageUrl'
              id="imageUrl"
              placeholder="Enter image URL"
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col col-span-2">
            <label htmlFor="description" className="mb-2 text-gray-700 font-semibold">
              Description
            </label>
            <textarea
              id="description"
              name='description'
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

export default addItem;
