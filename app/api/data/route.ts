import data from "@/types/data.json";
export async function GET(request: Request) {
  return Response.json({ data });
}
