import { db, Clients } from "astro:db";

export default async function seed() {
  await db.insert(Clients).values([
    { id: 1, name: "Kasim", age: 35, isActive: true },
    { id: 2, name: "Daniel", age: 35, isActive: false },
    { id: 3, name: "Javato", age: 25, isActive: false },
    { id: 4, name: "Carlos", age: 15, isActive: true },
    { id: 5, name: "Caxlsh", age: 22, isActive: false },
  ]);

  console.log("Seed Executed");
}
