import { connectDB } from "@/lib/connectDB";

export const GET = async () => {
  const db = await connectDB();
  const productCollection = db.collection("products");

  try {
    const products = await productCollection.find().toArray();
    return Response.json(products);
  } catch (error) {
    return Response.json({ message: "something went wrong" });
  }
};