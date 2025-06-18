/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'nav-t': '#1470AF',
                'nav-t-dark': '#FFFFFF',
                'body-t': '#26261F',
                'body-t-dark': '#FFFFFF',
                'global-bg': '#C6C5B9',
                'global-bg-dark': '#393D3F',
                'item-bg': '#E0DFD9',
                'item-bg-dark': '#2A2D2F',
            },
            transformOrigin: {
                "center": "center",
            },
            boxShadow: {
                '2xl': "10px 10px 20px rgba(0, 0, 0, 0.25)"
            },
            fontFamily: {
                'instru': ['var(--font-instru-regular)', 'serif'],
                'instru-italic': ['var(--font-instru-italic)', 'serif'],
            },
        },
    },
    plugins: [],
};