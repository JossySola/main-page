import { Card, CardBody, Code, Spinner } from "@heroui/react";

export default function WorkingOn () {
    return (
        <Card classNames={{
          base: "w-full h-fit sm:min-w-[277px] sm:w-80 bg-default-100 p-5"
        }}>
          <CardBody className="flex flex-col gap-5">
            <h2 style={{ fontFamily: "Geist Bold" }} className="text-xl">Working on...</h2>
            <div className="flex flex-row gap-3 items-center">
              <Spinner classNames={{label: "text-foreground mt-4"}} variant="simple" />
              <p>Scheduler <Code>v1.0.0-alpha.2</Code></p>
            </div>
            <h2 style={{ fontFamily: "Geist Bold" }} className="text-xl">Up next...</h2>
            <div className="flex flex-row gap-3 items-center">
              <Spinner classNames={{label: "text-foreground mt-4"}} variant="simple" color="default" />
              <p>21st Century Times <Code>v2.0.0</Code></p>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <Spinner classNames={{label: "text-foreground mt-4"}} variant="simple" color="default" />
              <p>NPM package <Code>dev</Code></p>
            </div>
            <h2 style={{ fontFamily: "Geist Bold" }} className="text-xl">Currently learning...</h2>
            <div className="flex flex-row gap-3 items-center">
              <Spinner classNames={{label: "text-foreground mt-4"}} variant="simple" color="warning" size="sm" />
              <img src="nextjs-logotype-light-background.svg" className="inline dark:hidden" width={100} />
              <img src="nextjs-logotype-dark-background.svg" className="hidden dark:inline" width={100} />
            </div>
          </CardBody>
        </Card>
    )
}