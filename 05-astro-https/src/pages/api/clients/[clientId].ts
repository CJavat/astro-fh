import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
  const { clientId } = params;

  return new Response(JSON.stringify({ method: "GET", clientId: clientId }), {
    status: 201,
    headers: {
      "Content-Type": "application/json ",
    },
  });
};

export const PATCH: APIRoute = async ({ params, request }) => {
  const { clientId } = params;

  return new Response(JSON.stringify({ method: "PATCH", clientId: clientId }), {
    status: 201,
    headers: {
      "Content-Type": "application/json ",
    },
  });
};

export const DELETE: APIRoute = async ({ params, request }) => {
  const { clientId } = params;

  return new Response(
    JSON.stringify({ method: "DELETE", clientId: clientId }),
    {
      status: 201,
      headers: {
        "Content-Type": "application/json ",
      },
    }
  );
};
