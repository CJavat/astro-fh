import { defineAction, z } from "astro:actions";
import { db, eq, Posts } from "astro:db";

export const getPostLikes = defineAction({
  accept: "json",
  input: z.string(),
  handler: async (postId) => {
    const post = await db.select().from(Posts).where(eq(Posts.id, postId));

    return { likes: post.at(0)?.likes ?? 0 };
  },
});
