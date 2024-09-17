import * as sdk from "node-appwrite";
require('dotenv').config();

export const {
NEXT_PUBLIC_ENDPOINT,
NEXT_PUBLIC_PROJECT_ID,
NEXT_PUBLIC_API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

console.log('project id',process.env.PROJECT_ID)

const client = new sdk.Client();
console.log('Appwrite client config:', client);


client.setEndpoint(NEXT_PUBLIC_ENDPOINT!).setProject(NEXT_PUBLIC_PROJECT_ID!).setKey(NEXT_PUBLIC_API_KEY!);

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);