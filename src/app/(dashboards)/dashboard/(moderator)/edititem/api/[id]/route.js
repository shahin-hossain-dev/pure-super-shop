import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
export const PUT = async(req , {params}) => {
    const db = await connectDB();
    const productsCollection = db.collection('products');
    try {
        const query = { _id: new ObjectId(params?.id) };
        const productData = await req.json();
        const options = { upsert: true };
        const updateDoc = {
            $set: {
              ...productData,
            },
          };
        const product = await productsCollection.updateOne( query, updateDoc, options);
        
        return NextResponse.json({message: "product item edit successful"}, {status: 200});
        
    } catch (error) {
        return NextResponse.json({error})
    }
}

export const GET = async(req, {params}) => {
    const db = await connectDB();
    const productsCollection = db.collection('products');
    try {
        const query = { _id: new ObjectId(params?.id) };
       
        const product = await productsCollection.findOne(query)
      
        return NextResponse.json({product});
        
    } catch (error) {
        return NextResponse.json({error})
    }
}