import Image from "next/image";
import school from "/public/indian_hills_community_college_logo.jpeg"

export default function Education() {
    return (
        <div className="flex flex-col items-center mt-16 space-y-8 pb-16">
            <h2 className="font-bold text-4xl font-instruItalic mb-4 text-nav_t_Color dark:text-nav_t_color-dark">
                Education
            </h2>
            <div
                className="w-3/4 md:w-1/2 bg-item_bg dark:bg-item_bg_dark p-6 rounded-lg shadow-md text-gray-800 dark:text-body_t_color-dark">
                <div className="flex flex-col space-y-8">
                    <div>
                        <div className="flex items-start space-x-4">
                            <div className="hidden md:block w-20 h-20 md:w-24 md:h-24 overflow-hidden flex-shrink-0">
                                <Image
                                    src={school}
                                    alt="school logo"
                                    className="object-cover w-full h-full rounded-lg"
                                />
                            </div>
                            <div className="text-left">
                                <p className="text-lg font-bold text-nav_t_Color dark:text-nav_t_color-dark">
                                    Indian Hills Community College
                                </p>
                                <p className="text-md font-instruItalic text-gray-600 dark:text-gray-300 mt-2">
                                    Associate of Applied Science - A.A.S, Computer Software Development
                                </p>
                                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                                    May 2023 - Feb 2025
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-left">
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                            <li>Focused on Web Development with a 3.5+ GPA</li>
                            <li>Developed projects using local databases, COBOL, and full-stack technologies</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
