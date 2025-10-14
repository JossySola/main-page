import { Avatar, AvatarGroup, Card, CardBody, Code, Image, Tooltip } from "@heroui/react";
import { External } from "./icons/vercel";
import { Link } from "react-router";

export default function Projects () {
    return (
        <>
        <Card classNames={{
          base: "w-full h-fit bg-default-100 p-5"
        }}>
          <CardBody className="flex sm:flex-row flex-col justify-center sm:justify-left items-center gap-5">
            <div>
              <Image src="scheduler.png" alt="Scheduler project logo" className="bg-white object-contain p-3" width={250} height={105}
              classNames={{
                wrapper: "w-[250px]"
              }} />
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 style={{ fontFamily: "Geist Bold" }} className="text-2xl flex flex-row items-center gap-2 tracking-wide">
                Scheduler
                <Code>v2.0.2</Code>
              </h3>
              <div className="flex flex-row gap-3 items-center">
                <Link to="https://scheduler.jossysola.com/" className="text-primary" target="_blank">
                  <External />
                </Link>
                <Link to="https://github.com/JossySola/scheduler" target="_blank">
                  <img width={25} height={25} className="dark:relative h-[25px] object-contain" src="github-mark-white.png" alt="GitHub" title="GitHub" aria-label="GitHub Profile" />
                  <img width={25} height={25} className="dark:hidden h-[25px] object-contain" src="github-mark.png" alt="GitHub" title="GitHub" aria-label="GitHub Profile" />
                </Link>
              </div>
              <p>This web application aims to provide a way to make schedules with the option of setting specifications for each row and column. With the specifications set, the user can utilize the AI feature to automatically complete the schedule based on the criteria.</p>
              <AvatarGroup max={8}>
                <Tooltip content="Next JS" showArrow={true}>
                  <Avatar size="md" src="nextjs.png" />
                </Tooltip>
                <Tooltip content="Vercel" showArrow={true}>
                  <Avatar size="md" src="vercel.png" classNames={{
                    img: "object-scale-down p-1",
                    base: "object-scale-down p-1",
                  }} />
                </Tooltip>
                <Tooltip content="Tailwind CSS" showArrow={true}>
                  <Avatar size="md" src="tailwindcss-mark.svg" classNames={{
                    img: "object-scale-down p-1",
                    base: "object-scale-down p-1",
                  }} />
                </Tooltip>
                <Tooltip content="Lottie" showArrow={true}>
                  <Avatar size="md" src="lottie.svg" />
                </Tooltip>
                <Tooltip content="React" showArrow={true}>
                  <Avatar size="md" src="react.svg" classNames={{
                    img: "object-scale-down p-1",
                    base: "object-scale-down p-1",
                  }} />
                </Tooltip>
                <Tooltip content="TypeScript" showArrow={true}>
                  <Avatar size="md" src="typescript.png" />
                </Tooltip>
                <Tooltip content="Framer" showArrow={true}>
                  <Avatar size="md" src="framer.png" />
                </Tooltip>
                <Tooltip content="Zod" showArrow={true}>
                  <Avatar size="md" src="https://raw.githubusercontent.com/colinhacks/zod/main/logo.svg" classNames={{
                    img: "object-contain p-1",
                    base: "object-contain p-1",
                  }}/>
                </Tooltip>
              </AvatarGroup>
            </div>
          </CardBody>
        </Card>
        <Card classNames={{
          base: "w-full h-fit bg-default-100 p-5"
        }}>
          <CardBody className="flex sm:flex-row flex-col justify-center sm:justify-left items-center gap-5">
            <div>
              <Image src="century.png" alt="21st Century Times project logo" className="bg-white object-contain p-3" width={250} height={105} 
              classNames={{
                wrapper: "w-[250px]"
              }}/>
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 style={{ fontFamily: "Geist Bold" }} className="text-2xl flex flex-row items-center gap-2 tracking-wide">
                The 21st Century Times 
                <Code>v2.0.0</Code>
              </h3>
              <div className="flex flex-row items-center gap-3">
                <Link to="https://www.centurytimes.jossysola.com/" className="text-primary" target="_blank">
                  <External />
                </Link>
                <Link to="https://github.com/JossySola/century" target="_blank">
                  <img width={25} height={25} className="dark:relative h-[25px] object-contain" src="github-mark-white.png" alt="GitHub" title="GitHub" aria-label="GitHub Profile" />
                  <img width={25} height={25} className="dark:hidden h-[25px] object-contain" src="github-mark.png" alt="GitHub" title="GitHub" aria-label="GitHub Profile" />
                </Link>
              </div>
              <p>This is part of the Codecademy Front-End project which uses the Reddit API. The user can search for specific Subreddits, choose a topic from the navigation menu, open, like, and comment any post by authenticating on Reddit.</p>
              <AvatarGroup max={6}>
                <Tooltip content="Vercel" showArrow={true}>
                  <Avatar size="md" src="vercel.png" classNames={{
                    img: "object-scale-down p-1",
                    base: "object-scale-down p-1",
                  }} />
                </Tooltip>
                <Tooltip content="Vite" showArrow={true}>
                  <Avatar size="md" src="vite.svg" classNames={{
                    img: "object-scale-down pt-2 pb-2",
                  }} />
                </Tooltip>
                <Tooltip content="React Router" showArrow={true}>
                  <Avatar size="md" src="rr_logo_dark.png" classNames={{
                    img: "object-scale-down pr-2 pl-2"
                  }} />
                </Tooltip>
                <Tooltip content="React" showArrow={true}>
                  <Avatar size="md" src="react.svg" classNames={{
                    img: "object-scale-down p-1",
                    base: "object-scale-down p-1",
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
            <div>
              <Image src="jammming.png" alt="Jammming project logo" className="bg-white object-contain p-3" width={250} height={105} 
              classNames={{
                wrapper: "w-[250px]"
              }}/>
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 style={{ fontFamily: "Geist Bold" }} className="text-2xl flex flex-row items-center gap-2 tracking-wide">
                Jammming 
                <Code>v1.2.1</Code>
              </h3>
              <div className="flex flex-row items-center gap-3">
                <Link to="https://jossysola.github.io/jammming/" className="text-primary" target="_blank">
                  <External />
                </Link>
                <Link to="https://github.com/JossySola/jammming" target="_blank">
                  <img width={25} height={25} className="dark:relative h-[25px] object-contain" src="github-mark-white.png" alt="GitHub" title="GitHub" aria-label="GitHub Profile" />
                  <img width={25} height={25} className="dark:hidden h-[25px] object-contain" src="github-mark.png" alt="GitHub" title="GitHub" aria-label="GitHub Profile" />
                </Link>
              </div>
              <p>This is part of the Codecademy Front-End project which uses Spotify API. The users are able to search for songs/artists, add songs to a new playlist and save it in their Spotify account.</p>
                <AvatarGroup max={6}>
                  <Tooltip content="JavaScript Vanilla" showArrow={true}>
                  <Avatar size="md" src="JavaScript-logo.png" classNames={{
                    img: "object-scale-down",
                    base: "object-scale-down",
                  }} />
                </Tooltip>
                  <Tooltip content="React" showArrow={true}>
                    <Avatar size="md" src="react.svg" classNames={{
                      img: "object-scale-down p-1",
                      base: "object-scale-down p-1",
                    }} />
                  </Tooltip>
                </AvatarGroup>
            </div>
          </CardBody>
        </Card>
        </>
    )
}
