import MainMenu from "~/ui/main-menu";
import type { Route } from "./+types/home";
import ProfileCard from "~/ui/profile-card";
import { motion } from "framer-motion";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jossy Sola" },
    { name: "description", content: "Jossy Sola's homepage" },
  ];
}

export default function Home() {
  return (
    <motion.main 
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }} 
    transition={{ delay: 0.3 }}
    className="w-full h-screen flex flex-col justify-center items-center">
      <ProfileCard />
      <MainMenu />
    </motion.main>
  );
}