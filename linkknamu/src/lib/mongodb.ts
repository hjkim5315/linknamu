import { MongoClient } from "mongodb";

const globalForMongo = globalThis as unknown as {
  _mongoClient?: Promise<MongoClient>;
};

/** MONGODB_URI가 없으면 null을 반환합니다 (클릭 수 기능만 비활성화). */
export function getClient(): Promise<MongoClient> | null {
  const uri = process.env.MONGODB_URI;
  if (!uri) return null;
  if (!globalForMongo._mongoClient) {
    globalForMongo._mongoClient = new MongoClient(uri).connect();
  }
  return globalForMongo._mongoClient;
}

export async function getClicksCollection() {
  const client = getClient();
  if (!client) return null;
  const db = (await client).db(process.env.MONGODB_DB ?? "linknamu");
  return db.collection<{ _id: string; count: number }>("clicks");
}

export async function getClickCounts(): Promise<Record<string, number>> {
  try {
    const col = await getClicksCollection();
    if (!col) return {};
    const docs = await col.find().toArray();
    return Object.fromEntries(docs.map((d) => [d._id, d.count]));
  } catch (e) {
    console.error("클릭 수 조회 실패", e);
    return {};
  }
}
