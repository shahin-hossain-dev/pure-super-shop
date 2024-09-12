import { connectDB } from "@/lib/connectDB";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const reviewCollection = db.collection("reviews");

  try {
    const query = { productId: params.productId };
    const reviews = await reviewCollection.find(query).toArray();
    return Response.json(reviews);
  } catch (error) {
    return Response.json({ message: "Something went Wrong" });
  }
};
