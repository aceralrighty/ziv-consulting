import React from 'react';

export default function Awards() {
    return (
        <div className="flex flex-col items-center mt-16 space-y-8 pb-16">
            <h2 className="font-bold text-4xl font-instru-italic mb-4 text-nav-t dark:text-nav-t-dark">
                Awards
            </h2>
            <div className="w-3/4 md:w-1/2 bg-item-bg dark:bg-item-bg-dark p-6 rounded-lg shadow-md text-gray-800 dark:text-body-t-color-dark">
                <div className="flex flex-col space-y-8">

                    <div>
                        <p className="text-lg font-bold text-nav-t-color dark:text-nav-t-color-dark">
                            Students Choice Winner
                        </p>
                        <p className="text-md font-instru-italic text-gray-600 dark:text-gray-300">Byte Jam</p>
                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                            Issued by Indian Hills Community College ~ Nov 2024
                        </p>
                    </div>

                    <div className="text-left">
                        <p className="text-md text-gray-700 dark:text-gray-300">
                            <span className="font-semibold">Associated with:</span> Indian Hills Community College
                        </p>
                    </div>

                    <div className="text-left">
                        <p className="text-md leading-relaxed text-gray-700 dark:text-gray-300">
                            Byte Jam is a competition built on connecting computer software development students with
                            each other to communicate, build, and problem-solve solutions that ultimately become a
                            project that
                            you should be proud to show off to potential employers.
                        </p>
                    </div>

                    <div>
                        <p className="text-lg font-bold text-nav-t-color dark:text-nav-t-color-dark">
                            Honor Roll
                        </p>
                        <p className="text-md font-instru-italic text-gray-600 dark:text-gray-300">
                            Issued by Indian Hills Community College ~ May 2024
                        </p>
                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                            Associated with Indian Hills Community College
                        </p>
                    </div>

                    <div className="text-left">
                        <p className="text-md leading-relaxed text-gray-700 dark:text-gray-300">
                            As I maintained a GPA of 3.5 or higher, I was honored with the honor roll award during the
                            summer
                            of 2023, the fall of 2023, the spring of 2024, and the summer of 2024.
                        </p>
                    </div>

                    <div className="text-left">
                        <h3 className="text-lg font-semibold text-nav-t-color dark:text-nav-t-color-dark">
                            Other Awards
                        </h3>
                    </div>

                    <div className="text-left">
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                            <li>Achievement Certification from Cambridge Investment Research, Inc.</li>
                            <li>IDF Basic Training Certificate of Excellence</li>
                            <li>High School Israel Certificates of Excellence</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}