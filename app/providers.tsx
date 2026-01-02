import { HeroUIProvider } from "@heroui/react";

export default function ClientSideProvider ({ children }: {
    children: React.ReactNode,
}) {
    return <HeroUIProvider>
        { children }
    </HeroUIProvider>
}