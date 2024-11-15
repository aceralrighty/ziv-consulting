"use client";
import { useState } from "react";

export default function Form() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            full_name: fullName,
            email: email,
            message: message,
        };

        try {
            const response = await fetch("http://127.0.0.1:5000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                new Error(`HTTP error! Status: ${response.status}`);
            }

            // Use .text() temporarily to inspect the response
            const data = await response.text();
            console.log("Response text:", data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="flex flex-col items-center mt-16 space-y-8 pb-16">
            <form
                onSubmit={handleSubmit}
                className="w-3/4 md:w-1/2 bg-item_bg dark:bg-item_bg_dark p-8 rounded-lg shadow-md text-gray-800 dark:text-body_t_color-dark"
            >
                <h1 className="text-2xl font-bold mb-6 text-center text-nav_t_Color dark:text-nav_t_color-dark">
                    Send me an email if you&#39;re interested
                </h1>

                <div className="flex flex-col space-y-4">
                    <label htmlFor="fullName" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        placeholder="Enter your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-item_bg dark:bg-global_bg_dark"
                    />

                    <label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="What is your email?"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-item_bg dark:bg-global_bg_dark"
                    />

                    <label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Message
                    </label>
                    <textarea
                        id="message"
                        placeholder="What kind of help are you looking for?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none bg-item_bg dark:bg-global_bg_dark"
                        rows="4"
                    />

                    <button
                        type="submit"
                        className="flex items-center justify-center space-x-2 p-3 mt-6 bg-blue-500 dark:bg-blue-600 text-white rounded-md hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-300"
                    >
                        <span>Submit</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                            />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
}
