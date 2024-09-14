import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";
export const DELETE = async(req, {params}) => {
    const db = await connectDB();
   

    try{
        const productsCollection = db.collection('products');

        const query = { _id: new ObjectId(params?.id) };

      
         const productsData = await productsCollection.deleteOne(query);
         return Response.json({message: "product data delete successful", status: 200});
        } catch (error) {
            return Response.json({error})

        }
}