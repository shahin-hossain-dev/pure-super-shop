"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

const Payments = () => {
  const {
    isPending,
    isError,
    data: payments,
    error,
    refetch,
  } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const payments = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/payments/api/all-payments`
      );
      return payments.data;
    },
  });
  console.log(payments);
  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  //   handle delete
  const handlePaymentDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/payments/api/delete/${id}`
          )
          .then((res) => {
            console.log(res);
            if (res.data.status === 200) {
              Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
                icon: "success",
              });
              refetch();
            }
          })
          .catch((error) => {
            Swal.fire({
              title: "error!",
              text: error?.message,
              icon: "error",
            });
          });
      }
    });
  };

  const columns = [
    { name: "Payment ID", selector: (row) => row.paymentId },
    {
      name: "Products",
      selector: (row) =>
        row.products.map((pd, idx) => (
          <p key={idx}>
            {pd.productName}, {pd.quantity}
          </p>
        )),
    },
    {
      name: "Customer Email",
      selector: (row) => (
        <span title={row.customerEmail}>{row.customerEmail}</span>
      ),
    },
    {
      name: "Amount",
      selector: (row) => <span>$ {row.amount}</span>,
    },
    {
      name: "Address",
      selector: (row) => row.billingAddress.city,
    },

    {
      name: "Date",
      selector: (row) => row.paymentDate.slice(0, 10),
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => (
        <span
          className={
            (row.status === "Completed" && "text-green-600") ||
            (row.status === "Pending" && "text-yellow-600") ||
            (row.status === "Failed" && "text-red-600")
          }
        >
          {row.status}
        </span>
      ),
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="flex gap-2">
          <button
            disabled={row.status === "Completed" ? true : false}
            onClick={() => handlePaymentDelete(row.paymentId)}
            className={`font-medium ${
              row.status === "Completed"
                ? "text-gray-600 bg-gray-100 px-2 py-1 rounded-lg"
                : "text-red-600 bg-red-100 py-1 px-2 rounded-lg"
            }`}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <h2 className="text-2xl  font-medium mt-10">Payment History</h2>
      <div className="mt-5 border">
        <DataTable columns={columns} data={payments} pagination />
      </div>
    </div>
  );
};

export default Payments;
