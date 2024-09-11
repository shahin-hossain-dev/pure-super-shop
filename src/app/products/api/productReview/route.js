import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  const db = await connectDB();
  const reviewCollection = db.collection("reviews");
  const review = await request.json();
  //   console.log(review);
  try {
    const resp = await reviewCollection.insertOne(review);
    return Response.json({ message: "User Review added", status: 200 });
  } catch (error) {
    return Response.json({ message: error.message });
  }
};
