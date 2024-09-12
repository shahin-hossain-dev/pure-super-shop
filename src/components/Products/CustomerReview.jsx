"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CustomerReview = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const session = useSession();
  console.log(session?.data?.user?.name);
  const handleCustomerReview = async (e) => {
    e.preventDefault();
    const comment = e.target.review.value;
    const userName = session?.data?.user?.name || "Unknown";

    const review = {
      productId,
      comment,
      userName,
    };

    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/products/api/productReview`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      }
    );
    const result = await resp.json();
    if (result.status === 200) {
      setReviews([...reviews, review]);
    }
  };

  useEffect(() => {
    setLoading(true);
    const loadData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/products/api/productReview/${productId}`
      );
      const data = await res.json();
      setReviews(data);
      setLoading(false);
    };
    loadData();
  }, [productId]);

  return (
    <div className="p-4">
      {/* review display section */}
      <section>
        {loading && (
          <p className="text-center text-[#333333] font-medium">Loading...</p>
        )}
        {reviews.length < 1 && !loading && (
          <p className="p-2 border rounded-md ">No Comment Yet</p>
        )}
        {reviews.map((review) => (
          <div key={review._id} className="p-4 mb-4 bg-gray-100 rounded-md">
            <div className="flex items-center gap-2">
              <Image
                src={
                  "https://th.bing.com/th/id/OIP.GhDtxsu7-tyogDN08RZ9MgHaHa?w=770&h=770&rs=1&pid=ImgDetMain"
                }
                alt="user"
                height={50}
                width={50}
                className="rounded-full"
              />
              <h4>{review.userName}</h4>
            </div>
            <p>
              <span className="font-medium">Comment:</span> {review.comment}
            </p>
          </div>
        ))}
      </section>
      <div className="py-4 border-b"></div>
      {/* comment section */}
      <h2 className="text-xl font-medium mt-3 pl-3 text-[#333333]">
        Write a Comment
      </h2>
      <section className="bg-gray-100 lg:w-1/2 mt-8">
        <div className="mx-auto px-4 py-4 sm:px-6 lg:px-4">
          <div>
            <div className="rounded-lg bg-white p-4 shadow-lg lg:col-span-3 lg:p-6">
              <form onSubmit={handleCustomerReview} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm "
                    placeholder="Message"
                    rows="8"
                    id="message"
                    name="review"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-[#84b93e] px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Comment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerReview;
