//? Se crea éste archivo para que no de error de tipado en el sessión y adaptarlo a lo que necesito
import { DefaultSession, DefaultUSer } from "@auth/core/types";

declare module "@auth/core/types" {
  interface User extends DefaultUser {
    role?: string;
  }

  interface Session extends DefaultSession {
    user: User;
  }
}
