// 1. Import utilities from `astro:content`
import { defineCollection, reference, z } from "astro:content";

// 2. Define your collection(s)
const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
      image: image().refine((img) => img.width < 1200, {
        message: "Image should be lower than 1200px",
      }),

      // Relación
      // author: z.string(),
      author: reference("author"),

      // Relación
      tags: z.array(z.string()),

      // Boolean
      isDraft: z.boolean().default(false),
    }),
});

const authorCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image(),
      twitter: z.string(),
      linkedIn: z.string(),
      github: z.string(),
      bio: z.string(),
      subtitle: z.string(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
  author: authorCollection,
};
