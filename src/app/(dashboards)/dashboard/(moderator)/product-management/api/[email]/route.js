import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";
export const GET = async (req, {params}) => {
const db = await connectDB();
try{
const productsCollection = db.collection('products');
 const productsData = await productsCollection.find({createdBy: params?.email}).toArray();
 return NextResponse.json({productsData});
} catch (error) {
    return NextResponse.json({error})
}
}