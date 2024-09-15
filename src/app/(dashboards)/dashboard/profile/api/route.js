import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt");

export const PUT = async (req) => {
  const db = await connectDB();
  const usersCollection = db.collection("users");

  const { name, image, password } = await req.json();

  try {
    const sessionUserEmail = req.headers.get('x-session-email'); 
    if (!sessionUserEmail) {
      return NextResponse.json({ message: "No user email provided" }, { status: 400 });
    }

    const updateFields = { name, image };

    // If password is provided, hash it and add to the update object
    if (password) {
      const salt = await bcrypt.genSalt(14);
      const hashedPassword = await bcrypt.hash(password, salt);
      updateFields.password = hashedPassword;
    }

    const result = await usersCollection.updateOne(
      { email: sessionUserEmail }, // Match the user by session email
      { $set: updateFields }
    );

    if (result.modifiedCount === 1) {
      // Return the updated user details
      const updatedUser = await usersCollection.findOne({ email: sessionUserEmail });
      return NextResponse.json({ user: updatedUser, message: "User updated successfully" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "User update failed" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
};
