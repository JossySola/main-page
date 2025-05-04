import { Button, Input, Textarea } from "@heroui/react";
import { Form } from "react-router";
import { z } from "zod";

export default function ContactForm () {
    return <section className="p-5 w-full flex flex-col justify-center items-center">
        <Form method="post" className="w-full flex flex-col gap-3 sm:w-md sm:justify-center sm:items-center">
            <Input 
            label="Name" 
            placeholder="Your name" 
            type="name" 
            name="name" 
            size="lg"
            validate={ value => {
                const validation = z.string().safeParse(value);
                if (!validation.success) {
                    return "Enter your name.";
                }
            }}
            isRequired isClearable />
            <Input 
            label="Email" 
            placeholder="name@domain.com" 
            type="email" 
            name="email" 
            size="lg"
            validate={ value => {
                const validation = z.string().email().safeParse(value);
                if (!validation.success) {
                    return "Enter a valid email.";
                }
            }}
            isRequired isClearable />
            <Textarea 
            label="Message" 
            placeholder="Enter your message"
            name="message"
            size="lg"
            minRows={1}
            maxRows={10}
            isRequired isClearable />
            <Button type="submit" size="lg" color="primary" className="m-5">Send</Button>
        </Form>
    </section>
}