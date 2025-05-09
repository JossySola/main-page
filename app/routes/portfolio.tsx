import { Card, CardBody } from "@heroui/react";
import type { Route } from "../+types/root";
import SocialMedia from "~/ui/social-media";
import Projects from "~/ui/projects";
import Interests from "~/ui/interests";
import Certifications from "~/ui/certifications";

export function meta({}: Route.MetaArgs) {
    return [
      { title: "Jossy Solá Portfolio" },
      { name: "description", content: "Jossy Sola Portfolio" },
    ];
}

export default function Portfolio () {
  return (
    <section className="w-full p-5 flex flex-col items-center">
      <header>
        <h1 style={{ fontFamily: "Geist Bold" }} className="text-3xl">José María Solá</h1>
      </header>
      
      <section className="w-full m-5 flex flex-col md:flex-row justify-center items-center gap-5">   
        <Card classNames={{
          base: "w-fit h-fit bg-default-100 p-5"
        }}>
          <CardBody className="flex flex-col justify-center">
            <SocialMedia />
          </CardBody>
        </Card>
      </section>

      <h2 style={{ fontFamily: "Geist Bold" }} className="text-2xl">Projects</h2>
      <section className="w-full max-w-[1000px] m-5 flex flex-col justify-center items-center gap-5">
        <Projects />
      </section>

      <section className="w-full m-5 flex flex-col md:flex-row justify-center items-center gap-5">
        <Interests />
        <Certifications />
      </section>
    </section>
  )
}