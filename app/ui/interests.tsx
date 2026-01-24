import { Card, Chip } from "@heroui/react";

export default function Interests () {
    return (
        <Card>
            <h2 style={{ fontFamily: "Geist Bold" }} className="text-xl">Interests</h2>
            <div className="flex flex-row flex-wrap gap-3 mt-5">
              <Chip>👨🏾‍💻 Coding</Chip>
              <Chip>🎨 Art</Chip>
              <Chip>🎮 Gaming</Chip>
              <Chip>📖 Reading</Chip>
            </div>
        </Card>
    )
}