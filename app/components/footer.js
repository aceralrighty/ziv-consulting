import Image from "next/image";
import Instagram from "/public/icons/instagram.svg";
import LinkedIn from "/public/icons/LinkedIn.svg";

export default function Footer() {
    return (
        <footer className="w-full px-4 sm:px-12 py-2 sm:py-3">
            <div className="w-full bg-item_bg dark:bg-item_bg_dark px-4 sm:px-6 rounded-t-lg shadow-lg">

                <div className="flex items-center justify-between">

                    <div className="flex flex-col items-center text-center space-y-1 flex-1">
                        <h2 className="font-bold text-base sm:text-lg font-instruItalic text-nav_t_Color dark:text-nav_t_color-dark">
                            I hope you had a pleasant visit
                        </h2>
                        <p className="text-xs text-gray-500 dark:text-gray-300">
                            &copy; 2024 Ziv Consulting, LLC. All rights reserved.
                        </p>
                    </div>


                    <div className="flex space-x-4">

                        <a href="https://www.instagram.com/adam__ziv/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Image
                                src={Instagram}
                                alt="Instagram"
                                width={24}
                                height={24}
                                className="hover:opacity-80 transition-opacity"
                            />
                        </a>


                        <a href="https://www.linkedin.com/in/adamzivwall/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
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
