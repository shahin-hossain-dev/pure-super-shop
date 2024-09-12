"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

// Load ApexCharts dynamically to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Page = () => {
  // Sales chart configuration
  const [chartOptions, setChartOptions] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
  });

  const [chartSeries, setChartSeries] = useState([
    {
      name: "Sales",
      data: [30, 40, 35, 50, 49, 60],
    },
  ]);

  // Customer review chart configuration
  const [reviewChartOptions, setReviewChartOptions] = useState({
    chart: {
      id: "customer-reviews",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    stroke: {
      curve: "smooth",
    },
  });

  const [reviewChartSeries, setReviewChartSeries] = useState([
    {
      name: "Customer Reviews",
      data: [4, 3.8, 4.5, 4.2, 3.9, 4.6], // Ratings from 1 to 5 stars over six months
    },
  ]);

  // Product categories chart configuration
  const [categoryChartOptions, setCategoryChartOptions] = useState({
    chart: {
      id: "product-categories",
    },
    labels: ["Food", "Home & Kitchen", "Toy & Sports", "Personal Care", "Baby Care"],
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'],
  });

  const [categoryChartSeries, setCategoryChartSeries] = useState([120, 80, 150, 60, 90]); // Example quantities for each category

  return (
    <div className=" max-w-[1300px] mx-auto my-5">
      <h2 className=" text-3xl font-semibold">Overview</h2>
      <div className="mt-12 flex flex-col gap-12">
        {/* Sales Chart */}
        <div className="flex justify-between  items-center">
          <div>
            <h2 className=" text-xl font-normal my-3">Total Sales Preview in Previous Six Months</h2>
            <Chart
              options={chartOptions}
              series={chartSeries}
              type="bar"
              width="500"
            />
          </div>

          {/* Customer Reviews Chart */}
          <div>
            <h2 className=" text-xl font-normal my-3">Customer Reviews Over Six Months</h2>
            <Chart
              options={reviewChartOptions}
              series={reviewChartSeries}
              type="line"
              width="500"
            />
          </div>
        </div>

        {/* Product Categories Chart */}
        <div className="flex justify-center">
          <div>
            <h2 className=" text-xl font-normal my-3">Product Quantities by Category</h2>
            <Chart
              options={categoryChartOptions}
              series={categoryChartSeries}
              type="pie" // You can change this to 'bar', 'donut', etc.
              width="500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
