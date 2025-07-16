import Image from "next/image";
import Instagram from "/public/icons/instagram.svg";
import LinkedIn from "/public/icons/LinkedIn.svg";

export default function Footer() {
    return (
        <footer className="w-full px-4 sm:px-12 py-2 sm:py-3 mt-16">
            <div className="w-full bg-item-bg dark:bg-item-bg-dark px-6 py-4 rounded-t-lg shadow-md">
                <div className="flex flex-col gap-4">
                    {/* Centered goodbye message */}
                    <h2 className="text-base sm:text-lg font-bold font-instru-italic text-nav-t dark:text-nav-t-dark text-center">
                        I hope you had a pleasant visit
                    </h2>

                    {/* Main content area with text and icons */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        {/* Copyright and disclaimer section */}
                        <div
                            className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1 flex-1 max-w-2xl">
                            <p className="text-xs text-body-t dark:text-body-t-dark">
                                &copy; 2024 Ziv Consulting, LLC. All rights reserved.
                            </p>
                            <p className="text-xs text-body-t dark:text-body-t-dark">
                                The contact form above is a technical demonstration of SendGrid integration. Messages go
                                directly to my inbox but no personal information is stored or retained. Feel free to
                                test it out!
                            </p>
                        </div>

                        {/* Social media icons */}
                        <div className="flex space-x-4">
                            <a
                                href="https://www.instagram.com/adam__ziv/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <Image
                                    src={Instagram}
                                    alt="Instagram"
                                    width={24}
                                    height={24}
                                    className="hover:opacity-80 transition-opacity"
                                />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/adamzivwall/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <Image
                                    src={LinkedIn}
                                    alt="LinkedIn"
                                    width={24}
                                    height={24}
                                    className="hover:opacity-80 transition-opacity"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}