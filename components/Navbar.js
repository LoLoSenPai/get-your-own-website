"use client";
import React from "react";
import Image from "next/image";

export function Navbar() {
    return (
        <nav
            className="fixed w-full bg-white/10 backdrop-blur-md border-b border-white/20 shadow-md z-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Image
                            src="/cat-avatar.png"
                            alt="Logo"
                            width={60}
                            height={60}
                            className="rounded-full"
                        />
                        {/* <a href="/" className="text-2xl font-bold neon-title">BlockchainDev</a> */}
                    </div>
                    <div className="flex items-center space-x-8 text-slate-300">
                        <a href="#services" className="hover:text-cyan-500 transition-colors"
                        >Services</a
                        >
                        <a href="#examples" className="hover:text-cyan-500 transition-colors"
                        >Examples</a
                        >
                        <a href="#contact" className="hover:text-cyan-500 transition-colors"
                        >Contact</a
                        >
                    </div>
                </div>
            </div>
        </nav>
    );
}