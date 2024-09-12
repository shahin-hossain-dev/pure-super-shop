import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const productCollection = db.collection("products");

  try {
    const product = await productCollection.findOne({
      _id: new ObjectId(params.productId),
    });
    return Response.json(product);
  } catch (error) {
    return Response.json({ message: "Something went wrong" });
  }
};
