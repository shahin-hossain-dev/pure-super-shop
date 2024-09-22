import { connectDB } from "@/lib/connectDB";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import queryString from "query-string";

export const POST = async (req) => {
  const db = await connectDB();
  const paymentCollection = db.collection("payments");
  const addToCartCollection = db.collection("addToCarts");

  const streamData = await streamToText(req); //covert request text stream to readable text
  const paymentData = queryString.parse(streamData); //covert to query string
  console.log("success payment", paymentData);

  // more safe payment validation with ssl commerce data
  if (paymentData.status !== "VALID") {
    throw new Error("Unauthorized Payment, Invalid Payment");
  }
  // update database data

  const query = { tranId: paymentData.tran_id };
  const update = {
    $set: {
      status: "Completed",
    },
  };
  const updateResp = await paymentCollection.updateOne(query, update);

  if (updateResp.modifiedCount > 0) {
    // await addToCartCollection.deleteMany({})
    const email = await paymentCollection.findOne({
      tranId: paymentData.tran_id,
    });
    console.log(email);
    redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/payments/success`);
  }
};

// Utility function to convert ReadableStream to text
async function streamToText(stream) {
  const reader = stream.body.getReader();
  let result = "";
  const decoder = new TextDecoder();

  // Read the stream chunk by chunk
  while (true) {
    const { done, value } = await reader.read();
    if (done) break; // Exit loop when no more chunks
    result += decoder.decode(value, { stream: true });
  }

  return result; // Return the accumulated text
}
