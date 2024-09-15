"use client"
import { AiFillDelete } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import DataTable from "react-data-table-component";
import Image from 'next/image'
import Swal from "sweetalert2";


const UserManagement = () => {

    const { data = [], isLoading, error , refetch } = useQuery({
        queryKey: ["usersData"],
        queryFn: () =>
          axios
            .get(`${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/user-management/api`)
            .then((res) => res.data),
    
      });

    
      if (error) {
        return <div>An error occurred: {error.message}</div>;
      }
    
      if (isLoading) {
        return <div className="h-screen flex justify-center items-center -mt-10"><Image src="/assets/Banner_Image/loading.gif" alt="loading" width="400" height="400"></Image></div>;
      }

      const handleDelete = (id) => {
    
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
    
          axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/user-management/api/${id}`)
          .then((res)=>{
              if(res.data.status === 200){
                Swal.fire({
                  title: "Deleted!",
                  text: "User has been deleted.",
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
      const handleModerator = (id) => {
        axios.patch(`${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/user-management/api/${id}`)
        .then((res)=>{
            if(res?.status === 200){
              refetch()
              Swal.fire({
                title: "Updated!",
                text: "User role has been updated successfully.",
                icon: "success"
            });
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

    
    const columns = [
        {
          name: "User Name",
          selector: (user) => user?.name,
          sortable: true,
        },
        {
          name: "User Email",
          selector: (user) => user?.email,
          sortable: true,
        },
        {
          name: "Action",
          cell: (user) =>
            user?.role !== "moderator" ?
            <button
            onClick={() => handleModerator(user?._id)} 
              className="bg-gray-200  p-3 m-1 rounded-lg hover:bg-[#84b93e] hover:text-white hover:duration-300"
            >
             Make Moderator
            </button> : <p className="text-center">Moderator</p>
        },
        
        {
          name: "Action",
          cell: (user) => (
            <button
              onClick={() => handleDelete(user?._id)} 
              className="bg-gray-200 p-3 m-1 rounded-lg hover:bg-red-500 hover:text-white hover:duration-300"
            >
              <AiFillDelete className="text-2xl" />
            </button>
          ),
        },
        
      ];
    
    return (
        <div> 
      <h1 className="text-center text-2xl font-bold">User Management</h1>
      <DataTable
        columns={columns}
        data={data} 
        pagination
        highlightOnHover
        striped
      />
     
    </div>
    );
};

export default UserManagement;