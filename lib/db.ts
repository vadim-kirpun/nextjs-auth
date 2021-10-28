import { Db, MongoClient } from 'mongodb';

const databaseName = 'nextjs-auth';
const credentials = `${process.env.DB_USER}:${process.env.DB_PASSWORD}`;

const databaseUrl = `mongodb+srv://${credentials}@cluster0.nadat.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

interface IDatabase {
  client: MongoClient;
  db: Db;
}

export const connectToDB = async (): Promise<IDatabase> => {
  const client = await MongoClient.connect(databaseUrl);
  const db = client.db();
  return { client, db };
};
