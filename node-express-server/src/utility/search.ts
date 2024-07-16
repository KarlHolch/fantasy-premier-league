import { MongoClient, Db } from 'mongodb';

// Replace with your MongoDB connection string
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

export async function searchByCustomField(collectionName: string, fieldName: string, values: string[]) {
    console.log("method start, for collectionName: " + collectionName + ", fieldName: " + fieldName + ", values: " + values);
    const collection = client.db('fantasyTest').collection(collectionName);
    if (!collection) {
        console.error("Collection not found: " + collectionName);
        return [];
    }
    console.log("Collection found:", collection.collectionName);

    const query = { [fieldName]: { $in: values } };
    console.log("Query:", query);
            
    const results = await collection.find(query).toArray();
    console.log("Results:", results);

    return results;
}