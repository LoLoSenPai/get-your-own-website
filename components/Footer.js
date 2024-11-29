"use client";
import React from "react";

export function Footer() {
    return (
        <footer className="bg-black text-slate-100 py-12 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="mb-6">
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-cyan-500 mx-2"
                        >
                            Twitter
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-cyan-500 mx-2"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-cyan-500 mx-2"
                        >
                            LinkedIn
                        </a>
                    </div>
                    <p>
                        &copy; <span id="year">{new Date().getFullYear()}</span> BlockchainDev.
                        {/* &copy; <span id="year">2024</span> BlockchainDev. */}
                        All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}