"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SocialSignin = () => {
    const router = useRouter();
    // const searchParams = useSearchParams();

    // const path = searchParams.get("redirect");

    // const session = useSession();

  const handleSocialLogin = (provider) => {
    const res = signIn(provider, {
      redirect: true,
      // callbackUrl: path ? path : "/",
    });
  };

  return (
    <div className="flex items-center justify-center space-x-3">
      <button
        onClick={() => handleSocialLogin("google")}
        className="text-2xl btn flex items-center justify-center text-green-400"
      >
        <FaGoogle />
      </button>

      <button
        onClick={() => handleSocialLogin("facebook")}
        className="text-2xl btn flex items-center justify-center text-green-700"
      >
        <FaFacebook />
      </button>
    </div>
  );
};

export default SocialSignin;
