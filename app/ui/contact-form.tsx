'use client'
import { Button, Input, Textarea } from "@heroui/react";
import { useEffect, useState } from "react";
import { useFetcher } from "react-router";
import { z } from "zod";

export default function ContactForm () {
    const fetcher = useFetcher();
    const [ name, setName ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ message, setMessage ] = useState<string>('');

    useEffect(() => {
        if (fetcher.data?.success) {
            setName('');
            setEmail('');
            setMessage('');
        }
    }, [fetcher.data]);

    return <section className="p-5 w-full flex flex-col justify-center items-center">
        <fetcher.Form method="post"  className="w-full flex flex-col gap-3 sm:w-md sm:justify-center sm:items-center">
            <Input 
            label="Name" 
            labelPlacement="outside"
            placeholder="Your name" 
            type="name" 
            name="name" 
            size="lg"
            value={ name }
            onValueChange={ setName }
            validate={ value => {
                const validation = z.string().safeParse(value);
                if (!validation.success) {
                    return "Enter your name.";
                }
            }}
            isRequired isClearable />
            <Input 
            label="Email" 
            labelPlacement="outside"
            placeholder="name@domain.com" 
            type="email" 
            name="email" 
            size="lg"
            value={ email }
            onValueChange={ setEmail }
            validate={ value => {
                const validation = z.string().email().safeParse(value);
                if (!validation.success) {
                    return "Enter a valid email.";
                }
            }}
            isRequired isClearable />
            <Textarea 
            label="Message" 
            labelPlacement="outside"
            placeholder="Enter your message"
            name="message"
            size="lg"
            value={ message }
            onValueChange={ setMessage }
            minRows={ 1 }
            maxRows={ 10 }
            isRequired isClearable />
            { fetcher.data?.message && <p className={`text-center ${fetcher.data.success === true ? "text-green-600" : "text-red-600" }`}>{ fetcher.data.message }</p> }
            <Button 
            type="submit" 
            size="lg" 
            color="primary" 
            className="m-5" 
            isDisabled={ fetcher.state !== "idle" } 
            isLoading={ fetcher.state !== "idle" }>
                { fetcher.state !== "idle" 
                ? "Sending..."
                : "Send" }
            </Button>
        </fetcher.Form>
    </section>
}

