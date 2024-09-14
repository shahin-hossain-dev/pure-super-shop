import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const productCollection = db.collection("products");

  try {
    const product = await productCollection.findOne({
      _id: new ObjectId(params.productId),
    });
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
};
