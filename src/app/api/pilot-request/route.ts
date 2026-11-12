const REQUIRED = ["email", "name", "organization", "organizationType", "country", "sport", "timing"] as const;

/**
 * Receives pilot requests from the home page form and the Pilot Program page form.
 *
 * TODO: deliver the request somewhere durable (CRM, email, ticketing).
 * Right now it is only validated and logged on the server.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const missing = REQUIRED.filter((key) => typeof body[key] !== "string" || !(body[key] as string).trim());
  if (missing.length) {
    return Response.json({ error: "Missing required fields", fields: missing }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email as string)) {
    return Response.json({ error: "Invalid email", fields: ["email"] }, { status: 400 });
  }

  console.info("[pilot-request]", {
    organization: body.organization,
    organizationType: body.organizationType,
    event: body.event,
    challenges: body.challenges,
    timing: body.timing,
    receivedAt: new Date().toISOString(),
  });

  return Response.json({ ok: true });
}
