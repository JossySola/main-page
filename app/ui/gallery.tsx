import { Button, Card, Tabs } from "@heroui/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowCircleLeft } from "./icons/vercel";
import type { Blobs } from "~/routes/art";

export default function Gallery ({ blobs }: {
    blobs: Blobs | []
}) {
    const [ currentPage, setCurrentPage ] = useState(1);
    const navigate = useNavigate();
    const metadata = [
        {
            caption: "Skull and Bear in clay 💀",
            alt: "Sculpt of a skull without jaw and a sculpt of a bear as part of a cup lid with both arms lying on the lid and his mouth open. They don't have paint."
        },
        {
            caption: "Prototype of a plant pot 🌱",
            alt: "Drawing in charcoal of a woman's torso with the four limbs cut off, headless, and herbs coming out the neck."
        },
        {
            caption: "Sculpt inspired on the Chatterer from Hellraiser 🎬",
            alt: "Sculpt in clay of a fictional character. It has no eyes, no nose, and no mouth. The teeth and gums are exposed and there is a line dividing half of the face. The space where the nose and eyes would be placed up to the top is filled with concave and irregular outlines representing tissue and veins. In the cheekbones are two concave triangles on each side. The neck has carved details giving illusion of tendons. It has a small ears and the figure is chest to head."
        },
        {
            caption: "Inspired by the Harry Potter Weasley's house 🏰",
            alt: "Sculpt in clay of a castle with irregular and asymmetrical parts and gable roofs. The castle sits on top of a base shaped like a sea wave. The roofs have a brick orangy color whereas the rest of the castle has a light beige color. The base has a carved texture giving the illusion of the water movement, and it is painted in a Steel Blue color."
        },
        {
            caption: "Woman torso as a plant pot 🌺",
            alt: "Woman torso with no limbs and head. The body is painted in a bright red and the nipples in navy blue. The figure is carved inside so it works as a plant pot. There are two pair of holes on each side where the legs would be, and their outlines painted in navy blue. These holes are meant to help the water come out."
        },
        {
            caption: "Skull in clay 🧱",
            alt: "Sculpt in clay of a skull with no jaw. It is carved inside and it has no paint."
        }
    ]
    return <section className="w-full h-screen flex flex-col justify-center items-center gap-5 p-5">
        <header className="w-full flex flex-col md:flex-row justify-center items-center">
            <Button
            isIconOnly
            size="lg"
            variant="tertiary"
            aria-label="Back button"
            onPress={() => navigate(-1) }>
                <ArrowCircleLeft />
            </Button>
            <h1 style={{ fontFamily: "Geist Bold" }} className="text-center text-3xl m-5">Gallery</h1>
        </header>
        <Card className="w-105.25 h-110 flex justify-center items-center">
            {
                blobs && blobs[currentPage] 
                ? (
                    <>
                    <img 
                    alt={ metadata[currentPage - 1].alt ?? "" }
                    width={350}
                    src={ blobs[currentPage].url ?? "" }
                    />
                    <Card.Footer  className="justify-center text-center before:bg-white/10 h-fit border-white/20 border overflow-auto p-2 absolute rounded-large bottom-0.5 w-[calc(100%-75px)] shadow-small z-10 backdrop-blur-sm bg-black/10 rounded-2xl">
                        <p className="text-tiny text-white/80">{ metadata[currentPage - 1].caption ?? "" }</p>
                    </Card.Footer>
                    </>
                )
                : null
            }
            
        </Card>
        <nav className="w-105.25">
        {
            <Tabs className="text-center">
                <Tabs.ListContainer>
                    <Tabs.List aria-label="Gallery pagination" className="w-full flex flex-row justify-center *:h-6 *:w-fit *:px-5 *:text-lg *:font-normal *:data-[selected=true]:text-accent-foreground">
                        {
                            blobs && blobs.map((_, index) => (
                                <Tabs.Tab 
                                key={ index }
                                id={ `tab-${index + 1}` }
                                aria-label={ `Go to page ${index + 1}` }
                                onPress={ () => setCurrentPage(index + 1) }>
                                    { index + 1 }
                                    <Tabs.Indicator className="bg-accent" />
                                </Tabs.Tab>
                            )) 
                        }
                    </Tabs.List>
                </Tabs.ListContainer>
            </Tabs>
        }
        </nav>
    </section>
}