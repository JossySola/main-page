import { Card, CardBody, Chip } from "@heroui/react";

export default function SoftSkills () {
    return (
        <Card classNames={{
          base: "w-full sm:min-w-[277px] sm:w-80 h-fit sm:h-fit bg-default-100 p-5"
        }}>
          <CardBody>
            <h2 style={{ fontFamily: "Geist Bold" }} className="text-xl">Soft Skills</h2>
            <div className="flex flex-row flex-wrap gap-3 mt-5">
              <Chip>💪🏽 Team work</Chip>
              <Chip>💡 Initiative</Chip>
              <Chip>✨ Creativity</Chip>
              <Chip>🧠 Problem Solving</Chip>
              <Chip>🗣️ Effective Communication</Chip>
            </div>
          </CardBody>
        </Card>
    )
}