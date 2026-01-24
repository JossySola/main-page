import { Card, Chip } from "@heroui/react";
import { cardVariants } from "@heroui/styles";

export default function Certifications () {
  const slots = cardVariants();

  return (
      <Card className={slots.base()}>
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
      </Card>
  )
}