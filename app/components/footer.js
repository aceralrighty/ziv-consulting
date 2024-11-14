export default function Footer() {
    return (
        <footer className="w-full px-4 sm:px-12 py-2 sm:py-3">
            <div className="w-full bg-gray-100 px-4 sm:px-6 rounded-t-lg shadow-lg">
                <div className="flex flex-col items-center text-center space-y-1">
                    <h2 className="font-bold text-base sm:text-lg font-instruItalic text-nav_t_Color">
                        I hope you had a pleasant visit
                    </h2>
                    <p className="text-xs text-gray-500">
                        &copy; 2024 Ziv Consulting, LLC. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}