"use client"
import {useState} from "react";

export default function Form() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!fullName || !email || !message) {
            alert("Please fill in all fields.");
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST", // Send as POST request
                headers: {
                    "Content-Type": "application/json", // Set the content type to JSON
                },
                body: JSON.stringify({
                    full_name: fullName,
                    email: email,
                    message: message,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Success:", data);
                setIsLoading(false);
                setFullName("");
                setEmail("");
                setMessage("");
                alert("Your message has been sent successfully!");
            } else {
                const errorData = await response.json();
                console.error("Error:", errorData);
                setIsLoading(false);
                alert("Failed to send your message. Please try again later.");
            }
        } catch (error) {
            setIsLoading(false);
            console.error("Error submitting the form:", error);
            alert("Failed to send your message. Please try again later.");
        }
    };

    return (
        <div className="flex flex-col items-center mt-16 space-y-8 pb-16">
            <form
                onSubmit={handleSubmit}
                className="w-3/4 md:w-1/2 bg-item_bg dark:bg-item_bg_dark p-8 rounded-lg shadow-md text-gray-800 dark:text-body_t_color-dark"
            >
                <h1 className="text-2xl font-bold mb-6 text-center text-nav_t_Color dark:text-nav_t_color-dark">
                    Send me an email if you're interested
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
