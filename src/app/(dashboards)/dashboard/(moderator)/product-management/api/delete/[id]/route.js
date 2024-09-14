import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
export const DELETE = async(req, {params}) => {
    const db = await connectDB();
   

    try{
        const productsCollection = db.collection('products');

        const query = { _id: new ObjectId(params?.id) };
<<<<<<< HEAD
=======

>>>>>>> 8d5f4c52aaaadc8b4a4f0cc8a04b5c8dfc1c3e52
      
         const productsData = await productsCollection.deleteOne(query);
         return NextResponse.json({message: "product data delete successful", status: 200});
        } catch (error) {
<<<<<<< HEAD
            return NextResponse.json({error})
=======

            return NextResponse.json({error})

>>>>>>> 8d5f4c52aaaadc8b4a4f0cc8a04b5c8dfc1c3e52
        }
}