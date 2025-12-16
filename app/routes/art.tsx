import Gallery from "~/ui/gallery";
import type { Route } from "../+types/root";
import { list } from "@vercel/blob";

export type List = {
  blobs: {
    size: number,
    uploadedAt: Date,
    pathname: string,
    url: string,
    downloadUrl: string
  }[];
  cursor?: string;
  hasMore: boolean;
  folders?: string[];
};
export type Blobs = {
  size: number,
    uploadedAt: Date,
    pathname: string,
    url: string,
    downloadUrl: string
}[];
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jossy Solá Art" },
    { name: "description", content: "Jossy Sola's art gallery" },
  ];
}

export async function loader ({ params }: Route.LoaderArgs) {
    const response = await list({ 
        mode: "folded",
        prefix: "art/",
    });
    return response.blobs ?? [];
}

export default function Art ({
  loaderData
}: Route.ComponentProps) {
    return <Gallery blobs={ loaderData ?? [] } />
}