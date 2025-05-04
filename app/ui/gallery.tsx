"use client"
import { Button, Pagination } from "@heroui/react";
import { useState } from "react";

export default function Gallery () {
    const [ currentPage, setCurrentPage ] = useState(1);

    return <section className="w-full h-screen flex flex-col justify-center items-center">
        <nav className="flex flex-row justify-center items-center gap-2">
            <Button 
            type="button"
            aria-label="previous"
            color="primary" 
            size="sm" 
            variant="flat"
            onPress={ () => setCurrentPage(prev => (prev > 1 ? prev - 1 : prev))}>
                {`<`}
            </Button>

            <Pagination 
            color="primary" 
            size="sm"
            initialPage={1} 
            total={10}
            page={ currentPage } 
            onChange={ setCurrentPage } />

            <Button 
            type="button"
            aria-label="next"
            color="primary" 
            size="sm" 
            variant="flat"
            onPress={ () => setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))}>
                {`>`}
            </Button>
        </nav>
    </section>
}