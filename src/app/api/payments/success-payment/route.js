import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";
import queryString from "query-string";

export const POST = async (req) => {
  const db = await connectDB();
  const paymentCollection = db.collection("payments");

  const streamData = await streamToText(req);
  const paymentData = queryString.parse(streamData);
  console.log("success payment", paymentData);

  try {
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

    if (updateResp) {
      NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_BASE_URL}/payments/success`
      );
    }

    return NextResponse.json({ message: "payment successfully" });
  } catch (error) {
    return NextResponse.json({ message: error });
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
