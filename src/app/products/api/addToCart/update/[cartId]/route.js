import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const PATCH = async (request, { params }) => {
  const db = await connectDB();
  const cartCollection = db.collection("addToCarts");
  const filter = {
    _id: new ObjectId(params.cartId),
  };
  // console.log(params);
  const increment = await request.json();

  const options = { upsert: true };

  try {
    if (increment.type === "increment") {
      const updateDoc = {
        $inc: { quantity: 1, totalPrice: increment?.price },
      };

      const resp = await cartCollection.updateOne(filter, updateDoc, options);
      return NextResponse.json(resp);
    }
    if (increment.type === "decrement") {
      const updateDoc = {
        $inc: { quantity: -1, totalPrice: -increment?.price },
      };
      const resp = await cartCollection.updateOne(filter, updateDoc, options);
      return NextResponse.json(resp);
    }
  } catch (error) {
    return NextResponse.json({ message: "something went wrong" });
  }
};
