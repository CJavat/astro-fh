import { defineAction, z } from "astro:actions";
//TODO: TERMINAR ESTO AL FINAL DEL CURSO
export const registerUser = defineAction({
  accept: "form",
  input: z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
  }),
  handler: async ({ name, email, password }, { cookies }) => {
    return { ok: true };
  },
});
