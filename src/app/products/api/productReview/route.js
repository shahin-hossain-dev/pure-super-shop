import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const db = await connectDB();
  const reviewCollection = db.collection("reviews");
  const review = await request.json();
  //   console.log(review);
  try {
    const resp = await reviewCollection.insertOne(review);
    return NextResponse.json({ message: "User Review added", status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
};
