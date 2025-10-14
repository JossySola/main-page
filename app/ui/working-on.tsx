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
              <p>The 21st Century Times <Code>v2.1.0</Code></p>
            </div>
            
            <h2 style={{ fontFamily: "Geist Bold" }} className="text-xl">Up next...</h2>
            
            <div className="flex flex-row gap-3 items-center">
              <Spinner classNames={{label: "text-foreground mt-4"}} variant="simple" color="default" />
              <p>NPM package <Code>dev</Code></p>
            </div>
            
            <h2 style={{ fontFamily: "Geist Bold" }} className="text-xl">Currently learning...</h2>
            <div className="flex flex-row gap-3 items-center">
              <Spinner classNames={{label: "text-foreground mt-4"}} variant="simple" color="warning" size="sm" />
              <img alt="C Sharp logo" aria-label="C Sharp logo" src="logo_csharp.png" className="inline" width={48}/>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <Spinner classNames={{label: "text-foreground mt-4"}} variant="simple" color="warning" size="sm" />
              <span className="font-['Segoe UI', SegoeUI, 'Helvetica Neue'] font-semibold text-lg ">.NET</span>
            </div>
          </CardBody>
        </Card>
    )
}
