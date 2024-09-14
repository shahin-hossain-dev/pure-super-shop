import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
export const DELETE = async(req, {params}) => {
    const db = await connectDB();
   

    try{
        const productsCollection = db.collection('products');

        const query = { _id: new ObjectId(params?.id) };

      
         const productsData = await productsCollection.deleteOne(query);
         return NextResponse.json({message: "product data delete successful", status: 200});
        } catch (error) {

            return NextResponse.json({error})

        }
}