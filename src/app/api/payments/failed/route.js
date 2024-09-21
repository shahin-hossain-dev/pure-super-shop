import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_BASE_URL}/payments/failed`
  );
};
