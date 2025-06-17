"use client";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Form() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify({
                    full_name: fullName,
                    email,
                    message,
                }),
            });

            if (response.ok) {
                toast.success("Message sent successfully!", {
                    position: "bottom-right",
                });
                setFullName("");
                setEmail("");
                setMessage("");
            } else {
                toast.error("Message failed to send", {
                    position: "bottom-right",
                });
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
            toast.error("An unexpected error occurred. Please try again later.", {
                position: "bottom-right",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className="flex flex-col items-center mt-16 space-y-8 pb-16"
            id="contact"
        >
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-3xl bg-item-bg dark:bg-item-bg-dark p-8 rounded-lg shadow-md text-body-t-color dark:text-body-t-color-dark"
            >
                <h1 className="text-2xl font-bold mb-6 text-center text-nav-t-color dark:text-nav-t-color-dark">
                    Send me an email if you're interested
                </h1>

                <div className="flex flex-col space-y-4">
                    <label
                        htmlFor="fullName"
                        className="text-sm font-semibold text-body-t-color dark:text-body-t-color-dark"
                    >
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Enter your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-item-bg dark:bg-global-bg-dark"
                    />

                    <label
                        htmlFor="email"
                        className="text-sm font-semibold text-body-t-color dark:text-body-t-color-dark"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="What is your email?"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-item-bg dark:bg-global-bg-dark"
                    />

                    <label
                        htmlFor="message"
                        className="text-sm font-semibold text-body-t-color dark:text-body-t-color-dark"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="What kind of help are you looking for?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none bg-item-bg dark:bg-global-bg-dark"
                        rows="4"
                    />

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`flex items-center justify-center space-x-2 p-3 mt-6 rounded-md transition-colors duration-300 ${
                            isLoading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white"
                        }`}
                    >
                        {isLoading ? (
                            <>
                                <svg
                                    className="animate-spin h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 100 8v4a8 8 0 01-8-8z"
                                    ></path>
                                </svg>
                                <span>Sending...</span>
                            </>
                        ) : (
                            <>
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
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
