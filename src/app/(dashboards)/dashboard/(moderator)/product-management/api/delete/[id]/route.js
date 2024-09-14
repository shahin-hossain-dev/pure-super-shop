import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";
export const DELETE = async(req, {params}) => {
    const db = await connectDB();
   

    try{
        const productsCollection = db.collection('products');

        const query = { _id: new ObjectId(params?.id) };
        console.log(query)
         const productsData = await productsCollection.deleteOne(query);
         return Response.json({productsData});
        } catch (error) {
            console.log(error)
        }
}