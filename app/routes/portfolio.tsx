import { Button, Card, CardBody, Divider } from "@heroui/react";
import type { Route } from "../+types/root";
import SocialMedia from "~/ui/social-media";
import Projects from "~/ui/projects";
import Interests from "~/ui/interests";
import Certifications from "~/ui/certifications";
import { ArrowCircleLeft } from "~/ui/icons/vercel";
import { useNavigate } from "react-router";
import SoftSkills from "~/ui/soft-skills";
import WorkingOn from "~/ui/working-on";

export function meta({}: Route.MetaArgs) {
    return [
      { title: "Jossy Solá Portfolio" },
      { name: "description", content: "Jossy Sola Portfolio" },
    ];
}

export default function Portfolio () {
  const navigate = useNavigate()
  return (
    <section className="w-full p-5 flex flex-col items-center">
      <header className="w-full flex flex-col justify-center items-center gap-5">
        <Button 
        isIconOnly 
        aria-label="Go back button" 
        variant="light"
        onPress={ () => navigate(-1) }>
          <ArrowCircleLeft />
        </Button>
        <h1 style={{ fontFamily: "Geist Bold" }} className="text-3xl">José María Solá</h1>
        <p className="text-gray-400">Fullstack web developer</p>
      </header>
      
      <section className="w-full m-5 flex flex-col justify-center items-center gap-5">   
        <SocialMedia />
          <p className="text-center">
              Junior Full Stack Developer with hands-on experience building web applications. Skilled in integrating APIs and creating applications having accessibility, interactivity and best practices in mind.
          </p>
      </section>
      <Divider className="m-5 w-full" />
      <h2 style={{ fontFamily: "Geist Bold" }} className="text-3xl">Projects</h2>
      <section className="w-full max-w-250 m-5 flex flex-col justify-center items-center gap-5">
        <Projects />
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
