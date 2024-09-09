const bcrypt = require("bcrypt");
import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const newUser = await request.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const isExist = await userCollection.findOne({ email: newUser?.email });

    if (isExist) {
      return NextResponse.json(
        { message: "user already exist" },
        { status: 304 }
      );
    }
    const hashPassword = bcrypt.hashSync(newUser?.password, 14);

    const response = await userCollection.insertOne({
      ...newUser,
      password: hashPassword,
    });
    return NextResponse.json({ message: "user created" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "something went wrong", error },
      { status: 500 }
    );
  }
};
