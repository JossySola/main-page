"use client"
import { useEffect, useState } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const savedTheme = window.localStorage.getItem("theme") || "dark";
        setTheme(savedTheme);
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            window.localStorage.setItem("theme", theme);
            document.documentElement.className = theme;
            document.documentElement.setAttribute("data-theme", theme);
        }
    }, [theme, mounted]);

    return (
        <html lang="en" className={theme} data-theme={theme}>
            {children}
        </html>
    )
}