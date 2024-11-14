export default function Languages() {
    return (
        <div className="flex flex-col items-center mt-16 space-y-8 pb-16">
            <h2 className="font-bold text-4xl font-instruItalic mb-4 text-nav_t_Color">Languages</h2>
            <div className="w-3/4 md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md text-gray-800">
                <div className="flex flex-col space-y-8">
                    <div>
                        <p className="text-lg font-bold">English</p>
                        <p className="text-md font-instruItalic text-gray-600">Native or bilingual proficiency</p>
                    </div>
                    <div>
                        <p className="text-lg font-bold">Hebrew</p>
                        <p className="text-md font-instruItalic text-gray-600">Native or bilingual proficiency</p>
                    </div>
                </div>
            </div>
        </div>

    )
}