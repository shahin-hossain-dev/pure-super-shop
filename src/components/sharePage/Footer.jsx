"use client"
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="bg-white">
            <div className=" mx-auto max-w-screen-xl space-y-8 px-4 pt-16 pb-5 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="text-center">
                        <div>
                            <h1>logo</h1>
                        </div>

                        <p className="mt-4 text-center  text-gray-500">
                            <span>Always Here for You</span> <br />
                            <span>Call Us: 16469 (9am-9pm, Everyday)</span> <br />
                            <span>Email Us: queries@acilogistics.net</span>
                        </p>
                        {/* <p className="text-center mt-5 text-xl">Follow Us</p>
                       <div >
                        <Link ><Image width={50} height={0} alt="hh" src={'https://www.shwapno.com/_next/static/media/yt-icon.73c22c13.png'}> </Image></Link>
                       </div> */}


                    </div>
                    

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
                        <div>
                            <p className="font-medium text-gray-900">Information</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Shipping & returns </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> About us </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Terms & Condition </a>
                                </li>

                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">Customer Service</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Contact Us </a>
                                </li>




                            </ul>

                        </div>
                       

                        <div>
                            <p className="font-medium text-gray-900">
                                Pay With</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li><Image width={600} height={100} alt="payment" src={'https://d2t8nl1y0ie1km.cloudfront.net/public/payment-methods.png'}></Image></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <p className="text-xs text-center text-gray-500">&copy; 2024. Company Name. All rights reserved.</p>
            </div>


        </footer>
    );
};

export default Footer;

//  {/* faq footer  */}
//  <div>
//  <div className="lg:invisible visible space-y-4">
//      <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden" open>
//          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
//              <h2 className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>

//              <span className="relative size-5 shrink-0">
//                  <svg
//                      xmlns="http://www.w3.org/2000/svg"
//                      className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
//                      fill="none"
//                      viewBox="0 0 24 24"
//                      stroke="currentColor"
//                      strokeWidth="2"
//                  >
//                      <path
//                          strokeLinecap="round"
//                          strokeLinejoin="round"
//                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                      />
//                  </svg>

//                  <svg
//                      xmlns="http://www.w3.org/2000/svg"
//                      className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
//                      fill="none"
//                      viewBox="0 0 24 24"
//                      stroke="currentColor"
//                      strokeWidth="2"
//                  >
//                      <path
//                          strokeLinecap="round"
//                          strokeLinejoin="round"
//                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                      />
//                  </svg>
//              </span>
//          </summary>

//          <p className="mt-4 leading-relaxed text-gray-700">
//              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
//              recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
//              consequuntur distinctio corporis earum similique!
//          </p>
//      </details>

//      <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
//          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
//              <h2 className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>

//              <span className="relative size-5 shrink-0">
//                  <svg
//                      xmlns="http://www.w3.org/2000/svg"
//                      className="absolute inset-0 opacity-100 group-open:opacity-0"
//                      fill="none"
//                      viewBox="0 0 24 24"
//                      stroke="currentColor"
//                      strokeWidth="2"
//                  >
//                      <path
//                          strokeLinecap="round"
//                          strokeLinejoin="round"
//                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                      />
//                  </svg>

//                  <svg
//                      xmlns="http://www.w3.org/2000/svg"
//                      className="absolute inset-0 opacity-0 group-open:opacity-100"
//                      fill="none"
//                      viewBox="0 0 24 24"
//                      stroke="currentColor"
//                      strokeWidth="2"
//                  >
//                      <path
//                          strokeLinecap="round"
//                          strokeLinejoin="round"
//                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                      />
//                  </svg>
//              </span>
//          </summary>

//          <p className="mt-4 leading-relaxed text-gray-700">
//              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
//              recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
//              consequuntur distinctio corporis earum similique!
//          </p>
//      </details>
//  </div>
// </div>