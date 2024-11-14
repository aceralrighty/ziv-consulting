import Image from "next/image";
import school from "../public/indian_hills_community_college_logo.jpeg"

export default function Education() {
    return (
        <div className="flex flex-col items-center mt-16 space-y-8 pb-16">
            <h2 className="font-bold text-4xl font-instruItalic mb-4 text-nav_t_Color">Education</h2>
            <div className="w-3/4 md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md text-gray-800">
                <div className="flex flex-col space-y-8">
                    <div>
                        <div className="flex items-center space-x-4">
                            {/* Hide the logo on screens smaller than md */}
                            <div className="hidden md:block w-20 h-20 md:w-24 md:h-24 overflow-hidden">
                                <Image src={school} alt="school logo" className="object-cover w-full h-full"/>
                            </div>
                            <p className="text-lg font-bold">Indian Hills Community College</p>
                        </div>
                        <p className="text-md font-instruItalic text-gray-600 mt-2">Associate of Science - AS, Computer
                            Software Development</p>
                        <p className="text-sm font-semibold text-gray-500">May 2023 - Feb 2025</p>
                    </div>
                    <div className="text-left">
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>Focused on Web Development with a 3.5+ GPA</li>
                            <li>Developed projects using local databases, COBOL, and full-stack technologies</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    )
}