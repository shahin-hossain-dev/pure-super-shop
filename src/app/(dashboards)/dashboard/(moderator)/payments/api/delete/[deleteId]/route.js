import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  const db = await connectDB();
  const paymentCollection = db.collection("payments");
  // console.log(params);
  try {
    // const resp = await paymentCollection.deleteOne({
    //   _id: ObjectId(params.deleteId),
    // });
    return NextResponse.json({ message: "Deleted Successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Something went Wrong", status: 500 });
  }
};
