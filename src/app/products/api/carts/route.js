import { connectDB } from "@/lib/connectDB"

export const POST = async (requests) => {
    const item = await requests.json();
    const db = await connectDB();
    const cartsCollection = db.collection('carts')

    try {
        const newCarts = await cartsCollection.insertOne(item);
        return Response.json({services: "Services added sucessfully"})
    } catch (error) {
        console.log(error);
    }
}