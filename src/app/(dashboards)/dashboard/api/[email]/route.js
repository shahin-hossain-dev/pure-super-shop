
import { connectDB } from '@/lib/connectDB';
import { NextResponse } from 'next/server';
export const GET = async (req, {params}) => {
    const db = await connectDB();
    const userCollection = db.collection('users');
    try {
        console.log(params)
        const users = await userCollection.findOne({email: params?.email})
        console.log(users)
        return NextResponse.json(users)
    } catch (error) {
        return NextResponse.json(error)
    }
}