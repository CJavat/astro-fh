import type { APIRoute } from "astro";
import { Clients, db, eq } from "astro:db";

export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
  const clientId = params.clientId ?? "";

  try {
    const results = await db
      .select()
      .from(Clients)
      .where(eq(Clients.id, +clientId));

    if (results.length === 0) {
      return new Response(
        JSON.stringify({ msg: `User ${clientId} not found` }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json ",
          },
        }
      );
    }

    return new Response(JSON.stringify(results.at(0)), {
      status: 201,
      headers: {
        "Content-Type": "application/json ",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ msg: "Unknow error has occurred" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json ",
      },
    });
  }
};

export const PATCH: APIRoute = async ({ params, request }) => {
  const clientId = params.clientId ?? "";

  try {
    const { id, ...body } = await request.json();

    const results = await db
      .update(Clients)
      .set(body)
      .where(eq(Clients.id, +clientId));

    const updatedClient = await db
      .select()
      .from(Clients)
      .where(eq(Clients.id, +clientId));

    return new Response(JSON.stringify(updatedClient.at(0)), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ msg: "No body found" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const DELETE: APIRoute = async ({ params, request }) => {
  const clientId = params.clientId ?? "";

  try {
    const { rowsAffected } = await db
      .delete(Clients)
      .where(eq(Clients.id, +clientId));

    if (rowsAffected > 0) {
      return new Response(JSON.stringify({ msg: "Deleted" }), {
        status: 201,
        headers: {
          "Content-Type": "application/json ",
        },
      });
    }

    return new Response(JSON.stringify({ msg: "User Not Found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json ",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ msg: "Unknow error has occurred" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
};
