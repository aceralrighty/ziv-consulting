export default function Languages() {
    return (
        <div className="flex flex-col items-center mt-16 space-y-8 pb-16">
            <h2 className="font-bold text-4xl font-instru-italic mb-4 text-nav-t dark:text-nav-t-dark">Languages</h2>
            <div
                className="w-3/4 md:w-1/2 bg-item-bg dark:bg-item-bg-dark p-6 rounded-lg shadow-md text-body-t dark:text-body-t-dark">
                <div className="flex flex-col space-y-8">
                    <div>
                        <p className="text-lg font-bold">English</p>
                        <p className="text-md font-instru-italic text-gray-600 dark:text-gray-400">Native or bilingual
                            proficiency</p>
                    </div>
                    <div>
                        <p className="text-lg font-bold">Hebrew</p>
                        <p className="text-md font-instru-italic text-gray-600 dark:text-gray-400">Native or bilingual
                            proficiency</p>
                    </div>
                </div>
            </div>
        </div>
    );
}