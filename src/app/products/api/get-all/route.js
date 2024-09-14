import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

// Handle GET requests
export const GET = async (req) => {
  const db = await connectDB();
  const collection = db.collection("products");

  try {
    // Get query parameters
    const url = new URL(req.url);
    const searchParams = url.searchParams;

    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "";
    const sort = searchParams.get("sort") || "asc";
    const page = parseInt(searchParams.get("page") || "1", 10);

    const ITEMS_PER_PAGE = 12;

    // Filters
    const query = {};

    if (search) {
      query.productName = { $regex: search, $options: "i" }; // Case-insensitive search
    }

    if (category) {
      query.categoryName = category;
    }

    // Sorting
    const sortOption = { price: sort === "asc" ? 1 : -1 };

    // Pagination logic
    const skip = (page - 1) * ITEMS_PER_PAGE;

    // Fetch products with pagination, filtering, sorting
    const products = await collection
      .find(query)
      .sort(sortOption)
      .skip(skip)
      .limit(ITEMS_PER_PAGE)
      .toArray();

    // Get total product count for pagination
    const totalProducts = await collection.countDocuments(query);
    const totalPages = Math.ceil(totalProducts / ITEMS_PER_PAGE);

    // Return the response as JSON
    return NextResponse.json({
      products,
      totalPages,
      currentPage: page,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
};
