import { Switch } from "@heroui/react";
import { useEffect, useState } from "react";
import Moon from "@gravity-ui/icons/Moon";
import Sun from "@gravity-ui/icons/Sun";

export function ThemeToggle() {
    const [theme, setTheme] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const savedTheme = window.localStorage.getItem("theme") || "dark";
        setTheme(savedTheme === "dark");
        setMounted(true);
    }, []);

    const handleThemeChange = (isSelected: boolean) => {
        const newTheme = isSelected ? "dark" : "light";
        setTheme(isSelected);
        window.localStorage.setItem("theme", newTheme);
        document.documentElement.className = newTheme;
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    if (!mounted) return null;

    return (
        <Switch 
            size="lg" 
            className="fixed top-4 right-4 z-50" 
            aria-label="theme toggle"
            isSelected={theme}
            onChange={handleThemeChange}>
            <Switch.Control className={"bg-gray-300 dark:bg-yellow-400"}>
                <Switch.Thumb>
                    <Switch.Icon className="text-gray-900">
                        {theme ? (
                            <Sun />
                        ) : (
                            <Moon />
                        )}
                    </Switch.Icon>
                </Switch.Thumb>
            </Switch.Control>
        </Switch>
    );
}
