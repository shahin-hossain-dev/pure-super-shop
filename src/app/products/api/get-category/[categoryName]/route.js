import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const productCollection = db.collection("products");
  const category = params.categoryName;

  try {
    const products = await productCollection
      .find({ categoryName: category })
      .toArray();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
};
