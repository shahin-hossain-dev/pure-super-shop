import { redirect } from "next/navigation";

export const POST = async (req, res) => {
  redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/payments/failed`);
};
