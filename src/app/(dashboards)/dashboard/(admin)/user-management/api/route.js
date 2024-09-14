import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async(req)=>{

    const db = await connectDB();
    const userCollection = db.collection("users");

    try {
        const users = await userCollection.find().toArray();
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.json({error});
    }


}