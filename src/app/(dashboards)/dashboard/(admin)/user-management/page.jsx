"use client"
import { AiFillDelete } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import DataTable from "react-data-table-component";




const UserManagement = () => {

    const { data = {}, isLoading, error , refetch } = useQuery({
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
        return <div>Loading...</div>;
      }

      const handleDelete = (id) => {

      }
      const handleModerator = (id) => {

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
          cell: (user) => ( user?.role !== "moderator" ?
            <button
            onClick={(user) => handleModerator(user?._id)} 
              className="bg-gray-200  p-3 m-1 rounded-lg hover:bg-[#84b93e] hover:text-white hover:duration-300"
            >
             Make Moderator
            </button> : "Moderator"
          ),
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