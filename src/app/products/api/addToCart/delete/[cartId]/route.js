import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const cartCollections = db.collection("addToCarts");

  try {
    const resp = await cartCollections.deleteOne({
      _id: new ObjectId(params.cartId),
    });

    return NextResponse.json({ message: "Deleted Successfully", resp });
  } catch (error) {
    return NextResponse.json({ message: "Something Error" });
  }
};
