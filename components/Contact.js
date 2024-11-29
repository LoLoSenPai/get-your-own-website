import React from "react";

export default function Contact() {
    return (
        <div className="py-16 px-4 bg-black text-neutral-200">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-fuchsia-600">
                Contact Me
            </h2>
            <form
                action="#"
                method="POST"
                className="max-w-3xl mx-auto bg-neutral-800 p-8 rounded-lg shadow-lg"
            >
                {/* Nom */}
                <div className="mb-6">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-neutral-400"
                    >
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="mt-2 w-full px-4 py-2 rounded-lg bg-neutral-700 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
                    />
                </div>

                {/* Email */}
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-400"
                    >
                        Your Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-2 w-full px-4 py-2 rounded-lg bg-neutral-700 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
                    />
                </div>

                {/* Message */}
                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-neutral-400"
                    >
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        className="mt-2 w-full px-4 py-2 rounded-lg bg-neutral-700 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-sky-600 to-fuchsia-600 text-white px-6 py-3 rounded-lg font-medium hover:from-sky-700 hover:to-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
}
