import { connectDB } from "@/lib/connectDB"

export const POST = async(req) =>{
const db = await connectDB();
const productsCollection = db.collection('products');
try {
    const productData = await req.json();
    const product = await productsCollection.insertOne(productData);
    
    return Response.json({message: "product item post successful"}, {status: 200});
    
} catch (error) {
    console.log(error)
}
}