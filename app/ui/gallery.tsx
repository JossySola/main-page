"use client"
import { Button, Pagination } from "@heroui/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowCircleLeft } from "./icons/vercel";
import type { Blobs } from "~/routes/art";

export default function Gallery ({ blobs }: {
    blobs: Blobs | []
}) {
    const [ currentPage, setCurrentPage ] = useState(1);
    const navigate = useNavigate();

    return <section className="w-full h-screen flex flex-col justify-center items-center gap-5">
        <Button 
        isIconOnly 
        aria-label="Go back button" 
        variant="light"
        onPress={() => navigate(-1) }>
            <ArrowCircleLeft />
        </Button>
        <nav className="flex flex-row justify-center items-center gap-2">
            <Button 
            type="button"
            className="text-lg"
            aria-label="previous"
            color="default" 
            size="lg" 
            variant="flat"
            onPress={ () => setCurrentPage(prev => (prev > 1 ? prev - 1 : prev))}>
                {`<`}
            </Button>

            <Pagination 
            color="primary" 
            size="lg"
            initialPage={1} 
            total={10}
            page={ currentPage } 
            onChange={ setCurrentPage } />

            <Button 
            type="button"
            className="text-lg"
            aria-label="next"
            color="default" 
            size="lg" 
            variant="flat"
            onPress={ () => setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))}>
                {`>`}
            </Button>
        </nav>
    </section>
}