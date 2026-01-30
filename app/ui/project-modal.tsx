import { Button, Card, Chip, Link, Modal } from "@heroui/react";
import pkg from '@gravity-ui/icons';
const {CircleFill} = pkg;
import type { SanitizedType } from "~/lib/types";

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
                                <CircleFill width={6} />
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
                            <Modal.Heading>
                                <h2>{blob.data.name}</h2>
                            </Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            <Link
                                aria-label="Go to repository"
                                href={blob.data.repository}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Repository
                                <Link.Icon aria-hidden="true" />
                            </Link>
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