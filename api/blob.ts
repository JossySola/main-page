import { list } from "@vercel/blob";

export async function GET(request: Request) {
    const { blobs } = await list({ mode: 'folded', prefix: "art/" });
    return Response.json(blobs);
}