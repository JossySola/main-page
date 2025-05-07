"use client"
import { Button, Card, CardFooter, Image, Pagination } from "@heroui/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowCircleLeft } from "./icons/vercel";
import { motion } from "framer-motion";
import type { Blobs } from "~/routes/art";

export default function Gallery ({ blobs }: {
    blobs: Blobs | []
}) {
    const [ currentPage, setCurrentPage ] = useState(1);
    const navigate = useNavigate();

    const metadata = [
        {
            caption: "Skull and Bear in clay",
            alt: "Sculpt of a skull without jaw and a sculpt of a bear as part of a cup lid with both arms lying on the lid and his mouth open. They don't have paint."
        },
        {
            caption: "Prototype of a plant pot 🌱",
            alt: "Drawing in charcoal of a woman's torso with the four limbs cut off, headless, and herbs coming out the neck."
        },
        {
            caption: "Sculpt inspired on the Chatterer from Hellraiser",
            alt: "Sculpt in clay of a fictional character. It has no eyes, no nose, and no mouth. The teeth and gums are exposed and there is a line dividing half of the face. The space where the nose and eyes would be placed up to the top is filled with concave and irregular outlines representing tissue and veins. In the cheekbones are two concave triangles on each side. The neck has carved details giving illusion of tendons. It has a small ears and the figure is chest to head."
        },
        {
            caption: "Inspired by the Harry Potter Weasley's house",
            alt: "Sculpt in clay of a castle with irregular and asymmetrical parts and gable roofs. The castle sits on top of a base shaped like a sea wave. The roofs have a brick orangy color whereas the rest of the castle has a light beige color. The base has a carved texture giving the illusion of the water movement, and it is painted in a Steel Blue color."
        },
        {
            caption: "Woman torso as a plant pot",
            alt: "Woman torso with no limbs and head. The body is painted in a bright red and the nipples in navy blue. The figure is carved inside so it works as a plant pot. There are two pair of holes on each side where the legs would be, and their outlines painted in navy blue. These holes are meant to help the water come out."
        },
        {
            caption: "Skull in clay",
            alt: "Sculpt in clay of a skull with no jaw. It is carved inside and it has no paint."
        }
    ]
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
            blobs && blobs[currentPage] ?
            
                <Card isFooterBlurred className="border-none" radius="lg">
                    <motion.div
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    transition={{ delay: 0.3 }}>
                        <Image 
                        alt={ metadata[currentPage - 1].alt ?? "" }
                        width={350}
                        src={ blobs[currentPage].url ?? "" }
                        />
                    </motion.div>
                    <CardFooter className="justify-center before:bg-white/10 h-fit border-white/20 border-1 overflow-hidden py-3 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="text-tiny text-white/80">{ metadata[currentPage - 1].caption ?? "" }</p>
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
            onPress={ () => setCurrentPage(prev => (prev > 1 ? prev - 1 : prev)) }>
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
            onPress={ () => setCurrentPage((prev) => (prev < (blobs && blobs.length - 1) ? prev + 1 : prev))}>
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