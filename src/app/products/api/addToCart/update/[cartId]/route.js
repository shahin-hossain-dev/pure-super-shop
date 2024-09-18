import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const PATCH = async (request, { params }) => {
  const db = await connectDB();
  const cartCollection = db.collection("addToCarts");
  const filter = {
    _id: new ObjectId(params.cartId),
  };
  console.log(params);
  const increment = await request.json();
  console.log(increment);

  try {
    if ((increment.type = "increment")) {
      const options = { upsert: true };
      const updateDoc = {
        $inc: { quantity: 1 },
      };
      const resp = await cartCollection.updateOne(filter, updateDoc, options);
      return NextResponse.json(resp);
    }
  } catch (error) {
    return NextResponse.json({ message: "something went wrong" });
  }
};
