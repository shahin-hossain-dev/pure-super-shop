import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";
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
        
        return Response.json({message: "product item edit successful"}, {status: 200});
        
    } catch (error) {
        return Response.json({error})
    }
}

export const GET = async(req, {params}) => {
    const db = await connectDB();
    const productsCollection = db.collection('products');
    try {
        const query = { _id: new ObjectId(params?.id) };
       
        const product = await productsCollection.findOne(query)
      
        return Response.json({product});
        
    } catch (error) {
        return Response.json({error})
    }
}