
import { MongoClient, ServerApiVersion } from 'mongodb';

let db;

export const connectDB = async () => {
  try {
    if(db) return db;
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI; 
    if (!uri) {
      throw new Error("Please add your MongoDB URI to .env.local");
    } 
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
    db = client.db('super-Shop-Data');
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw new Error("Failed to connect to MongoDB");
  }
};
