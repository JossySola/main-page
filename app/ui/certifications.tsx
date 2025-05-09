import { Card, CardBody, Chip } from "@heroui/react";

export default function Certifications () {
    return (
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
    )
}