export async function GET(request: Request) {
  const res = await fetch(
    `https://api.npmjs.org/downloads/point/last-day/react-tada`
  );

  const data = await res.json();
  return Response.json({ data });
}
