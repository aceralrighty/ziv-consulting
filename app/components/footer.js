import Image from "next/image";
import Instagram from "/public/icons/instagram.svg";
import LinkedIn from "/public/icons/LinkedIn.svg";

export default function Footer() {
    return (
        <footer className="w-full px-4 sm:px-12 py-2 sm:py-3 mt-16">
            <div className="w-full bg-item-bg dark:bg-item-bg-dark px-6 py-4 rounded-t-lg shadow-md">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div
                        className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1 flex-1">
                        <h2 className="text-base sm:text-lg font-bold font-instru-italic text-nav-t-color dark:text-nav-t-color-dark">
                            I hope you had a pleasant visit
                        </h2>
                        <p className="text-xs text-body-t-color dark:text-body-t-color-dark">
                            &copy; 2024 Ziv Consulting, LLC. All rights reserved.
                        </p>
                    </div>

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
        </footer>
    );
}
