import { Avatar } from "@heroui/react";
import { Link } from "react-router";

export default function ProfileCard () {
    return <section className="flex flex-col justify-center items-center gap-1 p-5">
    <Avatar size="lg" className="ring-2 ring-background">
      <Avatar.Image
        className="object-cover"
        alt="Profile picture"
        src="me.webp"
      />
      <Avatar.Fallback 
      className="border-none bg-linear-to-br from-pink-500 to-purple-500 text-white">
        JS
      </Avatar.Fallback>
    </Avatar>
    <h1 style={{ fontFamily: "Geist Bold" }} className="text-3xl">Jossy Solá</h1>
    <p className="text-[#7a7a7a] text-sm">Based in México 📍</p>
    <p className="text-md">AuDHD left-handed alien 👽</p>
    <section className="flex flex-row justify-center items-center gap-4 mt-4">
      <Link to="https://github.com/JossySola" target="_blank">
        <img width={32} height={32} className="hidden dark:block h-8 object-contain" src="github-mark-white.png" alt="GitHub" title="GitHub" aria-label="GitHub Profile" />
        <img width={32} height={32} className="dark:hidden h-8 object-contain" src="github-mark.png" alt="GitHub" title="GitHub" aria-label="GitHub Profile" />
      </Link>
      <Link to="https://www.instagram.com/jossysolart/" target="_blank">
        <img width={32} height={32} src="instagram.webp" alt="Instagram" title="Instagram" aria-label="Instagram Profile" />
      </Link>
      <Link to="https://www.linkedin.com/in/jossysola/" target="_blank">
        <img width={32} height={32} className="h-8 object-contain" src="linkedin.png" alt="LinkedIn" title="LinkedIn" aria-label="LinkedIn Profile" />
      </Link>
    </section>
  </section>
}