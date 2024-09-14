"use client";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import Link from 'next/link'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
const ProductManagement = () => {
  const session = useSession();
  const email = session?.data?.user?.email;

 
  const { data = {}, isLoading, error , refetch } = useQuery({
    queryKey: ["productsData", email],
    queryFn: () =>
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/product-management/api/${email}`)

        .then((res) => res.data),
    enabled: !!email, 
  });


  const productsArray = data.productsData || [];


  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }


  const handleDelete = (id) =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

      axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/product-management/api/delete/${id}`)
      .then((res)=>{
          if(res.data.status === 200){
            Swal.fire({
              title: "Deleted!",
              text: "Your product has been deleted.",
              icon: "success"
            });
            refetch();
          }
      })
      .catch((error)=> {
          Swal.fire({
              title: "error!",
              text: error?.message,
              icon: "error"
            });
      })
        
      }
    });
  }

  const columns = [
    {
      name: "Product Name",
      selector: (product) => product?.productName,
      sortable: true,
    },
    {
      name: "Price",
      selector: (product) => product?.price,
      sortable: true,
    },
    {
      name: "Category Name",
      selector: (product) => product?.categoryName,
      sortable: true,
    },
    {
      name: "Discount Price",
      selector: (product) => product?.discountPrice,
      sortable: true,
    },
   
    {
      name: "Action",
      cell: (product) => (
        <Link
          href={`/dashboard/edititem/${product?._id}`}
          className="bg-gray-200 inline-block p-3 m-1 rounded-lg hover:bg-[#84b93e] hover:text-white hover:duration-300"
        >
          <FaEdit className="text-2xl" />
        </Link>
      ),
    },
    {
      name: "Action",
      cell: (product) => (
        <button
          onClick={() => handleDelete(product?._id)} 
          className="bg-gray-200 p-3 m-1 rounded-lg hover:bg-red-500 hover:text-white hover:duration-300"
        >
          <AiFillDelete className="text-2xl" />
        </button>
      ),
    },
  ];
  

  return (
    <div> 
      <h1 className="text-center text-2xl font-bold">Product Management</h1>

      <DataTable
        columns={columns}
        data={productsArray} 
        pagination
        highlightOnHover
        striped
      />
    </div>
  );
};

export default ProductManagement;
