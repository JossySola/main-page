"use client"
import { Button, Card, CardFooter, Image, Pagination } from "@heroui/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowCircleLeft } from "./icons/vercel";
import type { Blobs } from "~/routes/art";

export default function Gallery ({ blobs }: {
    blobs: Blobs | []
}) {
    const [ currentPage, setCurrentPage ] = useState(1);
    const navigate = useNavigate();

    return <section className="w-full h-screen flex flex-col justify-center items-center gap-5 p-5">
        <header className="w-full flex flex-col md:flex-row justify-center items-center">
            <Button 
            isIconOnly 
            aria-label="Go back button" 
            variant="light"
            onPress={() => navigate(-1) }>
                <ArrowCircleLeft />
            </Button>
            <h1 style={{ fontFamily: "Geist Bold" }} className="text-center text-3xl m-5">Gallery</h1>
        </header>
        
        {
            blobs && blobs[currentPage - 1] ?
            <Card isFooterBlurred className="border-none" radius="lg">
                <Image 
                alt=""
                width={350}
                src={ blobs[currentPage - 1].pathname ?? "" }
                />
                <CardFooter className="justify-center before:bg-white/10 h-fit border-white/20 border-1 overflow-hidden py-3 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-tiny text-white/80">Caption</p>
                </CardFooter>
            </Card> : 
            <p className="text-2xl text-slate-400">Empty</p>
        }
        
        
        <nav className="flex flex-row justify-center items-center gap-2">
            <Button 
            type="button"
            className="!rounded-e-none flex flex-wrap truncate box-border items-center justify-center text-default-foreground data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 data-[disabled=true]:text-default-300 data-[disabled=true]:pointer-events-none shadow-xs bg-default-100 [&[data-hover=true]:not([data-active=true])]:bg-default-200 active:bg-default-300 min-w-0 w-[40px] h-10 text-medium rounded-medium p-0 mr-[-40px] z-10"
            aria-label="previous"
            color="default" 
            size="lg" 
            variant="flat"
            onPress={ () => setCurrentPage(prev => (prev > 1 ? prev - 1 : prev))}>
                <svg 
                aria-hidden="true" 
                fill="none" 
                focusable="false" 
                height="16px" 
                role="presentation" 
                viewBox="0 0 24 24" 
                width="16px">
                    <path 
                    d="M15.5 19l-7-7 7-7" 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.5">
                    </path>
                </svg>
            </Button>

            <Pagination 
            isCompact
            color="primary" 
            classNames={{
                wrapper: "pl-10 pr-10 bg-default-100"
            }}
            size="lg"
            initialPage={1} 
            total={ blobs && blobs.length - 1 }
            page={ currentPage } 
            onChange={ setCurrentPage } />

            <Button 
            type="button"
            className="!rounded-s-none  truncate box-border items-center justify-center text-default-foreground data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 data-[disabled=true]:text-default-300 data-[disabled=true]:pointer-events-none shadow-xs bg-default-100 [&[data-hover=true]:not([data-active=true])]:bg-default-200 active:bg-default-300 min-w-0 w-10 h-10 text-medium rounded-medium p-0 ml-[-40px] z-10"
            aria-label="next"
            color="default" 
            size="lg" 
            variant="flat"
            onPress={ () => setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))}>
                <svg 
                aria-hidden="true" 
                fill="none" 
                focusable="false" 
                height="16px" 
                role="presentation" 
                viewBox="0 0 24 24" 
                width="16px" 
                className="rotate-180">
                    <path d="M15.5 19l-7-7 7-7" 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.5">
                    </path>
                </svg>
            </Button>
        </nav>
    </section>
}