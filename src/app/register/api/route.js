import { connectDB } from '@/lib/connectDB';
export const POST = async (request) =>{
const newUser = await request.json();
try {
    const db = await connectDB();
    const userCollection = db.collection('users');
    const isExist = await userCollection.findOne({email: newUser?.email});
    
    if(isExist){
        return Response.json({message: "user already exist"}, {status: 304});
    }
    const response = await userCollection.insertOne(newUser);
    return Response.json({message: "user created"}, {status: 200});
} catch (error) {
    return Response.json({message: "something went wrong", error}, {status: 500});
}
}