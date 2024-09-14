import { connectDB } from "@/lib/connectDB"
export const GET = async (req, {params}) => {
const db = await connectDB();
try{
const productsCollection = db.collection('products');
 const productsData = await productsCollection.find({createdBy: params?.email}).toArray();
 return Response.json({productsData});
} catch (error) {
    return Response.json({error})
}
}