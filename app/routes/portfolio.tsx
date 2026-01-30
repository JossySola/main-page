import type { Route } from "../+types/root";
import SocialMedia from "~/ui/social-media";
import Interests from "~/ui/interests";
import Certifications from "~/ui/certifications";
import SoftSkills from "~/ui/soft-skills";
import WorkingOn from "~/ui/working-on";
import { BackButton } from "~/ui/back-button";
import { list, } from "@vercel/blob";
import type { SanitizedType } from "~/lib/types";
import ProjectModal from "~/ui/project-modal";

export function meta({}: Route.MetaArgs) {
    return [
      { title: "Jossy Solá Portfolio" },
      { name: "description", content: "Jossy Sola Portfolio" },
    ];
}

export async function loader({}: Route.LoaderArgs) {
    const { folders } = await list({
        prefix: `projects/`,
        mode: "folded"
    });
    const result = await Promise.all(folders.map(async (folder) => {
      const response = await list({
        prefix: folder,
      });
      return response.blobs;
    }));
    const sanitizedResult: Promise<SanitizedType>[] = result.map(async lists => {
      let object: SanitizedType = {
        name: "",
        imageUrl: "",
        gallery: [],
        data: {
          name: "",
          year: 0,
          version: "",
          description: "",
          stack: [],
          repository: "",
          live: ""
        }
      }
      await Promise.all(lists.map(async blob => {
        if (blob.size === 0 && !blob.pathname.includes("gallery/")) {
          const name = blob.pathname.replace("projects/", "").replace("/", "");
          object.name = name;
          return object;
        };
        if (blob.pathname.includes(".png") && !blob.pathname.includes("gallery/")) {
          object.imageUrl = blob.url;
          return object;
        }
        if (blob.pathname.includes("gallery/")) {
          object.gallery.push(blob.url);
          return object;
        }
        if (blob.pathname.endsWith("data.json")) {
          const request = await fetch(blob.downloadUrl);
          const data = await request.json();
          object.data = data;
          return object;
        }
      }));
      return object;
    });
    return await Promise.all(sanitizedResult);
}
export default function Portfolio ({ loaderData }: Route.ComponentProps) {
  return (
    <section className="w-full p-5 flex flex-col items-center">
      <header className="w-full flex flex-col justify-center items-center gap-5">
        <BackButton />
        <h1 style={{ fontFamily: "Geist Bold" }} className="text-3xl">José María Solá</h1>
        <p className="text-gray-400">Full Stack web developer</p>
      </header>
      <section className="w-full m-5 flex flex-col justify-center items-center gap-5">   
        <SocialMedia />
          <p className="text-center">
              Junior Full Stack Developer with hands-on experience building web applications. Skilled in integrating APIs and creating applications having accessibility, interactivity and best practices in mind.
          </p>
      </section>
      <h2 style={{ fontFamily: "Geist Bold" }} className="text-3xl">Projects</h2>
      <section className="w-full max-w-250 m-5 flex flex-col justify-center items-center gap-5">
        {
          loaderData && (loaderData as unknown as SanitizedType[]).map((blobsArray: SanitizedType, index: number) => (
            <ProjectModal key={`project-${index}`} blob={blobsArray} />
          ))
        }
      </section>
      <section className="w-full m-5 flex flex-col md:flex-row md:flex-wrap justify-center items-center sm:items-start gap-5">
        <Interests />
        <Certifications />
        <SoftSkills />
        <WorkingOn />
      </section>
    </section>
  )
}