import { redirect } from "next/navigation";

export const POST = async () => {
  redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/payments/cancel`);
};
