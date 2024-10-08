"use client";
import Image from "next/image";

import { FaFacebook } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";


const Footer = () => {
  const pathName = usePathname();
  if (pathName.includes("dashboard")) return;
  return (
    <footer
      style={{
        backgroundImage:
          "url(https://t4.ftcdn.net/jpg/06/78/89/43/360_F_678894344_bEwRD1UYjV7atSippMLsvA6IRguy2Yok.jpg)",
      }}
      className="bg-base-200 bg-no-repeat mt-5 bg-cover"
    >
      <div className="max-w-[1440px] w-[95%] md:w-11/12 mx-auto py-20 px-3 lg:px-0">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="text-center">
            <div>
              <Link className="text-2xl font-bold text-[#3e84b9]" href="/">
                Pure<span className="text-[#84b93e] font-bold">Super</span>
              </Link>
            </div>
            <p className="mt-4 text-center  text-gray-500">
              <span>Always Here for You</span> <br />
              <span>Call Us: 16469 (9am-9pm, Everyday)</span> <br />
              <span>Email Us: queries@acilogistics.net</span>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <div>
              <p className="font-medium text-gray-900">Information</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Shipping & returns{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    About us{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Terms & Condition{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Customer Service</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Contact Us{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Pay With</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Image
                    width={600}
                    height={100}
                    alt="payment"
                    src={
                      "https://d2t8nl1y0ie1km.cloudfront.net/public/payment-methods.png"
                    }
                  ></Image>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-xs text-center text-gray-500">
          &copy; 2024. Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
