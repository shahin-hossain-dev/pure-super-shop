import { NextResponse } from "next/server";

export const POST = async (request) => {
  const successData = await request.json();
  console.log("successData", successData);
  try {
    return NextResponse.json(successData);
  } catch (error) {}
};
