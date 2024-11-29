'use client';

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsComponent() {
    const testimonials = [
        {
            quote:
                "We were able to launch our project in record time thanks to the platform's ease of use and flexibility.",
            name: "Swoop",
            designation: "Memecoin Project",
            src: "/swoop.jpg",
        },
        {
            quote:
                "The platform has helped us streamline our processes, and the team has been incredibly helpful every step of the way.",
            name: "RoroLand",
            designation: "Memecoin Project",
            src: "/roro.jpeg",
        },
        {
            quote:
                "We've been able to greatly reduce the time it takes to create new campaigns. I can't imagine using anything else.",
            name: "Kitto",
            designation: "NFT Project",
            src: "/kitto.png",
        },
        {
            quote:
                "From raffle tickets to NFTs, the platform has been a game-changer for our project. The support team is also incredibly helpful.",
            name: "Ogronex",
            designation: "NFT Project",
            src: "/ogre2.jpg",
        },
        {
            quote:
                "Really good experience with the platform. The team is always there to help when you need them.",
            name: "Pyro",
            designation: "NFT Project",
            src: "/pyro.png",
        },
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}
