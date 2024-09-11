import { connectDB } from "@/lib/connectDB";
import { products } from "@/lib/products";

export const GET = async () => {
  try {
    const db = await connectDB();
    const productCollection = db.collection("products");
    await productCollection.deleteMany();

    const resp = await productCollection.insertMany(products);
    return Response.json({ message: "seed successfully" });
  } catch (error) {
    return Response.json({ message: "something went wrong" });
  }
};
