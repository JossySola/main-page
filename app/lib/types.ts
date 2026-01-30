export type ListType = {
  blobs: {
    size: number;
    uploadedAt: Date;
    pathname: string;
    url: string;
    downloadUrl: string;
  }[];
  cursor?: string;
  hasMore: boolean;
  folders?: string[];
}
export type Blob = {
    size: number;
    uploadedAt: Date;
    pathname: string;
    url: string;
    downloadUrl: string;
}[];

export type SanitizedType = {
  name: string;
  imageUrl: string;
  gallery: string[];
  data: {
    name: string;
    year: number;
    version: string;
    description: string;
    stack: string[];
    repository: string;
    live: string;
  }
}