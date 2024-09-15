import { connectDB } from "@/lib/connectDB";
import { products } from "@/lib/products";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const db = await connectDB();
    const productCollection = db.collection("products");
    await productCollection.deleteMany();

    const resp = await productCollection.insertMany(products);
    return NextResponse.json({ message: "seed successfully" });
  } catch (error) {
    return NextResponse.json({ message: "something went wrong" });
  }
};
