import { Card, CardBody, Chip } from "@heroui/react";

export default function Interests () {
    return (
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
    )
}