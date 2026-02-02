import { Button, Card, Chip, Link, Modal, Separator, Tooltip } from "@heroui/react";
import type { SanitizedType } from "~/lib/types";
import { Globe, LogoGithub } from "./icons/vercel";

export default function ProjectModal({ blob }: { blob: SanitizedType }) {
    return (
        <Modal>
            <Modal.Trigger>
                <Card className="w-full flex flex-col sm:flex-row">
                    <div className="flex flex-col justify-center items-center bg-white p-7 rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none sm:w-2/3">
                        <img src={blob.imageUrl} className="w-70 object-scale-down bg-white" />
                    </div>
                    <Card.Header className="space-y-2">
                        <Card.Title className="text-2xl flex flex-row gap-2">
                            {blob.data.name}
                            <Chip color="accent" variant="primary">
                                {blob.data.version}
                            </Chip>
                        </Card.Title>
                        <Card.Description>{blob.data.description}</Card.Description>
                    </Card.Header>
                </Card>
            </Modal.Trigger>
            <Modal.Backdrop variant="blur" isDismissable={true} isKeyboardDismissDisabled={false}>
                <Modal.Container placement="center" size="cover">
                    <Modal.Dialog>
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon></Modal.Icon>
                            <Modal.Heading className="w-full text-center flex flex-col gap-2">
                                <h2 className="text-3xl flex flex-row justify-center items-center gap-2">
                                    {blob.data.name} 
                                    <Chip color="accent" variant="primary">
                                        {blob.data.version}
                                    </Chip>
                                </h2>
                                <section className="flex flex-row items-center justify-center gap-3">
                                    <Link
                                    className="flex flex-row gap-1"
                                    aria-label="Go to repository"
                                    href={blob.data.repository}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                        <LogoGithub />
                                        Repository
                                        <Link.Icon aria-hidden="true" />
                                    </Link>
                                    <Link
                                    className="flex flex-row gap-1"
                                    aria-label="Go to live website"
                                    href={blob.data.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                        <Globe />
                                        Live Website
                                        <Link.Icon aria-hidden="true" />
                                    </Link>
                                </section>
                                <Separator className="my-4" />
                            </Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            <h3 className="text-2xl text-white py-3">Overview</h3>
                            <p>{blob.data.description}</p>

                            <h3 className="text-2xl text-white py-3">Stack</h3>
                            <div className="flex -space-x-1">
                                <div className="flex items-center justify-center h-auto w-max" role="group">
                                    {
                                        blob.data.stack.map(tech => (
                                            <Tooltip key={tech} delay={0}>
                                                <span className="flex relative justify-center items-center box-border overflow-hidden align-middle z-0 outline-solid outline-transparent data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 w-10 h-10 text-tiny bg-default text-default-foreground rounded-full -ms-2 data-[hover=true]:-translate-x-3 rtl:data-[hover=true]:translate-x-3 transition-transform data-[focus-visible=true]:-translate-x-3 rtl:data-[focus-visible=true]:translate-x-3">
                                                    <img className="flex w-full h-full transition-opacity duration-500! opacity-0 data-[loaded=true]:opacity-100 object-scale-down-1 p-1" alt="avatar" src={`${tech}.svg`} data-loaded="true" />
                                                </span>
                                                <Tooltip.Content>{tech}</Tooltip.Content>
                                            </Tooltip>
                                        ))
                                    }
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button slot="close" variant="secondary">Close</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    )
}