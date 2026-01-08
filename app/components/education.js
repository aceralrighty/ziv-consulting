import Image from "next/image";
import school from "../../public/indian_hills_community_college_logo.jpeg"

export default function Education() {
    return (
        <div className="flex flex-col items-center mt-16 space-y-8 pb-16">
            <h2 className="font-bold text-4xl font-instru-italic mb-4 text-nav-t dark:text-nav-t-dark">
                Education
            </h2>
            {/* Corrected text color classes */}
            <div
                className="w-3/4 md:w-1/2 bg-item-bg dark:bg-item-bg-dark p-6 rounded-lg shadow-md text-body-t dark:text-body-t-dark">
                <div className="flex flex-col space-y-8">
                    <div>
                        <div className="flex items-start space-x-4">
                            <div className="hidden md:block w-20 h-20 md:w-24 md:h-24 overflow-hidden shrink-0">
                                <Image
                                    src={school}
                                    alt="school logo"
                                    className="object-cover w-full h-full rounded-lg"
                                />
                            </div>
                            <div className="text-left">
                                {/* Corrected text color classes */}
                                <p className="text-lg font-bold text-nav-t dark:text-nav-t-dark">
                                    Indian Hills Community College
                                </p>
                                {/* Replaced hardcoded gray with theme colors */}
                                <p className="text-md font-instru-italic text-body-t dark:text-body-t-dark mt-2">
                                    Associate of Applied Science - A.A.S, Computer Software
                                </p>
                                <p className="text-sm font-semibold text-body-t dark:text-body-t-dark">
                                    May 2023 - Feb 2025
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-left">
                        <ul className="list-disc list-inside text-body-t dark:text-body-t-dark space-y-1">
                            <li>Focused on Web Development with a 3.5+ GPA</li>
                            <li>Developed projects using local databases, COBOL, and full-stack technologies</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}