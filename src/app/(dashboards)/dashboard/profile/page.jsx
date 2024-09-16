"use client";
import { useSession, signOut } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Link from "next/link";
import Image from "next/image";

const Profile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    name: session?.user?.name || "",
    email: session?.user?.email || "", // Email will not be editable
    image: session?.user?.image || "",
    password: "",
  });

  useEffect(() => {
    if (session?.user) {
      setUserData({
        ...userData,
        name: session.user.name,
        email: session.user.email,
        image: session?.user?.image || "",
      });
    }
  }, [session, userData]);

  //console.log(session)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, image, password } = userData;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/profile/api`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            "x-session-email": session.user.email, // Pass the email from session
          },
          body: JSON.stringify({ name, image, password }),
        }
      );

      const result = await res.json();
      if (res.ok) {
        setEditMode(false);
        router.push("/login");
        signOut(); // Sign out to refresh the session with updated data
        Swal.fire({
          icon: "success",
          text: "User Updated Successfully!",
        });
      } else {
        alert(result.message || "Error updating user");
      }
    } catch (error) {
      console.error("Error updating user", error);
      alert("Error updating user. Please try again.");
    }
  };

  //console.log('hello', userData.image)

  return (
    <div className="container mx-auto mt-20 p-6">
      {status === "authenticated" ? (
        <div>
          <div className="text-center mb-6">
            <Image
              height={36}
              width={36}
              className="h-36 w-36 rounded-full mx-auto"
              src={userData.image || "https://i.ibb.co/sjymvr8/Capture4.png"}
              alt="User profile"
            />
            <h1 className="text-2xl font-bold mt-4">
              {userData.name || "User Name"}
            </h1>
            <p className="text-gray-600">
              {userData.email || "user@example.com"}
            </p>
            <button
              className="px-4 py-2 bg-[#3e84b9] text-white rounded hover:bg-blue-600"
              onClick={() => setEditMode(!editMode)}
            >
              {editMode ? "Cancel" : "Edit Profile"}
            </button>
          </div>

          {editMode && (
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label>Profile image URL</label>
                <input
                  type="text"
                  name="image"
                  value={userData.image}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label>New Password</label>
                <input
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <button
                type="submit"
                className="px-4 mt-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Save Changes
              </button>

              <button
                type="button"
                className="px-4 py-2 ml-2 bg-[#3e84b9] text-white rounded hover:bg-blue-600"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </button>
            </form>
          )}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-40">
          <div className="bg-[#84b93e] text-center p-4 mb-8 rounded-lg shadow-md">
            <p className="text-xl font-semibold text-gray-800">
              <marquee>Please Login!</marquee>
            </p>
          </div>
          <Link
            className="px-4 py-2 bg-[#3e84b9] text-white rounded hover:bg-blue-600"
            href="/login"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Profile;
