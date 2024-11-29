"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import {
    IconBrandDiscord,
    IconBrandX,
    IconBrandLinkedin,
} from "@tabler/icons-react";
import Link from "next/link";

export function SignupFormDemo() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        (<div
            className="max-w-md w-full mx-auto rounded-none md:rounded-2xl lg:min-w-[40%] p-4 md:p-8 shadow-input bg-slate-500/20">
            <h2 className="font-bold text-xl text-neutral-300 dark:text-neutral-200">
                Let&apos;s talk about your project
            </h2>
            <p className="text-neutral-400 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Fill out the form below to get started. We will get back to you as soon as
                possible.
            </p>
            <form className="my-8 space-y-6" onSubmit={handleSubmit}>
                <LabelInputContainer>
                    <Label htmlFor="name" className='text-slate-400'>Contact name / Project</Label>
                    <Input id="name" placeholder="Emon Lusk" type="text" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email" className='text-slate-400'>Email Address</Label>
                    <Input id="email" placeholder="myproject@bayc.eth" type="email" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="message"></Label>
                    <textarea
                        id="message"
                        placeholder="Your message"
                        rows="4"
                        className="flex w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50"
                    ></textarea>
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Send &rarr;
                    <BottomGradient />
                </button>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                <div className="flex flex-row space-x-4">
                    <Link
                        href="https://discord.com/users/280514098599428097"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    >
                        <IconBrandDiscord className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">Discord</span>
                        <BottomGradient />
                    </Link>
                    <Link
                        href="https://x.com/LoicDlugosz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    >
                        <IconBrandX className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">Twitter</span>
                        <BottomGradient />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/lo%C3%AFc-dlugosz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    >
                        <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">LinkedIn</span>
                        <BottomGradient />
                    </Link>
                </div>
            </form>
        </div>)
    );
}

const BottomGradient = () => {
    return (<>
        <span
            className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span
            className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>);
};

const LabelInputContainer = ({
    children,
    className
}) => {
    return (
        (<div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>)
    );
};
