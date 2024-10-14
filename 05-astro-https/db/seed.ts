import { getCollection } from "astro:content";
import { db, Clients, Posts } from "astro:db";

export default async function seed() {
  await db.insert(Clients).values([
    { id: 1, name: "Kasim", age: 35, isActive: true },
    { id: 2, name: "Daniel", age: 35, isActive: false },
    { id: 3, name: "Javato", age: 25, isActive: false },
    { id: 4, name: "Carlos", age: 15, isActive: true },
    { id: 5, name: "Caxlsh", age: 22, isActive: false },
  ]);

  const posts = await getCollection("blog");

  await db.insert(Posts).values(
    posts.map((post) => ({
      id: post.id,
      title: post.data.title,
      likes: Math.round(Math.random() * 100),
    }))
  );

  console.log("Seed Executed");
}
