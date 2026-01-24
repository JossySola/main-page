import { Card, Chip } from "@heroui/react";

export default function SoftSkills () {
    return (
        <Card>
            <h2 style={{ fontFamily: "Geist Bold" }} className="text-xl">Soft Skills</h2>
            <div className="flex flex-row flex-wrap gap-3 mt-5">
              <Chip>💪🏽 Team work</Chip>
              <Chip>💡 Initiative</Chip>
              <Chip>✨ Creativity</Chip>
              <Chip>🧠 Problem Solving</Chip>
              <Chip>🗣️ Effective Communication</Chip>
              <Chip>🔎 Attention to Detail</Chip>
            </div>
        </Card>
    )
}