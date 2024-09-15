import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
export const DELETE = async(req, {params}) => {
    const db = await connectDB();
    const userCollection = db.collection("users");
    try {
        const query = { _id: new ObjectId(params?.id) };
        const users = await userCollection.deleteOne(query);
        return NextResponse.json({message: "user data delete successful", status: 200});
    } catch (error) {
        return NextResponse.json({error});
    }
}

export const PATCH = async(req, {params}) => {
    const db = await connectDB();
    const userCollection = db.collection("users");
    try {
        const query = { _id: new ObjectId(params?.id) };
    
        const updateDoc = {
            $set: {
                role: "moderator",
            },
        };
        const result = await userCollection.updateOne(query, updateDoc);
      
        return NextResponse.json({message: "user role updated successful", status: 200});
    } catch (error) {
        return NextResponse.json({error});
    }
}