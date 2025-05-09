import { Avatar, AvatarGroup, Card, CardBody, Chip, Image, Tooltip } from "@heroui/react";
import type { Route } from "../+types/root";
import SocialMedia from "~/ui/social-media";
import { Link } from "react-router";
import { External } from "~/ui/icons/vercel";

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
        <Card classNames={{
          base: "w-full h-fit bg-default-100 p-5"
        }}>
          <CardBody className="flex sm:flex-row flex-col justify-center sm:justify-left items-center gap-5">
            <Image src="scheduler.png" alt="Scheduler project logo" className="bg-white object-contain p-3" width={250} height={105} />
            <div className="flex flex-col">
              <h3 style={{ fontFamily: "Geist Bold" }} className="text-2xl flex flex-row items-center gap-2">Scheduler <Link to="https://scheduler.jossysola.com/" className="text-primary" target="_blank"><External /></Link></h3>
              <p>This web application aims to provide a way to make schedules with the option of setting specifications for each row and column. With the specifications set, the user can utilize the AI feature to automatically complete the schedule based on the criteria.</p>
              <AvatarGroup max={7} className="m-5">
                <Tooltip content="Next JS" showArrow={true}>
                  <Avatar size="md" src="nextjs.png" />
                </Tooltip>
                <Tooltip content="Vercel" showArrow={true}>
                  <Avatar size="md" src="vercel.png" classNames={{
                    img: "object-scale-down p-1",
                    base: "object-scale-down p-1",
                    icon: "object-scale-down p-1"
                  }} />
                </Tooltip>
                <Tooltip content="Tailwind CSS" showArrow={true}>
                  <Avatar size="md" src="tailwindcss-mark.svg" classNames={{
                    img: "object-scale-down p-1",
                    base: "object-scale-down p-1",
                    icon: "object-scale-down p-1"
                  }} />
                </Tooltip>
                <Tooltip content="Lottie" showArrow={true}>
                  <Avatar size="md" src="lottie.svg" />
                </Tooltip>
                <Tooltip content="React" showArrow={true}>
                  <Avatar size="md" src="react.svg" classNames={{
                    img: "object-scale-down p-1",
                    base: "object-scale-down p-1",
                    icon: "object-scale-down p-1"
                  }} />
                </Tooltip>
                <Tooltip content="TypeScript" showArrow={true}>
                  <Avatar size="md" src="typescript.png" />
                </Tooltip>
                <Tooltip content="Framer" showArrow={true}>
                  <Avatar size="md" src="framer.png" />
                </Tooltip>
              </AvatarGroup>
            </div>
          </CardBody>
        </Card>
        <Card classNames={{
          base: "w-full h-fit bg-default-100 p-5"
        }}>
          <CardBody className="flex sm:flex-row flex-col justify-center sm:justify-left items-center gap-5">
            <Image src="century.png" alt="21st Century Times project logo" className="bg-white object-contain p-3" width={250} height={105} />
            <div className="flex flex-col">
              <h3 style={{ fontFamily: "Geist Bold" }} className="text-2xl flex flex-row items-center gap-2">The 21st Century Times <Link to="https://www.centurytimes.jossysola.com/" className="text-primary" target="_blank"><External /></Link></h3>
              <p>This is part of the Codecademy Front-End project which uses the Reddit API. The user can search for specific Subreddits, choose a topic from the navigation menu, open, like, and comment any post by authenticating on Reddit.</p>
              <AvatarGroup max={6} className="m-5">
                <Tooltip content="Vercel" showArrow={true}>
                  <Avatar size="md" src="vercel.png" classNames={{
                    img: "object-scale-down p-1",
                    base: "object-scale-down p-1",
                    icon: "object-scale-down p-1"
                  }} />
                </Tooltip>
                <Tooltip content="Vite" showArrow={true}>
                  <Avatar size="md" src="vite.svg" classNames={{
                    img: "object-scale-down p-1",
                    base: "object-scale-down p-1",
                    icon: "object-scale-down p-1"
                  }} />
                </Tooltip>
                <Tooltip content="React Router" showArrow={true}>
                  <Avatar size="md" src="rr_logo_dark.png" classNames={{
                    img: "object-scale-down p-1",
                    base: "object-scale-down p-1",
                    icon: "object-scale-down p-1"
                  }} />
                </Tooltip>
                <Tooltip content="React" showArrow={true}>
                  <Avatar size="md" src="react.svg" classNames={{
                    img: "object-scale-down p-1",
                    base: "object-scale-down p-1",
                    icon: "object-scale-down p-1"
                  }} />
                </Tooltip>
                <Tooltip content="TypeScript" showArrow={true}>
                  <Avatar size="md" src="typescript.png" />
                </Tooltip>
                <Tooltip content="Postman" showArrow={true}>
                  <Avatar size="md" src="postman.png" />
                </Tooltip>
              </AvatarGroup>
            </div>
          </CardBody>
        </Card>
        <Card classNames={{
          base: "w-full h-fit bg-default-100 p-5"
        }}>
          <CardBody className="flex sm:flex-row flex-col justify-center sm:justify-left items-center gap-5">
            <Image src="jammming.png" alt="Jammming project logo" className="bg-white object-contain p-3" width={250} height={105} />
            <div className="flex flex-col">
              <h3 style={{ fontFamily: "Geist Bold" }} className="text-2xl flex flex-row items-center gap-2">Jammming <Link to="https://jossysola.github.io/jammming/" className="text-primary" target="_blank"><External /></Link></h3>
              <p>This is part of the Codecademy Front-End project which uses Spotify API. The users are able to search for songs/artists, add songs to a new playlist and save it in their Spotify account.</p>
            </div>
          </CardBody>
        </Card>
      </section>
      <section className="w-full m-5 flex flex-col md:flex-row justify-center items-center gap-5">
        <Card classNames={{
          base: "w-full sm:min-w-[277px] sm:w-80 h-fit sm:h-45 bg-default-100 p-5"
        }}>
          <CardBody>
            <h2 style={{ fontFamily: "Geist Bold" }} className="text-xl">Interests</h2>
            <div className="flex flex-row flex-wrap gap-3 mt-5">
              <Chip>👨🏾‍💻 Coding</Chip>
              <Chip>🎨 Art</Chip>
              <Chip>🎮 Gaming</Chip>
              <Chip>📖 Reading</Chip>
            </div>
            
          </CardBody>
        </Card>
        <Card classNames={{
          base: "w-full sm:min-w-[312px] sm:w-80 h-fit sm:h-45 bg-default-100 p-5"
        }}>
          <CardBody>
            <h2 style={{ fontFamily: "Geist Bold" }} className="text-xl">Certifications</h2>
            <section className="flex flex-row gap-2 items-center mt-3">
              <Chip>2019</Chip>
              <div className="flex flex-col text-tiny">
                <p style={{ fontFamily: "Geist ExtraBold" }}>First Certificate in English B2</p>
                <p>Cambridge Assessment English</p>
              </div>
            </section>
            <section className="flex flex-row gap-2 items-center mt-3">
              <Chip>2023</Chip>
              <div className="flex flex-col text-tiny">
                <p style={{ fontFamily: "Geist ExtraBold" }}>Front-End Engineer</p>
                <p>Codecademy</p>
              </div>
            </section>
          </CardBody>
        </Card>
      </section>
    </section>
  )
}