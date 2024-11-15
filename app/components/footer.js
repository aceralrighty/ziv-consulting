export default function Footer() {
    return (
        <footer className="w-full px-4 sm:px-12 py-2 sm:py-3">
            <div className="w-full bg-item_bg dark:bg-item_bg_dark px-4 sm:px-6 rounded-t-lg shadow-lg">
                <div className="flex flex-col items-center text-center space-y-1">
                    <h2 className="font-bold text-base sm:text-lg font-instruItalic text-nav_t_Color dark:text-nav_t_color-dark">
                        I hope you had a pleasant visit
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-gray-300">
                        &copy; 2024 Ziv Consulting, LLC. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
