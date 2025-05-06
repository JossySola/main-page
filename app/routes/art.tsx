import Gallery from "~/ui/gallery";
import type { Route } from "../+types/root";

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

export async function loader ({ params }: Route.LoaderArgs): Promise<Blobs | []> {
  try {
    const response = await fetch(`${process.env.VITE_PUBLIC_URL}/api/blob`, {
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    });
    const data: Blobs = await response.json();
    return data;
  } catch (e) {
    return [];
  }
}

export default function Art ({
  loaderData
}: Route.ComponentProps) {
    return <Gallery blobs={ loaderData ?? [] } />
}