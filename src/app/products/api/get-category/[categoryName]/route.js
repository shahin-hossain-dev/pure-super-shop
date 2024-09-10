import { connectDB } from "@/lib/connectDB";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const productCollection = db.collection("products");
  const category = params.categoryName;

  try {
    const products = await productCollection
      .find({ categoryName: category })
      .toArray();
    return Response.json(products);
  } catch (error) {
    return Response.json({ message: "Something went wrong" });
  }
};
